import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import handPaintedMaskImg from '@/assets/Hand painted mask.jpg';

export function ChhauCultureSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream dark:bg-forest-deep">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden editorial-card h-80 sm:h-96">
              <img
                src={handPaintedMaskImg}
                alt="Intricate Purulia Chhau Mask handcrafted in Charida village"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-charcoal/80 text-cream text-[11px] px-2.5 py-1 rounded-md font-mono">
                Hand-painted mask from Charida
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden editorial-card h-40 sm:h-48">
                <img
                  src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80"
                  alt="Artisan sculpting folk art in rural Bengal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 rounded-2xl border border-border bg-offwhite dark:bg-card space-y-2 text-xs">
                <div className="font-mono uppercase tracking-wider text-laterite font-bold text-[10px]">
                  Traditional Instrumentation
                </div>
                <p className="text-softgrey leading-relaxed">
                  Performances are propelled by the booming cadence of the Dhamsa kettle drum, the brisk rhythm of the Dhol, and the resonant cry of the Shehnai.
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Content Block (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-laterite font-mono">
                Living Intangible Heritage
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-charcoal dark:text-cream leading-tight">
                Where movement becomes storytelling.
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-charcoal/80 dark:text-cream/80 leading-relaxed font-light">
              "Discover the expressive traditions of Purulia Chhau and the artistry behind its masks, costumes, and performances."
            </p>

            <div className="text-xs sm:text-sm text-softgrey space-y-3 leading-relaxed">
              <p>
                Purulia Chhau is a masked martial dance tradition rooted in the soil of southwestern Bengal. Dancers enact episodes from the Ramayana, Mahabharata, and regional mythology, executing high vertical leaps, somersaults, and mock-combat choreography.
              </p>
              <p>
                Every performance begins in the artisan studios of Charida village, where master craftspeople mold paper-mache, clay, and cloth into towering, feathered headpieces worn by heroic gods and fierce demons alike.
              </p>
            </div>

            <div className="pt-2">
              <Button asChild size="lg" className="bg-laterite hover:bg-laterite/90 text-white rounded-xl px-7 py-3 text-sm font-semibold">
                <Link to="/destinations/charida-village" className="inline-flex items-center gap-2">
                  <span>Explore Charida Village</span>
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
