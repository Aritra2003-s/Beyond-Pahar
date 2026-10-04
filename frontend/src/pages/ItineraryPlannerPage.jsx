import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';
import {
  Compass,
  Calendar,
  CalendarCheck,
  Clock,
  Users,
  ShieldCheck,
  Sparkles,
  MapPin,
  Check,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  HelpCircle,
  Printer,
  Share2,
  FileText,
  Heart,
  Home,
  Trees,
  Phone,
  Mail,
  User,
  Car,
  ChevronRight,
  RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

// -------------------------------------------------------------
// Validation Schema with Zod
// -------------------------------------------------------------
const tripPlannerSchema = z.object({
  // 1. Destination
  destination: z.string({
    required_error: 'Please choose your desired destination circuit'
  }).min(1, 'Please select a destination circuit'),

  // 2. Travel dates
  travelDates: z.string({
    required_error: 'Please select an estimated travel date'
  }).min(1, 'Travel date is required'),

  // 3. Flexible dates
  flexibleDates: z.enum(['flexible', 'fixed'], {
    required_error: 'Please specify if your dates are flexible'
  }),

  // 4. Travelers
  travelers: z.number({
    required_error: 'Please enter traveler count',
    invalid_type_error: 'Travelers count must be a number'
  }).min(1, 'At least 1 traveler is required').max(30, 'For groups over 30, please contact our group desk'),

  // 5. Duration
  duration: z.string({
    required_error: 'Please select your preferred duration'
  }).min(1, 'Duration is required'),

  // 6. Travel style
  travelStyle: z.string({
    required_error: 'Please choose your preferred travel style'
  }).min(1, 'Travel style is required'),

  // 7. Accommodation preference
  accommodationPreference: z.string({
    required_error: 'Please select an accommodation preference'
  }).min(1, 'Accommodation preference is required'),

  // 8. Budget
  budget: z.string({
    required_error: 'Please select a budget range'
  }).min(1, 'Budget range is required'),

  // 9. Preferred experiences (multi-select, at least 1)
  preferredExperiences: z.array(z.string()).min(1, 'Select at least 1 preferred experience'),

  // 10. Contact information
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number (at least 10 digits)').regex(/^[0-9+\s-]{10,16}$/, 'Please enter a valid phone number'),
  city: z.string().min(2, 'Please specify your departure city or town'),

  // 11. Additional details
  additionalDetails: z.string().optional(),
});

// Default initial values
const defaultValues = {
  destination: 'Both',
  travelDates: '',
  flexibleDates: 'flexible',
  travelers: 2,
  duration: '3 Days / 2 Nights',
  travelStyle: 'Slow & Immersive',
  accommodationPreference: 'Eco Lake Tented Resorts',
  budget: 'Comfort & Curated (₹6,000 – ₹10,000 / person)',
  preferredExperiences: [
    'Purulia Chhau Martial Dance & Charida Masks',
    'Bishnupur Terracotta Temples & Rasmancha'
  ],
  fullName: '',
  email: '',
  phone: '',
  city: 'Kolkata',
  additionalDetails: '',
};

export function ItineraryPlannerPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(tripPlannerSchema),
    mode: 'onTouched',
    defaultValues,
  });

  // Watch form values for real-time reactivity and review display
  const formData = watch();

  // Scroll to top of card when changing steps
  const scrollToFormTop = () => {
    const el = document.getElementById('planner-form-container');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  // Step validation triggers
  const handleNextStep = async () => {
    let fieldsToValidate = [];
    if (step === 1) {
      fieldsToValidate = ['destination', 'travelDates', 'flexibleDates', 'duration', 'travelers'];
    } else if (step === 2) {
      fieldsToValidate = ['travelStyle', 'accommodationPreference', 'budget'];
    } else if (step === 3) {
      fieldsToValidate = ['preferredExperiences'];
    } else if (step === 4) {
      fieldsToValidate = ['fullName', 'email', 'phone', 'city'];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep((prev) => prev + 1);
      scrollToFormTop();
    }
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(1, prev - 1));
    scrollToFormTop();
  };

  const handleJumpToStep = (targetStep) => {
    setStep(targetStep);
    scrollToFormTop();
  };

  // Form Submission
  const onFinalSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate server processing delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const ref = `BP-RARH-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setSubmittedData(data);
    setIsSubmitting(false);
    setStep(6); // Step 6 is Confirmation Screen
    scrollToFormTop();

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.55 },
        colors: ['#A9472B', '#C66B45', '#254D3B', '#B99A5A']
      });
    } catch {
      // safe fallback
    }
  };

  // Toggle multi-select experiences
  const toggleExperience = (item) => {
    const current = watch('preferredExperiences') || [];
    if (current.includes(item)) {
      if (current.length > 1) {
        setValue('preferredExperiences', current.filter((x) => x !== item), { shouldValidate: true });
      }
    } else {
      setValue('preferredExperiences', [...current, item], { shouldValidate: true });
    }
  };

  const stepTitles = [
    { num: 1, title: 'Destinations & Dates', subtitle: 'Where & When' },
    { num: 2, title: 'Style & Comfort', subtitle: 'Your Travel Rhythm' },
    { num: 3, title: 'Experiences & Notes', subtitle: 'Curated Moments' },
    { num: 4, title: 'Contact Information', subtitle: 'Who Is Travelling' },
    { num: 5, title: 'Review Proposal', subtitle: 'Verify Details' },
  ];

  return (
    <>
      <Helmet>
        <title>Custom Trip Planner — BeyondPahar | Plan Your Rarh Expedition</title>
        <meta
          name="description"
          content="Plan your tailored, distraction-free trip to Purulia and Bankura. Customise destinations, travel style, stays, and verified local guide experiences."
        />
      </Helmet>

      {/* Main Page Canvas with Calm, Soothing Background */}
      <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#0D1814] text-charcoal dark:text-cream py-10 sm:py-16 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          {/* Distraction-Free Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-laterite/10 dark:bg-laterite/20 border border-laterite/20 text-laterite dark:text-terracotta text-xs font-mono uppercase tracking-widest">
              <Compass className="h-3.5 w-3.5" />
              <span>Tailored Expedition Planner</span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal dark:text-cream leading-tight">
              Shape Your Rarh Journey
            </h1>

            <p className="font-sans text-sm sm:text-base text-softgrey dark:text-cream/70 leading-relaxed font-light">
              Follow our thoughtful, step-by-step planner to outline your trip to Purulia and Bankura. Our local specialists will transform your answers into a personalized, verified itinerary.
            </p>
          </div>

          {/* Planner Container Card */}
          <div
            id="planner-form-container"
            className="rounded-3xl bg-white dark:bg-[#14231D] border border-stone-200/90 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)] overflow-hidden"
          >
            {/* Progress Bar & Step Tabs (shown for steps 1 through 5) */}
            {step <= 5 && (
              <div className="border-b border-stone-100 dark:border-white/10 bg-stone-50/70 dark:bg-white/[0.02] p-5 sm:p-6">
                <div className="flex items-center justify-between text-xs font-mono text-softgrey dark:text-cream/60 mb-3">
                  <span>Step {step} of 5</span>
                  <span className="font-semibold text-laterite dark:text-terracotta">
                    {Math.round((step / 5) * 100)}% Complete
                  </span>
                </div>

                {/* Progress bar track */}
                <div className="w-full h-1.5 bg-stone-200 dark:bg-white/10 rounded-full overflow-hidden mb-6">
                  <div
                    className="h-full bg-laterite dark:bg-terracotta transition-all duration-500 ease-out rounded-full"
                    style={{ width: `${(step / 5) * 100}%` }}
                  />
                </div>

                {/* Step Indicators */}
                <div className="grid grid-cols-5 gap-1 sm:gap-2">
                  {stepTitles.map((s) => {
                    const isDone = step > s.num;
                    const isCurrent = step === s.num;
                    return (
                      <button
                        key={s.num}
                        type="button"
                        onClick={() => {
                          if (step > s.num) handleJumpToStep(s.num);
                        }}
                        disabled={step < s.num}
                        className={`flex flex-col items-center text-center p-1.5 sm:p-2 rounded-xl transition-all ${
                          isCurrent
                            ? 'bg-laterite/10 dark:bg-laterite/20 text-laterite dark:text-terracotta font-semibold'
                            : isDone
                            ? 'text-forest dark:text-emerald-400 cursor-pointer hover:bg-stone-100 dark:hover:bg-white/5'
                            : 'text-stone-400 dark:text-white/30 cursor-not-allowed opacity-60'
                        }`}
                      >
                        <div
                          className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-mono mb-1 transition-all ${
                            isCurrent
                              ? 'bg-laterite text-white'
                              : isDone
                              ? 'bg-forest/20 text-forest dark:bg-emerald-500/20 dark:text-emerald-300'
                              : 'bg-stone-200 dark:bg-white/10 text-stone-500 dark:text-white/50'
                          }`}
                        >
                          {isDone ? <Check className="h-3.5 w-3.5 stroke-[3]" /> : s.num}
                        </div>
                        <span className="text-[10px] sm:text-xs truncate w-full hidden sm:block">
                          {s.subtitle}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Form Canvas */}
            <form onSubmit={handleSubmit(onFinalSubmit)} noValidate>
              <div className="p-6 sm:p-10 lg:p-12 space-y-8">

                {/* ========================================================
                    STEP 1: WHERE & WHEN
                    ======================================================== */}
                {step === 1 && (
                  <div className="space-y-8 animate-fadeIn">
                    <div>
                      <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream">
                        Where & When Do You Want to Travel?
                      </h2>
                      <p className="text-sm text-softgrey dark:text-cream/70 mt-1 font-light">
                        Select your destination focus and estimated schedule. We support both quick weekend escapes and slow journeys.
                      </p>
                    </div>

                    {/* Field 1: Destination */}
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-charcoal dark:text-cream">
                        1. Destination Circuit <span className="text-laterite">*</span>
                      </label>
                      <p className="text-xs text-softgrey dark:text-cream/60">
                        Choose whether to concentrate in Purulia's granite hills, Bankura's terracotta heartland, or combine both.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                        {[
                          {
                            id: 'Purulia',
                            title: 'Purulia Highlands',
                            desc: 'Ayodhya Hills, Bamni Falls, Charida Chhau, Marble Lake',
                            badge: 'Rugged & Tribal',
                          },
                          {
                            id: 'Bankura',
                            title: 'Bankura Heritage',
                            desc: 'Bishnupur Temples, Mukutmanipur Dam, Susunia, Silk Weavers',
                            badge: 'Art & Terracotta',
                          },
                          {
                            id: 'Both',
                            title: 'Both Districts',
                            desc: 'Grand cross-district Rarh circuit covering the best of both worlds',
                            badge: 'Full Expedition',
                          },
                        ].map((opt) => {
                          const isSelected = formData.destination === opt.id;
                          return (
                            <div
                              key={opt.id}
                              onClick={() => setValue('destination', opt.id, { shouldValidate: true })}
                              className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between space-y-2 ${
                                isSelected
                                  ? 'border-laterite bg-laterite/5 dark:bg-laterite/10 shadow-sm'
                                  : 'border-stone-200 dark:border-white/10 hover:border-stone-300 dark:hover:border-white/20 bg-stone-50/50 dark:bg-white/[0.02]'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-stone-200/70 dark:bg-white/10 text-stone-700 dark:text-cream/80">
                                  {opt.badge}
                                </span>
                                <div
                                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                    isSelected
                                      ? 'border-laterite bg-laterite text-white'
                                      : 'border-stone-300 dark:border-white/30'
                                  }`}
                                >
                                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                                </div>
                              </div>

                              <div>
                                <h3 className="font-editorial text-base font-bold text-charcoal dark:text-cream">
                                  {opt.title}
                                </h3>
                                <p className="text-xs text-softgrey dark:text-cream/60 mt-1 leading-relaxed">
                                  {opt.desc}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      {errors.destination && (
                        <p role="alert" className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>{errors.destination.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Field 2 & 3: Travel Dates & Flexible Dates */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                      {/* Field 2: Dates */}
                      <div className="space-y-2">
                        <label htmlFor="travelDates" className="block text-sm font-semibold text-charcoal dark:text-cream">
                          2. Preferred Travel Date <span className="text-laterite">*</span>
                        </label>
                        <p className="text-xs text-softgrey dark:text-cream/60">
                          Approximate start date of your journey.
                        </p>
                        <div className="relative">
                          <input
                            type="date"
                            id="travelDates"
                            min={new Date().toISOString().split('T')[0]}
                            {...register('travelDates')}
                            className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-white/15 bg-white dark:bg-white/5 text-charcoal dark:text-cream focus:outline-none focus:ring-2 focus:ring-laterite/40 focus:border-laterite text-sm transition-all"
                          />
                        </div>
                        {errors.travelDates && (
                          <p role="alert" className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            <span>{errors.travelDates.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Field 3: Flexible dates */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-charcoal dark:text-cream">
                          3. Date Flexibility <span className="text-laterite">*</span>
                        </label>
                        <p className="text-xs text-softgrey dark:text-cream/60">
                          Can adjust travel dates for optimal weather or folk events?
                        </p>
                        <div className="grid grid-cols-2 gap-2 pt-0.5">
                          {[
                            { value: 'flexible', label: 'Yes, Flexible (±3 days)' },
                            { value: 'fixed', label: 'No, Fixed Dates' },
                          ].map((opt) => (
                            <label
                              key={opt.value}
                              className={`flex items-center gap-2 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                                formData.flexibleDates === opt.value
                                  ? 'border-laterite bg-laterite/5 dark:bg-laterite/10 font-semibold text-charcoal dark:text-cream'
                                  : 'border-stone-200 dark:border-white/10 text-softgrey dark:text-cream/70'
                              }`}
                            >
                              <input
                                type="radio"
                                value={opt.value}
                                {...register('flexibleDates')}
                                className="text-laterite focus:ring-laterite h-3.5 w-3.5"
                              />
                              <span>{opt.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Field 4 & 5: Duration & Travelers */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                      {/* Field 4: Travelers */}
                      <div className="space-y-2">
                        <label htmlFor="travelers" className="block text-sm font-semibold text-charcoal dark:text-cream">
                          4. Number of Travelers <span className="text-laterite">*</span>
                        </label>
                        <p className="text-xs text-softgrey dark:text-cream/60">
                          Total travelers including children.
                        </p>
                        <div className="flex items-center gap-3">
                          <input
                            type="number"
                            id="travelers"
                            min="1"
                            max="30"
                            {...register('travelers', { valueAsNumber: true })}
                            className="w-32 px-4 py-3 rounded-xl border border-stone-300 dark:border-white/15 bg-white dark:bg-white/5 text-charcoal dark:text-cream font-mono text-center font-bold focus:outline-none focus:ring-2 focus:ring-laterite/40 focus:border-laterite text-base"
                          />
                          <div className="flex flex-wrap gap-1.5">
                            {[1, 2, 4, 6].map((num) => (
                              <button
                                key={num}
                                type="button"
                                onClick={() => setValue('travelers', num, { shouldValidate: true })}
                                className={`px-2.5 py-1.5 rounded-lg border text-xs font-mono transition-colors ${
                                  formData.travelers === num
                                    ? 'bg-laterite text-white border-laterite'
                                    : 'border-stone-200 dark:border-white/10 hover:bg-stone-100 dark:hover:bg-white/5'
                                }`}
                              >
                                {num} {num === 1 ? 'Solo' : num === 2 ? 'Couple' : 'Pax'}
                              </button>
                            ))}
                          </div>
                        </div>
                        {errors.travelers && (
                          <p role="alert" className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            <span>{errors.travelers.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Field 5: Duration */}
                      <div className="space-y-2">
                        <label htmlFor="duration" className="block text-sm font-semibold text-charcoal dark:text-cream">
                          5. Expected Trip Duration <span className="text-laterite">*</span>
                        </label>
                        <p className="text-xs text-softgrey dark:text-cream/60">
                          Recommended minimum: 3 days for a single district, 4-5 days for both.
                        </p>
                        <select
                          id="duration"
                          {...register('duration')}
                          className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-white/15 bg-white dark:bg-[#14231D] text-charcoal dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-laterite/40 focus:border-laterite transition-all"
                        >
                          <option value="2 Days / 1 Night">2 Days / 1 Night (Quick Weekend Getaway)</option>
                          <option value="3 Days / 2 Nights">3 Days / 2 Nights (The Signature Experience — Recommended)</option>
                          <option value="4 Days / 3 Nights">4 Days / 3 Nights (Deep Circuit & Leisure)</option>
                          <option value="5+ Days Extended Exploration">5+ Days (Comprehensive Cross-District Expedition)</option>
                        </select>
                        {errors.duration && (
                          <p role="alert" className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            <span>{errors.duration.message}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================
                    STEP 2: STYLE, ACCOMMODATION & BUDGET
                    ======================================================== */}
                {step === 2 && (
                  <div className="space-y-8 animate-fadeIn">
                    <div>
                      <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream">
                        Travel Style, Stays & Budget
                      </h2>
                      <p className="text-sm text-softgrey dark:text-cream/70 mt-1 font-light">
                        Tell us how you like to travel. We handpick accommodation and travel paces that align with your lifestyle.
                      </p>
                    </div>

                    {/* Field 6: Travel Style */}
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-charcoal dark:text-cream">
                        6. Travel Style & Rhythm <span className="text-laterite">*</span>
                      </label>
                      <p className="text-xs text-softgrey dark:text-cream/60">
                        How active or relaxed do you want your daily itinerary to be?
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        {[
                          {
                            id: 'Slow & Immersive',
                            title: 'Slow & Immersive',
                            desc: 'Unhurried village walks, extended conversations with artisans, quiet tea by the dam.',
                          },
                          {
                            id: 'Heritage & Culture',
                            title: 'Heritage & Architecture',
                            desc: 'In-depth focus on Malla terracotta monuments, Baluchari punch-card looms, and history.',
                          },
                          {
                            id: 'Active Nature & Treks',
                            title: 'Active Nature & Treks',
                            desc: 'Early morning hill hikes, steep waterfall descents (Bamni), and rock scrambles.',
                          },
                          {
                            id: 'Family & Leisure',
                            title: 'Family & Leisure',
                            desc: 'Spacious vehicle, comfortable paved drives, senior-accessible viewpoints, and comfort stays.',
                          },
                        ].map((opt) => {
                          const isSelected = formData.travelStyle === opt.id;
                          return (
                            <div
                              key={opt.id}
                              onClick={() => setValue('travelStyle', opt.id, { shouldValidate: true })}
                              className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                                isSelected
                                  ? 'border-laterite bg-laterite/5 dark:bg-laterite/10 shadow-sm'
                                  : 'border-stone-200 dark:border-white/10 hover:border-stone-300 dark:hover:border-white/20 bg-stone-50/50 dark:bg-white/[0.02]'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <h3 className="font-editorial text-base font-bold text-charcoal dark:text-cream">
                                  {opt.title}
                                </h3>
                                <div
                                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                    isSelected
                                      ? 'border-laterite bg-laterite text-white'
                                      : 'border-stone-300 dark:border-white/30'
                                  }`}
                                >
                                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                                </div>
                              </div>
                              <p className="text-xs text-softgrey dark:text-cream/60 leading-relaxed">
                                {opt.desc}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                      {errors.travelStyle && (
                        <p role="alert" className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>{errors.travelStyle.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Field 7: Accommodation Preference */}
                    <div className="space-y-3 pt-2">
                      <label className="block text-sm font-semibold text-charcoal dark:text-cream">
                        7. Accommodation Preference <span className="text-laterite">*</span>
                      </label>
                      <p className="text-xs text-softgrey dark:text-cream/60">
                        All our partnered retreats are personally vetted for hygiene, hospitality, and authentic surroundings.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        {[
                          {
                            id: 'Eco Lake Tented Resorts',
                            title: 'Eco Lake Tented Resorts',
                            desc: 'Glamping and tented eco-cottages right on the edge of quiet reservoir shores.',
                          },
                          {
                            id: 'Heritage Homestays & Palaces',
                            title: 'Heritage Homestays & Palaces',
                            desc: 'Restored zamindari estates and village homes with home-cooked thalis.',
                          },
                          {
                            id: 'Boutique Forest Lodges',
                            title: 'Boutique Forest Lodges',
                            desc: 'Comfortable air-conditioned cottages tucked in Sal forest canopies.',
                          },
                          {
                            id: 'Clean Budget Guest Houses',
                            title: 'Clean Budget Guest Houses',
                            desc: 'Safe, clean, unpretentious stays with warm staff and essential modern amenities.',
                          },
                        ].map((opt) => {
                          const isSelected = formData.accommodationPreference === opt.id;
                          return (
                            <div
                              key={opt.id}
                              onClick={() => setValue('accommodationPreference', opt.id, { shouldValidate: true })}
                              className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                                isSelected
                                  ? 'border-laterite bg-laterite/5 dark:bg-laterite/10 shadow-sm'
                                  : 'border-stone-200 dark:border-white/10 hover:border-stone-300 dark:hover:border-white/20 bg-stone-50/50 dark:bg-white/[0.02]'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <h3 className="font-editorial text-base font-bold text-charcoal dark:text-cream">
                                  {opt.title}
                                </h3>
                                <div
                                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                    isSelected
                                      ? 'border-laterite bg-laterite text-white'
                                      : 'border-stone-300 dark:border-white/30'
                                  }`}
                                >
                                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                                </div>
                              </div>
                              <p className="text-xs text-softgrey dark:text-cream/60 leading-relaxed">
                                {opt.desc}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                      {errors.accommodationPreference && (
                        <p role="alert" className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>{errors.accommodationPreference.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Field 8: Budget Preference */}
                    <div className="space-y-3 pt-2">
                      <label className="block text-sm font-semibold text-charcoal dark:text-cream">
                        8. Budget Range (Per Person) <span className="text-laterite">*</span>
                      </label>
                      <p className="text-xs text-softgrey dark:text-cream/60">
                        Includes verified stays, private vehicle/fuel, guided tours, and local masterclass fees.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                        {[
                          {
                            id: 'Pocket-Friendly (₹3,500 – ₹6,000 / person)',
                            title: 'Pocket-Friendly',
                            range: '₹3,500 – ₹6,000',
                            note: 'Clean budget stays + shared or local transport',
                          },
                          {
                            id: 'Comfort & Curated (₹6,000 – ₹10,000 / person)',
                            title: 'Comfort & Curated',
                            range: '₹6,000 – ₹10,000',
                            note: 'Private SUV + premium eco-resort + guided walks',
                          },
                          {
                            id: 'Premium Heritage (₹10,000 – ₹18,000 / person)',
                            title: 'Premium Heritage',
                            range: '₹10,000 – ₹18,000+',
                            note: 'Best heritage suites + royal palace dining + Chhau private show',
                          },
                        ].map((opt) => {
                          const isSelected = formData.budget === opt.id;
                          return (
                            <div
                              key={opt.id}
                              onClick={() => setValue('budget', opt.id, { shouldValidate: true })}
                              className={`p-4 rounded-2xl border-2 cursor-pointer transition-all text-center space-y-1.5 ${
                                isSelected
                                  ? 'border-laterite bg-laterite/5 dark:bg-laterite/10 shadow-sm'
                                  : 'border-stone-200 dark:border-white/10 hover:border-stone-300 dark:hover:border-white/20 bg-stone-50/50 dark:bg-white/[0.02]'
                              }`}
                            >
                              <div className="text-xs font-mono uppercase text-laterite dark:text-terracotta font-semibold">
                                {opt.title}
                              </div>
                              <div className="font-editorial text-lg font-bold text-charcoal dark:text-cream">
                                {opt.range}
                              </div>
                              <p className="text-[11px] text-softgrey dark:text-cream/60 leading-tight">
                                {opt.note}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                      {errors.budget && (
                        <p role="alert" className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>{errors.budget.message}</span>
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* ========================================================
                    STEP 3: EXPERIENCES & SPECIAL REQUESTS
                    ======================================================== */}
                {step === 3 && (
                  <div className="space-y-8 animate-fadeIn">
                    <div>
                      <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream">
                        Preferred Experiences & Notes
                      </h2>
                      <p className="text-sm text-softgrey dark:text-cream/70 mt-1 font-light">
                        Select the special moments that matter to you. Pick as many as you like.
                      </p>
                    </div>

                    {/* Field 9: Preferred Experiences */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-semibold text-charcoal dark:text-cream">
                          9. Preferred Experiences (Select at least 1) <span className="text-laterite">*</span>
                        </label>
                        <span className="text-xs font-mono text-laterite dark:text-terracotta">
                          {formData.preferredExperiences?.length || 0} selected
                        </span>
                      </div>
                      <p className="text-xs text-softgrey dark:text-cream/60">
                        Click on any tag to include or exclude it from your custom schedule.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        {[
                          'Purulia Chhau Martial Dance & Charida Masks',
                          'Bishnupur Terracotta Temples & Rasmancha',
                          'Bamni & Turga Cascading Waterfalls',
                          'Mukutmanipur Earthen Dam & Kangsabati Boating',
                          'Baluchari Silk Weaving & Dokra Metalcraft',
                          'Joypur Sal Sanctuary & Elephant Corridors',
                          'Authentic Rarh Gastronomy (Posto, Desi Chicken & Pithe)',
                          'Ayodhya Ridge & Joychandi Pahar Rock Treks',
                        ].map((exp) => {
                          const isChecked = formData.preferredExperiences?.includes(exp);
                          return (
                            <div
                              key={exp}
                              onClick={() => toggleExperience(exp)}
                              className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                                isChecked
                                  ? 'border-laterite bg-laterite/10 dark:bg-laterite/15 text-charcoal dark:text-cream font-medium shadow-xs'
                                  : 'border-stone-200 dark:border-white/10 text-softgrey dark:text-cream/70 hover:border-stone-300'
                              }`}
                            >
                              <span className="text-xs sm:text-sm pr-2">{exp}</span>
                              <div
                                className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 transition-colors ${
                                  isChecked
                                    ? 'bg-laterite border-laterite text-white'
                                    : 'border-stone-300 dark:border-white/20'
                                }`}
                              >
                                {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      {errors.preferredExperiences && (
                        <p role="alert" className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>{errors.preferredExperiences.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Field 11: Additional Details */}
                    <div className="space-y-2 pt-2">
                      <label htmlFor="additionalDetails" className="block text-sm font-semibold text-charcoal dark:text-cream">
                        11. Additional Details & Special Requirements <span className="text-softgrey font-normal">(Optional)</span>
                      </label>
                      <p className="text-xs text-softgrey dark:text-cream/60">
                        Let us know about dietary restrictions (Pure Veg, Jain, Halal), elderly travelers requiring easy access, photographer priorities, or special celebrations.
                      </p>
                      <textarea
                        id="additionalDetails"
                        rows="4"
                        {...register('additionalDetails')}
                        placeholder="E.g., We are travelling with my parents (senior citizens) so we prefer ground-floor rooms and minimal steep steps. We also want to photograph the Palash blooms..."
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-white/15 bg-white dark:bg-white/5 text-charcoal dark:text-cream text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-laterite/40 focus:border-laterite transition-all resize-y"
                      />
                    </div>
                  </div>
                )}

                {/* ========================================================
                    STEP 4: CONTACT INFORMATION
                    ======================================================== */}
                {step === 4 && (
                  <div className="space-y-8 animate-fadeIn">
                    <div>
                      <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream">
                        Who Are We Planning This Trip For?
                      </h2>
                      <p className="text-sm text-softgrey dark:text-cream/70 mt-1 font-light">
                        Provide your contact details so our regional trip curator can send your tailored proposal and itinerary PDF.
                      </p>
                    </div>

                    <div className="space-y-5">
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="fullName" className="block text-sm font-semibold text-charcoal dark:text-cream">
                          Full Name <span className="text-laterite">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="fullName"
                            placeholder="Ananya Mukherjee"
                            {...register('fullName')}
                            className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-white/15 bg-white dark:bg-white/5 text-charcoal dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-laterite/40 focus:border-laterite transition-all"
                          />
                        </div>
                        {errors.fullName && (
                          <p role="alert" className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            <span>{errors.fullName.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="email" className="block text-sm font-semibold text-charcoal dark:text-cream">
                            Email Address <span className="text-laterite">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            placeholder="ananya@example.com"
                            {...register('email')}
                            className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-white/15 bg-white dark:bg-white/5 text-charcoal dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-laterite/40 focus:border-laterite transition-all"
                          />
                          {errors.email && (
                            <p role="alert" className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                              <AlertCircle className="h-3.5 w-3.5" />
                              <span>{errors.email.message}</span>
                            </p>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="phone" className="block text-sm font-semibold text-charcoal dark:text-cream">
                            Phone / WhatsApp Number <span className="text-laterite">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            placeholder="+91 98300 12345"
                            {...register('phone')}
                            className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-white/15 bg-white dark:bg-white/5 text-charcoal dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-laterite/40 focus:border-laterite transition-all"
                          />
                          {errors.phone && (
                            <p role="alert" className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                              <AlertCircle className="h-3.5 w-3.5" />
                              <span>{errors.phone.message}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      {/* City of Origin */}
                      <div className="space-y-1.5">
                        <label htmlFor="city" className="block text-sm font-semibold text-charcoal dark:text-cream">
                          Departure City / Town <span className="text-laterite">*</span>
                        </label>
                        <p className="text-xs text-softgrey dark:text-cream/60">
                          Where will you begin your journey? Helps us configure train connections or road pickups.
                        </p>
                        <input
                          type="text"
                          id="city"
                          placeholder="e.g. Kolkata / Howrah / Durgapur / Asansol / Ranchi"
                          {...register('city')}
                          className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-white/15 bg-white dark:bg-white/5 text-charcoal dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-laterite/40 focus:border-laterite transition-all"
                        />
                        {errors.city && (
                          <p role="alert" className="text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3.5 w-3.5" />
                            <span>{errors.city.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Privacy & Trust reassurance */}
                      <div className="p-4 rounded-xl bg-forest/5 dark:bg-emerald-500/10 border border-forest/15 dark:border-emerald-500/20 text-xs text-forest dark:text-emerald-300 flex items-center gap-3">
                        <ShieldCheck className="h-5 w-5 shrink-0" />
                        <span>
                          <strong>100% Privacy Promise:</strong> No spam. We only use your contact details to communicate your customized itinerary proposal.
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================
                    STEP 5: REVIEW SCREEN
                    ======================================================== */}
                {step === 5 && (
                  <div className="space-y-8 animate-fadeIn">
                    <div>
                      <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream">
                        Review Your Custom Trip Request
                      </h2>
                      <p className="text-sm text-softgrey dark:text-cream/70 mt-1 font-light">
                        Verify all details below. You can easily click any edit button to adjust choices before submitting.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Section A: Where & When */}
                      <div className="p-5 rounded-2xl border border-stone-200 dark:border-white/10 bg-stone-50/50 dark:bg-white/[0.02] space-y-3">
                        <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-white/10 pb-2">
                          <span className="text-xs font-mono uppercase tracking-wider text-laterite dark:text-terracotta font-semibold">
                            1. Schedule & Route
                          </span>
                          <button
                            type="button"
                            onClick={() => handleJumpToStep(1)}
                            className="text-xs font-medium text-laterite hover:underline cursor-pointer"
                          >
                            Edit
                          </button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                          <div>
                            <span className="text-softgrey dark:text-cream/60 block">Destination</span>
                            <strong className="text-charcoal dark:text-cream text-sm">{formData.destination}</strong>
                          </div>
                          <div>
                            <span className="text-softgrey dark:text-cream/60 block">Start Date</span>
                            <strong className="text-charcoal dark:text-cream text-sm">{formData.travelDates || 'Flexible'}</strong>
                          </div>
                          <div>
                            <span className="text-softgrey dark:text-cream/60 block">Travelers</span>
                            <strong className="text-charcoal dark:text-cream text-sm">{formData.travelers} Guests</strong>
                          </div>
                          <div>
                            <span className="text-softgrey dark:text-cream/60 block">Duration</span>
                            <strong className="text-charcoal dark:text-cream text-sm">{formData.duration}</strong>
                          </div>
                        </div>
                      </div>

                      {/* Section B: Travel Style & Stays */}
                      <div className="p-5 rounded-2xl border border-stone-200 dark:border-white/10 bg-stone-50/50 dark:bg-white/[0.02] space-y-3">
                        <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-white/10 pb-2">
                          <span className="text-xs font-mono uppercase tracking-wider text-laterite dark:text-terracotta font-semibold">
                            2. Style, Stays & Budget
                          </span>
                          <button
                            type="button"
                            onClick={() => handleJumpToStep(2)}
                            className="text-xs font-medium text-laterite hover:underline cursor-pointer"
                          >
                            Edit
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                          <div>
                            <span className="text-softgrey dark:text-cream/60 block">Travel Style</span>
                            <strong className="text-charcoal dark:text-cream text-sm">{formData.travelStyle}</strong>
                          </div>
                          <div>
                            <span className="text-softgrey dark:text-cream/60 block">Stay Preference</span>
                            <strong className="text-charcoal dark:text-cream text-sm">{formData.accommodationPreference}</strong>
                          </div>
                          <div>
                            <span className="text-softgrey dark:text-cream/60 block">Budget Tier</span>
                            <strong className="text-charcoal dark:text-cream text-sm">{formData.budget}</strong>
                          </div>
                        </div>
                      </div>

                      {/* Section C: Experiences */}
                      <div className="p-5 rounded-2xl border border-stone-200 dark:border-white/10 bg-stone-50/50 dark:bg-white/[0.02] space-y-3">
                        <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-white/10 pb-2">
                          <span className="text-xs font-mono uppercase tracking-wider text-laterite dark:text-terracotta font-semibold">
                            3. Selected Experiences ({formData.preferredExperiences?.length || 0})
                          </span>
                          <button
                            type="button"
                            onClick={() => handleJumpToStep(3)}
                            className="text-xs font-medium text-laterite hover:underline cursor-pointer"
                          >
                            Edit
                          </button>
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {formData.preferredExperiences?.map((item) => (
                            <span
                              key={item}
                              className="px-2.5 py-1 rounded-lg bg-white dark:bg-white/10 border border-stone-200 dark:border-white/10 text-xs text-charcoal dark:text-cream font-medium"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        {formData.additionalDetails && (
                          <div className="pt-2 text-xs">
                            <span className="text-softgrey dark:text-cream/60 block font-semibold">Special Instructions:</span>
                            <p className="text-charcoal dark:text-cream/80 italic mt-0.5">{formData.additionalDetails}</p>
                          </div>
                        )}
                      </div>

                      {/* Section D: Contact Info */}
                      <div className="p-5 rounded-2xl border border-stone-200 dark:border-white/10 bg-stone-50/50 dark:bg-white/[0.02] space-y-3">
                        <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-white/10 pb-2">
                          <span className="text-xs font-mono uppercase tracking-wider text-laterite dark:text-terracotta font-semibold">
                            4. Lead Traveler Contact
                          </span>
                          <button
                            type="button"
                            onClick={() => handleJumpToStep(4)}
                            className="text-xs font-medium text-laterite hover:underline cursor-pointer"
                          >
                            Edit
                          </button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                          <div>
                            <span className="text-softgrey dark:text-cream/60 block">Full Name</span>
                            <strong className="text-charcoal dark:text-cream text-sm">{formData.fullName}</strong>
                          </div>
                          <div>
                            <span className="text-softgrey dark:text-cream/60 block">Email</span>
                            <strong className="text-charcoal dark:text-cream text-sm">{formData.email}</strong>
                          </div>
                          <div>
                            <span className="text-softgrey dark:text-cream/60 block">Phone / WhatsApp</span>
                            <strong className="text-charcoal dark:text-cream text-sm">{formData.phone}</strong>
                          </div>
                          <div>
                            <span className="text-softgrey dark:text-cream/60 block">Departure From</span>
                            <strong className="text-charcoal dark:text-cream text-sm">{formData.city}</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================
                    STEP 6: CONFIRMATION SCREEN (SUCCESS)
                    ======================================================== */}
                {step === 6 && submittedData && (
                  <div className="space-y-8 animate-fadeIn text-center py-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                      <Check className="h-8 w-8 stroke-[3]" />
                    </div>

                    <div className="space-y-2 max-w-lg mx-auto">
                      <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
                        Trip Request Received
                      </span>
                      <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal dark:text-cream">
                        Your Journey is Taking Shape!
                      </h2>
                      <p className="text-sm text-softgrey dark:text-cream/70 font-light">
                        Thank you, <strong className="text-charcoal dark:text-cream">{submittedData.fullName}</strong>. We've logged your request under Reference Code:
                      </p>
                      <div className="inline-block px-4 py-1.5 rounded-xl bg-stone-100 dark:bg-white/10 font-mono text-sm font-bold text-laterite dark:text-terracotta border border-stone-200 dark:border-white/15">
                        {bookingRef}
                      </div>
                    </div>

                    {/* What happens next */}
                    <div className="max-w-xl mx-auto p-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-stone-50/60 dark:bg-white/[0.02] text-left space-y-4">
                      <h3 className="font-editorial text-base font-bold text-charcoal dark:text-cream">
                        What Happens Next?
                      </h3>
                      <div className="space-y-3 text-xs sm:text-sm text-softgrey dark:text-cream/75">
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-laterite text-white flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                            1
                          </div>
                          <div>
                            <strong>Local Specialist Review (within 2 hours):</strong> A dedicated curator will cross-reference seasonal road conditions, stay availability, and temple timings.
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-laterite text-white flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                            2
                          </div>
                          <div>
                            <strong>WhatsApp / Phone Consultation:</strong> We'll reach out to <strong>{submittedData.phone}</strong> with a detailed PDF route breakdown and transparent pricing.
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-laterite text-white flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                            3
                          </div>
                          <div>
                            <strong>Zero Commitment to Reserve:</strong> Modify any day, accommodation, or meal plan at no extra charge before finalizing your trip.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                      <Button
                        type="button"
                        onClick={() => window.print()}
                        variant="outline"
                        className="w-full sm:w-auto px-6 py-3 rounded-xl border-stone-300 dark:border-white/20 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
                      >
                        <Printer className="h-4 w-4" />
                        <span>Print / Save Summary</span>
                      </Button>

                      <Button
                        asChild
                        className="w-full sm:w-auto bg-laterite hover:bg-laterite/90 text-white rounded-xl px-7 py-3 text-xs sm:text-sm font-semibold shadow-md"
                      >
                        <Link to="/destinations">
                          <span>Browse Destinations</span>
                          <ArrowRight className="h-4 w-4 ml-1.5" />
                        </Link>
                      </Button>

                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => {
                          reset(defaultValues);
                          setStep(1);
                        }}
                        className="w-full sm:w-auto text-xs text-softgrey hover:text-charcoal dark:hover:text-white"
                      >
                        <RefreshCw className="h-3.5 w-3.5 mr-1" />
                        <span>Plan Another Trip</span>
                      </Button>
                    </div>
                  </div>
                )}

                {/* ========================================================
                    NAVIGATION CONTROLS (Steps 1 through 5)
                    ======================================================== */}
                {step <= 5 && (
                  <div className="pt-8 border-t border-stone-100 dark:border-white/10 flex items-center justify-between gap-4">
                    {step > 1 ? (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrevStep}
                        className="rounded-xl px-5 py-2.5 text-xs sm:text-sm font-medium border-stone-200 dark:border-white/15 text-charcoal dark:text-cream hover:bg-stone-100 dark:hover:bg-white/5 cursor-pointer flex items-center gap-1.5"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back</span>
                      </Button>
                    ) : (
                      <Link
                        to="/"
                        className="text-xs text-softgrey dark:text-cream/60 hover:text-charcoal dark:hover:text-white flex items-center gap-1"
                      >
                        <Home className="h-3.5 w-3.5" />
                        <span>Return to Home</span>
                      </Link>
                    )}

                    <div className="flex items-center gap-3">
                      {step < 5 && (
                        <Button
                          type="button"
                          onClick={handleNextStep}
                          className="bg-laterite hover:bg-laterite/90 text-white rounded-xl px-7 py-3 text-xs sm:text-sm font-semibold shadow-md cursor-pointer flex items-center gap-2"
                        >
                          <span>Continue</span>
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      )}

                      {step === 5 && (
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-laterite hover:bg-laterite/90 text-white rounded-xl px-8 py-3.5 text-sm sm:text-base font-bold shadow-lg shadow-laterite/20 cursor-pointer flex items-center gap-2 disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <>
                              <RefreshCw className="h-4 w-4 animate-spin" />
                              <span>Generating Itinerary Proposal...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Travel Request</span>
                              <CheckCircle2 className="h-4 w-4" />
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Simple Bottom Trust Indicators */}
          <div className="mt-8 text-center text-xs text-softgrey dark:text-cream/60 flex flex-wrap items-center justify-center gap-6 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              100% Verified Local Experts
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-amber-500" />
              Transparent Pricing (No Hidden Fees)
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-laterite" />
              Rapid Response (Within 2 Hours)
            </span>
          </div>

        </div>
      </div>
    </>
  );
}

export default ItineraryPlannerPage;
