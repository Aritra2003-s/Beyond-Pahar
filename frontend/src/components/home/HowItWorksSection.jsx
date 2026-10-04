import React from 'react';
import { Compass, Sliders, FileText, CheckCircle } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      step: '01',
      title: 'Explore destinations.',
      description: 'Browse our curated guides for Purulia and Bankura to discover the landscapes, heritage, and experiences that resonate with you.',
      icon: Compass,
    },
    {
      step: '02',
      title: 'Share your travel preferences.',
      description: 'Tell us your dates, group size, preferred travel style, and whether you lean towards hill hikes, terracotta walks, or peaceful stays.',
      icon: Sliders,
    },
    {
      step: '03',
      title: 'Review your suggested itinerary.',
      description: 'Receive a balanced day-by-day plan with realistic travel times, recommended meal stops, and handpicked local lodgings.',
      icon: FileText,
    },
    {
      step: '04',
      title: 'Confirm your plans with the travel team.',
      description: 'Finalize details directly with our regional coordinators, secure your dates, and prepare for an unhurried, authentic getaway.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-offwhite dark:bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-laterite font-mono">
            Simple & Transparent Planning
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-charcoal dark:text-cream">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-softgrey leading-relaxed">
            From initial curiosity to stepping onto the red earth tracks of Bengal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="editorial-card p-6 rounded-2xl shadow-xs space-y-4 relative flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-laterite bg-laterite/10 px-2.5 py-1 rounded-md">
                    {item.step}
                  </span>
                  <Icon className="h-5 w-5 text-softgrey" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-editorial text-lg font-bold text-charcoal dark:text-cream">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-softgrey leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
