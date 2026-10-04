import React from 'react';
import { Heart, Users, Leaf, Trash2, Camera } from 'lucide-react';

export function ResponsibleTourismSection() {
  const principles = [
    {
      title: 'Respecting Local Culture',
      description: 'Honor sacred groves (Jaherthan), village customs, and religious sensitivities. Dress modestly when visiting functioning shrines and terracotta temples.',
      icon: Heart,
    },
    {
      title: 'Supporting Local Businesses',
      description: 'Purchase crafts directly from artisans in Charida, Bikna, and Panchmura. Eat at village-run eateries where ingredients are grown by regional farmers.',
      icon: Users,
    },
    {
      title: 'Protecting Natural Areas',
      description: 'Stay on established walking tracks in forest reserves. Never pick wild orchids or disturb wildlife around Ajodhya Hills and Susunia.',
      icon: Leaf,
    },
    {
      title: 'Reducing Waste',
      description: 'Carry reusable water bottles and fabric bags. Pack out all non-biodegradable plastics and wrappers from waterfalls and remote lake shores.',
      icon: Trash2,
    },
    {
      title: 'Considerate Cultural Visits',
      description: 'Always ask permission before photographing individuals, artisans at work, or dancers backstage during community performances.',
      icon: Camera,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-offwhite dark:bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-forest font-mono">
            Ethical Exploration
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-charcoal dark:text-cream leading-tight">
            Travel thoughtfully. Leave a lighter footprint.
          </h2>
          <p className="text-sm sm:text-base text-softgrey leading-relaxed">
            The red earth, Sal forests, and artisan communities of Rarh thrive through mutual respect. We encourage every visitor to be a mindful guest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border bg-cream/40 dark:bg-forest-deep/40 space-y-3"
              >
                <div className="h-9 w-9 rounded-xl bg-forest/10 text-forest flex items-center justify-center">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="font-editorial text-lg font-bold text-charcoal dark:text-cream">
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
