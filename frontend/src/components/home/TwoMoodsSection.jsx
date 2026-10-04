import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function TwoMoodsSection() {
  const puruliaMoods = [
    'Red earth tracks and laterite ridges',
    'Ajodhya and Joychandi granitic hills',
    'Cascading perennial waterfalls at Bamni & Turga',
    'Secluded Sal & Mahua forest escapes',
    'Acrobatic, masked Purulia Chhau culture',
    'Tranquil mountain dams at Khairabera & Muruguma',
  ];

  const bankuraMoods = [
    '17th-century brick terracotta architecture',
    'Sacred heritage and Vaishnava Malla trails',
    'Undulating Joypur & Jhilimili forest canopies',
    'Prehistoric rock carvings on Susunia & Biharinath',
    '4,000-year-old lost-wax Dokra & pottery crafts',
    'Sunset boat sails across Mukutmanipur confluence',
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream dark:bg-forest-deep">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-14">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-laterite font-mono">
            Geographic Contrast
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-charcoal dark:text-cream">
            Purulia and Bankura — two moods, one region
          </h2>
          <p className="text-sm sm:text-base text-softgrey leading-relaxed">
            Though neighboring districts, each presents a distinct sensory atmosphere. Purulia stirs the adventurous spirit; Bankura nurtures contemplative reverence.
          </p>
        </div>

        {/* Split Editorial Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Purulia Mood Card */}
          <div className="editorial-card p-8 sm:p-10 rounded-3xl shadow-xs space-y-6 border-l-4 border-l-laterite">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-laterite font-bold">
                The Rugged & Wild
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream">
                Purulia Mood
              </h3>
            </div>

            <ul className="space-y-3 pt-2 text-xs sm:text-sm text-charcoal/80 dark:text-cream/80">
              {puruliaMoods.map((mood, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="h-5 w-5 rounded-full bg-laterite/10 text-laterite flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </span>
                  <span>{mood}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bankura Mood Card */}
          <div className="editorial-card p-8 sm:p-10 rounded-3xl shadow-xs space-y-6 border-l-4 border-l-terracotta">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
                The Sacred & Timeless
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream">
                Bankura Mood
              </h3>
            </div>

            <ul className="space-y-3 pt-2 text-xs sm:text-sm text-charcoal/80 dark:text-cream/80">
              {bankuraMoods.map((mood, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="h-5 w-5 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </span>
                  <span>{mood}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Unified CTA */}
        <div className="text-center pt-4">
          <Button
            asChild
            size="lg"
            className="bg-forest hover:bg-forest/90 text-white rounded-xl px-8 py-3.5 text-sm font-semibold shadow-xs cursor-pointer"
          >
            <a
              href="#packages"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Explore Both Regions</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
