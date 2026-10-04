import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  Info,
  CheckCircle2,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { BrandLogo } from '@/components/common/BrandLogo';
import { Button } from '@/components/ui/Button';

export function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Contact number is required';
    } else if (!/^[0-9+\-\s]{8,15}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid mobile number';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.termsAccepted) {
      errors.termsAccepted = 'You must accept the terms to proceed';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Explicit demo-only interaction - NO credentials or passwords saved to local storage
    setTimeout(() => {
      setIsSubmitting(false);
      setDemoSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setDemoSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      termsAccepted: false
    });
    setValidationErrors({});
  };

  return (
    <>
      <Helmet>
        <title>Create Traveler Account — BeyondPahar</title>
        <meta
          name="description"
          content="Customer registration screen for BeyondPahar travelers. Visual prototype for future account and itinerary management."
        />
      </Helmet>

      <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#0D1814] text-charcoal dark:text-cream flex items-center justify-center py-12 px-4 transition-colors duration-300">
        <div className="w-full max-w-lg space-y-6">

          {/* Main Card */}
          <div className="rounded-3xl bg-white dark:bg-[#14231D] border border-stone-200/90 dark:border-white/10 p-8 sm:p-10 shadow-sm space-y-6">
            
            {/* Header */}
            <div className="text-center space-y-3">
              <Link to="/" className="inline-block hover:opacity-85 transition-opacity" aria-label="BeyondPahar Home">
                <BrandLogo size={44} className="mx-auto" />
              </Link>
              <h1 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream">
                Create Your Account
              </h1>
              <p className="text-xs text-softgrey dark:text-cream/70 font-light">
                Join our regional travel collective to curate custom circuits across Purulia & Bankura.
              </p>
            </div>

            {/* Clear Demo-Only Notice */}
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2.5">
              <Info className="h-4 w-4 shrink-0 mt-0.5" />
              <div className="space-y-0.5 leading-relaxed font-light">
                <strong className="font-semibold block">Demo Prototype Notice</strong>
                <span>
                  Customer registration is currently in visual demo mode. No account is created on live servers and no passwords are stored.
                </span>
              </div>
            </div>

            {demoSuccess ? (
              /* Demo Success Feedback */
              <div className="py-6 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 stroke-[2.5]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-editorial text-xl font-bold text-charcoal dark:text-cream">
                    Registration Preview Verified
                  </h3>
                  <p className="text-xs text-softgrey dark:text-cream/70 font-light max-w-sm mx-auto leading-relaxed">
                    Form structure validated successfully! In the future production release, your account will be linked with our itinerary planner and saved circuits.
                  </p>
                </div>

                <div className="pt-2 space-y-2">
                  <Button
                    asChild
                    className="w-full bg-laterite hover:bg-laterite/90 text-white rounded-xl text-xs font-semibold py-3"
                  >
                    <Link to="/plan-your-trip">Explore Trip Planner</Link>
                  </Button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs text-softgrey hover:text-charcoal dark:hover:text-white underline cursor-pointer"
                  >
                    Register Another (Reset Demo)
                  </button>
                </div>
              </div>
            ) : (
              /* Visual Registration Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* 1. Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="reg-name" className="block text-xs font-semibold uppercase tracking-wider text-charcoal dark:text-cream">
                    Full Name <span className="text-laterite">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                    <input
                      id="reg-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Sourav Mukherjee"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all bg-white dark:bg-white/5 text-charcoal dark:text-cream focus:outline-none focus:ring-2 focus:ring-laterite/40 ${
                        validationErrors.name ? 'border-red-500' : 'border-stone-300 dark:border-white/15'
                      }`}
                    />
                  </div>
                  {validationErrors.name && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {validationErrors.name}
                    </p>
                  )}
                </div>

                {/* 2. Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="reg-email" className="block text-xs font-semibold uppercase tracking-wider text-charcoal dark:text-cream">
                    Email Address <span className="text-laterite">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                    <input
                      id="reg-email"
                      name="email"
                      type="email"
                      required
                      placeholder="traveler@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all bg-white dark:bg-white/5 text-charcoal dark:text-cream focus:outline-none focus:ring-2 focus:ring-laterite/40 ${
                        validationErrors.email ? 'border-red-500' : 'border-stone-300 dark:border-white/15'
                      }`}
                    />
                  </div>
                  {validationErrors.email && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {validationErrors.email}
                    </p>
                  )}
                </div>

                {/* 3. Phone Number */}
                <div className="space-y-1.5">
                  <label htmlFor="reg-phone" className="block text-xs font-semibold uppercase tracking-wider text-charcoal dark:text-cream">
                    Phone Number <span className="text-laterite">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                    <input
                      id="reg-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 98300 XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all bg-white dark:bg-white/5 text-charcoal dark:text-cream focus:outline-none focus:ring-2 focus:ring-laterite/40 ${
                        validationErrors.phone ? 'border-red-500' : 'border-stone-300 dark:border-white/15'
                      }`}
                    />
                  </div>
                  {validationErrors.phone && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {validationErrors.phone}
                    </p>
                  )}
                </div>

                {/* 4. Password & 5. Confirm Password Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Password */}
                  <div className="space-y-1.5">
                    <label htmlFor="reg-password" className="block text-xs font-semibold uppercase tracking-wider text-charcoal dark:text-cream">
                      Password <span className="text-laterite">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                      <input
                        id="reg-password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-10 py-2.5 rounded-xl border text-sm transition-all bg-white dark:bg-white/5 text-charcoal dark:text-cream focus:outline-none focus:ring-2 focus:ring-laterite/40 ${
                          validationErrors.password ? 'border-red-500' : 'border-stone-300 dark:border-white/15'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-charcoal dark:hover:text-white cursor-pointer"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {validationErrors.password && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {validationErrors.password}
                      </p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-1.5">
                    <label htmlFor="reg-confirm-password" className="block text-xs font-semibold uppercase tracking-wider text-charcoal dark:text-cream">
                      Confirm Password <span className="text-laterite">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                      <input
                        id="reg-confirm-password"
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-10 py-2.5 rounded-xl border text-sm transition-all bg-white dark:bg-white/5 text-charcoal dark:text-cream focus:outline-none focus:ring-2 focus:ring-laterite/40 ${
                          validationErrors.confirmPassword ? 'border-red-500' : 'border-stone-300 dark:border-white/15'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-charcoal dark:hover:text-white cursor-pointer"
                        aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {validationErrors.confirmPassword && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {validationErrors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>

                {/* 6. Terms Acceptance */}
                <div className="pt-2">
                  <label htmlFor="terms-acceptance" className="flex items-start gap-2.5 cursor-pointer select-none text-xs text-softgrey dark:text-cream/80">
                    <input
                      id="terms-acceptance"
                      name="termsAccepted"
                      type="checkbox"
                      checked={formData.termsAccepted}
                      onChange={handleChange}
                      className="rounded border-stone-300 text-laterite focus:ring-laterite h-4 w-4 mt-0.5 shrink-0"
                    />
                    <span className="leading-relaxed">
                      I agree to the{' '}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setTermsModalOpen(true);
                        }}
                        className="text-laterite hover:underline font-semibold inline cursor-pointer"
                      >
                        Terms of Service
                      </button>{' '}
                      and acknowledge responsible travel practices across regional heritage circuits.
                    </span>
                  </label>
                  {validationErrors.termsAccepted && (
                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1 pl-6">
                      <AlertCircle className="h-3 w-3" /> {validationErrors.termsAccepted}
                    </p>
                  )}
                </div>

                {/* Sign-in Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-laterite hover:bg-laterite/90 text-white rounded-xl py-3.5 text-sm font-semibold shadow-md transition-colors cursor-pointer mt-3"
                >
                  {isSubmitting ? 'Validating Demo State...' : 'Create Account (Demo Prototype)'}
                </Button>
              </form>
            )}

            {/* Bottom Links */}
            <div className="pt-4 border-t border-stone-100 dark:border-white/10 text-center text-xs text-softgrey dark:text-cream/70 space-y-2">
              <div>
                Already have an account?{' '}
                <Link to="/login" className="font-semibold text-laterite hover:underline">
                  Sign in
                </Link>
              </div>
              <div>
                <Link to="/" className="text-softgrey hover:text-charcoal dark:hover:text-white inline-flex items-center gap-1">
                  <ArrowLeft className="h-3 w-3" /> Back to homepage
                </Link>
              </div>
            </div>
          </div>

          {/* Privacy Guarantee */}
          <div className="text-center text-xs text-softgrey flex items-center justify-center gap-1.5 font-light">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
            <span>Frontend demo only: No passwords or sensitive data stored in local storage</span>
          </div>

        </div>

        {/* Terms of Service Preview Modal */}
        {termsModalOpen && (
          <div
            onClick={() => setTermsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
            role="dialog"
            aria-modal="true"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-3xl bg-white dark:bg-[#14231D] border border-stone-200 dark:border-white/10 p-6 space-y-4 shadow-xl text-left"
            >
              <div className="flex items-center justify-between border-b border-stone-100 dark:border-white/10 pb-3">
                <h3 className="font-editorial text-lg font-bold text-charcoal dark:text-cream">
                  Terms of Service & Travel Ethics
                </h3>
                <button
                  type="button"
                  onClick={() => setTermsModalOpen(false)}
                  className="text-softgrey hover:text-charcoal dark:hover:text-white text-lg font-semibold"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-3 text-xs text-softgrey dark:text-cream/80 font-light max-h-60 overflow-y-auto pr-1 leading-relaxed">
                <p>
                  <strong>1. Respect for Sacred & Living Heritage:</strong> Travelers commit to honoring local custom, sanctum guidelines, and cultural boundaries across terracotta temples and sacred groves.
                </p>
                <p>
                  <strong>2. Community Fair Exchange:</strong> BeyondPahar works exclusively with local certified guides, homestay hosts, and village folk artisans. Fair remuneration and courteous conduct are required.
                </p>
                <p>
                  <strong>3. Ecological Preservation:</strong> Zero single-use plastic disposal along forest sanctuaries like Kuilapal and Ajodhya Hills.
                </p>
                <p>
                  <strong>4. Account Prototype:</strong> Customer portal accounts are currently in visual demo phase without live cloud transaction processing.
                </p>
              </div>
              <Button
                type="button"
                onClick={() => setTermsModalOpen(false)}
                className="w-full bg-laterite text-white rounded-xl text-xs font-semibold py-2.5"
              >
                Close & Return
              </Button>
            </div>
          </div>
        )}

      </div>
    </>
  );
}

export default RegisterPage;
