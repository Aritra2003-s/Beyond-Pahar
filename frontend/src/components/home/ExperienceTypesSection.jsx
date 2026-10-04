import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Mountain,
  Droplets,
  Trees,
  Landmark,
  Palette,
  Anchor,
  Compass,
  MapPin,
  Calendar,
  Sparkles
} from 'lucide-react';

export function ExperienceTypesSection() {
  const categories = [
    {
      title: 'Hill Escapes',
      category: 'Highlands & Summits',
      icon: Mountain,
      accentColor: 'text-amber-600 dark:text-amber-400',
      badgeBg: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
      borderHover: 'hover:border-amber-500/40',
      topGradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
      description: 'Granite peaks, breezy plateaus, and sunrise vistas across the ancient Chota Nagpur plateau fringe.',
      locations: 'Ajodhya Hills, Joychandi Pahar, Susunia, Biharinath',
      elevation: '600m – 670m ASL granite inselbergs',
      season: 'October to March • Clear dawn mist & sunset vistas',
      activity: 'Plateau ridge trekking, rock scrambles, sacred hill caves',
      link: '/destinations?category=Hills%20%26%20Nature',
    },
    {
      title: 'Waterfall Trails',
      category: 'Streams & Cascades',
      icon: Droplets,
      accentColor: 'text-cyan-600 dark:text-cyan-400',
      badgeBg: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20',
      borderHover: 'hover:border-cyan-500/40',
      topGradient: 'from-cyan-500/10 via-cyan-500/5 to-transparent',
      description: 'Descents through dense Sal groves to cool natural rock pools and roaring seasonal torrents.',
      locations: 'Bamni Falls, Turga Cascades, Sita Kund spring pool',
      elevation: 'Riparian boulder gorges with tiered drops',
      season: 'July to January • Post-monsoon high flow & wild greenery',
      activity: 'Plunge pool swimming, forest ravine trekking, canopy birding',
      link: '/destinations?category=Waterfalls',
    },
    {
      title: 'Forest Getaways',
      category: 'Wilderness & Flora',
      icon: Trees,
      accentColor: 'text-emerald-600 dark:text-emerald-400',
      badgeBg: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20',
      borderHover: 'hover:border-emerald-500/40',
      topGradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
      description: 'Winding canopy roads through old-growth Sal and Mahua reserves harboring sacred Santhali groves.',
      locations: 'Joypur Forest Sanctuary, Jhilimili Canopy, Kuilapal, Sutan',
      elevation: 'Old-growth Shorea robusta timber canopy & Cheetal herds',
      season: 'November to April • Golden leaf-fall & flaming Palash blooms',
      activity: 'Canopy drives, eco-resort stays, tribal village trails',
      link: '/destinations?category=Forests%20%26%20Wildlife',
    },
    {
      title: 'Heritage Walks',
      category: 'Architecture & History',
      icon: Landmark,
      accentColor: 'text-rose-600 dark:text-rose-400',
      badgeBg: 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20',
      borderHover: 'hover:border-rose-500/40',
      topGradient: 'from-rose-500/10 via-rose-500/5 to-transparent',
      description: 'Architectural journeys through 17th-century terracotta temples, Malla dynastic vaults, and ancient stone deuls.',
      locations: 'Rasmancha, Jor Bangla, Shyam Rai, Dalmadal, Deulghata',
      elevation: 'Malla Kingdom epic terracotta reliefs & 10th-cent. Jain deuls',
      season: 'October to March • Gentle sunshine & cultural temple walks',
      activity: 'Iconography decoding, Baluchari silk weaving studio visits',
      link: '/destinations?category=Heritage%20%26%20Architecture',
    },
    {
      title: 'Cultural Experiences',
      category: 'Artisans & Performing Arts',
      icon: Palette,
      accentColor: 'text-[#BA532B]',
      badgeBg: 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20',
      borderHover: 'hover:border-orange-500/40',
      topGradient: 'from-orange-500/10 via-orange-500/5 to-transparent',
      description: 'Hands-on mask carving in Charida, lost-wax Dokra metallurgy in Bikna, and traditional potter masterclasses.',
      locations: 'Charida Mask Village, Panchmura Colony, Bikna Dokra Ward',
      elevation: 'UNESCO-recognized Purulia Chhau & GI-tagged crafts',
      season: 'All Year Round • Intimate master artisan studio batches',
      activity: 'Papier-mâché mask painting, clay potter’s wheel, brass casting',
      link: '/destinations?category=Culture%20%26%20Crafts',
    },
    {
      title: 'Lakeside Retreats',
      category: 'Water Bodies & Sunsets',
      icon: Anchor,
      accentColor: 'text-blue-600 dark:text-blue-400',
      badgeBg: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
      borderHover: 'hover:border-blue-500/40',
      topGradient: 'from-blue-500/10 via-blue-500/5 to-transparent',
      description: 'Tranquil shoreline camping, catamaran cruises, and blazing sunsets reflecting over vast river confluences.',
      locations: 'Mukutmanipur Dam, Baranti Muradi Lake, Khairabera Eco Lake',
      elevation: 'India’s 2nd largest earthen dam & quiet island preserves',
      season: 'August to March • Cool lake breezes & fiery sunset reflections',
      activity: 'Catamaran island sail, lakeside tent camping, bonfire evenings',
      link: '/destinations?category=Lakes%20%26%20Dams',
    },
  ];

  return (
    <section className="py-20 bg-cream/35 dark:bg-card border-y border-border/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="border-b border-border/80 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-laterite font-mono">
              Curated Travel Styles
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-charcoal dark:text-cream">
              Find your kind of journey.
            </h2>
          </div>
        </div>

        {/* 6 Unique, Realistic Modern UI Cards (No Images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative ${item.borderHover}`}
              >
                {/* Subtle themed top wash */}
                <div className={`h-2.5 w-full bg-gradient-to-r ${item.topGradient}`} />

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  {/* Top Badge & Craft Glyph */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${item.badgeBg}`}>
                        {item.category}
                      </span>

                      <div className={`w-10 h-10 rounded-2xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${item.accentColor}`}>
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-laterite transition-colors leading-tight">
                      {item.title}
                    </h3>

                    {/* Summary Description */}
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Realistic Field Details Box */}
                  <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 space-y-2.5 text-xs">
                    {/* Key Hubs */}
                    <div className="flex items-start gap-2 text-stone-700 dark:text-stone-300">
                      <MapPin className="w-3.5 h-3.5 text-laterite shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-stone-900 dark:text-stone-100">Key Hubs: </span>
                        <span>{item.locations}</span>
                      </div>
                    </div>

                    {/* Prime Activities */}
                    <div className="flex items-start gap-2 text-stone-700 dark:text-stone-300">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-stone-900 dark:text-stone-100">Signature: </span>
                        <span>{item.activity}</span>
                      </div>
                    </div>

                    {/* Timing & Conditions */}
                    <div className="flex items-start gap-2 text-stone-700 dark:text-stone-300">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-stone-900 dark:text-stone-100">Prime Timing: </span>
                        <span>{item.season}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Link Footer */}
                  <div className="pt-3 border-t border-stone-200 dark:border-stone-800">
                    <Link
                      to={item.link}
                      className="inline-flex items-center justify-between w-full text-xs font-semibold text-laterite group-hover:text-laterite/90 py-1"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">
                        Explore {item.title}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-laterite/10 flex items-center justify-center group-hover:bg-laterite group-hover:text-white transition-all">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </Link>
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

export default ExperienceTypesSection;
