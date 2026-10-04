import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  MapPin,
  Star,
  Heart,
  Calendar,
  Compass,
  ArrowLeft,
  CheckCircle,
  Navigation,
  Car,
  ShieldCheck,
  Share2,
  Clock,
  Sparkles,
  ChevronDown,
  Info,
  Layers,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { destinations } from '@/data/destinations';
import { circuits } from '@/data/circuits';
import { useTravelStore } from '@/store/useTravelStore';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatPrice } from '@/lib/utils';

export function DestinationDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { wishlist, toggleWishlist, openBookingModal } = useTravelStore();

  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(null);

  const dest = destinations.find((d) => d.id === id);

  if (!dest) {
    return (
      <div className="py-24 container mx-auto px-4 text-center space-y-4">
        <h2 className="font-editorial text-3xl font-bold">Destination Not Found</h2>
        <p className="text-softgrey text-sm">
          The requested Rarh destination could not be located in our records.
        </p>
        <Button asChild variant="outline" className="rounded-xl">
          <Link to="/destinations">Back to All Destinations</Link>
        </Button>
      </div>
    );
  }

  const isSaved = wishlist.some((w) => w.id === dest.id);

  // Find related circuits that feature this destination
  const relatedCircuits = circuits.filter((c) => {
    const destName = dest.name.toLowerCase();
    const destId = dest.id.toLowerCase();
    return (
      c.district === dest.district ||
      c.district === 'Both' ||
      c.highlights.some(
        (h) =>
          destName.includes(h.toLowerCase()) ||
          h.toLowerCase().includes(destName) ||
          destId.includes(h.toLowerCase())
      )
    );
  });

  // Find nearby destinations from dataset
  const nearbyPlaces =
    dest.nearbyDestinations && dest.nearbyDestinations.length > 0
      ? destinations.filter((d) => dest.nearbyDestinations.includes(d.id))
      : [];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${dest.name} — BeyondPahar`,
        text: dest.tagline,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="pb-24">
      <Helmet>
        <title>{`${dest.name} — ${dest.district} District | BeyondPahar`}</title>
        <meta name="description" content={dest.description} />
      </Helmet>

      {/* 1. HERO WITH REGION, TITLE, CONTRAST OVERLAY */}
      <div className="relative h-[65vh] min-h-[480px] w-full overflow-hidden flex items-end">
        {dest.coverImage && (
          <img
            src={dest.coverImage}
            alt={dest.name}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/60" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8 py-8 flex flex-col justify-between h-full">
          {/* Top Bar: Back, Wishlist & Share */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md text-xs font-semibold transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md text-xs font-semibold transition-colors"
                title="Share this destination"
              >
                <Share2 className="h-4 w-4" />
                <span className="hidden sm:inline">Share</span>
              </button>
              <button
                onClick={() => toggleWishlist(dest)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md text-xs font-semibold transition-colors"
              >
                <Heart
                  className={`h-4 w-4 ${isSaved ? 'text-laterite fill-laterite' : 'text-white'}`}
                />
                <span>{isSaved ? 'Saved' : 'Save'}</span>
              </button>
            </div>
          </div>

          {/* Hero Content: Title, Region, Tagline, Duration */}
          <div className="space-y-4 max-w-3xl text-white pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <Link
                to={dest.district === 'Purulia' ? '/purulia' : '/bankura'}
                className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider text-white hover:opacity-90 ${
                  dest.district === 'Purulia' ? 'bg-laterite' : 'bg-terracotta'
                }`}
              >
                {dest.district} District
              </Link>
              {dest.category && (
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur-md">
                  {dest.category}
                </span>
              )}
              {dest.rating && (
                <div className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full text-xs">
                  <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                  <span className="font-bold">{dest.rating}</span>
                  {dest.reviewsCount && (
                    <span className="opacity-80">({dest.reviewsCount})</span>
                  )}
                </div>
              )}
              {dest.suggestedDuration && (
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full text-xs">
                  <Clock className="h-3.5 w-3.5 text-beige" />
                  <span>{dest.suggestedDuration}</span>
                </div>
              )}
            </div>

            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {dest.name}
            </h1>
            {dest.tagline && (
              <p className="text-sm sm:text-lg text-cream/90 font-light leading-relaxed">
                {dest.tagline}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 2. MAIN LAYOUT GRID */}
      <div className="container mx-auto px-4 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Main Left Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* OVERVIEW SECTION */}
            {dest.description && (
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-laterite">
                  <Sparkles className="h-4 w-4" />
                  <span>Overview & Setting</span>
                </div>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream">
                  About {dest.name}
                </h2>
                <div className="text-sm sm:text-base text-softgrey leading-relaxed space-y-4 font-light">
                  <p>{dest.description}</p>
                </div>
              </section>
            )}

            {/* IMAGE GALLERY SECTION (Only if present) */}
            {dest.gallery && dest.gallery.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-charcoal dark:text-cream">
                    Visual Gallery
                  </h3>
                  <span className="text-xs text-softgrey font-mono">
                    {dest.gallery.length} Photographs
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {dest.gallery.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedGalleryImg(imgUrl)}
                      className="editorial-img-wrap h-48 rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all group"
                    >
                      <img
                        src={imgUrl}
                        alt={`${dest.name} photograph ${idx + 1}`}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* HIGHLIGHTS SECTION (Only if present) */}
            {dest.highlights && dest.highlights.length > 0 && (
              <section className="space-y-4">
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-charcoal dark:text-cream">
                  Key Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {dest.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl border border-border bg-beige/20 dark:bg-forest-deep/40 flex items-start gap-3 shadow-xs"
                    >
                      <CheckCircle className="h-5 w-5 text-laterite shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-charcoal dark:text-cream font-medium leading-relaxed">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* EXPERIENCES & ACTIVITIES SECTION (Only if present) */}
            {dest.activities && dest.activities.length > 0 && (
              <section className="space-y-4">
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-charcoal dark:text-cream">
                  Experiences & Activities
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {dest.activities.map((act, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-charcoal border border-border text-charcoal dark:text-cream shadow-2xs hover:border-laterite transition-colors flex items-center gap-1.5"
                    >
                      <Compass className="h-3.5 w-3.5 text-laterite" />
                      {act}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* TRAVEL INFORMATION & LOGISTICS (Only if present) */}
            {(dest.travelInformation || dest.howToReach || dest.distanceFromKolkata || dest.bestSeason) && (
              <section className="space-y-5 p-6 sm:p-8 rounded-3xl border border-border bg-beige/30 dark:bg-forest-deep/50">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest">
                  <Navigation className="h-4 w-4" />
                  <span>Logistics & Field Info</span>
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-charcoal dark:text-cream">
                  Travel Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  {dest.howToReach && (
                    <div className="space-y-1">
                      <span className="font-bold text-charcoal dark:text-cream block">
                        How to Reach:
                      </span>
                      <p className="text-softgrey leading-relaxed">{dest.howToReach}</p>
                    </div>
                  )}

                  {dest.distanceFromKolkata && (
                    <div className="space-y-1">
                      <span className="font-bold text-charcoal dark:text-cream block">
                        Distance from Kolkata:
                      </span>
                      <p className="text-softgrey leading-relaxed">{dest.distanceFromKolkata}</p>
                    </div>
                  )}

                  {dest.bestSeason && (
                    <div className="space-y-1">
                      <span className="font-bold text-charcoal dark:text-cream block">
                        Best Season to Visit:
                      </span>
                      <p className="text-softgrey leading-relaxed">{dest.bestSeason}</p>
                    </div>
                  )}

                  {dest.travelInformation?.timings && (
                    <div className="space-y-1">
                      <span className="font-bold text-charcoal dark:text-cream block">
                        Visiting Timings:
                      </span>
                      <p className="text-softgrey leading-relaxed">
                        {dest.travelInformation.timings}
                      </p>
                    </div>
                  )}

                  {dest.travelInformation?.entryFee && (
                    <div className="space-y-1">
                      <span className="font-bold text-charcoal dark:text-cream block">
                        Entry Fee:
                      </span>
                      <p className="text-softgrey leading-relaxed">
                        {dest.travelInformation.entryFee}
                      </p>
                    </div>
                  )}

                  {dest.travelInformation?.clothing && (
                    <div className="space-y-1">
                      <span className="font-bold text-charcoal dark:text-cream block">
                        Recommended Clothing:
                      </span>
                      <p className="text-softgrey leading-relaxed">
                        {dest.travelInformation.clothing}
                      </p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* FAQS SECTION (Only if present) */}
            {dest.faqs && dest.faqs.length > 0 && (
              <section className="space-y-4">
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-charcoal dark:text-cream">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {dest.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="editorial-card rounded-2xl border border-border overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-beige/10 transition-colors"
                      >
                        <span className="font-editorial text-sm sm:text-base font-bold text-charcoal dark:text-cream">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 text-softgrey shrink-0 transition-transform duration-300 ${
                            activeFaq === i ? 'rotate-180 text-laterite' : ''
                          }`}
                        />
                      </button>
                      {activeFaq === i && (
                        <div className="px-5 pb-5 text-xs sm:text-sm text-softgrey leading-relaxed border-t border-border/50 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* NEARBY DESTINATIONS (Only if present) */}
            {nearbyPlaces.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-charcoal dark:text-cream">
                    Nearby Attractions in {dest.district}
                  </h3>
                  <Link
                    to={dest.district === 'Purulia' ? '/purulia' : '/bankura'}
                    className="text-xs font-semibold text-laterite hover:underline"
                  >
                    View all in {dest.district} →
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {nearbyPlaces.map((near) => (
                    <Link
                      key={near.id}
                      to={`/destinations/${near.id}`}
                      className="editorial-card rounded-2xl p-4 flex flex-col justify-between group space-y-3 hover:shadow-md transition-all"
                    >
                      <div className="h-32 rounded-xl overflow-hidden">
                        <img
                          src={near.coverImage}
                          alt={near.name}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-laterite">
                          {near.category}
                        </span>
                        <h4 className="font-editorial text-sm font-bold text-charcoal dark:text-cream line-clamp-1 mt-0.5">
                          {near.name}
                        </h4>
                        <p className="text-[11px] text-softgrey line-clamp-1 mt-0.5">
                          {near.nearestTown}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Sidebar Column (4 cols) - Sticky Action & Related Packages */}
          <div className="lg:col-span-4 space-y-6">
            {/* TRIP PLANNING CTA CARD */}
            <div className="editorial-card rounded-3xl p-6 sm:p-7 border border-border shadow-md space-y-6 sticky top-28 bg-white dark:bg-charcoal">
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-laterite">
                  Curated Travel Planning
                </span>
                <h3 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream">
                  Visit {dest.name}
                </h3>
                <p className="text-xs text-softgrey leading-relaxed">
                  Include this destination in a personalized circuit or connect directly with our local regional coordinator.
                </p>
              </div>

              {/* Quick Info pills */}
              <div className="p-4 bg-beige/30 dark:bg-forest-deep/60 rounded-2xl space-y-2.5 text-xs border border-border">
                <div className="flex justify-between">
                  <span className="text-softgrey">District:</span>
                  <span className="font-bold text-charcoal dark:text-cream">{dest.district}</span>
                </div>
                {dest.nearestTown && (
                  <div className="flex justify-between">
                    <span className="text-softgrey">Nearest Hub:</span>
                    <span className="font-bold text-charcoal dark:text-cream">{dest.nearestTown}</span>
                  </div>
                )}
                {dest.altitude && (
                  <div className="flex justify-between">
                    <span className="text-softgrey">Elevation:</span>
                    <span className="font-bold text-charcoal dark:text-cream">{dest.altitude}</span>
                  </div>
                )}
                {dest.suggestedDuration && (
                  <div className="flex justify-between">
                    <span className="text-softgrey">Pacing:</span>
                    <span className="font-bold text-charcoal dark:text-cream">{dest.suggestedDuration}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2.5">
                <Button
                  asChild
                  className="w-full bg-laterite hover:bg-laterite/90 text-white font-bold rounded-xl justify-center gap-2"
                >
                  <Link to="/plan-your-trip">
                    <Compass className="h-4 w-4" />
                    <span>Add to Custom Itinerary</span>
                  </Link>
                </Button>
                <Button
                  onClick={openBookingModal}
                  variant="outline"
                  className="w-full rounded-xl justify-center font-semibold text-xs"
                >
                  Consult Travel Specialist
                </Button>
              </div>

              <div className="pt-3 border-t border-border flex items-center gap-2 text-[11px] text-forest dark:text-beige">
                <ShieldCheck className="h-4 w-4 shrink-0 text-forest" />
                <span>Verified by local district coordinators</span>
              </div>
            </div>

            {/* RELATED PACKAGES SECTION (Only if present) */}
            {relatedCircuits.length > 0 && (
              <div className="editorial-card rounded-3xl p-6 border border-border space-y-4">
                <h4 className="font-editorial font-bold text-lg text-charcoal dark:text-cream">
                  Featured in Curated Circuits
                </h4>
                <div className="space-y-3">
                  {relatedCircuits.slice(0, 3).map((c) => (
                    <div
                      key={c.id}
                      className="p-3.5 bg-beige/20 dark:bg-forest-deep/40 rounded-2xl border border-border space-y-1.5"
                    >
                      <div className="text-xs font-bold text-charcoal dark:text-cream">
                        {c.title}
                      </div>
                      <div className="text-[11px] text-softgrey">
                        {c.duration} • {formatPrice(c.price)}
                      </div>
                      <a
                        href="/#packages"
                        className="text-xs font-semibold text-laterite hover:underline inline-flex items-center gap-1 pt-1"
                      >
                        <span>Explore package details</span>
                        <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL FOR GALLERY */}
      {selectedGalleryImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedGalleryImg(null)}
        >
          <button
            onClick={() => setSelectedGalleryImg(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={selectedGalleryImg}
            alt="Enlarged view"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
