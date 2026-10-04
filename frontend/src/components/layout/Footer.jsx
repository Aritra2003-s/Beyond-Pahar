import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ShieldCheck, Heart, Send, Check } from 'lucide-react';
import { BrandLogo } from '@/components/common/BrandLogo';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer className="border-t border-border bg-cream dark:bg-forest-deep text-charcoal dark:text-cream pt-16 pb-12 mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-border/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <BrandLogo size={42} />
              <div>
                <span className="font-editorial font-bold text-2xl tracking-tight text-charcoal dark:text-cream">
                  BeyondPahar
                </span>
                <p className="text-xs text-softgrey uppercase tracking-wider font-mono">Beyond the hills. Into the wild</p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-softgrey max-w-sm leading-relaxed">
              Boutique regional travel planning and curated journeys focusing exclusively on the tourism experiences, destinations, stays, culture, nature, and heritage of Purulia and Bankura districts in West Bengal, India.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-forest dark:text-cream/90 font-medium bg-offwhite dark:bg-card p-3 rounded-xl border border-border">
              <ShieldCheck className="h-4 w-4 shrink-0 text-forest" />
              <span>Supporting 100% locally-owned homestays and folk artisans directly.</span>
            </div>
          </div>

          {/* Explore Districts */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h4 className="font-editorial font-bold tracking-wider uppercase text-charcoal dark:text-cream text-xs">
              Districts & Trails
            </h4>
            <ul className="space-y-2 text-softgrey">
              <li>
                <Link to="/purulia" className="hover:text-laterite transition-colors">
                  Explore Purulia
                </Link>
              </li>
              <li>
                <Link to="/bankura" className="hover:text-terracotta transition-colors">
                  Explore Bankura
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-laterite transition-colors">
                  All Destinations
                </Link>
              </li>
              <li>
                <a href="/#packages" className="hover:text-laterite transition-colors">
                  Travel Packages
                </a>
              </li>
              <li>
                <Link to="/stays" className="hover:text-laterite transition-colors">
                  Authentic Eco-Stays
                </Link>
              </li>
              <li>
                <a href="/#experiences" className="hover:text-laterite transition-colors">
                  Experiences & Masterclasses
                </a>
              </li>
            </ul>
          </div>

          {/* Publication & Help */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h4 className="font-editorial font-bold tracking-wider uppercase text-charcoal dark:text-cream text-xs">
              Traveler Center
            </h4>
            <ul className="space-y-2 text-softgrey">
              <li>
                <Link to="/plan-your-trip" className="hover:text-laterite transition-colors">
                  Plan Your Trip
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-laterite transition-colors">
                  Travel Journal
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-laterite transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-laterite transition-colors">
                  About Our Mission
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-laterite transition-colors">
                  Contact Regional Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Dispatch */}
          <div className="space-y-4">
            <h4 className="font-editorial font-bold tracking-wider uppercase text-charcoal dark:text-cream text-xs">
              Seasonal Dispatch
            </h4>
            <p className="text-xs text-softgrey leading-relaxed">
              Receive notifications for the annual Palash bloom dates in Ajodhya Hills and Bishnupur Classical Mela concerts.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-input bg-offwhite dark:bg-card text-charcoal dark:text-cream placeholder:text-softgrey outline-none focus:ring-1 focus:ring-laterite"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-laterite text-white hover:bg-laterite/90 transition-colors"
                  title="Subscribe"
                >
                  {subscribed ? <Check className="h-3.5 w-3.5" /> : <Send className="h-3.5 w-3.5" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-forest font-medium">Thank you for subscribing to BeyondPahar!</p>
              )}
            </form>

            <div className="pt-2 text-xs text-softgrey space-y-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-laterite" />
                <span>Purulia & Bankura, West Bengal, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-laterite" />
                <span>Helpline: 1800 212 1655</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Policies and Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-softgrey">
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:underline">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link to="/cancellation-policy" className="hover:underline">
              Cancellation Policy
            </Link>
            <span>•</span>
            <Link to="/login" className="hover:underline">
              Traveler Sign In
            </Link>
          </div>
          <div>
            © {new Date().getFullYear()} BeyondPahar. Beyond the hills. Into the wild.
          </div>
        </div>
      </div>
    </footer>
  );
}
