import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Star, MapPin, Heart, Check, ArrowRight, ShieldCheck, Sparkles, SlidersHorizontal } from 'lucide-react';
import { stays } from '@/data/stays';
import { useTravelStore } from '@/store/useTravelStore';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatPrice } from '@/lib/utils';

export function StaysPage() {
  const { openBookingModal, wishlist, toggleWishlist, activeDistrict, setActiveDistrict } = useTravelStore();
  const [stayTypeFilter, setStayTypeFilter] = useState('All');

  const stayTypes = [
    'All',
    'Luxury Eco-Resort',
    'Glamping & Tented Lodges',
    'Heritage Tourist Lodge',
    'Eco Homestay & Cottages',
    'Rural Artisan Homestay',
  ];

  const filtered = stays.filter((stay) => {
    const matchesDistrict = activeDistrict === 'all' || stay.district === activeDistrict;
    const matchesType = stayTypeFilter === 'All' || stay.type.toLowerCase().includes(stayTypeFilter.toLowerCase());
    return matchesDistrict && matchesType;
  });

  return (
    <div className="py-12 lg:py-16">
      <Helmet>
        <title>Authentic Stays & Eco-Lodges — Purulia & Bankura | BeyondPahar</title>
        <meta
          name="description"
          content="Book handpicked stays across Purulia and Bankura: Kushal Palli Resort, Khairabera Lake Tents, Baranti Eco-cottages, and Bishnupur heritage lodges."
        />
      </Helmet>

      <div className="container mx-auto px-4 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="terracotta" className="uppercase font-bold tracking-wider px-3.5 py-1 text-[11px] shadow-2xs">
            Handpicked Accommodations
          </Badge>
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal dark:text-cream leading-tight">
            Authentic Stays & Eco-Lodges
          </h1>
          <p className="text-base sm:text-lg text-charcoal/80 dark:text-cream/80 max-w-2xl mx-auto leading-relaxed font-light">
            Rest in lakeside glamping tents, traditional mud-walled cottages under flowering Palash trees, or heritage guest lodges beside 17th-century terracotta shrines.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white/80 dark:bg-card/90 backdrop-blur-xl p-4 sm:p-5 rounded-3xl border border-border shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-charcoal dark:text-cream uppercase tracking-wider mr-1">
              District:
            </span>
            {['all', 'Purulia', 'Bankura'].map((dist) => (
              <button
                key={dist}
                onClick={() => setActiveDistrict(dist)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeDistrict === dist
                    ? 'bg-laterite text-white shadow-xs'
                    : 'bg-cream/70 dark:bg-charcoal/60 text-charcoal/80 dark:text-cream/80 hover:text-charcoal dark:hover:text-cream hover:bg-beige/60 border border-border/70'
                }`}
              >
                {dist === 'all' ? 'All Districts' : `${dist} District`}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-charcoal dark:text-cream uppercase tracking-wider">
              Stay Type:
            </span>
            <select
              value={stayTypeFilter}
              onChange={(e) => setStayTypeFilter(e.target.value)}
              className="px-3.5 py-2 rounded-xl border border-border bg-cream/50 dark:bg-charcoal/60 text-xs font-semibold text-charcoal dark:text-cream outline-none focus:ring-2 focus:ring-laterite shadow-2xs cursor-pointer"
            >
              {stayTypes.map((type) => (
                <option key={type} value={type} className="bg-white dark:bg-charcoal text-charcoal dark:text-cream">
                  {type === 'All' ? 'All Stay Categories' : type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-softgrey px-1">
          <span className="font-semibold text-charcoal dark:text-cream">
            Showing {filtered.length} Handpicked {filtered.length === 1 ? 'Retreat' : 'Retreats'}
          </span>
          {activeDistrict !== 'all' && (
            <span className="font-medium text-laterite">
              Filtered by {activeDistrict}
            </span>
          )}
        </div>

        {/* Stays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filtered.map((stay) => {
            const isSaved = wishlist.some((w) => w.id === stay.id);

            return (
              <div
                key={stay.id}
                className="group rounded-3xl border border-border/80 bg-white dark:bg-card shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:border-laterite/40"
              >
                {/* Stay Cover Image with High-Contrast Overlay */}
                <div className="relative h-64 w-full overflow-hidden shrink-0">
                  <img
                    src={stay.coverImage}
                    alt={stay.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Dual gradient overlay for guaranteed text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/45 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span
                      className={`text-white text-xs font-bold px-3 py-1 rounded-full shadow-md tracking-wide ${
                        stay.district === 'Purulia' ? 'bg-laterite' : 'bg-terracotta'
                      }`}
                    >
                      {stay.district}
                    </span>
                    <span className="bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md border border-white/20 shadow-sm">
                      {stay.type}
                    </span>
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(stay)}
                    className="absolute top-3 right-3 p-2.5 rounded-full bg-white/95 dark:bg-charcoal/90 backdrop-blur-md hover:scale-110 transition-transform shadow-md text-charcoal dark:text-cream cursor-pointer"
                    title={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
                    aria-label="Toggle Wishlist"
                  >
                    <Heart
                      className={`h-4 w-4 transition-colors ${
                        isSaved ? 'text-laterite fill-laterite' : 'text-charcoal/80 dark:text-cream/80'
                      }`}
                    />
                  </button>

                  {/* Bottom Stats Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-1.5 bg-black/75 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/15 shadow-sm">
                      <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                      <span>{stay.rating}</span>
                      <span className="opacity-80 font-normal">({stay.reviewsCount})</span>
                    </div>

                    <span className="flex items-center gap-1 bg-emerald-950/85 text-emerald-200 border border-emerald-400/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{stay.availableRooms} rooms left</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <Link to={`/stays/${stay.id}`} className="block group-hover:text-laterite transition-colors">
                      <h3 className="font-editorial font-bold text-xl sm:text-2xl text-charcoal dark:text-cream leading-snug">
                        {stay.name}
                      </h3>
                    </Link>

                    <div className="text-xs sm:text-sm font-medium text-softgrey dark:text-cream/70 flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-laterite shrink-0" />
                      <span>{stay.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-charcoal/85 dark:text-cream/85 leading-relaxed font-light">
                      {stay.description}
                    </p>

                    {/* Amenities List */}
                    <div className="pt-1 space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-softgrey block">
                        Features & Highlights:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {stay.amenities.map((amenity, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-medium px-2.5 py-1 rounded-lg bg-beige/40 dark:bg-charcoal/80 text-charcoal dark:text-cream border border-border/80 flex items-center gap-1.5"
                          >
                            <Check className="h-3 w-3 text-sal-600 dark:text-emerald-400 shrink-0 font-bold" />
                            <span>{amenity}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Booking Footer */}
                  <div className="pt-4 border-t border-border/80 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-softgrey block">
                        Starting from
                      </span>
                      <div className="text-2xl font-bold font-mono text-laterite dark:text-terracotta leading-none mt-0.5">
                        {formatPrice(stay.pricePerNight)}
                        <span className="text-xs font-normal text-softgrey font-sans"> / night</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-xl text-xs font-semibold hover:border-laterite hover:text-laterite px-3 py-2"
                      >
                        <Link to={`/stays/${stay.id}`}>View Details</Link>
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => openBookingModal(stay)}
                        className="bg-laterite hover:bg-laterite/90 text-white rounded-xl text-xs font-semibold px-4 py-2 shadow-xs"
                      >
                        Book Stay
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-16 px-4 space-y-4 max-w-md mx-auto bg-card rounded-3xl border border-border p-8 shadow-xs">
            <div className="h-12 w-12 rounded-full bg-laterite/10 text-laterite flex items-center justify-center mx-auto text-xl font-bold">
              🏡
            </div>
            <h3 className="font-editorial text-xl font-bold text-charcoal dark:text-cream">
              No retreats match your selection
            </h3>
            <p className="text-sm text-softgrey">
              Try choosing a different stay category or clearing the district filter.
            </p>
            <Button
              onClick={() => {
                setActiveDistrict('all');
                setStayTypeFilter('All');
              }}
              variant="outline"
              className="rounded-xl text-xs font-semibold"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
