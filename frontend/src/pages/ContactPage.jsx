import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Compass,
  MessageSquare,
  Sparkles,
  ExternalLink,
  RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name (at least 2 characters)'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number (at least 10 digits)').regex(/^[0-9+\s-]{10,16}$/, 'Please enter a valid phone number'),
  district: z.enum(['Purulia', 'Bankura', 'Both', 'General Inquiry']),
  subject: z.string().min(4, 'Subject must be at least 4 characters'),
  message: z.string().min(15, 'Please share your travel thoughts or inquiry (at least 15 characters)'),
});

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    mode: 'onTouched',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      district: 'Both',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Our Regional Desks — Purulia & Bankura | BeyondPahar</title>
        <meta
          name="description"
          content="Reach BeyondPahar's local desks in Purulia and Bishnupur for personalized trip coordination, verified homestays, and Chhau mask masterclasses."
        />
      </Helmet>

      <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#0D1814] text-charcoal dark:text-cream py-16 sm:py-24 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-16">
          
          {/* ========================================================
              1. CONTACT HERO
              ======================================================== */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-laterite/10 dark:bg-laterite/20 border border-laterite/20 text-laterite dark:text-terracotta text-xs font-mono uppercase tracking-widest font-semibold">
              <Compass className="h-3.5 w-3.5" />
              <span>Native Coordination Desks</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal dark:text-cream leading-tight">
              Reach Our Local Desks
            </h1>

            <p className="font-sans text-sm sm:text-base text-softgrey dark:text-cream/70 font-light leading-relaxed">
              Have questions regarding seasonal flower blooms, road conditions, homestay bookings, or custom folk arts masterclasses? Our ground curators in Baghmundi and Bishnupur are ready to assist.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* ========================================================
                2. LEFT: CONTACT INFORMATION & HUBS
                ======================================================== */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Configurable Phone & Email Card */}
              <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#14231D] border border-stone-200/90 dark:border-white/10 shadow-xs space-y-6">
                <h3 className="font-editorial text-xl font-bold text-charcoal dark:text-cream">
                  Direct Inquiries
                </h3>

                <div className="space-y-5 text-sm">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-laterite/10 dark:bg-laterite/20 text-laterite dark:text-terracotta flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs text-softgrey dark:text-cream/60 block">Travel Planning Helpline</span>
                      <a href="tel:+919830024821" className="font-semibold text-charcoal dark:text-cream hover:text-laterite transition-colors">
                        +91 98300 24821
                      </a>
                      <span className="text-[11px] text-softgrey block mt-0.5">WhatsApp enabled for instant road queries</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-forest/10 dark:bg-emerald-500/20 text-forest dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs text-softgrey dark:text-cream/60 block">Email Desk</span>
                      <a href="mailto:travel@beyondpahar.com" className="font-semibold text-charcoal dark:text-cream hover:text-laterite transition-colors">
                        travel@beyondpahar.com
                      </a>
                      <span className="text-[11px] text-softgrey block mt-0.5">Replies within 2 to 4 business hours</span>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs text-softgrey dark:text-cream/60 block">Business Hours</span>
                      <span className="font-semibold text-charcoal dark:text-cream block">
                        Monday – Saturday: 08:30 AM – 07:30 PM IST
                      </span>
                      <span className="text-[11px] text-emerald-600 dark:text-emerald-400 block mt-0.5">
                        24/7 emergency dispatch support for travelers currently on the road
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-stone-100 dark:border-white/10 space-y-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-softgrey dark:text-cream/60 block">
                    Follow Our Field Chronicles
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {[
                      { name: 'Instagram', url: 'https://instagram.com' },
                      { name: 'YouTube', url: 'https://youtube.com' },
                      { name: 'X / Twitter', url: 'https://x.com' },
                      { name: 'Facebook', url: 'https://facebook.com' },
                    ].map((s) => (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-xl border border-stone-200 dark:border-white/10 hover:border-laterite/40 text-stone-600 dark:text-stone-300 hover:text-laterite transition-colors"
                      >
                        {s.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Regional Office Locations */}
              <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#14231D] border border-stone-200/90 dark:border-white/10 shadow-xs space-y-4">
                <h3 className="font-editorial text-xl font-bold text-charcoal dark:text-cream">
                  Regional Field Desks
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-white/[0.02] border border-stone-200/80 dark:border-white/10 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-charcoal dark:text-cream text-sm">
                      <MapPin className="h-4 w-4 text-laterite" />
                      <span>Ayodhya Hills Field Hub (Purulia)</span>
                    </div>
                    <p className="text-softgrey dark:text-cream/70 leading-relaxed pl-5.5">
                      Baghmundi Bazaar, near Charida Mask Village Road, Purulia, West Bengal 723152
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-white/[0.02] border border-stone-200/80 dark:border-white/10 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-charcoal dark:text-cream text-sm">
                      <MapPin className="h-4 w-4 text-forest dark:text-emerald-400" />
                      <span>Bishnupur Heritage Desk (Bankura)</span>
                    </div>
                    <p className="text-softgrey dark:text-cream/70 leading-relaxed pl-5.5">
                      Temple Circle, Near Dalmadal Great Cannon, Bishnupur, Bankura, West Bengal 722122
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================
                3. RIGHT: CONTACT FORM (WITH CONFIRMATION & ERROR STATES)
                ======================================================== */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-white dark:bg-[#14231D] border border-stone-200/90 dark:border-white/10 shadow-sm">
                
                {submitted ? (
                  /* Success Confirmation State */
                  <div className="py-12 text-center space-y-6 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 stroke-[2.5]" />
                    </div>

                    <div className="space-y-2 max-w-md mx-auto">
                      <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
                        Message Successfully Sent
                      </span>
                      <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream">
                        We Have Received Your Note
                      </h3>
                      <p className="text-sm text-softgrey dark:text-cream/75 leading-relaxed font-light">
                        Thank you for reaching out to BeyondPahar. One of our regional team members in Purulia or Bishnupur will respond to your inquiry within 2 to 4 business hours.
                      </p>
                    </div>

                    <div className="pt-4">
                      <Button
                        type="button"
                        onClick={() => {
                          reset();
                          setSubmitted(false);
                        }}
                        variant="outline"
                        className="rounded-xl px-6 py-2.5 text-xs font-semibold"
                      >
                        <RefreshCw className="h-3.5 w-3.5 mr-2" />
                        <span>Send Another Message</span>
                      </Button>
                    </div>
                  </div>
                ) : (
                  /* Form State */
                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                    <div className="space-y-1">
                      <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream">
                        Send a Message
                      </h2>
                      <p className="text-xs sm:text-sm text-softgrey dark:text-cream/70 font-light">
                        Fill out the details below and we will route your inquiry to the appropriate regional desk.
                      </p>
                    </div>

                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-charcoal dark:text-cream">
                        Full Name <span className="text-laterite">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        placeholder="Rohan Banerjee"
                        {...register('fullName')}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-white/15 bg-white dark:bg-white/5 text-charcoal dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-laterite/40 focus:border-laterite transition-all"
                      />
                      {errors.fullName && (
                        <p role="alert" className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>{errors.fullName.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-charcoal dark:text-cream">
                          Email Address <span className="text-laterite">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="rohan@example.com"
                          {...register('email')}
                          className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-white/15 bg-white dark:bg-white/5 text-charcoal dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-laterite/40 focus:border-laterite transition-all"
                        />
                        {errors.email && (
                          <p role="alert" className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1 mt-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            <span>{errors.email.message}</span>
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-charcoal dark:text-cream">
                          Phone Number <span className="text-laterite">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="+91 98300 12345"
                          {...register('phone')}
                          className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-white/15 bg-white dark:bg-white/5 text-charcoal dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-laterite/40 focus:border-laterite transition-all"
                        />
                        {errors.phone && (
                          <p role="alert" className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1 mt-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            <span>{errors.phone.message}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* District & Subject */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="district" className="block text-xs font-semibold uppercase tracking-wider text-charcoal dark:text-cream">
                          Destination Focus
                        </label>
                        <select
                          id="district"
                          {...register('district')}
                          className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-white/15 bg-white dark:bg-[#14231D] text-charcoal dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-laterite/40 focus:border-laterite transition-all"
                        >
                          <option value="Both">Both Districts (Combined Circuit)</option>
                          <option value="Purulia">Purulia Highlands</option>
                          <option value="Bankura">Bankura Heritage</option>
                          <option value="General Inquiry">General Inquiry / Media</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-charcoal dark:text-cream">
                          Subject <span className="text-laterite">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          placeholder="e.g. March Palash Photography Tour"
                          {...register('subject')}
                          className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-white/15 bg-white dark:bg-white/5 text-charcoal dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-laterite/40 focus:border-laterite transition-all"
                        />
                        {errors.subject && (
                          <p role="alert" className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1 mt-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            <span>{errors.subject.message}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-charcoal dark:text-cream">
                        Your Message <span className="text-laterite">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        placeholder="Tell us about your proposed dates, traveler count, or specific places you wish to visit..."
                        {...register('message')}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-white/15 bg-white dark:bg-white/5 text-charcoal dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-laterite/40 focus:border-laterite transition-all resize-y"
                      />
                      {errors.message && (
                        <p role="alert" className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>{errors.message.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-laterite hover:bg-laterite/90 text-white rounded-xl py-4 text-sm font-semibold shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="h-4 w-4 animate-spin" />
                          <span>Transmitting Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Send Message to Regional Desk</span>
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
