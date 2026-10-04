import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, MapPin, Compass, Home, Sparkles, ArrowRight, CornerDownLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTravelStore } from '@/store/useTravelStore';
import { destinations } from '@/data/destinations';
import { circuits } from '@/data/circuits';
import { stays } from '@/data/stays';

export function SearchDialog() {
  const { isSearchDialogOpen, setSearchDialogOpen } = useTravelStore();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Listen for Ctrl+K / Cmd+K global shortcuts and Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchDialogOpen(!isSearchDialogOpen);
      }
      if (e.key === 'Escape' && isSearchDialogOpen) {
        setSearchDialogOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchDialogOpen, setSearchDialogOpen]);

  // Reset query when dialog opens/closes
  useEffect(() => {
    if (!isSearchDialogOpen) {
      setQuery('');
    }
  }, [isSearchDialogOpen]);

  const results = useMemo(() => {
    if (!query.trim()) return { destinations: [], circuits: [], stays: [] };

    const q = query.toLowerCase();

    return {
      destinations: destinations.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.district.toLowerCase().includes(q) ||
          d.category.toLowerCase().includes(q) ||
          d.highlights.some((h) => h.toLowerCase().includes(q))
      ),
      circuits: circuits.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.district.toLowerCase().includes(q) ||
          c.theme.toLowerCase().includes(q)
      ),
      stays: stays.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.district.toLowerCase().includes(q) ||
          s.type.toLowerCase().includes(q) ||
          s.location.toLowerCase().includes(q)
      ),
    };
  }, [query]);

  const quickPills = [
    'Ayodhya Hills',
    'Bishnupur',
    'Bamni Falls',
    'Chhau Masks',
    'Mukutmanipur',
    'Joypur Forest',
    'Marble Lake',
    'Khairabera'
  ];

  if (!isSearchDialogOpen) return null;

  const handleSelect = (path) => {
    setSearchDialogOpen(false);
    navigate(path);
  };

  return (
    <div
      onClick={() => setSearchDialogOpen(false)}
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 md:pt-28 px-4 bg-black/45 dark:bg-black/70 backdrop-blur-md transition-opacity duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Global Search"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white dark:bg-[#121E19] border border-stone-200/90 dark:border-white/10 rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col max-h-[82vh] transition-all"
      >
        {/* Minimal Search Input Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-stone-100 dark:border-white/10 bg-white/80 dark:bg-white/[0.02]">
          <Search className="h-5 w-5 text-laterite dark:text-terracotta shrink-0" />
          <input
            type="text"
            placeholder="Search Ayodhya Hills, Terracotta, Chhau, Stays..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base text-charcoal dark:text-cream placeholder:text-stone-400 dark:placeholder:text-stone-500 outline-none font-light"
          />

          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-stone-400 hover:text-charcoal dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Clear query"
            >
              <X className="h-4 w-4" />
            </button>
          )}

          <div className="flex items-center gap-1.5 shrink-0 pl-1">
            <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono bg-stone-100 dark:bg-white/10 border border-stone-200/80 dark:border-white/10 text-stone-500 dark:text-stone-400">
              ESC
            </kbd>
            <button
              onClick={() => setSearchDialogOpen(false)}
              className="sm:hidden p-1 rounded-lg text-stone-400 hover:text-charcoal dark:hover:text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Results / Empty Suggestions Area */}
        <div className="overflow-y-auto p-4 sm:p-5 space-y-5">
          {!query.trim() ? (
            <div className="py-6 px-2 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-softgrey dark:text-cream/60">
                <Sparkles className="h-3.5 w-3.5 text-laterite" />
                <span>Suggested Discoveries</span>
              </div>

              {/* Minimal Discovery Pill Tags */}
              <div className="flex flex-wrap gap-2">
                {quickPills.map((pill) => (
                  <button
                    key={pill}
                    onClick={() => setQuery(pill)}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-stone-100/80 dark:bg-white/[0.05] hover:bg-laterite/10 hover:text-laterite dark:hover:bg-laterite/20 dark:hover:text-terracotta text-charcoal/80 dark:text-cream/80 border border-stone-200/70 dark:border-white/10 transition-colors cursor-pointer"
                  >
                    {pill}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-stone-100 dark:border-white/5 flex items-center justify-between text-xs text-softgrey dark:text-cream/50">
                <span>Explore Purulia Highlands & Bankura Terracotta</span>
                <span className="font-mono text-[11px]">Direct links to 40+ verified spots</span>
              </div>
            </div>
          ) : results.destinations.length === 0 &&
            results.circuits.length === 0 &&
            results.stays.length === 0 ? (
            <div className="py-12 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-white/5 mx-auto flex items-center justify-center text-stone-400">
                <Search className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium text-charcoal dark:text-cream">
                No matching results found for "{query}"
              </p>
              <p className="text-xs text-softgrey dark:text-cream/60 max-w-sm mx-auto">
                Try searching with broader terms like "Falls", "Temples", "Dam", or choose a suggestion above.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Destinations */}
              {results.destinations.length > 0 && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-softgrey dark:text-cream/60 px-1">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-laterite" /> Destinations
                    </span>
                    <span>{results.destinations.length} found</span>
                  </div>

                  <div className="space-y-1">
                    {results.destinations.slice(0, 5).map((d) => (
                      <button
                        key={d.id}
                        onClick={() => handleSelect(`/destinations/${d.id}`)}
                        className="w-full text-left p-3 rounded-2xl hover:bg-stone-100/80 dark:hover:bg-white/[0.05] border border-transparent hover:border-stone-200/80 dark:hover:border-white/10 flex items-center justify-between transition-all group cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-xl bg-laterite/10 dark:bg-laterite/20 text-laterite dark:text-terracotta flex items-center justify-center shrink-0">
                            <MapPin className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-charcoal dark:text-cream group-hover:text-laterite transition-colors truncate">
                              {d.name}
                            </div>
                            <div className="text-xs text-softgrey dark:text-cream/60 truncate">
                              {d.district} District • {d.category}
                            </div>
                          </div>
                        </div>

                        <ArrowRight className="h-4 w-4 text-stone-400 group-hover:text-laterite group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Circuits */}
              {results.circuits.length > 0 && (
                <div className="space-y-1.5 pt-2">
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-softgrey dark:text-cream/60 px-1">
                    <span className="flex items-center gap-1.5">
                      <Compass className="h-3.5 w-3.5 text-forest dark:text-emerald-400" /> Curated Circuits
                    </span>
                    <span>{results.circuits.length} found</span>
                  </div>

                  <div className="space-y-1">
                    {results.circuits.slice(0, 3).map((c) => (
                      <button
                        key={c.id}
                        onClick={() => handleSelect('/#packages')}
                        className="w-full text-left p-3 rounded-2xl hover:bg-stone-100/80 dark:hover:bg-white/[0.05] border border-transparent hover:border-stone-200/80 dark:hover:border-white/10 flex items-center justify-between transition-all group cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-xl bg-forest/10 dark:bg-emerald-500/20 text-forest dark:text-emerald-300 flex items-center justify-center shrink-0">
                            <Compass className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-charcoal dark:text-cream group-hover:text-forest dark:group-hover:text-emerald-300 transition-colors truncate">
                              {c.title}
                            </div>
                            <div className="text-xs text-softgrey dark:text-cream/60 truncate">
                              {c.duration} • {c.district}
                            </div>
                          </div>
                        </div>

                        <ArrowRight className="h-4 w-4 text-stone-400 group-hover:text-forest group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Stays */}
              {results.stays.length > 0 && (
                <div className="space-y-1.5 pt-2">
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-softgrey dark:text-cream/60 px-1">
                    <span className="flex items-center gap-1.5">
                      <Home className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" /> Stays & Eco-Lodges
                    </span>
                    <span>{results.stays.length} found</span>
                  </div>

                  <div className="space-y-1">
                    {results.stays.slice(0, 3).map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleSelect(`/stays/${s.slug || ''}`)}
                        className="w-full text-left p-3 rounded-2xl hover:bg-stone-100/80 dark:hover:bg-white/[0.05] border border-transparent hover:border-stone-200/80 dark:hover:border-white/10 flex items-center justify-between transition-all group cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-300 flex items-center justify-center shrink-0">
                            <Home className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-charcoal dark:text-cream group-hover:text-amber-600 transition-colors truncate">
                              {s.name}
                            </div>
                            <div className="text-xs text-softgrey dark:text-cream/60 truncate">
                              {s.location} • ₹{s.pricePerNight}/night
                            </div>
                          </div>
                        </div>

                        <ArrowRight className="h-4 w-4 text-stone-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Minimal Footer */}
        <div className="px-5 py-3 border-t border-stone-100 dark:border-white/10 bg-stone-50/50 dark:bg-white/[0.02] text-[11px] font-mono text-softgrey dark:text-cream/50 flex items-center justify-between">
          <span className="uppercase tracking-widest text-[10px]">BeyondPahar Directory</span>
          <div className="flex items-center gap-2">
            <span>Press</span>
            <kbd className="px-1.5 py-0.5 rounded bg-stone-200/60 dark:bg-white/10 text-stone-600 dark:text-cream/70 text-[10px]">ESC</kbd>
            <span>to exit</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchDialog;
