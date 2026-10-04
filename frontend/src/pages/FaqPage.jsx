import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  ChevronDown,
  Search,
  Compass,
  Calendar,
  Package,
  Home,
  CreditCard,
  RefreshCw,
  Globe,
  ArrowRight,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categories = [
    { id: 'all', label: 'All Questions', icon: Globe },
    { id: 'planning', label: 'Planning a trip', icon: Calendar },
    { id: 'packages', label: 'Packages', icon: Package },
    { id: 'stays', label: 'Stays', icon: Home },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'cancellations', label: 'Changes & cancellations', icon: RefreshCw },
    { id: 'general', label: 'General travel questions', icon: Compass },
  ];

  const faqs = [
    // 1. Planning a trip
    {
      id: 'plan-1',
      category: 'planning',
      categoryLabel: 'Planning a trip',
      q: 'When is the best season to witness the Palash blooms in Purulia?',
      a: 'The Palash (Flame of the Forest) bursts into fiery vermilion-red bloom between mid-February and late March. Baranti Lake, the foothills of Ayodhya Pahar near Baghmundi, and Joychandi Pahar offer the most dramatic concentrations where scarlet petals carpet the trails.'
    },
    {
      id: 'plan-2',
      category: 'planning',
      categoryLabel: 'Planning a trip',
      q: 'How do we reach Purulia and Bishnupur from Kolkata / Howrah?',
      a: 'The most popular morning train is the Rupashi Bangla Express (Train 12883) departing Howrah at 06:25 AM, reaching Bishnupur at 09:50 AM and Purulia Junction at 11:55 AM. For overnight rail travel, the Howrah-Chakradharpur Express (18011) departs at 11:55 PM. By road, NH16 and NH18 connect Kolkata to Purulia in roughly 5.5 to 6 hours.'
    },
    {
      id: 'plan-3',
      category: 'planning',
      categoryLabel: 'Planning a trip',
      q: 'How many days are recommended for exploring both Purulia and Bankura?',
      a: 'A 4-Day / 3-Night or 5-Day circuit is ideal to experience both districts without rushing. This allows 2 full days in the Ayodhya Highlands (waterfalls, Charida mask village, marble lake) and 2 full days in Bankura (Bishnupur terracotta temples, Baluchari silk weavers, Mukutmanipur dam).'
    },

    // 2. Packages
    {
      id: 'pkg-1',
      category: 'packages',
      categoryLabel: 'Packages',
      q: 'What is included in custom BeyondPahar travel packages?',
      a: 'All packages include vetted accommodation (eco-resorts or heritage homestays), private air-conditioned vehicle with dedicated local drivers familiar with hill ghats, certified native guides, entry fees, and pre-arranged artisan studio visits in Charida and Bishnupur.'
    },
    {
      id: 'pkg-2',
      category: 'packages',
      categoryLabel: 'Packages',
      q: 'Can we modify or personalize the destinations in a package?',
      a: 'Yes, absolutely. Every itinerary on BeyondPahar is fully customizable. You can adjust the trip duration, add active hikes (like Joychandi or Susunia rock climbing), prioritize photography hours, or incorporate private Chhau dance rehearsals.'
    },
    {
      id: 'pkg-3',
      category: 'packages',
      categoryLabel: 'Packages',
      q: 'Are meals included in the package cost?',
      a: 'Daily breakfast is included across all partnered properties. Traditional regional lunches and dinners (such as authentic Posto Bora thalis, country chicken jhol, and fresh reservoir fish) can be pre-packaged or chosen à la carte based on your dietary preferences.'
    },

    // 3. Stays
    {
      id: 'stay-1',
      category: 'stays',
      categoryLabel: 'Stays',
      q: 'What types of accommodations are available in Purulia and Bankura?',
      a: 'We partner with four distinct stay tiers: lakeside tented eco-resorts (e.g. Khairabera and Baranti), heritage zamindari homestays, comfortable Sal forest lodges (e.g. Joypur Forest), and clean, hospitable village guest houses in artisan hubs.'
    },
    {
      id: 'stay-2',
      category: 'stays',
      categoryLabel: 'Stays',
      q: 'Do rural retreats provide modern amenities like hot water and power backup?',
      a: 'Yes. All verified accommodations in our directory provide 24/7 running water, geysers for winter mornings, comfortable bedding, and dedicated generator power backup for rural electrical reliability.'
    },
    {
      id: 'stay-3',
      category: 'stays',
      categoryLabel: 'Stays',
      q: 'Are stays accessible for elderly family members or travelers with reduced mobility?',
      a: 'Most partner properties offer ground-floor rooms with step-free entrance ramps. When booking, please inform our team so we assign lakefront or garden rooms that avoid long flights of stairs.'
    },

    // 4. Payments
    {
      id: 'pay-1',
      category: 'payments',
      categoryLabel: 'Payments',
      q: 'What is the booking deposit schedule?',
      a: 'To confirm resort room reservations and dedicate private vehicle transportation, a 30% advance deposit is required upon itinerary approval. The remaining 70% balance is payable 7 days prior to journey departure.'
    },
    {
      id: 'pay-2',
      category: 'payments',
      categoryLabel: 'Payments',
      q: 'What payment modes are accepted?',
      a: 'We support all major payment options: UPI (Google Pay, PhonePe, Paytm), Net Banking via major Indian banks, and Credit/Debit Cards (Visa, Mastercard, RuPay). [Note: In the demo deployment, payments operate in simulated sandbox test mode].'
    },
    {
      id: 'pay-3',
      category: 'payments',
      categoryLabel: 'Payments',
      q: 'Are there any hidden charges or surprise vehicle taxes on the road?',
      a: 'No. All quotations provide transparent, itemized breakdowns. Driver food and lodging allowances, state road permits, tolls, and parking taxes are fully accounted for in advance.'
    },

    // 5. Changes and cancellations
    {
      id: 'canc-1',
      category: 'cancellations',
      categoryLabel: 'Changes & cancellations',
      q: 'What is the cancellation policy for bookings?',
      a: 'Cancellations requested 15 days or more before travel receive a 90% refund (less minimal processing charges). Cancellations made between 7 and 14 days receive a 50% refund. Cancellations under 7 days are non-refundable due to pre-committed homestay room blockages.'
    },
    {
      id: 'canc-2',
      category: 'cancellations',
      categoryLabel: 'Changes & cancellations',
      q: 'Can we reschedule our journey dates due to unforeseen emergencies?',
      a: 'Yes. Date rescheduling is permitted free of charge if communicated at least 7 days before departure, subject to room availability at the chosen retreats for your revised dates.'
    },
    {
      id: 'canc-3',
      category: 'cancellations',
      categoryLabel: 'Changes & cancellations',
      q: 'How long do refund disbursements take?',
      a: 'Approved refund amounts are credited back directly to the original bank account or UPI source within 5 to 7 business days.'
    },

    // 6. General travel questions
    {
      id: 'gen-1',
      category: 'general',
      categoryLabel: 'General travel questions',
      q: 'Is traveling in Purulia and Bankura safe for solo female travelers and families?',
      a: 'Yes, very safe. The local communities in both districts are gentle, peaceful, and hospitable. Our drivers and village escorts are background-verified and adhere to strict professional travel conduct codes.'
    },
    {
      id: 'gen-2',
      category: 'general',
      categoryLabel: 'General travel questions',
      q: 'Can we buy Chhau masks, Dokra craft, and Baluchari silk directly from makers?',
      a: 'Yes! BeyondPahar takes you directly to the artisan workshops in Charida, Bikna, and Bishnupur. You observe the crafting process and purchase authentic GI-tagged masterpieces directly from the master artisans without urban middleman markups.'
    },
    {
      id: 'gen-3',
      category: 'general',
      categoryLabel: 'General travel questions',
      q: 'What footwear and clothing are recommended for Ayodhya Hills?',
      a: 'Comfortable trail sneakers or trekking shoes with good rubber traction are essential for visiting Bamni Falls (which involves descending uneven stone steps) and exploring Marble Lake boulders. Pack lightweight cotton clothing with a light sweater for winter evenings.'
    },
    {
      id: 'gen-4',
      category: 'general',
      categoryLabel: 'General travel questions',
      q: 'How is mobile network coverage and digital payment acceptance in rural pockets?',
      a: 'Jio and Airtel have strong 4G/5G signals across towns and major hilltops like Ayodhya and Bishnupur. However, inside deep forest trails and interior valleys, connectivity can be intermittent. Carrying some cash for small village purchases is advised.'
    },
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions — BeyondPahar | Purulia & Bankura Travel</title>
        <meta
          name="description"
          content="Find comprehensive answers on planning trips, packages, stays, payment policies, cancellations, and general travel advice for Purulia and Bankura."
        />
      </Helmet>

      <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#0D1814] text-charcoal dark:text-cream py-16 sm:py-24 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-laterite/10 dark:bg-laterite/20 border border-laterite/20 text-laterite dark:text-terracotta text-xs font-mono uppercase tracking-widest font-semibold">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Traveler Guidance Directory</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal dark:text-cream leading-tight">
              Frequently Asked Questions
            </h1>

            <p className="font-sans text-sm sm:text-base text-softgrey dark:text-cream/70 font-light leading-relaxed">
              Clear, practical advice to help you prepare for your expedition across the hills, waterfalls, and terracotta monuments of Bengal.
            </p>
          </div>

          {/* Search Filter Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 dark:text-stone-500" />
            <input
              type="text"
              placeholder="Search by keyword (e.g. Palash, trains, refund, Chhau, stays)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-stone-200/90 dark:border-white/10 bg-white dark:bg-[#14231D] text-sm text-charcoal dark:text-cream placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-laterite/30 focus:border-laterite shadow-xs transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-laterite text-white font-semibold shadow-xs'
                      : 'bg-white dark:bg-[#14231D] text-stone-600 dark:text-stone-300 border border-stone-200/80 dark:border-white/10 hover:border-laterite/40'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Accordion List */}
          <div className="space-y-3.5">
            {filteredFaqs.length === 0 ? (
              <div className="py-12 text-center space-y-2 bg-white dark:bg-[#14231D] rounded-3xl border border-stone-200 dark:border-white/10 p-8">
                <HelpCircle className="h-8 w-8 text-stone-300 dark:text-stone-600 mx-auto" />
                <p className="text-sm font-semibold text-charcoal dark:text-cream">
                  No matching questions found for "{searchQuery}"
                </p>
                <p className="text-xs text-softgrey">
                  Try clearing your search query or selecting a different category above.
                </p>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openItems[faq.id] ?? false;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl sm:rounded-3xl border border-stone-200/80 dark:border-white/10 bg-white dark:bg-[#14231D] overflow-hidden transition-shadow shadow-xs hover:shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      id={`faq-question-${faq.id}`}
                      className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                    >
                      <div className="space-y-1 pr-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-laterite dark:text-terracotta font-semibold">
                          {faq.categoryLabel}
                        </span>
                        <h3 className="font-editorial text-base sm:text-lg font-bold text-charcoal dark:text-cream leading-snug">
                          {faq.q}
                        </h3>
                      </div>

                      <div
                        className={`p-1.5 rounded-full bg-stone-100 dark:bg-white/10 text-stone-500 dark:text-stone-300 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 bg-laterite/10 text-laterite' : ''
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-question-${faq.id}`}
                        className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-softgrey dark:text-cream/75 leading-relaxed font-light border-t border-stone-100 dark:border-white/5 pt-4 animate-fadeIn"
                      >
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Need help footer card */}
          <div className="rounded-3xl border border-stone-200 dark:border-white/10 bg-white dark:bg-[#14231D] p-8 text-center space-y-4 shadow-xs">
            <h3 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream">
              Still Have Questions?
            </h3>
            <p className="text-xs sm:text-sm text-softgrey dark:text-cream/70 max-w-md mx-auto font-light leading-relaxed">
              Our regional travel desks in Purulia and Bankura are available to clarify specific route questions, festival timings, or homestay availability.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button asChild size="default" className="bg-laterite hover:bg-laterite/90 text-white rounded-xl text-xs font-semibold px-6 py-2.5">
                <Link to="/contact">Speak with Local Coordinator</Link>
              </Button>
              <Button asChild variant="outline" size="default" className="rounded-xl text-xs font-semibold px-6 py-2.5">
                <Link to="/plan-your-trip">Plan a Custom Itinerary</Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default FaqPage;
