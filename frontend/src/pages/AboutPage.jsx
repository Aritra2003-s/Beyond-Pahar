import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Compass,
  Trees,
  ShieldCheck,
  Sparkles,
  Heart,
  Landmark,
  Mountain,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Droplets,
  Feather,
  Eye,
  CalendarCheck
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About BeyondPahar — Rooted in the Red Earth of Purulia & Bankura</title>
        <meta
          name="description"
          content="Discover BeyondPahar's travel philosophy, regional focus, travel principles, and responsible tourism ethos across the historic landscapes of Purulia and Bankura."
        />
      </Helmet>

      <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#0D1814] text-charcoal dark:text-cream transition-colors duration-300">
        
        {/* ========================================================
            1. HERO SECTION
            ======================================================== */}
        <section className="relative py-20 sm:py-28 overflow-hidden border-b border-stone-200/80 dark:border-white/10">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-laterite/10 dark:bg-laterite/15 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-forest/10 dark:bg-forest/20 blur-3xl" />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-laterite/10 dark:bg-laterite/20 border border-laterite/20 text-laterite dark:text-terracotta text-xs font-mono uppercase tracking-widest font-semibold">
              <Compass className="h-3.5 w-3.5" />
              <span>Editorial Brand Story</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-charcoal dark:text-cream leading-[1.08]">
              Rooted in the Red Earth of{' '}
              <span className="italic font-serif text-laterite dark:text-terracotta">
                Rarh Bengal.
              </span>
            </h1>

            <p className="font-sans text-base sm:text-xl text-softgrey dark:text-cream/80 max-w-3xl mx-auto font-light leading-relaxed">
              BeyondPahar is dedicated to unhurried, respectful journeys across the granite ridgelines of Purulia and the terracotta heritage of Bankura. We believe travel should be an act of quiet observation, cultural dignity, and living connection.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-softgrey dark:text-cream/60">
              <span className="flex items-center gap-1.5">
                <Mountain className="h-4 w-4 text-laterite" /> 610m Ayodhya Ridgeline
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Landmark className="h-4 w-4 text-amber-600" /> 17th-Century Malla Terracotta
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Trees className="h-4 w-4 text-forest dark:text-emerald-400" /> Protected Sal Sanctuaries
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. BRAND PHILOSOPHY
            ======================================================== */}
        <section className="py-20 sm:py-28 border-b border-stone-200/80 dark:border-white/10 bg-white/60 dark:bg-white/[0.01]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-16">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-laterite dark:text-terracotta font-semibold">
                Brand Philosophy
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-charcoal dark:text-cream">
                The Rhythm of Quiet Travel
              </h2>
              <p className="text-sm sm:text-base text-softgrey dark:text-cream/70 font-light leading-relaxed">
                Modern tourism too often turns ancient landscapes into consumable backdrops. Our philosophy is the inverse: we design journeys that listen before they speak.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-3xl p-8 bg-white dark:bg-[#14231D] border border-stone-200/90 dark:border-white/10 shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-laterite/10 dark:bg-laterite/20 text-laterite dark:text-terracotta flex items-center justify-center">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-editorial text-xl font-bold text-charcoal dark:text-cream">
                  Unhurried Observation
                </h3>
                <p className="text-xs sm:text-sm text-softgrey dark:text-cream/70 leading-relaxed font-light">
                  We trade crowded itineraries for depth. Spending an hour watching an artisan apply tamarind-glue papier-mâché in Charida teaches more than rushing past ten viewpoints in an afternoon.
                </p>
              </div>

              <div className="rounded-3xl p-8 bg-white dark:bg-[#14231D] border border-stone-200/90 dark:border-white/10 shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-forest/10 dark:bg-emerald-500/20 text-forest dark:text-emerald-400 flex items-center justify-center">
                  <Trees className="h-6 w-6" />
                </div>
                <h3 className="font-editorial text-xl font-bold text-charcoal dark:text-cream">
                  Ecosystem Attunement
                </h3>
                <p className="text-xs sm:text-sm text-softgrey dark:text-cream/70 leading-relaxed font-light">
                  The red laterite terrain follows distinct botanical rhythms — the scarlet flowering of the Palash in spring, the mist over Kangsabati reservoir in winter, and the roaring waterfalls of Bamni post-monsoon.
                </p>
              </div>

              <div className="rounded-3xl p-8 bg-white dark:bg-[#14231D] border border-stone-200/90 dark:border-white/10 shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Feather className="h-6 w-6" />
                </div>
                <h3 className="font-editorial text-xl font-bold text-charcoal dark:text-cream">
                  Living Traditions
                </h3>
                <p className="text-xs sm:text-sm text-softgrey dark:text-cream/70 leading-relaxed font-light">
                  Purulia Chhau and Bishnupur Baluchari weaving are not museum artifacts. They are active, hereditary livelihoods that travelers must engage with as guests and patrons, never as passive spectators.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. REGIONAL FOCUS: PURULIA & BANKURA
            ======================================================== */}
        <section className="py-20 sm:py-28 border-b border-stone-200/80 dark:border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-laterite dark:text-terracotta font-semibold">
                Geographic Grounding
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-charcoal dark:text-cream">
                The Dual Soul of Rarh Bengal
              </h2>
              <p className="text-sm sm:text-base text-softgrey dark:text-cream/70 font-light">
                Two neighboring districts united by ancient laterite bedrock, yet offering vastly distinct landscapes and cultural genealogies.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Purulia Card */}
              <div className="rounded-3xl p-8 sm:p-10 bg-white dark:bg-[#14231D] border border-stone-200/90 dark:border-white/10 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-laterite/10 text-laterite dark:text-terracotta font-semibold">
                    Western Frontier
                  </span>
                  <MapPin className="h-5 w-5 text-laterite" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream">
                    Purulia: The Granite Highlands
                  </h3>
                  <p className="text-xs sm:text-sm text-softgrey dark:text-cream/70 font-light leading-relaxed">
                    A prehistoric plateau marked by residual granite hills, dramatic seasonal cascades, and indigenous Santhali villages.
                  </p>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-charcoal/90 dark:text-cream/90">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-laterite shrink-0 mt-0.5" />
                    <span><strong>Ayodhya Ridgeline (610m):</strong> Ancient forested hills woven into the fabric of the Ramayana epics.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-laterite shrink-0 mt-0.5" />
                    <span><strong>Charida Mask Makers:</strong> Over 250 families sculpting UNESCO-recognized Purulia Chhau masks by hand.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-laterite shrink-0 mt-0.5" />
                    <span><strong>Water Reservoirs:</strong> Blue Marble Lake, Khairabera Dam, and Turga perennial falls.</span>
                  </li>
                </ul>

                <Button asChild variant="outline" className="w-full rounded-xl text-xs font-semibold">
                  <Link to="/purulia">Explore Purulia Circuits</Link>
                </Button>
              </div>

              {/* Bankura Card */}
              <div className="rounded-3xl p-8 sm:p-10 bg-white dark:bg-[#14231D] border border-stone-200/90 dark:border-white/10 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-forest/10 text-forest dark:text-emerald-400 font-semibold">
                    Cultural Heartland
                  </span>
                  <Landmark className="h-5 w-5 text-forest dark:text-emerald-400" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream">
                    Bankura: Terracotta & Forest Shrines
                  </h3>
                  <p className="text-xs sm:text-sm text-softgrey dark:text-cream/70 font-light leading-relaxed">
                    The 17th-century Vaishnavite capital of the Malla kings, vast earthen dams, and centuries-old craft guilds.
                  </p>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-charcoal/90 dark:text-cream/90">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-forest dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Bishnupur Terracotta:</strong> Monumental temples baked from river clay, including Rasmancha and Shyam Rai.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-forest dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>GI-Tagged Crafts:</strong> Baluchari & Swarnachari silk weaves, Panchmura terracotta horses, and Dokra lost-wax brass.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-forest dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Mukutmanipur:</strong> India’s second largest earthen dam at the tranquil confluence of Kangsabati and Kumari.</span>
                  </li>
                </ul>

                <Button asChild variant="outline" className="w-full rounded-xl text-xs font-semibold">
                  <Link to="/bankura">Explore Bankura Circuits</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            4. TRAVEL PRINCIPLES
            ======================================================== */}
        <section className="py-20 sm:py-28 border-b border-stone-200/80 dark:border-white/10 bg-white/60 dark:bg-white/[0.01]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-laterite dark:text-terracotta font-semibold">
                Guiding Standards
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-charcoal dark:text-cream">
                Our Travel Principles
              </h2>
              <p className="text-sm sm:text-base text-softgrey dark:text-cream/70 font-light">
                Every itinerary we build operates under four foundational rules designed to protect both the visitor and the host land.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  num: '01',
                  title: 'Direct Artisan Remuneration',
                  desc: 'We never take kickbacks or referral fees from craft clusters. When you purchase a Chhau mask in Charida or silk in Bishnupur, 100% of your money goes straight to the maker.',
                },
                {
                  num: '02',
                  title: 'Native Verified Guidance',
                  desc: 'Our guides are not hired outsiders reciting tourist trivia. They are local community residents, folk performers, and indigenous historians with deep roots in their soil.',
                },
                {
                  num: '03',
                  title: 'Small Groups & Safe Trails',
                  desc: 'We operate small-format journeys that tread lightly on rural roads. Stays and vehicle providers are vetted for safety, hygiene, and reliable regional hospitality.',
                },
                {
                  num: '04',
                  title: 'No Staged Authenticity',
                  desc: 'We do not arrange synthetic folk spectacles in luxury banquet halls. You encounter Chhau rehearsals in village courtyards and Dokra smelters where they truly live.',
                },
              ].map((p) => (
                <div
                  key={p.num}
                  className="rounded-3xl p-8 bg-white dark:bg-[#14231D] border border-stone-200/90 dark:border-white/10 shadow-xs space-y-3"
                >
                  <span className="text-xs font-mono font-bold text-laterite dark:text-terracotta">
                    Principle {p.num}
                  </span>
                  <h3 className="font-editorial text-xl font-bold text-charcoal dark:text-cream">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-softgrey dark:text-cream/70 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            5. RESPONSIBLE TOURISM ETHOS
            ======================================================== */}
        <section className="py-20 sm:py-28 border-b border-stone-200/80 dark:border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-forest dark:text-emerald-400 font-semibold">
                Environmental & Community Custodianship
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-charcoal dark:text-cream">
                Responsible Tourism
              </h2>
              <p className="text-sm sm:text-base text-softgrey dark:text-cream/70 font-light">
                Preserving delicate forest corridors and sacred community spaces for generations to come.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-3xl p-7 bg-stone-50/70 dark:bg-white/[0.02] border border-stone-200 dark:border-white/10 space-y-3">
                <ShieldCheck className="h-6 w-6 text-forest dark:text-emerald-400" />
                <h3 className="font-editorial text-lg font-bold text-charcoal dark:text-cream">
                  Sacred Grove Reverence
                </h3>
                <p className="text-xs text-softgrey dark:text-cream/70 leading-relaxed font-light">
                  Indigenous Santhali Jahersthan groves are protected sanctuaries. We guide visitors to respect holy Sal boundaries and always request permission before taking photographs.
                </p>
              </div>

              <div className="rounded-3xl p-7 bg-stone-50/70 dark:bg-white/[0.02] border border-stone-200 dark:border-white/10 space-y-3">
                <Droplets className="h-6 w-6 text-laterite" />
                <h3 className="font-editorial text-lg font-bold text-charcoal dark:text-cream">
                  Plastic-Free Canisters
                </h3>
                <p className="text-xs text-softgrey dark:text-cream/70 leading-relaxed font-light">
                  Single-use plastic bottles damage fragile hill habitats like Joychandi and Bamni Falls. We facilitate filtered water refills and support traditional earthenware cups (Bhar).
                </p>
              </div>

              <div className="rounded-3xl p-7 bg-stone-50/70 dark:bg-white/[0.02] border border-stone-200 dark:border-white/10 space-y-3">
                <Heart className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                <h3 className="font-editorial text-lg font-bold text-charcoal dark:text-cream">
                  Wildlife Corridor Dignity
                </h3>
                <p className="text-xs text-softgrey dark:text-cream/70 leading-relaxed font-light">
                  Joypur Forest and Sutan corridors are seasonal elephant transit paths. We avoid night drives through sensitive corridors and practice low-noise travel ethics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            6. CTA SECTION
            ======================================================== */}
        <section className="py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-8">
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-charcoal dark:text-cream leading-tight">
              Ready to Experience the Rarh Frontier?
            </h2>
            <p className="text-sm sm:text-base text-softgrey dark:text-cream/80 max-w-xl mx-auto font-light leading-relaxed">
              Tell us your preferred rhythm and dates. We will shape a personalized journey with handpicked stays and verified native escorts.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-laterite hover:bg-laterite/90 text-white rounded-2xl px-8 py-5 text-sm sm:text-base font-semibold shadow-md">
                <Link to="/plan-your-trip" className="flex items-center justify-center gap-2">
                  <CalendarCheck className="h-5 w-5" />
                  <span>Plan Your Trip</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-2xl px-8 py-5 text-sm sm:text-base font-medium">
                <Link to="/destinations">Browse All Destinations</Link>
              </Button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default AboutPage;
