import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  MapPin,
  Heart,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Bed,
  Check,
  Flame,
  CalendarCheck
} from 'lucide-react';
import { stays } from '@/data/stays';
import { useTravelStore } from '@/store/useTravelStore';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function StaysRetreatsSection() {
  const [districtFilter, setDistrictFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const { openBookingModal, wishlist, toggleWishlist } = useTravelStore();

  const stayTypes = [
    'All',
    'Luxury Eco-Resort',
    'Glamping & Tented Lodges',
    'Heritage Tourist Lodge',
    'Eco Homestay & Cottages',
    'Hilltop Resort',
    'Rural Artisan Homestay',
    'Nature & Trekker Lodge'
  ];

  const filteredStays = stays.filter((stay) => {
    const matchesDistrict =
      districtFilter === 'All' || stay.district.toLowerCase() === districtFilter.toLowerCase();
    const matchesType =
      typeFilter === 'All' || stay.type.toLowerCase().includes(typeFilter.toLowerCase());
    return matchesDistrict && matchesType;
  });

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] dark:bg-stone-950 border-y border-[#E8E2D9] dark:border-stone-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#BA532B]/10 border border-[#BA532B]/20 text-[#BA532B] dark:text-[#de6b3e] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Handpicked Accommodations</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-tight">
            Authentic Stays & Eco-Lodges
          </h2>

          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Rest in lakeside glamping tents, traditional mud-walled cottages under flowering Palash trees, or heritage guest lodges beside 17th-century terracotta shrines.
          </p>
        </div>

        {/* Interactive Filter Bar */}
        <div className="bg-white/90 dark:bg-stone-900/90 backdrop-blur-md p-4 sm:p-6 rounded-3xl border border-[#E8E2D9] dark:border-stone-800 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5">
          {/* District Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider mr-1">
              District:
            </span>
            {[
              { id: 'All', label: 'All Districts' },
              { id: 'Purulia', label: 'Purulia District' },
              { id: 'Bankura', label: 'Bankura District' }
            ].map((dist) => (
              <button
                key={dist.id}
                onClick={() => setDistrictFilter(dist.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  districtFilter === dist.id
                    ? 'bg-[#BA532B] text-white shadow-sm shadow-[#BA532B]/25'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200/80 dark:hover:bg-stone-700/80 border border-stone-200/80 dark:border-stone-700'
                }`}
              >
                {dist.label}
              </button>
            ))}
          </div>

          {/* Stay Type Selector */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider whitespace-nowrap">
              Stay Type:
            </span>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-3.5 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-xs font-semibold text-stone-800 dark:text-stone-200 outline-none focus:ring-2 focus:ring-[#BA532B] cursor-pointer"
            >
              {stayTypes.map((type) => (
                <option key={type} value={type} className="bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200">
                  {type === 'All' ? 'All Stay Categories' : type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Counter Info */}
        <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 px-1 border-b border-[#E8E2D9] dark:border-stone-800 pb-3">
          <span className="font-semibold text-stone-800 dark:text-stone-200 text-sm">
            Showing {filteredStays.length} Handpicked {filteredStays.length === 1 ? 'Retreat' : 'Retreats'}
          </span>
          <span className="text-stone-500">
            {districtFilter !== 'All' ? `Filtered by ${districtFilter} District` : 'Purulia & Bankura Signature Collection'}
          </span>
        </div>

        {/* 7 Handpicked Retreats - Separate Luxury Boutique Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredStays.map((stay) => {
            const isWishlisted = wishlist.includes(stay.id);

            return (
              <article
                key={stay.id}
                className="group rounded-3xl bg-white dark:bg-stone-900 border border-[#E8E2D9] dark:border-stone-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
                  <img
                    src={stay.coverImage}
                    alt={stay.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <div className="flex items-center gap-1.5 pointer-events-auto">
                      <span className="bg-[#BA532B] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {stay.district}
                      </span>
                      <span className="bg-stone-950/80 backdrop-blur-md text-stone-200 text-[10px] font-medium px-2.5 py-1 rounded-full">
                        {stay.type}
                      </span>
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(stay.id)}
                      className="p-2 rounded-full bg-stone-950/60 backdrop-blur-md text-white hover:text-[#BA532B] transition-colors pointer-events-auto cursor-pointer"
                      title={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                      aria-label="Wishlist"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isWishlisted ? 'fill-[#BA532B] text-[#BA532B]' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
                    {/* Rating */}
                    <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-xl font-medium">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="font-bold text-white">{stay.rating}</span>
                      <span className="text-stone-300 text-[11px]">({stay.reviewsCount})</span>
                    </div>

                    {/* Room Scarcity */}
                    {stay.availableRooms && (
                      <div className="flex items-center gap-1.5 bg-emerald-950/85 border border-emerald-500/40 text-emerald-300 px-2.5 py-1 rounded-xl text-[11px] font-medium backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{stay.availableRooms} rooms left</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3.5">
                    {/* Stay Name */}
                    <h3 className="font-editorial text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 leading-snug group-hover:text-[#BA532B] transition-colors">
                      {stay.name}
                    </h3>

                    {/* Location Pin */}
                    <div className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-400 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#BA532B] shrink-0" />
                      <span>{stay.location}</span>
                    </div>

                    {/* Full Description - Clean, Unhidden */}
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                      {stay.description}
                    </p>

                    {/* Features & Highlights */}
                    <div className="space-y-2 pt-2 border-t border-stone-200/80 dark:border-stone-800">
                      <span className="text-[11px] font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider block">
                        Features & Highlights:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {stay.amenities.map((amenity, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-800/90 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 font-medium"
                          >
                            <Check className="w-3 h-3 text-[#BA532B]" />
                            <span>{amenity}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Pricing & Action Buttons */}
                  <div className="pt-5 border-t border-[#E8E2D9] dark:border-stone-800 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold block">
                        Starting from
                      </span>
                      <div className="text-lg sm:text-xl font-bold text-[#BA532B] font-editorial">
                        {formatPrice(stay.pricePerNight)}
                        <span className="text-xs font-normal text-stone-500"> / night</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="rounded-xl text-xs h-9 px-3 border-stone-300 dark:border-stone-700 hover:border-[#BA532B] hover:text-[#BA532B]"
                      >
                        <Link to={`/stays/${stay.id}`}>
                          <span>Details</span>
                        </Link>
                      </Button>

                      <Button
                        size="sm"
                        onClick={() => openBookingModal(stay)}
                        className="rounded-xl text-xs h-9 px-3.5 bg-[#BA532B] hover:bg-[#a64724] text-white font-medium shadow-md shadow-[#BA532B]/20 cursor-pointer flex items-center gap-1"
                      >
                        <CalendarCheck className="w-3.5 h-3.5" />
                        <span>Reserve</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StaysRetreatsSection;
