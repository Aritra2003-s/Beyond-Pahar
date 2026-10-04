import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  Info,
  CheckCircle2,
  Compass,
  AlertCircle,
  ShieldCheck
} from 'lucide-react';
import { BrandLogo } from '@/components/common/BrandLogo';
import { Button } from '@/components/ui/Button';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [demoNoticeVisible, setDemoNoticeVisible] = useState(false);
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    setIsSubmitting(true);
    // Simulate frontend demo interaction without storing sensitive credentials
    setTimeout(() => {
      setIsSubmitting(false);
      setDemoSuccess(true);
    }, 600);
  };

  return (
    <>
      <Helmet>
        <title>Traveler Sign In — BeyondPahar</title>
        <meta
          name="description"
          content="Customer portal sign-in screen for BeyondPahar travelers. Visual prototype for upcoming account features."
        />
      </Helmet>

      <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#0D1814] text-charcoal dark:text-cream flex items-center justify-center py-16 px-4 transition-colors duration-300">
        <div className="w-full max-w-md space-y-6">
          
          {/* Main Card */}
          <div className="rounded-3xl bg-white dark:bg-[#14231D] border border-stone-200/90 dark:border-white/10 p-8 sm:p-10 shadow-sm space-y-6">
            
            {/* Header */}
            <div className="text-center space-y-3">
              <Link to="/" className="inline-block hover:opacity-85 transition-opacity" aria-label="BeyondPahar Home">
                <BrandLogo size={44} className="mx-auto" />
              </Link>
              <h1 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream">
                Sign In to Your Account
              </h1>
              <p className="text-xs text-softgrey dark:text-cream/70 font-light">
                Access your saved circuits, wishlist, and trip proposals.
              </p>
            </div>

            {/* Clear Demo-Only Notice */}
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2.5">
              <Info className="h-4 w-4 shrink-0 mt-0.5" />
              <div className="space-y-0.5 leading-relaxed font-light">
                <strong className="font-semibold block">Demo Prototype Notice</strong>
                <span>
                  Customer authentication is in visual preview mode. No real credentials are submitted or stored.
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
                    Demo Authentication Tested
                  </h3>
                  <p className="text-xs text-softgrey dark:text-cream/70 font-light max-w-xs mx-auto leading-relaxed">
                    Visual state validated! When production customer backend endpoints go live, your sessions will connect here.
                  </p>
                </div>

                <div className="pt-2 space-y-2">
                  <Button
                    asChild
                    className="w-full bg-laterite hover:bg-laterite/90 text-white rounded-xl text-xs font-semibold py-3"
                  >
                    <Link to="/plan-your-trip">Go to Trip Planner</Link>
                  </Button>
                  <button
                    type="button"
                    onClick={() => {
                      setDemoSuccess(false);
                      setEmail('');
                      setPassword('');
                    }}
                    className="text-xs text-softgrey hover:text-charcoal dark:hover:text-white underline cursor-pointer"
                  >
                    Reset Demo Form
                  </button>
                </div>
              </div>
            ) : (
              /* Visual Login Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Email Field */}
                <div className="space-y-1.5">
                  <label htmlFor="login-email" className="block text-xs font-semibold uppercase tracking-wider text-charcoal dark:text-cream">
                    Email Address <span className="text-laterite">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                    <input
                      id="login-email"
                      type="email"
                      required
                      placeholder="traveler@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-300 dark:border-white/15 bg-white dark:bg-white/5 text-charcoal dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-laterite/40 focus:border-laterite transition-all"
                    />
                  </div>
                </div>

                {/* Password Field with Eye Toggle */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="login-password" className="block text-xs font-semibold uppercase tracking-wider text-charcoal dark:text-cream">
                      Password <span className="text-laterite">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setForgotModalOpen(true)}
                      className="text-xs text-laterite hover:underline cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                    <input
                      id="login-password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-10 py-3 rounded-xl border border-stone-300 dark:border-white/15 bg-white dark:bg-white/5 text-charcoal dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-laterite/40 focus:border-laterite transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-charcoal dark:hover:text-white cursor-pointer"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me Checkbox */}
                <div className="flex items-center justify-between pt-1">
                  <label htmlFor="remember-me" className="flex items-center gap-2 cursor-pointer select-none text-xs text-softgrey dark:text-cream/80">
                    <input
                      id="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded border-stone-300 text-laterite focus:ring-laterite h-4 w-4"
                    />
                    <span>Remember me on this browser</span>
                  </label>
                </div>

                {/* Sign-in Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-laterite hover:bg-laterite/90 text-white rounded-xl py-3.5 text-sm font-semibold shadow-md transition-colors cursor-pointer mt-2"
                >
                  {isSubmitting ? 'Verifying Demo State...' : 'Sign In (Demo Prototype)'}
                </Button>
              </form>
            )}

            {/* Bottom Links */}
            <div className="pt-4 border-t border-stone-100 dark:border-white/10 text-center text-xs text-softgrey dark:text-cream/70 space-y-2">
              <div>
                Don't have an account yet?{' '}
                <Link to="/register" className="font-semibold text-laterite hover:underline">
                  Create an account
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

        {/* Forgot Password Demo Modal */}
        {forgotModalOpen && (
          <div
            onClick={() => setForgotModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
            role="dialog"
            aria-modal="true"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-3xl bg-white dark:bg-[#14231D] border border-stone-200 dark:border-white/10 p-6 space-y-4 shadow-xl text-center"
            >
              <div className="w-10 h-10 rounded-full bg-laterite/10 text-laterite mx-auto flex items-center justify-center">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="font-editorial text-lg font-bold text-charcoal dark:text-cream">
                Password Recovery Preview
              </h3>
              <p className="text-xs text-softgrey dark:text-cream/70 leading-relaxed font-light">
                In the upcoming release, a secure one-time reset link will be sent to your registered email address. This feature is in visual preview mode for the demo.
              </p>
              <Button
                type="button"
                onClick={() => setForgotModalOpen(false)}
                className="w-full bg-laterite text-white rounded-xl text-xs font-semibold py-2.5"
              >
                Got It
              </Button>
            </div>
          </div>
        )}

      </div>
    </>
  );
}

export default LoginPage;
