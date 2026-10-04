import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Landmark } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import bankuraHeroImg from '@/assets/Bankura.hero.jpg';

export function BishnupurHeritageSection() {
  const temples = [
    {
      name: 'Rasmancha',
      era: '1600 AD • King Bir Hambir',
      description: 'A stepped pyramidal monument on a laterite plinth, unique in Indian architecture, built to assemble Radha-Krishna idols during Ras festivals.',
    },
    {
      name: 'Jor Bangla Temple',
      era: '1655 AD • King Raghunath Singha',
      description: 'Two thatched-style char-chala huts fused with a central tower, adorned with intricate terracotta panels of royal hunts and epic battles.',
    },
    {
      name: 'Shyam Rai Temple',
      era: '1643 AD • Pancharatna Style',
      description: 'The pinnacle of Malla brick architecture, featuring five towers and circular Ras-chakra terracotta reliefs.',
    },
    {
      name: 'Madan Mohan Temple',
      era: '1694 AD • King Durjana Singha',
      description: 'An active shrine with a curved eka-ratna roof, renowned for terracotta carvings depicting scenes from the Bhagavata Purana.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-offwhite dark:bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-14">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-terracotta font-mono">
            Malla Dynasty Architecture
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-charcoal dark:text-cream leading-tight">
            Stories written in terracotta.
          </h2>
          <p className="text-sm sm:text-base text-softgrey leading-relaxed">
            In the 16th and 17th centuries, when stone was scarce across Bengal's river delta, the Malla rulers turned to local alluvial clay — baking architectural narratives into thousands of finely carved terracotta tiles.
          </p>
        </div>

        {/* Architectural Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Architectural Image (6 cols) */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden editorial-card h-[400px] sm:h-[480px]">
            <img
              src={bankuraHeroImg}
              alt="Terracotta bas-relief temple in Bishnupur, Bankura"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-mono uppercase tracking-wider text-beige">Bishnupur, Bankura</span>
              <h4 className="font-editorial text-2xl font-bold">The Terracotta Shrines of Bengal</h4>
            </div>
          </div>

          {/* Temple Profiles (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {temples.map((temple, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-border bg-cream/50 dark:bg-forest-deep/40 space-y-1.5 transition-colors hover:border-terracotta/40"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-editorial text-lg font-bold text-charcoal dark:text-cream">
                    {temple.name}
                  </h4>
                  <span className="text-[10px] font-mono text-softgrey uppercase">{temple.era}</span>
                </div>
                <p className="text-xs text-softgrey leading-relaxed">
                  {temple.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-6">
          <p className="text-xs text-softgrey">
            Bishnupur is located 140 km from Kolkata, accessible by direct daily morning trains (Rupashi Bangla & Aranyak).
          </p>
          <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta/90 text-white rounded-xl px-7 py-3 text-sm font-semibold shrink-0">
            <Link to="/bankura" className="inline-flex items-center gap-2">
              <span>Explore Bishnupur</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
