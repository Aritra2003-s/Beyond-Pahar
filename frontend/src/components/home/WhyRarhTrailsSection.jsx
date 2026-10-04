import React from 'react';
import { Compass, CalendarCheck, Sliders, HeartHandshake, Mountain, PhoneCall } from 'lucide-react';

export function WhyRarhTrailsSection() {
  const pillars = [
    {
      title: 'Regional Destination Focus',
      description: 'We do not sell the entire globe. We focus exclusively on the landscapes, culture, and communities of Purulia and Bankura.',
      icon: Compass,
    },
    {
      title: 'Thoughtful Trip Planning',
      description: 'We balance travel distances, rest times, and walking trails realistically so you never feel rushed through countryside routes.',
      icon: CalendarCheck,
    },
    {
      title: 'Flexible Itineraries',
      description: 'Every traveler has different preferences. Routes, stay tiers, and daily activities can be adjusted around your pace.',
      icon: Sliders,
    },
    {
      title: 'Local Experiences',
      description: 'Direct interactions with mask sculptors in Charida, bell-metal artisans in Bikna, and authentic village cooks.',
      icon: HeartHandshake,
    },
    {
      title: 'Nature & Heritage',
      description: 'Carefully curated balance between outdoor granite trails, secret waterfall hikes, and 400-year-old terracotta monuments.',
      icon: Mountain,
    },
    {
      title: 'Human Support',
      description: 'Talk to regional coordinators based right in Purulia and Bishnupur who know the current local road and trail conditions.',
      icon: PhoneCall,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream dark:bg-forest-deep">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-laterite font-mono">
            Boutique Travel Approach
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-charcoal dark:text-cream">
            Why BeyondPahar
          </h2>
          <p className="text-sm sm:text-base text-softgrey leading-relaxed">
            Rooted in respect for the land and designed for travelers who appreciate nuance, depth, and unpretentious regional hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="editorial-card p-6 sm:p-7 rounded-2xl shadow-xs space-y-3 transition-colors hover:border-laterite/40"
              >
                <div className="h-10 w-10 rounded-xl bg-laterite/10 text-laterite flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-editorial text-lg sm:text-xl font-bold text-charcoal dark:text-cream">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-softgrey leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
