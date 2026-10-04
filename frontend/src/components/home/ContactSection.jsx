import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence
} from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Heart,
  ShieldCheck,
  User,
  Compass,
  Calendar,
  Sparkles,
  Users,
  Camera,
  Briefcase,
  Trees,
  Check
} from 'lucide-react';
import { Input } from '@/components/ui/Input';

const contactSchema = z.object({
  fullName: z.string().min(3, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number'),
  subject: z.string().min(4, 'Please enter a subject'),
  message: z.string().min(10, 'Please enter a message (at least 10 characters)'),
});

function Tilt3DCard({ children, className = '' }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative transition-all duration-200 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedTripType, setSelectedTripType] = useState('Custom Family');
  const [selectedSeason, setSelectedSeason] = useState('Winter (Nov–Feb)');

  const tripTypes = [
    { label: 'Custom Family', icon: Users },
    { label: 'Corporate Retreat', icon: Briefcase },
    { label: 'Photography & Birds', icon: Camera },
    { label: 'Artisan Immersion', icon: Sparkles },
    { label: 'Trekking & Wildlife', icon: Trees },
  ];

  const seasonOptions = [
    'Winter (Nov–Feb)',
    'Palash Bloom (Feb–Mar)',
    'Monsoon Waterfalls (Jul–Sep)',
    'Autumn Festivals (Oct)',
  ];

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: '3-Day Family Tour to Ayodhya Hills',
    },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  const handleTypeSelect = (type) => {
    setSelectedTripType(type);
    setValue('subject', `${type} Inquiry for Purulia & Bankura`);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream/35 dark:bg-card border-t border-border/80 scroll-mt-[100px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-laterite font-mono">
            Get in Touch With Regional Specialists
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-charcoal dark:text-cream leading-tight">
            Plan a Custom Journey or Inquire
          </h2>
          <p className="text-sm sm:text-base text-softgrey dark:text-stone-300 leading-relaxed font-light">
            Looking for corporate retreats, photography tours, school heritage walks, or custom family circuits? Leave a message below.
          </p>
        </div>

        {/* 3D Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: 3D Form (7 cols) */}
          <div className="lg:col-span-7">
            <Tilt3DCard className="w-full">
              <div className="relative rounded-3xl bg-white/95 dark:bg-stone-900/95 backdrop-blur-2xl border border-stone-200/90 dark:border-stone-800 p-6 sm:p-10 shadow-xl shadow-stone-950/10 dark:shadow-black/50 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-laterite/10 to-transparent rounded-full blur-3xl pointer-events-none" />

                {/* Journey Category Selector */}
                <div style={{ transform: 'translateZ(25px)' }} className="space-y-2 mb-6">
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block">
                    Choose Journey Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {tripTypes.map((type) => {
                      const Icon = type.icon;
                      const isSelected = selectedTripType === type.label;
                      return (
                        <motion.button
                          key={type.label}
                          type="button"
                          onClick={() => handleTypeSelect(type.label)}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#BA532B] text-white shadow-md shadow-[#BA532B]/25 font-semibold'
                              : 'bg-stone-100 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 hover:bg-stone-200/70'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span>{type.label}</span>
                          {isSelected && <Check className="w-3 h-3 ml-0.5" />}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Tentative Season */}
                <div style={{ transform: 'translateZ(20px)' }} className="space-y-2 mb-6">
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block">
                    Tentative Travel Season
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {seasonOptions.map((season) => (
                      <button
                        key={season}
                        type="button"
                        onClick={() => setSelectedSeason(season)}
                        className={`px-3 py-1 rounded-lg text-[11px] font-medium transition-all cursor-pointer ${
                          selectedSeason === season
                            ? 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/40 font-semibold'
                            : 'bg-stone-50 dark:bg-stone-800/50 text-stone-600 dark:text-stone-400 border border-stone-200/80 dark:border-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        {season}
                      </button>
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      style={{ transform: 'translateZ(40px)' }}
                      className="p-8 text-center space-y-4 bg-emerald-500/10 dark:bg-emerald-950/30 rounded-3xl border border-emerald-500/30"
                    >
                      <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="font-serif font-bold text-2xl text-stone-900 dark:text-white">
                        Inquiry Received!
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-md mx-auto leading-relaxed">
                        Our regional travel coordinator will reach out to you within 12 hours with customized options for <span className="font-semibold text-emerald-700 dark:text-emerald-400">{selectedSeason}</span>.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit(onSubmit)}
                      style={{ transform: 'translateZ(30px)' }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 text-laterite" />
                            <span>Full Name</span>
                          </label>
                          <Input
                            placeholder="e.g. Debolina Basu"
                            {...register('fullName')}
                            className="rounded-xl border-stone-300 dark:border-stone-700 bg-white/70 dark:bg-stone-800/70 focus:border-[#BA532B] focus:ring-[#BA532B] transition-all text-sm h-11"
                          />
                          {errors.fullName && (
                            <p className="text-xs text-rose-500 font-medium">{errors.fullName.message}</p>
                          )}
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 text-laterite" />
                            <span>Email</span>
                          </label>
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            {...register('email')}
                            className="rounded-xl border-stone-300 dark:border-stone-700 bg-white/70 dark:bg-stone-800/70 focus:border-[#BA532B] focus:ring-[#BA532B] transition-all text-sm h-11"
                          />
                          {errors.email && (
                            <p className="text-xs text-rose-500 font-medium">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-laterite" />
                            <span>Phone Number</span>
                          </label>
                          <Input
                            placeholder="10-digit mobile"
                            {...register('phone')}
                            className="rounded-xl border-stone-300 dark:border-stone-700 bg-white/70 dark:bg-stone-800/70 focus:border-[#BA532B] focus:ring-[#BA532B] transition-all text-sm h-11"
                          />
                          {errors.phone && (
                            <p className="text-xs text-rose-500 font-medium">{errors.phone.message}</p>
                          )}
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-1.5">
                            <Compass className="w-3.5 h-3.5 text-laterite" />
                            <span>Subject</span>
                          </label>
                          <Input
                            placeholder="e.g. 3-Day Family Tour to Ayodhya Hills"
                            {...register('subject')}
                            className="rounded-xl border-stone-300 dark:border-stone-700 bg-white/70 dark:bg-stone-800/70 focus:border-[#BA532B] focus:ring-[#BA532B] transition-all text-sm h-11"
                          />
                          {errors.subject && (
                            <p className="text-xs text-rose-500 font-medium">{errors.subject.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-laterite" />
                          <span>Your Travel Requirements</span>
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Tell us your tentative travel dates, group size, preference for stays or heritage..."
                          className="w-full rounded-2xl border border-stone-300 dark:border-stone-700 bg-white/70 dark:bg-stone-800/70 p-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#BA532B] focus:border-[#BA532B] transition-all leading-relaxed"
                          {...register('message')}
                        />
                        {errors.message && (
                          <p className="text-xs text-rose-500 font-medium">{errors.message.message}</p>
                        )}
                      </div>

                      <div style={{ transform: 'translateZ(40px)' }} className="pt-2">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full h-12 bg-gradient-to-r from-[#BA532B] via-[#c65b32] to-[#a84420] text-white font-semibold rounded-2xl shadow-xl shadow-[#BA532B]/30 hover:shadow-2xl flex items-center justify-center gap-2 text-sm sm:text-base transition-all cursor-pointer disabled:opacity-70"
                        >
                          <Send className="w-4 h-4" />
                          <span>{isSubmitting ? 'Transmitting Itinerary Details...' : 'Send Inquiry to BeyondPahar'}</span>
                        </motion.button>
                      </div>

                      <div className="flex items-center justify-center gap-3 pt-2 text-[11px] text-softgrey dark:text-stone-400">
                        <span className="flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Free customized proposal
                        </span>
                        <span>•</span>
                        <span>No hidden booking charges</span>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Tilt3DCard>
          </div>

          {/* Right Column: Regional Desks (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-md space-y-5">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-cream">
                Regional Expedition Desks
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-softgrey dark:text-stone-300">
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60">
                  <div className="p-2 rounded-xl bg-laterite/10 text-laterite shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="text-stone-900 dark:text-cream block font-semibold text-xs sm:text-sm">
                      Purulia Tourism Hub:
                    </strong>
                    Baghmundi Road, near Ayodhya Pahar Foothills, Purulia, WB - 723143
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="text-stone-900 dark:text-cream block font-semibold text-xs sm:text-sm">
                      Bankura Heritage Hub:
                    </strong>
                    Near Rasmancha, Bishnupur, Bankura, WB - 722122
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 shrink-0 mt-0.5">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="text-stone-900 dark:text-cream block font-semibold text-xs sm:text-sm">
                      Official Email Desk:
                    </strong>
                    hello@beyondpahar.com / excursions@beyondpahar.com
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 shrink-0 mt-0.5">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="text-stone-900 dark:text-cream block font-semibold text-xs sm:text-sm">
                      Expedition Helpline:
                    </strong>
                    +91 98300 XXXXX / +91 94340 XXXXX
                  </div>
                </div>
              </div>
            </div>

            {/* Ethical Travel Pledge */}
            <div className="p-6 rounded-3xl border border-emerald-500/20 bg-emerald-500/10 dark:bg-emerald-950/30 text-xs text-emerald-900 dark:text-emerald-200 space-y-2.5">
              <div className="flex items-center gap-2 font-bold text-sm text-emerald-800 dark:text-emerald-300">
                <Heart className="h-4 w-4 text-[#BA532B] fill-[#BA532B]" />
                <span>The BeyondPahar Ethical Pledge</span>
              </div>
              <p className="leading-relaxed">
                We believe tourism should regenerate, not deplete. We pledge zero plastic littering in forest sanctuaries, fair remuneration to village homestay cooks, and deep respect for sacred tribal groves (Jaherthan).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
