import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import salForestImg from '@/assets/Sal Forest.webp';

export function BrandStorySection() {
  return (
    <section id="brand-story" className="py-20 lg:py-28 bg-cream dark:bg-forest-deep">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Large Editorial Photograph (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden editorial-card shadow-sm group">
              <img
                src={salForestImg}
                alt="Winding forest road through Sal trees in Purulia"
                className="w-full h-[360px] sm:h-[460px] object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 bg-charcoal/80 backdrop-blur-xs text-cream text-xs px-3 py-1.5 rounded-xl font-mono">
                Sal forest road towards Baghmundi
              </div>
            </div>
          </div>

          {/* Concise Editorial Text Block (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-laterite font-mono">
                The Rarh Philosophy
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-charcoal dark:text-cream leading-tight">
                A different kind of escape.
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-charcoal/80 dark:text-cream/80 leading-relaxed font-light">
              "Slow down, follow the forest roads, discover local stories, and experience the quiet beauty of Purulia and Bankura."
            </p>

            <div className="pt-2 text-xs sm:text-sm text-softgrey space-y-3 leading-relaxed">
              <p>
                Rarh is not built for hurried checklists. Here, journeys unfold at the pace of quiet reservoir waters, afternoon flute melodies, and evening conversations with artisan families whose lineages have molded clay and carved masks for generations.
              </p>
            </div>

            <div className="pt-2">
              <Button asChild variant="outline" className="rounded-xl border-charcoal/30 hover:bg-beige/40 text-charcoal dark:text-cream text-xs sm:text-sm">
                <Link to="/about" className="inline-flex items-center gap-2">
                  <span>About Our Mission</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
