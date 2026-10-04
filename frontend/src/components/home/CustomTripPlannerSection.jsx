import React, { useState } from 'react';
import { Check, ArrowRight, ArrowLeft, CheckCircle2, Calendar, MapPin, Users, HeartHandshake, Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export function CustomTripPlannerSection() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Form State
  const [formData, setFormData] = useState({
    destination: 'Both',
    travelDate: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
    isFlexibleDates: true,
    travelers: 2,
    duration: '3 Days / 2 Nights',
    travelStyle: 'Balanced & Scenic',
    stayPreference: 'Eco Cottages & Lakeside Tents',
    budgetRange: 'Moderate (₹3,000 - ₹5,000 / day)',
    preferredExperiences: ['Hills & Waterfalls', 'Terracotta Heritage', 'Chhau Masks & Crafts'],
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const toggleExperience = (exp) => {
    if (formData.preferredExperiences.includes(exp)) {
      if (formData.preferredExperiences.length > 1) {
        setFormData({
          ...formData,
          preferredExperiences: formData.preferredExperiences.filter((item) => item !== exp),
        });
      }
    } else {
      setFormData({
        ...formData,
        preferredExperiences: [...formData.preferredExperiences, exp],
      });
    }
  };

  const validateStep = (currentStep) => {
    const errs = {};
    if (currentStep === 4) {
      if (!formData.name.trim()) errs.name = 'Please provide your full name.';
      if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Please provide a valid email address.';
      if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Please provide a valid 10-digit mobile number.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(4)) {
      // Simulate submission service layer
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setStep(1);
    setSubmitted(false);
  };

  return (
    <section id="custom-planner" className="py-20 lg:py-28 bg-cream dark:bg-forest-deep">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-laterite font-mono">
            Personalized Journey Design
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-charcoal dark:text-cream">
            Your journey, your way.
          </h2>
          <p className="text-sm sm:text-base text-softgrey max-w-xl mx-auto leading-relaxed">
            "Every traveler has a different idea of the perfect escape. Tell us yours."
          </p>
        </div>

        {/* Multi-step Form Card */}
        <div className="editorial-card rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          {/* Step Indicator */}
          {!submitted && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-softgrey font-mono">
                <span>Step {step} of 5</span>
                <span>
                  {step === 1 && 'Destination & Dates'}
                  {step === 2 && 'Group & Travel Style'}
                  {step === 3 && 'Stays & Experiences'}
                  {step === 4 && 'Contact Information'}
                  {step === 5 && 'Review & Confirm'}
                </span>
              </div>
              <div className="w-full bg-border h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-laterite h-full transition-all duration-300"
                  style={{ width: `${(step / 5) * 100}%` }}
                />
              </div>
            </div>
          )}

          {submitted ? (
            <div className="py-12 text-center space-y-4 max-w-md mx-auto">
              <div className="h-16 w-16 bg-forest/10 text-forest rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <div className="space-y-1">
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream">
                  Preferences Received (Demo Confirmation)
                </h3>
                <p className="text-xs sm:text-sm text-softgrey leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. A customized draft route for <strong>{formData.destination}</strong> ({formData.duration}) has been logged in this demo session.
                </p>
              </div>
              <div className="p-4 bg-cream/60 dark:bg-forest-deep/60 rounded-xl text-left text-xs border border-border space-y-1.5 font-mono">
                <div>Destination: {formData.destination}</div>
                <div>Travelers: {formData.travelers} Guests</div>
                <div>Dates: {formData.travelDate} {formData.isFlexibleDates ? '(Flexible)' : '(Fixed)'}</div>
                <div>Preferred Style: {formData.travelStyle}</div>
              </div>
              <Button onClick={resetForm} variant="outline" className="rounded-xl text-xs">
                Plan Another Custom Journey
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Step 1: Destination & Dates */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-cream">
                      1. Which district would you like to explore?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { label: 'Purulia District', val: 'Purulia', sub: 'Hills, Waterfalls, Chhau' },
                        { label: 'Bankura District', val: 'Bankura', sub: 'Terracotta, Dokra, Silk' },
                        { label: 'Both Districts', val: 'Both', sub: 'The Complete Rarh Odyssey' },
                      ].map((item) => (
                        <button
                          key={item.val}
                          type="button"
                          onClick={() => setFormData({ ...formData, destination: item.val })}
                          className={`p-4 rounded-xl border text-left transition-all ${
                            formData.destination === item.val
                              ? 'border-laterite bg-laterite/10 text-charcoal dark:text-cream font-semibold'
                              : 'border-border bg-cream/40 dark:bg-forest-deep/40 text-softgrey hover:bg-beige/30'
                          }`}
                        >
                          <div className="text-xs font-bold text-charcoal dark:text-cream">{item.label}</div>
                          <div className="text-[11px] text-softgrey mt-0.5">{item.sub}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-cream">
                        Target Start Date
                      </label>
                      <Input
                        type="date"
                        value={formData.travelDate}
                        onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                        className="rounded-xl border-border bg-cream dark:bg-forest-deep"
                      />
                    </div>

                    <div className="space-y-1.5 flex flex-col justify-end">
                      <label className="flex items-center gap-2 cursor-pointer text-xs text-charcoal dark:text-cream p-3 rounded-xl border border-border bg-cream/40 dark:bg-forest-deep/40">
                        <input
                          type="checkbox"
                          checked={formData.isFlexibleDates}
                          onChange={(e) => setFormData({ ...formData, isFlexibleDates: e.target.checked })}
                          className="accent-laterite h-4 w-4"
                        />
                        <span>My dates are flexible (± 3 to 5 days)</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Group & Travel Style */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-cream">
                        Number of Travelers
                      </label>
                      <select
                        value={formData.travelers}
                        onChange={(e) => setFormData({ ...formData, travelers: Number(e.target.value) })}
                        className="w-full h-11 px-3.5 rounded-xl border border-border bg-cream dark:bg-forest-deep text-xs font-medium text-foreground outline-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? 'Traveler (Solo)' : 'Travelers'}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-cream">
                        Trip Duration
                      </label>
                      <select
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl border border-border bg-cream dark:bg-forest-deep text-xs font-medium text-foreground outline-none"
                      >
                        <option value="2 Days / 1 Night">2 Days / 1 Night (Weekend Escape)</option>
                        <option value="3 Days / 2 Nights">3 Days / 2 Nights (Recommended)</option>
                        <option value="4 Days / 3 Nights">4 Days / 3 Nights (Comprehensive)</option>
                        <option value="5+ Days">5+ Days (Slow Deep Travel)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-cream">
                      Preferred Travel Style
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {['Balanced & Scenic', 'Heritage & Cultural Immersion', 'Active Trails & Waterfalls'].map((style) => (
                        <button
                          key={style}
                          type="button"
                          onClick={() => setFormData({ ...formData, travelStyle: style })}
                          className={`p-3.5 rounded-xl border text-xs font-medium transition-all ${
                            formData.travelStyle === style
                              ? 'border-laterite bg-laterite/10 text-charcoal dark:text-cream font-bold'
                              : 'border-border bg-cream/40 dark:bg-forest-deep/40 text-softgrey hover:bg-beige/30'
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Stays & Experiences */}
              {step === 3 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-cream">
                      Select Preferred Experiences:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Hills & Waterfalls',
                        'Terracotta Heritage',
                        'Chhau Masks & Crafts',
                        'Lakeside Sailing & Sunset',
                        'Village Homestay Gastronomy',
                        'Nature & Birding Trails',
                      ].map((exp) => (
                        <button
                          key={exp}
                          type="button"
                          onClick={() => toggleExperience(exp)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                            formData.preferredExperiences.includes(exp)
                              ? 'bg-forest text-white font-semibold'
                              : 'bg-cream dark:bg-forest-deep text-charcoal/70 border border-border'
                          }`}
                        >
                          {formData.preferredExperiences.includes(exp) && '✓ '} {exp}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-cream">
                        Stay Preference
                      </label>
                      <select
                        value={formData.stayPreference}
                        onChange={(e) => setFormData({ ...formData, stayPreference: e.target.value })}
                        className="w-full h-11 px-3 rounded-xl border border-border bg-cream dark:bg-forest-deep text-xs font-medium text-foreground outline-none"
                      >
                        <option value="Eco Cottages & Lakeside Tents">Eco Cottages & Lakeside Tents</option>
                        <option value="Heritage Tourist Lodges">Heritage Tourist Lodges</option>
                        <option value="Rural Artisan Homestays">Rural Artisan Homestays</option>
                        <option value="Comfort Resorts">Comfort Resorts</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-cream">
                        Estimated Daily Budget
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full h-11 px-3 rounded-xl border border-border bg-cream dark:bg-forest-deep text-xs font-medium text-foreground outline-none"
                      >
                        <option value="Budget Conscious (₹1,500 - ₹2,500 / day)">Budget Conscious (₹1,500 - ₹2,500 / day)</option>
                        <option value="Moderate (₹3,000 - ₹5,000 / day)">Moderate (₹3,000 - ₹5,000 / day)</option>
                        <option value="Premium Private Tour (₹5,000+ / day)">Premium Private Tour (₹5,000+ / day)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Information */}
              {step === 4 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-cream">
                      Your Full Name *
                    </label>
                    <Input
                      placeholder="e.g. Ananya Sengupta"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-xl border-border bg-cream dark:bg-forest-deep"
                    />
                    {errors.name && <p className="text-xs text-laterite">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-cream">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="rounded-xl border-border bg-cream dark:bg-forest-deep"
                      />
                      {errors.email && <p className="text-xs text-laterite">{errors.email}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-cream">
                        Phone Number (10-Digit Mobile) *
                      </label>
                      <Input
                        type="tel"
                        placeholder="98300 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="rounded-xl border-border bg-cream dark:bg-forest-deep"
                      />
                      {errors.phone && <p className="text-xs text-laterite">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-cream">
                      Additional Notes / Special Dietary Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Traveling with senior parents, prefer ground-floor rooms, vegetarian meals..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full p-3 rounded-xl border border-border bg-cream dark:bg-forest-deep text-xs outline-none focus:ring-1 focus:ring-laterite"
                    />
                  </div>
                </div>
              )}

              {/* Step 5: Review Screen */}
              {step === 5 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="font-editorial text-xl font-bold text-charcoal dark:text-cream">
                    Review Your Custom Plan Summary
                  </h3>
                  <div className="p-5 bg-cream/70 dark:bg-forest-deep/70 rounded-2xl border border-border text-xs space-y-3">
                    <div className="grid grid-cols-2 gap-2 pb-2 border-b border-border">
                      <span className="text-softgrey">Destination:</span>
                      <strong className="text-charcoal dark:text-cream text-right">{formData.destination}</strong>
                      <span className="text-softgrey">Target Date:</span>
                      <span className="text-right">{formData.travelDate} {formData.isFlexibleDates && '(Flexible)'}</span>
                      <span className="text-softgrey">Group Size:</span>
                      <span className="text-right">{formData.travelers} Guests</span>
                      <span className="text-softgrey">Duration:</span>
                      <span className="text-right">{formData.duration}</span>
                    </div>

                    <div className="space-y-1 pb-2 border-b border-border">
                      <span className="text-softgrey block">Preferred Experiences:</span>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {formData.preferredExperiences.map((e) => (
                          <span key={e} className="bg-beige/60 text-charcoal px-2 py-0.5 rounded text-[11px]">
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <span className="text-softgrey">Contact Traveler:</span>
                      <strong className="text-right">{formData.name}</strong>
                      <span className="text-softgrey">Email & Phone:</span>
                      <span className="text-right font-mono">{formData.email} • {formData.phone}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-softgrey">
                    * This is a simulated frontend demonstration. Clicking confirm will log your preferences and display sample confirmation.
                  </p>
                </div>
              )}

              {/* Stepper Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                {step > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleBack}
                    className="rounded-xl text-xs gap-1.5"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Back</span>
                  </Button>
                ) : <div />}

                {step < 5 ? (
                  <Button
                    type="button"
                    size="sm"
                    onClick={handleNext}
                    className="bg-laterite hover:bg-laterite/90 text-white rounded-xl text-xs gap-1.5 px-6"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    size="sm"
                    onClick={handleSubmit}
                    className="bg-forest hover:bg-forest/90 text-white rounded-xl text-xs gap-1.5 px-6 font-semibold"
                  >
                    <span>Confirm & Send Inquiry</span>
                    <Check className="h-3.5 w-3.5" />
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
