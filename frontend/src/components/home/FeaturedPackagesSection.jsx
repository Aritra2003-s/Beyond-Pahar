import React from 'react';
import {
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  Compass,
  Calendar,
  ShieldCheck,
  Sparkles,
  Mountain,
  Landmark,
  Waves,
  Car
} from 'lucide-react';
import { useTravelStore } from '@/store/useTravelStore';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';

export function FeaturedPackagesSection() {
  const { openBookingModal } = useTravelStore();

  const samplePackages = [
    {
      id: 'ajodhya-hills-escape',
      name: 'Ajodhya Hills Escape',
      destination: 'Purulia Highlands',
      duration: '3 Days / 2 Nights',
      icon: Mountain,
      accentColor: 'text-[#BA532B]',
      badgeBg: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
      borderHover: 'hover:border-amber-500/40',
      topGradient: 'from-amber-500/15 via-amber-500/5 to-transparent',
      summary: 'Highland plateau expedition through hidden rock pools, tribal artisan villages, and breathtaking sunset peaks.',
      roadmap: [
        { day: 'D1', title: 'Baghmundi base, Upper & Lower Dam, Bamni Falls pools' },
        { day: 'D2', title: 'Marble Lake, Turga Falls & Mayur Pahar sunset view' },
        { day: 'D3', title: 'Charida mask village workshop & Matha forest trail' }
      ],
      inclusions: ['Private Hill Transport', 'Eco Resort Stay', 'Local Mountain Guide', 'All Meals'],
      startingPrice: 6499,
    },
    {
      id: 'baranti-weekend',
      name: 'Baranti Weekend',
      destination: 'Northern Purulia',
      duration: '2 Days / 1 Night',
      icon: Waves,
      accentColor: 'text-cyan-600 dark:text-cyan-400',
      badgeBg: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20',
      borderHover: 'hover:border-cyan-500/40',
      topGradient: 'from-cyan-500/15 via-cyan-500/5 to-transparent',
      summary: 'Tranquil waterside getaway under Muradi lake skies with ancient granite hill climbing and tribal cuisine.',
      roadmap: [
        { day: 'D1', title: 'Arrival, Baranti lake check-in & crimson sunset sail' },
        { day: 'D2', title: 'Joychandi Pahar 500-step granite knoll & temple climb' }
      ],
      inclusions: ['Lakeside Cottage Stay', 'Country Boat Ride', 'Santhali Thali', 'Transfers'],
      startingPrice: 3999,
    },
    {
      id: 'bishnupur-heritage-trail',
      name: 'Bishnupur Heritage Trail',
      destination: 'Bankura Heartland',
      duration: '2 Days / 1 Night',
      icon: Landmark,
      accentColor: 'text-rose-600 dark:text-rose-400',
      badgeBg: 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20',
      borderHover: 'hover:border-rose-500/40',
      topGradient: 'from-rose-500/15 via-rose-500/5 to-transparent',
      summary: 'Immersion in 17th-century terracotta dynastic architecture, royal Malla monuments, and handloom silk.',
      roadmap: [
        { day: 'D1', title: 'Rasmancha, Jor Bangla, Shyam Rai & Dalmadal Cannon' },
        { day: 'D2', title: 'Baluchari jacquard silk looms & Panchmura pottery colony' }
      ],
      inclusions: ['Heritage Lodge Stay', 'ASI Monument Passes', 'Silk Studio Tasting', 'Certified Historian'],
      startingPrice: 4899,
    },
    {
      id: 'mukutmanipur-nature-escape',
      name: 'Mukutmanipur Nature Escape',
      destination: 'Southern Bankura',
      duration: '2 Days / 1 Night',
      icon: Compass,
      accentColor: 'text-blue-600 dark:text-blue-400',
      badgeBg: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
      borderHover: 'hover:border-blue-500/40',
      topGradient: 'from-blue-500/15 via-blue-500/5 to-transparent',
      summary: 'Cruise turquoise reservoir waters across India’s second largest earthen dam to secluded forested islands.',
      roadmap: [
        { day: 'D1', title: 'Kangsabati boat cruise to Bonpukuria Deer Park island' },
        { day: 'D2', title: 'Dam sunrise walk & Bikna 4,000-year Dokra metal village' }
      ],
      inclusions: ['Lakefront Resort', 'Chartered Motorboat', 'Dokra Artisan Meet', 'Breakfast & Dinner'],
      startingPrice: 4200,
    },
    {
      id: 'susunia-biharinath-hills-trail',
      name: 'Susunia & Biharinath Summit Trail',
      destination: 'Northern Bankura Highlands',
      duration: '2 Days / 1 Night',
      icon: Mountain,
      accentColor: 'text-amber-600 dark:text-amber-400',
      badgeBg: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
      borderHover: 'hover:border-amber-500/40',
      topGradient: 'from-amber-500/15 via-amber-500/5 to-transparent',
      summary: 'Ascend the two highest granite peaks of Bankura, witness 4th-century Brahmi cliff inscriptions, cold mineral springs, and stone carvers.',
      roadmap: [
        { day: 'D1', title: 'Susunia Hill 4th-century Brahmi inscription, Dhara spring & Gangdua Dam' },
        { day: 'D2', title: 'Biharinath 451m forest peak summit trek & ancient terracotta Shiva temple' }
      ],
      inclusions: ['Hill Eco Resort Stay', 'Biharinath Summit Trek Guide', 'Stone Carving Colony Visit', 'All Country Meals'],
      startingPrice: 4499,
    },
    {
      id: 'rarh-grand-circuit',
      name: 'Rarh Grand Circuit',
      destination: 'Purulia & Bankura (Combined)',
      duration: '4 Days / 3 Nights',
      icon: Sparkles,
      accentColor: 'text-emerald-600 dark:text-emerald-400',
      badgeBg: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20',
      borderHover: 'hover:border-emerald-500/40',
      topGradient: 'from-emerald-500/15 via-emerald-500/5 to-transparent',
      summary: 'The ultimate signature expedition blending terracotta temples, lake sailing, granite summits, and live Chhau dance.',
      roadmap: [
        { day: 'D1', title: 'Bishnupur terracotta marvels & Baluchari silk weaving' },
        { day: 'D2', title: 'Mukutmanipur reservoir catamaran & Jhilimili canopy drive' },
        { day: 'D3', title: 'Ayodhya Hills • Bamni Falls natural pools • Night Chhau show' },
        { day: 'D4', title: 'Charida mask sculptors village & scenic hill departure' }
      ],
      inclusions: ['Dedicated AC Vehicle', '3 Boutique Resort Nights', 'Chhau Dance Evening', 'All Sightseeing & Entry'],
      startingPrice: 9999,
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-offwhite dark:bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="border-b border-border pb-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-laterite font-mono">
              Curated Routes (Demo Catalog)
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-charcoal dark:text-cream">
              Journeys worth taking.
            </h2>
          </div>
        </div>

        {/* 5 Unique, Realistic Modern UI Package Cards (No Images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {samplePackages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.id}
                className={`group rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative ${pkg.borderHover}`}
              >
                {/* Subtle themed top wash */}
                <div className={`h-2.5 w-full bg-gradient-to-r ${pkg.topGradient}`} />

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  {/* Top Meta: District Badge, Duration & Signature Icon */}
                  <div className="space-y-3.5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-charcoal dark:bg-stone-800 text-cream">
                          {pkg.destination}
                        </span>

                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border flex items-center gap-1 ${pkg.badgeBg}`}>
                          <Clock className="w-3 h-3" />
                          <span>{pkg.duration}</span>
                        </span>
                      </div>

                      <div className={`w-10 h-10 rounded-2xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${pkg.accentColor}`}>
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-laterite transition-colors leading-tight">
                      {pkg.name}
                    </h3>

                    {/* Short Summary */}
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                      {pkg.summary}
                    </p>
                  </div>

                  {/* Curated Daily Route Roadmap */}
                  <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 space-y-2">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-laterite" />
                      <span>Curated Daily Roadmap:</span>
                    </div>

                    <div className="space-y-2 pt-0.5">
                      {pkg.roadmap.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 dark:text-stone-200 leading-snug">
                          <span className="px-1.5 py-0.5 rounded bg-laterite/10 text-laterite font-mono font-bold text-[10px] shrink-0 mt-0.5">
                            {item.day}
                          </span>
                          <span>{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inclusions Micro-Tags */}
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-softgrey">
                      Package Includes:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.inclusions.map((inc, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700"
                        >
                          ✓ {inc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action Buttons */}
                  <div className="pt-4 border-t border-stone-200 dark:border-stone-800 space-y-3.5">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] text-softgrey uppercase tracking-wider block font-semibold">
                          Sample starting rate
                        </span>
                        <div className="text-xl sm:text-2xl font-bold text-laterite font-serif leading-none mt-1">
                          {formatPrice(pkg.startingPrice)}
                          <span className="text-xs font-normal text-softgrey font-sans"> / person</span>
                        </div>
                      </div>
                      <span className="text-[10px] bg-beige/60 dark:bg-stone-800 px-2.5 py-1 rounded-full text-charcoal dark:text-stone-300 font-mono font-medium border border-border/60">
                        Demo price
                      </span>
                    </div>

                    <div className="pt-1">
                      <Button
                        size="sm"
                        className="bg-laterite hover:bg-laterite/90 text-white rounded-xl text-xs w-full h-10 shadow-md shadow-laterite/20 flex items-center justify-center gap-1.5 font-semibold cursor-pointer"
                        onClick={() =>
                          openBookingModal({
                            id: pkg.id,
                            title: pkg.name,
                            price: pkg.startingPrice,
                            district: pkg.destination,
                            location: pkg.destination,
                          })
                        }
                      >
                        <span>Plan / Book This Trip</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPackagesSection;
