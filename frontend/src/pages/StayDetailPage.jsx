import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Star, MapPin, CheckCircle, ArrowLeft, ShieldCheck, Home } from 'lucide-react';
import { stays } from '@/data/stays';
import { useTravelStore } from '@/store/useTravelStore';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';

export function StayDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { openBookingModal } = useTravelStore();

  const stay = stays.find((s) => s.id === slug);

  if (!stay) {
    return (
      <div className="py-24 container mx-auto px-4 text-center space-y-4">
        <h2 className="font-editorial text-3xl font-bold">Stay Not Found</h2>
        <p className="text-softgrey text-sm">The requested retreat could not be found.</p>
        <Button asChild variant="outline">
          <Link to="/stays">Back to All Stays</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="pb-24">
      <Helmet>
        <title>{`${stay.name} — ${stay.district} | BeyondPahar`}</title>
        <meta name="description" content={stay.description} />
      </Helmet>

      {/* Hero Photo */}
      <div className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
        <img
          src={stay.coverImage}
          alt={stay.name}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-charcoal/60" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8 h-full flex flex-col justify-between py-8">
          <button
            onClick={() => navigate(-1)}
            className="self-start flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md text-xs font-semibold transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Stays</span>
          </button>

          <div className="space-y-3 max-w-3xl text-white">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-laterite text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {stay.district} District
              </span>
              <span className="bg-white/20 text-cream text-xs px-3 py-1 rounded-full backdrop-blur-md">
                {stay.type}
              </span>
              <div className="flex items-center gap-1 bg-black/40 px-3 py-1 rounded-full text-xs">
                <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                <span className="font-bold">{stay.rating}</span>
                <span className="opacity-75">({stay.reviewsCount} reviews)</span>
              </div>
            </div>

            <h1 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight">
              {stay.name}
            </h1>
            <p className="text-sm sm:text-base text-cream/90 flex items-center gap-1">
              <MapPin className="h-4 w-4 text-beige" />
              <span>{stay.location}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream">
                About the Stay
              </h2>
              <p className="text-sm sm:text-base text-softgrey leading-relaxed">
                {stay.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-editorial text-xl font-bold text-charcoal dark:text-cream">
                Retreat Amenities & Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {stay.amenities.map((amenity, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-border bg-offwhite dark:bg-card flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-forest shrink-0" />
                    <span className="text-xs sm:text-sm text-charcoal dark:text-cream font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Booking Box */}
          <div className="space-y-6">
            <div className="editorial-card p-6 rounded-2xl shadow-md space-y-6 sticky top-28">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-softgrey uppercase tracking-wider">Starting from</span>
                <div className="text-3xl font-bold text-laterite font-editorial">
                  {formatPrice(stay.pricePerNight)}
                  <span className="text-xs font-normal text-softgrey"> / night</span>
                </div>
              </div>

              <div className="p-4 bg-cream/70 dark:bg-forest-deep/70 rounded-xl space-y-2 text-xs border border-border">
                <div className="flex justify-between">
                  <span className="text-softgrey">Category:</span>
                  <span className="font-semibold text-charcoal dark:text-cream">{stay.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-softgrey">Available Rooms:</span>
                  <span className="font-semibold text-forest font-mono">{stay.availableRooms} rooms</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-laterite hover:bg-laterite/90 text-white font-semibold rounded-xl"
                onClick={() => openBookingModal(stay)}
              >
                Reserve Stay
              </Button>

              <div className="text-xs text-softgrey flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-forest shrink-0" />
                <span>Verified sustainable & eco-conscious hospitality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
