import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  MapPin,
  Compass,
  Star,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Mountain,
  Landmark,
  Waves,
  Trees,
  Sparkles,
  ChevronDown,
  Info,
  Clock,
  Car,
  Train,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  HelpCircle,
  Footprints
} from 'lucide-react';
import { destinations } from '@/data/destinations';
import { circuits } from '@/data/circuits';
import { stays } from '@/data/stays';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';
import { useTravelStore } from '@/store/useTravelStore';
import puruliaHero from '@/assets/purulia.hero.jpg';
import bankuraHero from '@/assets/Bankura.hero.jpg';

export function DistrictExplorePage({ districtName }) {
  const isPurulia = districtName.toLowerCase() === 'purulia';
  const districtTitle = isPurulia ? 'Purulia' : 'Bankura';
  const { openBookingModal } = useTravelStore();

  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedThematicTab, setSelectedThematicTab] = useState(isPurulia ? 'all' : 'all');

  const districtDestinations = destinations.filter((d) => d.district === districtTitle);
  const districtCircuits = circuits.filter((c) => c.district === districtTitle || c.district === 'Both');
  const districtStays = stays.filter((s) => s.district === districtTitle);

  // Filtered categories for Purulia
  const puruliaHillsWaterfalls = districtDestinations.filter(
    (d) => d.category.includes('Hills') || d.category.includes('Waterfalls')
  );
  const puruliaDamsLakes = districtDestinations.filter(
    (d) => d.category.includes('Lakes') || d.category.includes('Water Bodies') || d.category.includes('Dams')
  );
  const puruliaHeritageCulture = districtDestinations.filter(
    (d) => d.category.includes('Artisan') || d.category.includes('Heritage')
  );

  // Filtered categories for Bankura
  const bankuraHeritage = districtDestinations.filter(
    (d) => d.category.includes('Heritage')
  );
  const bankuraNatureHills = districtDestinations.filter(
    (d) => d.category.includes('Hills') || d.category.includes('Forest')
  );
  const bankuraDamsWater = districtDestinations.filter(
    (d) => d.category.includes('Lakes') || d.category.includes('Dams')
  );
  const bankuraCrafts = districtDestinations.filter(
    (d) => d.category.includes('Artisan')
  );

  // Hero config
  const heroConfig = isPurulia
    ? {
        image: puruliaHero,
        title: 'Purulia: The Granite Ridgelines & Red Earth Frontier',
        tagline: 'Beyond the hills. Into the wild across ancient hills, roaring seasonal waterfalls, and the masked martial rhythms of Chhau.',
        subBadge: 'Western Frontier of Bengal',
        stats: [
          { label: 'Highest Ridge', val: '610m (Ayodhya)' },
          { label: 'Artisan Hubs', val: 'Charida Chhau' },
          { label: 'Signature Season', val: 'Palash Bloom (Feb-Mar)' },
          { label: 'Key Railheads', val: 'Purulia, Barabhum, Adra' }
        ]
      }
    : {
        image: bankuraHero,
        title: 'Bankura: Terracotta Temples, Whispering Forests & Shimmering Waters',
        tagline: 'Step into the 17th-century Vaishnava capital of the Malla kings, explore India’s 2nd largest earthen dam, and wander prehistoric hills.',
        subBadge: 'Cultural Heartland of Bengal',
        stats: [
          { label: 'Heritage Hub', val: 'Bishnupur Malla Dynasty' },
          { label: 'Earthen Dam', val: 'Mukutmanipur 11 km' },
          { label: 'Highest Peak', val: '451m (Biharinath)' },
          { label: 'Living Crafts', val: 'Dokra, Bankura Horse, Silk' }
        ]
      };

  // District-specific Travel Tips
  const puruliaTravelTips = [
    {
      title: 'Best Season to Visit',
      desc: 'October to March offers cool dry weather. Mid-February through March is the famous Palash flowering season, painting hillsides fiery orange-red.'
    },
    {
      title: 'How to Reach from Kolkata',
      desc: 'Howrah-Purulia Express, Rupashi Bangla, or Chakradharpur Fast Passenger reach Purulia Junction in 4.5–5 hours. Alternatively, drive via NH16 & NH18 (~300 km).'
    },
    {
      title: 'Local Transport & Totos',
      desc: 'Totos (electric rickshaws) are ideal for village hubs like Charida and Baghmundi. For Ayodhya Hills ridge and waterfalls, hiring a dedicated SUV/cab is strongly advised.'
    },
    {
      title: 'Responsible Trail Etiquette',
      desc: 'Waterfall trails have rocky steps; wear non-slip shoes. Respect tribal sacred groves (Jahersthan) and always seek permission before filming local community performers.'
    }
  ];

  const bankuraTravelTips = [
    {
      title: 'Best Season & Bishnupur Mela',
      desc: 'November to February is ideal for temple walks and forest safaris. Late December hosts the grand Bishnupur Mela featuring classical music and folk crafts.'
    },
    {
      title: 'Train Connections from Howrah',
      desc: 'Rupashi Bangla Express, Aranyak Express, and Howrah-Ghatsila passenger connect directly to Bishnupur and Bankura stations in approximately 3.5 to 4 hours.'
    },
    {
      title: 'Shopping for GI-Tagged Crafts',
      desc: 'Buy authentic GI-tagged Baluchari & Swarnachari silk sarees from Bishnupur weaver societies, Dokra bell-metal direct from Bikna, and terracotta horses from Panchmura.'
    },
    {
      title: 'Forest & Wildlife Guidelines',
      desc: 'Joypur Forest and Sutan corridors are natural elephant movement paths during migratory seasons. Avoid travelling on remote interior forest roads after sunset.'
    }
  ];

  // District-specific FAQs
  const puruliaFaqs = [
    {
      q: 'How many days are recommended for a complete Purulia trip?',
      a: 'A 3-day / 2-night itinerary comfortably covers the core Ayodhya Hills circuit (Bamni Falls, Turga Dam, Marble Lake, Charida Village, and Khairabera). Adding Baranti and Joychandi Pahar requires 4 days.'
    },
    {
      q: 'Can senior citizens visit Bamni and Turga Waterfalls?',
      a: 'Bamni Falls involves descending roughly 250 uneven stone steps. Senior travelers can enjoy the lush upper viewpoint and adjacent Turga Dam without undertaking the steep descent.'
    },
    {
      q: 'Where can we watch an authentic Purulia Chhau dance performance?',
      a: 'During winter and spring festivals, performances take place in tribal village courtyards around Baghmundi and Charida. BeyondPahar can also arrange evening acoustic showcases at your eco-resort.'
    },
    {
      q: 'What is the road condition on the Ayodhya Hills ghat road?',
      a: 'The ghat roads ascending from Sirakabad and Baghmundi are fully paved two-lane asphalt roads with protective guardrails, suitable for all passenger vehicles.'
    }
  ];

  const bankuraFaqs = [
    {
      q: 'Can Bishnupur temples and Mukutmanipur be covered in one weekend?',
      a: 'Yes! A 2-day / 1-night circuit allows you to explore the UNESCO-tentative Bishnupur terracotta temples and artisan villages on Day 1, followed by a scenic boat cruise at Mukutmanipur on Day 2.'
    },
    {
      q: 'What is special about the terracotta architecture of Bishnupur?',
      a: 'Due to lack of stone in the alluvial Rarh terrain, 17th-century Malla king builders used baked alluvial mud tiles carved with intricate bas-reliefs illustrating the Ramayana, Mahabharata, and royal legends.'
    },
    {
      q: 'Are boat rides available at Mukutmanipur earthen dam?',
      a: 'Yes, motorized ferries and country boats operate daily between 8:00 AM and 4:30 PM, taking visitors to Bonpukuria Deer Park island on the lake.'
    },
    {
      q: 'Is Susunia Hill accessible for rock climbing and beginners?',
      a: 'Susunia Hill is Eastern India’s primary rock climbing training crag with beginner-friendly scrambling routes, sacred cold mineral springs, and stone-carver colonies at its base.'
    }
  ];

  const travelTips = isPurulia ? puruliaTravelTips : bankuraTravelTips;
  const faqs = isPurulia ? puruliaFaqs : bankuraFaqs;

  return (
    <div className="pb-24">
      <Helmet>
        <title>{`${districtTitle} Tourism & Curated Travel Guide — BeyondPahar`}</title>
        <meta name="description" content={heroConfig.tagline} />
      </Helmet>

      {/* 1. CINEMATIC HERO */}
      <div className="relative min-h-[70vh] lg:min-h-[75vh] w-full overflow-hidden flex items-end">
        <img
          src={heroConfig.image}
          alt={`Explore ${districtTitle}`}
          className="absolute inset-0 h-full w-full object-cover object-center scale-105 animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8 py-12 lg:py-16 text-white max-w-5xl space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                isPurulia ? 'bg-laterite text-white' : 'bg-terracotta text-white'
              }`}
            >
              {heroConfig.subBadge}
            </span>
            <span className="text-xs text-beige/90 font-mono tracking-widest uppercase">
              West Bengal, India
            </span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            {heroConfig.title}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-cream/90 font-light leading-relaxed max-w-3xl">
            {heroConfig.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              asChild
              className={`${
                isPurulia ? 'bg-laterite hover:bg-laterite/90' : 'bg-terracotta hover:bg-terracotta/90'
              } text-white font-semibold rounded-xl shadow-md`}
            >
              <Link to="/plan-your-trip">Plan a {districtTitle} Trip</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md rounded-xl"
            >
              <a href="#destinations-list">Browse Attractions</a>
            </Button>
          </div>

          {/* Key Facts bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/20">
            {heroConfig.stats.map((stat, i) => (
              <div key={i} className="space-y-0.5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-beige/70">
                  {stat.label}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white font-mono">
                  {stat.val}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 mt-16 space-y-24">
        {/* 2. EDITORIAL INTRODUCTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-laterite">
              <Sparkles className="h-4 w-4" />
              <span>Regional Perspective</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-charcoal dark:text-cream leading-snug">
              {isPurulia
                ? 'Where ancient granite knolls rise above whispering Sal canopies.'
                : 'Where terracotta masters forged sacred poetry out of baked river clay.'}
            </h2>
            <div className="text-sm sm:text-base text-softgrey leading-relaxed space-y-4 font-light">
              {isPurulia ? (
                <>
                  <p>
                    Purulia forms the rugged, dramatic western threshold of West Bengal. Here, the Chota Nagpur
                    Plateau spills out in weathered granitic hills, cascading perennial cascades, and winding red
                    laterite tracks bordered by tall Sal, Mahua, and Palash trees.
                  </p>
                  <p>
                    Unlike conventional tourist corridors, Purulia offers an earthy, unhurried cadence: the rhythmic
                    thrum of the Dhamsa and Madal drums at twilight, master artisans in Charida carefully painting
                    mythological Chhau masks, and the sudden quiet of turquoise waters filling abandoned granite quarries
                    at Marble Lake.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Bankura is the sacred artistic heartbeat of the Rarh region. For over a millennium, ruled by the
                    culturally fervent Malla kings, Bishnupur became an unparalleled center for terracotta architecture,
                    the classical Bishnupur Gharana of music, and master handloom weaving.
                  </p>
                  <p>
                    From the 11-kilometer earthen dam at Mukutmanipur where the Kangsabati and Kumari rivers merge into
                    an azure inland sea, to the prehistoric rock inscriptions and cold mineral springs of Susunia Hill,
                    Bankura balances ancient civilization with serene woodland sanctuaries.
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="editorial-card rounded-3xl p-6 lg:p-8 space-y-5 bg-beige/30 dark:bg-forest-deep/60 border border-border">
              <h3 className="font-editorial text-xl font-bold text-charcoal dark:text-cream">
                {isPurulia ? 'Purulia Highlights at a Glance' : 'Bankura Highlights at a Glance'}
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-softgrey">
                {isPurulia ? (
                  <>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-laterite shrink-0 mt-0.5" />
                      <span><strong>Ayodhya Hills (610m):</strong> Ridge walks, Sita Kund spring, Mayur Pahar sunset.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-laterite shrink-0 mt-0.5" />
                      <span><strong>Waterfalls:</strong> Bamni Falls boulder plunge pools & Turga Dam natural cascades.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-laterite shrink-0 mt-0.5" />
                      <span><strong>Lakes & Dams:</strong> Marble Lake, Khairabera, Baranti, Panchet & Upper-Lower Dams.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-laterite shrink-0 mt-0.5" />
                      <span><strong>Folk Culture:</strong> Charida Chhau Mask craft village & Santhali folk traditions.</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-terracotta shrink-0 mt-0.5" />
                      <span><strong>Bishnupur Temples:</strong> Rasmancha, Jor Bangla, Shyam Rai & Dalmadal cannon.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-terracotta shrink-0 mt-0.5" />
                      <span><strong>Mukutmanipur Dam:</strong> India’s 2nd largest earthen dam & Bonpukuria Deer Park.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-terracotta shrink-0 mt-0.5" />
                      <span><strong>Ancient Hills & Springs:</strong> Susunia 4th-century rock inscription & Biharinath peak.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-terracotta shrink-0 mt-0.5" />
                      <span><strong>Living Crafts:</strong> 4,000-year-old Bikna Dokra metal casting & Panchmura terracotta horses.</span>
                    </li>
                  </>
                )}
              </ul>

              <div className="pt-2">
                <Button
                  onClick={openBookingModal}
                  className={`w-full ${
                    isPurulia ? 'bg-laterite hover:bg-laterite/90' : 'bg-terracotta hover:bg-terracotta/90'
                  } text-white font-semibold rounded-xl`}
                >
                  Consult a Local Specialist
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FEATURED ATTRACTIONS DIRECTORY */}
        <section id="destinations-list" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-4">
            <div>
              <span className={`text-xs font-bold uppercase tracking-wider ${isPurulia ? 'text-laterite' : 'text-terracotta'}`}>
                Handpicked Wonders
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream mt-1">
                Featured Attractions in {districtTitle}
              </h2>
            </div>
            <Link
              to="/destinations"
              className="text-xs font-semibold text-laterite hover:underline flex items-center gap-1"
            >
              <span>View full Rarh catalogue</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {districtDestinations.map((dest) => (
              <div
                key={dest.id}
                className="editorial-card rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="editorial-img-wrap h-60 w-full relative overflow-hidden">
                  <img
                    src={dest.coverImage}
                    alt={dest.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="bg-charcoal/85 text-cream text-[10px] font-semibold px-2.5 py-0.5 rounded-md backdrop-blur-xs">
                      {dest.category}
                    </span>
                  </div>
                  {dest.suggestedDuration && (
                    <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-charcoal/90 text-charcoal dark:text-cream text-[11px] font-mono px-2.5 py-0.5 rounded-md backdrop-blur-xs flex items-center gap-1">
                      <Clock className="h-3 w-3 text-laterite" />
                      <span>{dest.suggestedDuration}</span>
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-softgrey">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-laterite shrink-0" />
                        {dest.nearestTown}
                      </span>
                      <span className="flex items-center gap-1 font-bold text-charcoal dark:text-cream">
                        <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                        {dest.rating}
                      </span>
                    </div>
                    <h3 className="font-editorial text-xl font-bold text-charcoal dark:text-cream group-hover:text-laterite transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-softgrey line-clamp-2 leading-relaxed">
                      {dest.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border flex items-center justify-between">
                    <span className="text-[11px] text-softgrey font-mono">
                      {dest.altitude || 'Rarh Plain'}
                    </span>
                    <Link
                      to={`/destinations/${dest.id}`}
                      className="text-xs font-semibold text-laterite hover:underline flex items-center gap-1"
                    >
                      <span>Explore Guide</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. THEMATIC SECTIONS (PURULIA SPECIFIC VS BANKURA SPECIFIC) */}
        {isPurulia ? (
          <section className="space-y-16">
            {/* Purulia: Hills & Waterfalls */}
            <div className="space-y-6">
              <div className="border-b border-border pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-forest">
                  Nature & Hydrology
                </span>
                <h3 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream mt-1">
                  Hills and Cascading Waterfalls
                </h3>
                <p className="text-xs sm:text-sm text-softgrey mt-1">
                  Granite escarpments and cold perennial plunge pools tucked within Sal woods.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {puruliaHillsWaterfalls.slice(0, 3).map((item) => (
                  <Link
                    key={item.id}
                    to={`/destinations/${item.id}`}
                    className="editorial-card rounded-2xl p-5 group flex flex-col justify-between space-y-3"
                  >
                    <div className="h-44 rounded-xl overflow-hidden">
                      <img
                        src={item.coverImage}
                        alt={item.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-laterite">{item.category}</span>
                      <h4 className="font-editorial text-lg font-bold text-charcoal dark:text-cream mt-0.5">
                        {item.name}
                      </h4>
                      <p className="text-xs text-softgrey line-clamp-2 mt-1">{item.tagline}</p>
                    </div>
                    <span className="text-xs font-semibold text-laterite flex items-center gap-1 pt-2">
                      View attraction details <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Purulia: Dams and Lakes */}
            <div className="space-y-6">
              <div className="border-b border-border pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-laterite">
                  Lakeside Retreats
                </span>
                <h3 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream mt-1">
                  Dams, Reservoirs & Shimmering Waters
                </h3>
                <p className="text-xs sm:text-sm text-softgrey mt-1">
                  Tranquil irrigation reservoirs, pumped-storage engineering wonders, and crimson sunsets.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {puruliaDamsLakes.slice(0, 3).map((item) => (
                  <Link
                    key={item.id}
                    to={`/destinations/${item.id}`}
                    className="editorial-card rounded-2xl p-5 group flex flex-col justify-between space-y-3"
                  >
                    <div className="h-44 rounded-xl overflow-hidden">
                      <img
                        src={item.coverImage}
                        alt={item.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-laterite">{item.category}</span>
                      <h4 className="font-editorial text-lg font-bold text-charcoal dark:text-cream mt-0.5">
                        {item.name}
                      </h4>
                      <p className="text-xs text-softgrey line-clamp-2 mt-1">{item.tagline}</p>
                    </div>
                    <span className="text-xs font-semibold text-laterite flex items-center gap-1 pt-2">
                      View lake details <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Purulia: Chhau Culture Section */}
            <div className="rounded-3xl p-8 lg:p-12 bg-laterite text-white space-y-6 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
                <Footprints className="h-80 w-80 text-white" />
              </div>
              <div className="max-w-2xl space-y-4 relative z-10">
                <span className="text-xs uppercase font-bold tracking-widest text-beige">
                  Living Folk Tradition
                </span>
                <h3 className="font-editorial text-2xl sm:text-4xl font-bold leading-tight">
                  Where Movement Becomes Storytelling: The Purulia Chhau
                </h3>
                <p className="text-sm sm:text-base text-cream/90 leading-relaxed font-light">
                  UNESCO-recognized and rooted in the martial traditions of the Rarh plateau, Purulia Chhau is an
                  acrobatic dance theatre. In the artisan hamlet of Charida, master mask makers fashion the elaborate
                  crowns of demons and deities from mud, cloth, and paper-mache, painted in vivid sacred hues.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Button asChild className="bg-cream hover:bg-cream/90 text-charcoal font-semibold rounded-xl">
                    <Link to="/destinations/charida-village">Explore Charida Mask Village</Link>
                  </Button>
                  <Button asChild variant="outline" className="text-white border-white/40 hover:bg-white/10 rounded-xl">
                    <a href="/#experiences">Mask Making Masterclass</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="space-y-16">
            {/* Bankura: Bishnupur Terracotta Heritage */}
            <div className="space-y-6">
              <div className="border-b border-border pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                  17th-Century Malla Dynasty
                </span>
                <h3 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream mt-1">
                  Bishnupur Terracotta Architecture & Heritage
                </h3>
                <p className="text-xs sm:text-sm text-softgrey mt-1">
                  The crowning glory of Bengal’s baked clay craftsmanship, curved char-chala roofs, and classical music.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bankuraHeritage.map((item) => (
                  <Link
                    key={item.id}
                    to={`/destinations/${item.id}`}
                    className="editorial-card rounded-2xl p-5 group flex flex-col justify-between space-y-3"
                  >
                    <div className="h-44 rounded-xl overflow-hidden">
                      <img
                        src={item.coverImage}
                        alt={item.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-terracotta">{item.category}</span>
                      <h4 className="font-editorial text-lg font-bold text-charcoal dark:text-cream mt-0.5">
                        {item.name}
                      </h4>
                      <p className="text-xs text-softgrey line-clamp-2 mt-1">{item.tagline}</p>
                    </div>
                    <span className="text-xs font-semibold text-terracotta flex items-center gap-1 pt-2">
                      View temple guide <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bankura: Hills, Forests & Lakes */}
            <div className="space-y-6">
              <div className="border-b border-border pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-forest">
                  Wild Landscapes & Canopies
                </span>
                <h3 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream mt-1">
                  Mukutmanipur, Susunia Hill & Joypur Forest
                </h3>
                <p className="text-xs sm:text-sm text-softgrey mt-1">
                  From India’s 2nd largest earthen dam to ancient rock inscriptions and Sal wildlife corridors.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bankuraNatureHills.slice(0, 3).map((item) => (
                  <Link
                    key={item.id}
                    to={`/destinations/${item.id}`}
                    className="editorial-card rounded-2xl p-5 group flex flex-col justify-between space-y-3"
                  >
                    <div className="h-44 rounded-xl overflow-hidden">
                      <img
                        src={item.coverImage}
                        alt={item.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-forest">{item.category}</span>
                      <h4 className="font-editorial text-lg font-bold text-charcoal dark:text-cream mt-0.5">
                        {item.name}
                      </h4>
                      <p className="text-xs text-softgrey line-clamp-2 mt-1">{item.tagline}</p>
                    </div>
                    <span className="text-xs font-semibold text-forest flex items-center gap-1 pt-2">
                      Explore landscape <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bankura: Local Crafts & Culture */}
            <div className="rounded-3xl p-8 lg:p-12 bg-forest text-white space-y-6 relative overflow-hidden">
              <div className="max-w-2xl space-y-4 relative z-10">
                <span className="text-xs uppercase font-bold tracking-widest text-beige">
                  4,000 Years of Metallurgy & Terracotta
                </span>
                <h3 className="font-editorial text-2xl sm:text-4xl font-bold leading-tight">
                  The Living Artistry of Bankura Horse & Bikna Dokra
                </h3>
                <p className="text-sm sm:text-base text-cream/90 leading-relaxed font-light">
                  Witness master potters in Panchmura shape the iconic long-eared Bankura Terracotta Horse, the global
                  symbol of Indian handicraft. In Bikna, marvel at the ancient lost-wax bell metal casting technique
                  surviving unchanged since the Indus Valley Civilization.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Button asChild className="bg-terracotta hover:bg-terracotta/90 text-white font-semibold rounded-xl">
                    <Link to="/destinations/panchmura-village">Explore Panchmura Village</Link>
                  </Button>
                  <Button asChild variant="outline" className="text-white border-white/40 hover:bg-white/10 rounded-xl">
                    <Link to="/destinations/bikna-village">Discover Bikna Dokra</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 5. SUGGESTED ITINERARIES */}
        <section className="space-y-6">
          <div className="border-b border-border pb-3">
            <span className={`text-xs font-bold uppercase tracking-wider ${isPurulia ? 'text-laterite' : 'text-terracotta'}`}>
              Pacing Your Journey
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream mt-1">
              Suggested {districtTitle} Itineraries
            </h2>
            <p className="text-xs sm:text-sm text-softgrey mt-1">
              Thoughtfully curated route sequences designed to avoid rushed driving and maximize connection with local life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {isPurulia ? (
              <>
                <div className="editorial-card rounded-3xl p-6 lg:p-8 space-y-4 border border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-laterite/10 text-laterite">
                      Weekend Escapade (2 Days)
                    </span>
                    <span className="text-xs font-mono text-softgrey">Ideal for Quick Rejuvenation</span>
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-charcoal dark:text-cream">
                    Baranti Sunset & Joychandi Pahar Trail
                  </h3>
                  <p className="text-xs sm:text-sm text-softgrey leading-relaxed">
                    Arrive via Asansol or Muradi. Spend Day 1 walking the earthen embankments of Baranti reservoir,
                    watching the crimson sunset over the hills. On Day 2, climb the 500 steps of Joychandi Pahar
                    monolith before catching an evening train.
                  </p>
                  <div className="pt-2 flex items-center justify-between border-t border-border">
                    <span className="text-xs text-softgrey">Best for: Couples & Photographers</span>
                    <a href="/#packages" className="text-xs font-semibold text-laterite hover:underline">
                      Explore Package Details →
                    </a>
                  </div>
                </div>

                <div className="editorial-card rounded-3xl p-6 lg:p-8 space-y-4 border border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-forest/10 text-forest">
                      Signature Exploration (3 Days)
                    </span>
                    <span className="text-xs font-mono text-softgrey">Comprehensive Circuit</span>
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-charcoal dark:text-cream">
                    Ayodhya Hills, Secret Cascades & Chhau Artisans
                  </h3>
                  <p className="text-xs sm:text-sm text-softgrey leading-relaxed">
                    Ascend the Ayodhya plateau. Hike down the boulder steps to Bamni Falls and Turga Dam, photograph
                    Blue Marble Lake, visit Charida Chhau mask makers in their studios, and spend a serene morning by
                    Khairabera reservoir.
                  </p>
                  <div className="pt-2 flex items-center justify-between border-t border-border">
                    <span className="text-xs text-softgrey">Best for: Families & Nature Trekkers</span>
                    <a href="/#packages" className="text-xs font-semibold text-laterite hover:underline">
                      Explore Package Details →
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="editorial-card rounded-3xl p-6 lg:p-8 space-y-4 border border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-terracotta/10 text-terracotta">
                      Heritage Weekend (2 Days)
                    </span>
                    <span className="text-xs font-mono text-softgrey">Classical Art & Handlooms</span>
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-charcoal dark:text-cream">
                    Bishnupur Terracotta & Baluchari Heritage Trail
                  </h3>
                  <p className="text-xs sm:text-sm text-softgrey leading-relaxed">
                    Arrive via Rupashi Bangla Express. Explore Rasmancha, Jor Bangla, and Shyam Rai temples with a
                    licensed heritage guide. On Day 2, visit silk weaver cooperatives, Panchmura terracotta potters,
                    and Bikna Dokra studios.
                  </p>
                  <div className="pt-2 flex items-center justify-between border-t border-border">
                    <span className="text-xs text-softgrey">Best for: Architecture Lovers & Collectors</span>
                    <a href="/#packages" className="text-xs font-semibold text-terracotta hover:underline">
                      Explore Package Details →
                    </a>
                  </div>
                </div>

                <div className="editorial-card rounded-3xl p-6 lg:p-8 space-y-4 border border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-forest/10 text-forest">
                      Waters & Canopies (3 Days)
                    </span>
                    <span className="text-xs font-mono text-softgrey">Scenic Landscapes</span>
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-charcoal dark:text-cream">
                    Mukutmanipur Dam, Jhilimili Hills & Sutan Deer Watch
                  </h3>
                  <p className="text-xs sm:text-sm text-softgrey leading-relaxed">
                    Ferry across the Kangsabati reservoir to Bonpukuria Deer Park island. Drive through the winding
                    canopies of Jhilimili, explore Sutan forest lake, and pause at Joypur Forest’s Sal watchtower
                    on your return to Bankura.
                  </p>
                  <div className="pt-2 flex items-center justify-between border-t border-border">
                    <span className="text-xs text-softgrey">Best for: Nature Seekers & Wildlife Admirers</span>
                    <a href="/#packages" className="text-xs font-semibold text-terracotta hover:underline">
                      Explore Package Details →
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        {/* 6. CURATED PACKAGES */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-4">
            <div>
              <span className={`text-xs font-bold uppercase tracking-wider ${isPurulia ? 'text-laterite' : 'text-terracotta'}`}>
                Hassle-Free Exploration
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream mt-1">
                Featured Packages in {districtTitle}
              </h2>
            </div>
            <a href="/#packages" className="text-xs font-semibold text-laterite hover:underline flex items-center gap-1">
              <span>Explore packages</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {districtCircuits.map((c) => (
              <div
                key={c.id}
                className="editorial-card relative rounded-3xl overflow-hidden border border-border bg-card shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent Top Strip */}
                <div
                  className={`h-1.5 w-full ${
                    isPurulia
                      ? 'bg-gradient-to-r from-laterite via-amber-600 to-laterite'
                      : 'bg-gradient-to-r from-terracotta via-amber-600 to-terracotta'
                  }`}
                />

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  {/* Top Meta: Badges & Pricing */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span
                          className={`text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 ${
                            isPurulia
                              ? 'bg-laterite/10 text-laterite border border-laterite/25'
                              : 'bg-terracotta/10 text-terracotta border border-terracotta/25'
                          }`}
                        >
                          <Clock className="h-3 w-3" />
                          <span>{c.duration}</span>
                        </span>
                        {c.difficulty && (
                          <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-muted text-softgrey border border-border/60 flex items-center gap-1">
                            <Footprints className="h-3 w-3 text-sal-600" />
                            <span>{c.difficulty}</span>
                          </span>
                        )}
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-softgrey block">
                          Package From
                        </span>
                        <span
                          className={`text-xl font-bold font-mono ${
                            isPurulia ? 'text-laterite' : 'text-terracotta'
                          }`}
                        >
                          {formatPrice(c.price)}
                        </span>
                        <span className="text-[10px] text-softgrey block">/ traveler</span>
                      </div>
                    </div>

                    {/* Theme & Title */}
                    <div className="space-y-1.5">
                      {c.theme && (
                        <div
                          className={`text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                            isPurulia ? 'text-laterite' : 'text-terracotta'
                          }`}
                        >
                          <Compass className="h-3.5 w-3.5 shrink-0" />
                          <span>{c.theme}</span>
                        </div>
                      )}
                      <h3 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream leading-tight">
                        {c.title}
                      </h3>
                    </div>

                    {/* Start & Drop Point */}
                    <div className="flex items-center gap-2 text-xs text-softgrey bg-muted/40 dark:bg-charcoal/50 px-3.5 py-2.5 rounded-2xl border border-border/60">
                      <Car
                        className={`h-4 w-4 shrink-0 ${
                          isPurulia ? 'text-laterite' : 'text-terracotta'
                        }`}
                      />
                      <span>
                        <strong className="text-charcoal dark:text-cream">Origin / Return:</strong>{' '}
                        {c.startPoint}
                      </span>
                    </div>

                    {/* Full Package Summary Narrative */}
                    <p className="text-xs sm:text-sm text-softgrey leading-relaxed">
                      {c.summary}
                    </p>

                    {/* ROADMAP & DAILY TRAIL */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between border-b border-border/80 pb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-cream flex items-center gap-1.5">
                          <Compass
                            className={`h-3.5 w-3.5 ${
                              isPurulia ? 'text-laterite' : 'text-terracotta'
                            }`}
                          />
                          <span>Circuit Roadmap</span>
                        </span>
                        <span
                          className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                            isPurulia
                              ? 'bg-laterite/10 text-laterite'
                              : 'bg-terracotta/10 text-terracotta'
                          }`}
                        >
                          {c.itinerary?.length || c.durationDays} Milestones
                        </span>
                      </div>

                      <div className="space-y-3 relative pl-6 before:absolute before:left-[10px] before:top-2 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-laterite before:via-laterite/40 before:to-transparent">
                        {c.itinerary?.map((d) => (
                          <div key={d.day} className="relative group/day">
                            {/* Milestone Pin */}
                            <div
                              className={`absolute -left-[24px] top-0.5 h-[20px] w-[20px] rounded-full bg-card border-2 flex items-center justify-center text-[10px] font-black shadow-xs ${
                                isPurulia
                                  ? 'border-laterite text-laterite'
                                  : 'border-terracotta text-terracotta'
                              }`}
                            >
                              {d.day}
                            </div>

                            <div className="bg-muted/30 dark:bg-charcoal/40 p-3.5 rounded-2xl border border-border/60 hover:border-laterite/40 transition-colors space-y-2">
                              <div className="flex flex-wrap items-center justify-between gap-1">
                                <h4 className="text-xs font-bold text-charcoal dark:text-cream">
                                  Day {d.day}: {d.title}
                                </h4>
                                {d.stay && (
                                  <span className="text-[10px] text-softgrey bg-card px-2 py-0.5 rounded-md border border-border/50">
                                    🛏️ {d.stay}
                                  </span>
                                )}
                              </div>

                              {/* Daily Roadmap Activities */}
                              <ul className="space-y-1 text-[11px] text-softgrey leading-snug">
                                {d.activities?.map((act, actIdx) => (
                                  <li key={actIdx} className="flex items-start gap-1.5">
                                    <span
                                      className={`font-bold shrink-0 mt-0.5 ${
                                        isPurulia ? 'text-laterite' : 'text-terracotta'
                                      }`}
                                    >
                                      ›
                                    </span>
                                    <span>{act}</span>
                                  </li>
                                ))}
                              </ul>

                              {d.meals && (
                                <div className="text-[10px] font-medium text-sal-600 dark:text-sal-400 pt-1 border-t border-border/40 flex items-center gap-1">
                                  <span>🍽️ {d.meals}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Circuit Key Waypoints / Highlights */}
                    {c.highlights && c.highlights.length > 0 && (
                      <div className="space-y-1.5 pt-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-softgrey block">
                          Key Sightseeing Waypoints:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {c.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-muted/60 text-charcoal dark:text-cream flex items-center gap-1 border border-border/50"
                            >
                              <CheckCircle className="h-3 w-3 text-sal-600 shrink-0" />
                              <span>{h}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Inclusions */}
                    {c.inclusions && c.inclusions.length > 0 && (
                      <div className="p-3.5 rounded-2xl bg-muted/30 border border-border/60 space-y-1.5 text-xs">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal dark:text-cream flex items-center gap-1">
                          <ShieldCheck className="h-3.5 w-3.5 text-sal-600" />
                          <span>Package Inclusions:</span>
                        </span>
                        <ul className="grid grid-cols-1 gap-1 text-[11px] text-softgrey">
                          {c.inclusions.map((inc, i) => (
                            <li key={i} className="flex items-start gap-1.5 leading-snug">
                              <span className="text-sal-600 font-bold">✓</span>
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom: Action Buttons */}
                  <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
                    <a
                      href="/#packages"
                      className={`text-xs font-bold hover:underline flex items-center gap-1 ${
                        isPurulia ? 'text-laterite' : 'text-terracotta'
                      }`}
                    >
                      <span>Explore Package</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <Button
                      onClick={openBookingModal}
                      className={`${
                        isPurulia
                          ? 'bg-laterite hover:bg-laterite/90'
                          : 'bg-terracotta hover:bg-terracotta/90'
                      } text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-xs`}
                    >
                      Book Tour
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. VERIFIED STAYS & RETREATS */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-4">
            <div>
              <span className={`text-xs font-bold uppercase tracking-wider ${isPurulia ? 'text-laterite' : 'text-terracotta'}`}>
                Rest Close to Nature
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream mt-1">
                Handpicked Stays in {districtTitle}
              </h2>
            </div>
            <Link to="/stays" className="text-xs font-semibold text-laterite hover:underline flex items-center gap-1">
              <span>View all verified stays</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {districtStays.map((s) => (
              <div
                key={s.id}
                className="editorial-card rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="editorial-img-wrap h-52 w-full relative">
                  <img src={s.coverImage} alt={s.name} className="h-full w-full object-cover" />
                  <div className="absolute top-3 left-3 bg-charcoal/80 text-cream text-[10px] font-semibold px-2.5 py-0.5 rounded-md">
                    {s.type}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-softgrey">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-laterite" /> {s.location}
                      </span>
                      <span className="font-bold text-charcoal dark:text-cream flex items-center gap-1">
                        <Star className="h-3 w-3 text-amber-500 fill-amber-500" /> {s.rating}
                      </span>
                    </div>
                    <h3 className="font-editorial text-lg font-bold text-charcoal dark:text-cream">
                      {s.name}
                    </h3>
                    <p className="text-xs text-softgrey line-clamp-2 leading-relaxed">
                      {s.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-softgrey uppercase tracking-wider">Per Night</span>
                      <div className="text-sm font-bold text-laterite font-mono">
                        {formatPrice(s.pricePerNight)}
                      </div>
                    </div>
                    <Button asChild size="sm" variant="outline" className="rounded-xl text-xs">
                      <Link to={`/stays/${s.id}`}>Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. TRAVEL TIPS & LOGISTICS */}
        <section className="space-y-6">
          <div className="border-b border-border pb-3">
            <span className={`text-xs font-bold uppercase tracking-wider ${isPurulia ? 'text-laterite' : 'text-terracotta'}`}>
              Field Insights
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream mt-1">
              Essential Travel Tips for {districtTitle}
            </h2>
            <p className="text-xs sm:text-sm text-softgrey mt-1">
              Practical logistics, rail connections, and cultural etiquette curated by local hosts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelTips.map((tip, idx) => (
              <div
                key={idx}
                className="editorial-card rounded-3xl p-6 space-y-3 bg-beige/20 dark:bg-forest-deep/50 border border-border"
              >
                <div className="h-9 w-9 rounded-xl bg-laterite/10 text-laterite flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h4 className="font-editorial text-base font-bold text-charcoal dark:text-cream">
                  {tip.title}
                </h4>
                <p className="text-xs text-softgrey leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. DISTRICT FAQS */}
        <section className="space-y-6">
          <div className="border-b border-border pb-3">
            <span className={`text-xs font-bold uppercase tracking-wider ${isPurulia ? 'text-laterite' : 'text-terracotta'}`}>
              Clear Answers
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream mt-1">
              Frequently Asked Questions: {districtTitle}
            </h2>
          </div>

          <div className="space-y-3 max-w-4xl">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="editorial-card rounded-2xl border border-border overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-beige/10 transition-colors"
                >
                  <span className="font-editorial text-base sm:text-lg font-bold text-charcoal dark:text-cream">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-softgrey shrink-0 transition-transform duration-300 ${
                      activeFaq === i ? 'rotate-180 text-laterite' : ''
                    }`}
                  />
                </button>
                {activeFaq === i && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-softgrey leading-relaxed border-t border-border/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 10. TRIP PLANNING CTA */}
        <section className={`rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center space-y-6 ${
          isPurulia ? 'bg-laterite' : 'bg-forest'
        } relative overflow-hidden`}>
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs uppercase font-bold tracking-widest text-beige">
              Start Your Journey
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Discover {districtTitle}?
            </h2>
            <p className="text-sm sm:text-base text-cream/90 font-light leading-relaxed">
              Whether you wish to wander through ancient terracotta courtyards, hike boulder trails to secret waterfalls,
              or learn mask painting from village artisans, let our regional specialists craft your perfect route.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-white/95 text-charcoal font-bold rounded-2xl shadow-lg px-8"
              >
                <Link to="/plan-your-trip">Plan Your {districtTitle} Trip</Link>
              </Button>
              <Button
                onClick={openBookingModal}
                size="lg"
                variant="outline"
                className="text-white border-white/50 hover:bg-white/10 rounded-2xl px-6"
              >
                Request Custom Itinerary
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
