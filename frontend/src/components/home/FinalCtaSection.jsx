import React from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarCheck,
  Compass,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function FinalCtaSection() {
  const trustPillars = [
    {
      id: 'specialists',
      title: 'Purulia & Bankura Specialists',
      tagline: 'Deep local roots across Ayodhya Hills to Bishnupur',
      icon: Compass,
      accent: 'text-terracotta bg-laterite/15 border-laterite/25',
    },
    {
      id: 'guides',
      title: '100% Verified Local Guides',
      tagline: 'Native storytellers, Chhau performers & master weavers',
      icon: ShieldCheck,
      accent: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/25',
    },
    {
      id: 'hospitality',
      title: 'Authentic Regional Hospitality',
      tagline: 'Carefully vetted forest homestays, eco-lodges & heritage retreats',
      icon: Sparkles,
      accent: 'text-amber-300 bg-amber-500/15 border-amber-500/25',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0B1713] text-white relative overflow-hidden">
      {/* Subtle organic ambient glow */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-laterite/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-forest/25 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Badge, Heading, Quote & Buttons */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono uppercase tracking-widest text-beige">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Begin Your Exploration</span>
              </div>

              <div className="space-y-3 max-w-xl">
                <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  Your Rarh journey{' '}
                  <span className="text-beige italic font-serif">begins here.</span>
                </h2>

                <p className="font-sans text-sm sm:text-base text-cream/80 font-light leading-relaxed italic">
                  “Tell us what kind of journey you're dreaming of. We'll help you shape the details.”
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-laterite hover:bg-laterite/90 text-white rounded-xl px-7 py-4 text-sm sm:text-base font-semibold shadow-md transition-colors"
                >
                  <Link to="/plan-your-trip" className="flex items-center justify-center gap-2">
                    <CalendarCheck className="h-5 w-5" />
                    <span>Plan Your Trip</span>
                    <ArrowRight className="h-4 w-4 opacity-80" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border-white/20 rounded-xl px-6 py-4 text-sm sm:text-base font-medium transition-colors"
                >
                  <Link to="/destinations" className="flex items-center justify-center gap-2">
                    <Compass className="h-4 w-4 text-beige" />
                    <span>Browse All Destinations</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: 3 Clean Trust Feature Cards */}
            <div className="lg:col-span-5 flex flex-col gap-3 w-full">
              {trustPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 transition-colors"
                  >
                    <div className={`p-2.5 rounded-xl border ${pillar.accent} shrink-0`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <h4 className="font-editorial text-sm sm:text-base font-bold text-white leading-snug">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-cream/70 font-sans leading-relaxed line-clamp-1">
                        {pillar.tagline}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCtaSection;


