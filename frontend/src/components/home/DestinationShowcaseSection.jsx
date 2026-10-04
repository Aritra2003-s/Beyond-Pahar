import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import puruliaHero from '@/assets/purulia.hero.jpg';
import bankuraHero from '@/assets/Bankura.hero.jpg';

export function DestinationShowcaseSection() {
  return (
    <section className="py-20 bg-offwhite dark:bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-laterite font-mono">
            Two Distinct Terrains
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-charcoal dark:text-cream">
            Explore the Destinations
          </h2>
          <p className="text-sm text-softgrey">
            Choose a district to discover ancient granite plateaus, secluded forest waterfalls, or four-hundred-year-old terracotta temples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Purulia Feature Card */}
          <div className="editorial-card group rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="editorial-img-wrap h-80 sm:h-96 w-full">
              <img
                src={puruliaHero}
                alt="Ajodhya Hills and Bamni Falls landscape in Purulia"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-laterite text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  Purulia District
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <h3 className="font-editorial text-3xl font-bold">Purulia</h3>
                <p className="text-xs sm:text-sm text-cream/90 font-light leading-relaxed">
                  Ajodhya Hills • Baranti • Bamni Falls • Turga Dam • Garpanchkot • Khairabera • Deulghata • Panchet Dam
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <p className="text-xs sm:text-sm text-softgrey leading-relaxed">
                A rugged frontier of granite monoliths, sparkling hill streams, and the fiery crimson bloom of spring Palash trees. Home to world-renowned acrobatic Purulia Chhau.
              </p>

              <div className="pt-2">
                <Link
                  to="/purulia"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-laterite hover:text-laterite/80 group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Purulia</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bankura Feature Card */}
          <div className="editorial-card group rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="editorial-img-wrap h-80 sm:h-96 w-full">
              <img
                src={bankuraHero}
                alt="Bishnupur Terracotta Temples in Bankura"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-terracotta text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  Bankura District
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <h3 className="font-editorial text-3xl font-bold">Bankura</h3>
                <p className="text-xs sm:text-sm text-cream/90 font-light leading-relaxed">
                  Bishnupur • Mukutmanipur • Susunia Hill • Joypur Forest • Jhilimili • Biharinath Hill • Sutan • Gangdua Dam
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <p className="text-xs sm:text-sm text-softgrey leading-relaxed">
                The ancient realm of the Malla Dynasty, celebrated for exquisite brick terracotta temples, the iconic long-eared Bankura horse, lost-wax Dokra metallurgy, and shimmering river confluences.
              </p>

              <div className="pt-2">
                <Link
                  to="/bankura"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-terracotta hover:text-terracotta/80 group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Bankura</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
