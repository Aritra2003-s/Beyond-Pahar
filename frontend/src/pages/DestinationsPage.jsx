import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Star, Heart, ArrowRight, Filter, X } from 'lucide-react';
import { destinations } from '@/data/destinations';
import { useTravelStore } from '@/store/useTravelStore';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function DestinationsPage() {
  const { activeDistrict, setActiveDistrict, wishlist, toggleWishlist } = useTravelStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('rating');

  const categories = ['All', 'Hills & Nature', 'Waterfalls', 'Heritage & Architecture', 'Artisan Villages', 'Lakes & Dams'];

  const filtered = useMemo(() => {
    return destinations
      .filter((d) => {
        const matchesDistrict = activeDistrict === 'all' || d.district === activeDistrict;
        const matchesCategory = selectedCategory === 'All' || d.category === selectedCategory;
        const matchesSearch =
          d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          d.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          d.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
          d.highlights.some((h) => h.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesDistrict && matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'reviews') return b.reviewsCount - a.reviewsCount;
        return a.name.localeCompare(b.name);
      });
  }, [activeDistrict, selectedCategory, searchTerm, sortBy]);

  return (
    <div className="py-12">
      <Helmet>
        <title>Destinations — Purulia & Bankura | BeyondPahar</title>
        <meta
          name="description"
          content="Explore iconic destinations of Purulia and Bankura: Ayodhya Hills, Bamni Falls, Blue Marble Lake, Bishnupur Terracotta Temples, Mukutmanipur, and Charida Mask Village."
        />
      </Helmet>

      <div className="container mx-auto px-4 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="palash" className="uppercase font-semibold">
            Destinations Directory
          </Badge>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            Explore Purulia & Bankura
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            From the granitic summits and waterfalls of Ayodhya Pahar to the terracotta marvels of Bishnupur and ancient tribal artisan hamlets.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="glass-panel p-6 rounded-3xl space-y-5 shadow-sm border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Minimal & Aesthetic Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 dark:text-stone-500" />
              <input
                type="text"
                placeholder="Search by name, highlight, or town..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-10 py-2.5 rounded-full border border-stone-200/90 dark:border-white/10 bg-white/80 dark:bg-white/5 text-sm text-charcoal dark:text-cream placeholder:text-stone-400 dark:placeholder:text-stone-500 outline-none focus:ring-2 focus:ring-laterite/30 focus:border-laterite transition-all shadow-xs"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-stone-400 hover:text-charcoal dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/10 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* District Filter Buttons */}
            <div className="flex items-center gap-1.5 justify-center md:justify-start">
              <button
                onClick={() => setActiveDistrict('all')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeDistrict === 'all'
                    ? 'bg-foreground text-background shadow-xs'
                    : 'bg-muted/70 text-muted-foreground hover:bg-muted'
                }`}
              >
                All Districts
              </button>
              <button
                onClick={() => setActiveDistrict('Purulia')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeDistrict === 'Purulia'
                    ? 'bg-palash-500 text-white shadow-xs'
                    : 'bg-muted/70 text-muted-foreground hover:bg-muted'
                }`}
              >
                Purulia
              </button>
              <button
                onClick={() => setActiveDistrict('Bankura')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeDistrict === 'Bankura'
                    ? 'bg-terracotta-700 text-white shadow-xs'
                    : 'bg-muted/70 text-muted-foreground hover:bg-muted'
                }`}
              >
                Bankura
              </button>
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 justify-end">
              <span className="text-xs text-muted-foreground">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-xl border border-input bg-background text-xs font-medium text-foreground outline-none"
              >
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviewed</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-border/60 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-white font-semibold shadow-xs'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count & Clear */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>
            Showing <strong className="text-foreground">{filtered.length}</strong> destinations
            {activeDistrict !== 'all' && ` in ${activeDistrict}`}
            {selectedCategory !== 'All' && ` for ${selectedCategory}`}
          </span>
          {(searchTerm || selectedCategory !== 'All' || activeDistrict !== 'all') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setActiveDistrict('all');
              }}
              className="text-primary hover:underline font-medium"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Destinations Grid */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center space-y-3 bg-muted/20 rounded-3xl border border-border">
            <MapPin className="h-10 w-10 text-muted-foreground mx-auto" />
            <h3 className="font-serif text-xl font-bold">No destinations match your criteria</h3>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto">
              Try adjusting your search query, choosing a different category, or resetting the district filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((dest) => {
                const isSaved = wishlist.some((w) => w.id === dest.id);

                return (
                  <motion.div
                    key={dest.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="group rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative h-60 w-full overflow-hidden">
                      <img
                        src={dest.coverImage}
                        alt={dest.name}
                        className="h-full w-full object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                      <div className="absolute top-3 left-3 flex gap-2">
                        <span
                          className={`text-xs font-bold px-2.5 py-1 rounded-full text-white shadow-md ${
                            dest.district === 'Purulia' ? 'bg-palash-600' : 'bg-terracotta-700'
                          }`}
                        >
                          {dest.district}
                        </span>
                        <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-black/50 text-white/90 backdrop-blur-md">
                          {dest.category}
                        </span>
                      </div>

                      <button
                        onClick={() => toggleWishlist(dest)}
                        className="absolute top-3 right-3 p-2 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md hover:scale-110 transition-transform shadow-md"
                        title={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
                      >
                        <Heart
                          className={`h-4 w-4 ${isSaved ? 'text-palash-500 fill-palash-500' : 'text-neutral-700 dark:text-neutral-200'}`}
                        />
                      </button>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                          <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                          <span className="font-bold">{dest.rating}</span>
                          <span className="opacity-75">({dest.reviewsCount})</span>
                        </div>
                        <span className="opacity-90">{dest.altitude} altitude</span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                          {dest.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                          {dest.description}
                        </p>

                        <div className="mt-3 space-y-1">
                          {dest.highlights.slice(0, 2).map((h, i) => (
                            <div key={i} className="text-xs text-foreground/80 flex items-start gap-1.5">
                              <span className="text-primary font-bold">•</span>
                              <span className="line-clamp-1">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-border flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-palash-500" />
                          {dest.nearestTown}
                        </span>

                        <Link
                          to={`/destinations/${dest.id}`}
                          className="text-xs font-semibold text-primary hover:text-palash-600 flex items-center gap-1 group-hover:translate-x-1 transition-all"
                        >
                          <span>View Guide</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
