import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Calendar,
  ArrowRight,
  MapPin,
  Clock,
  Feather,
  Search,
  Filter,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { journalArticles } from '@/data/journal';

export function JournalPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'all',
    'Botanical & Seasons',
    'Architecture & Heritage',
    'Living Traditions'
  ];

  const filteredArticles = useMemo(() => {
    return journalArticles.filter((art) => {
      const matchesCategory =
        activeCategory === 'all' || art.category === activeCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.district.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="py-16 sm:py-24 bg-[#FAF8F5] dark:bg-[#0D1814] text-charcoal dark:text-cream min-h-screen transition-colors duration-300">
      <Helmet>
        <title>The Rarh Chronicle — Field Essays & Cultural Journal | BeyondPahar</title>
        <meta
          name="description"
          content="Essays on seasonal botanical cycles, architectural archaeology, and intimate profiles of rural artists preserving centuries of Bengal craftsmanship."
        />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-laterite/10 dark:bg-laterite/20 border border-laterite/20 text-laterite dark:text-terracotta text-xs font-mono uppercase tracking-widest font-semibold">
            <Feather className="w-3.5 h-3.5" />
            <span>The Rarh Chronicle</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal dark:text-cream leading-tight">
            Travel Journal & Field Dispatches
          </h1>

          <p className="text-sm sm:text-base text-softgrey dark:text-cream/70 leading-relaxed font-light">
            Reflections on seasonal botanical cycles, Malla architectural archaeology, and intimate profiles of hereditary artists preserving living heritage across Purulia and Bankura.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto pt-2">
          {/* Search bar */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search dispatches..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-stone-200/90 dark:border-white/10 bg-white dark:bg-[#14231D] text-xs sm:text-sm text-charcoal dark:text-cream placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-laterite/30 focus:border-laterite transition-all shadow-xs"
            />
          </div>

          {/* Category filter pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-laterite text-white font-semibold shadow-xs'
                    : 'bg-white dark:bg-[#14231D] text-stone-600 dark:text-stone-300 border border-stone-200/80 dark:border-white/10 hover:border-laterite/40'
                }`}
              >
                {cat === 'all' ? 'All Categories' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="py-16 text-center space-y-3 bg-white dark:bg-[#14231D] rounded-3xl border border-stone-200 dark:border-white/10 p-8 max-w-xl mx-auto">
            <BookOpen className="h-8 w-8 text-stone-300 dark:text-stone-600 mx-auto" />
            <h3 className="font-editorial text-lg font-bold text-charcoal dark:text-cream">
              No matching journal dispatches
            </h3>
            <p className="text-xs text-softgrey">
              Try adjusting your search query or reset category filters to view all published field essays.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {filteredArticles.map((art) => (
              <article
                key={art.slug}
                className="group rounded-3xl bg-white dark:bg-[#14231D] border border-stone-200/90 dark:border-white/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Cover Image */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
                  <img
                    src={art.coverImage}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-black/20" />

                  {/* Badges on Top */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="bg-laterite text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                      {art.category}
                    </span>

                    <span className="bg-stone-950/80 backdrop-blur-md text-stone-200 text-[10px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>

                  {/* District Pill at Bottom of Image */}
                  <div className="absolute bottom-3 left-3.5">
                    <div className="flex items-center gap-1 text-xs text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-xl">
                      <MapPin className="w-3.5 h-3.5 text-laterite" />
                      <span className="font-semibold">{art.district}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-laterite" />
                      <span>{art.publishedDate}</span>
                      <span>•</span>
                      <span className="text-stone-700 dark:text-stone-300 font-semibold">{art.author}</span>
                    </div>

                    <h2 className="font-editorial text-xl sm:text-2xl font-bold text-charcoal dark:text-cream leading-snug group-hover:text-laterite transition-colors">
                      {art.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-softgrey dark:text-cream/70 leading-relaxed font-light line-clamp-3">
                      {art.subtitle}
                    </p>
                  </div>

                  {/* Read Article Action */}
                  <div className="pt-4 border-t border-stone-100 dark:border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider">
                      {art.district} Focus
                    </span>

                    <Link
                      to={`/journal/${art.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-laterite group-hover:text-terracotta hover:underline"
                    >
                      <span>Read Dispatch</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default JournalPage;
