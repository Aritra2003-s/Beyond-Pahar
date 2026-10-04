import React from 'react';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const sampleTestimonials = [
    {
      name: 'A. Sen & Family',
      tripType: 'Bishnupur & Panchmura Heritage Circuit',
      rating: 5,
      comment: 'Walking through the quiet terracotta temple lanes at dusk and watching master potters sculpt the Bankura horse in Panchmura was truly special. The pace of the itinerary was gentle and well considered.',
    },
    {
      name: 'R. Mukherjee',
      tripType: 'Ajodhya Hills & Bamni Falls Trek',
      rating: 5,
      comment: 'The forest descent to Bamni Falls and the morning mist over the Sal ridges were breathtaking. Visiting the mask makers of Charida gave our family a deep appreciation for the living culture of Bengal.',
    },
    {
      name: 'S. Banerjee',
      tripType: 'Baranti & Joychandi Sunset Journey',
      rating: 5,
      comment: 'The crimson sunset across Baranti reservoir accompanied by simple, delicious local food cooked over wood fires. A refreshing, uncommercialized escape from city life.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream dark:bg-forest-deep">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beige/60 text-charcoal text-[11px] font-mono">
            <span>Sample Guest Reflections (Demo Placeholders)</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-charcoal dark:text-cream">
            Traveler Reflections
          </h2>
          <p className="text-sm text-softgrey">
            Sample excerpts illustrating typical guest experiences across our regional circuits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="editorial-card p-6 sm:p-8 rounded-2xl shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-laterite">
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-laterite text-laterite" />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-softgrey/30" />
                </div>

                <p className="text-xs sm:text-sm text-charcoal/80 dark:text-cream/80 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-border space-y-0.5">
                <div className="font-editorial font-bold text-sm text-charcoal dark:text-cream">
                  {item.name}
                </div>
                <div className="text-[11px] text-softgrey">
                  {item.tripType}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
