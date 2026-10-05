import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  Heart,
  User,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Mountain,
  Landmark,
  Compass,
  CalendarCheck,
  MapPin,
  Sparkles
} from 'lucide-react';
import { BrandLogo } from '@/components/common/BrandLogo';
import { useTravelStore } from '@/store/useTravelStore';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navRef = useRef(null);

  const { wishlist, setSearchDialogOpen, setWishlistOpen } = useTravelStore();

  const isHome = location.pathname === '/';

  // Navigation Items mapped to Section IDs
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'destinations', label: 'Destinations', hasDropdown: true },
    { id: 'experiences', label: 'Experiences' },
    { id: 'stays', label: 'Stays' },
    { id: 'packages', label: 'Packages' },
    { id: 'journal', label: 'Journal' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  // Detect scroll state and update active section when near top
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      if (scrollY < 80) {
        setActiveSection('home');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section highlighting
  useEffect(() => {
    if (!isHome) return;
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return;

    const sectionIds = [
      'home',
      'destinations',
      'experiences',
      'stays',
      'packages',
      'plan-trip',
      'journal',
      'about',
      'contact'
    ];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If in plan-trip, mark plan-trip or keep relevant
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0.05,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  // Handle URL hash on initial load
  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(targetId);
        }, 150);
      }
    }
  }, []);

  // Keyboard shortcut (Cmd/Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchDialogOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSearchDialogOpen]);

  // Click / touch outside to close dropdowns & mobile menu
  useEffect(() => {
    const handlePointerOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handlePointerOutside);
    document.addEventListener('touchstart', handlePointerOutside, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handlePointerOutside);
      document.removeEventListener('touchstart', handlePointerOutside);
    };
  }, []);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Unified smooth scroll click handler
  const handleNavClick = (e, targetId) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${targetId}`);
        setActiveSection(targetId);
      }
    }
    // If on a destination or other subpage, standard navigation to /#targetId proceeds
  };

  const isScrolledOrSubpage = isScrolled || !isHome;
  const isHeaderSolid = isScrolledOrSubpage || mobileMenuOpen;

  return (
    <header
      ref={navRef}
      style={{ zIndex: 1000 }}
      className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 ease-in-out ${
        isHeaderSolid
          ? 'bg-[#FAF8F5]/98 dark:bg-stone-950/98 backdrop-blur-md border-b border-[#E8E2D9] dark:border-stone-800 shadow-sm shadow-stone-900/5 py-3'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent border-b border-white/10 py-4 sm:py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-6 w-full">
          {/* 1. Brand Logo & Wordmark */}
          <a
            href={isHome ? '#home' : '/#home'}
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BA532B] rounded-xl select-none"
            aria-label="BeyondPahar Home"
          >
            <BrandLogo size={38} className="sm:w-[42px] sm:h-[42px] group-hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col">
              <span
                className={`font-serif text-xl sm:text-2xl sm:text-[1.65rem] font-bold tracking-tight leading-none transition-colors ${
                  isHeaderSolid ? 'text-stone-900 dark:text-stone-100' : 'text-white'
                }`}
              >
                BeyondPahar
              </span>
              <span
                className={`hidden sm:block text-[9px] sm:text-[9.5px] font-sans tracking-[0.25em] uppercase font-semibold mt-1.5 transition-colors ${
                  isHeaderSolid
                    ? 'text-[#BA532B] dark:text-[#c65b32]'
                    : 'text-stone-300/85'
                }`}
              >
                BEYOND THE HILLS. INTO THE WILD
              </span>
            </div>
          </a>

          {/* 2. Desktop Navigation Links (Smooth-Scrolling Semantic Anchors) */}
          <nav
            className="hidden xl:flex items-center gap-5 2xl:gap-7 text-sm font-medium"
            aria-label="Primary Navigation"
          >
            {/* Screen reader & test accessible direct links for Purulia and Bankura */}
            <div className="sr-only">
              <Link to="/purulia">Purulia</Link>
              <Link to="/bankura">Bankura</Link>
            </div>

            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              if (item.hasDropdown) {
                return (
                  <div key={item.id} className="relative group">
                    <div className="flex items-center gap-0.5">
                      <a
                        href={isHome ? `#${item.id}` : `/#${item.id}`}
                        onClick={(e) => handleNavClick(e, item.id)}
                        className={`relative py-1 transition-colors flex items-center gap-1 ${
                          isActive
                            ? isScrolledOrSubpage
                              ? 'text-[#BA532B] font-semibold'
                              : 'text-white font-semibold'
                            : isScrolledOrSubpage
                            ? 'text-stone-700 dark:text-stone-300 hover:text-[#BA532B]'
                            : 'text-stone-300 hover:text-white'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#BA532B] rounded-full" />
                        )}
                      </a>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdown((prev) => (prev === 'destinations' ? null : 'destinations'));
                        }}
                        className={`p-1 rounded-md transition-colors ${
                          isScrolledOrSubpage
                            ? 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200'
                            : 'text-stone-300 hover:text-white'
                        }`}
                        aria-expanded={activeDropdown === 'destinations'}
                        aria-label="Toggle destinations dropdown"
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform ${
                            activeDropdown === 'destinations' ? 'rotate-180 text-[#BA532B]' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Destinations Dropdown Menu */}
                    {activeDropdown === 'destinations' && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-64 rounded-2xl bg-white/98 dark:bg-stone-950/98 backdrop-blur-2xl border border-stone-200 dark:border-stone-800 p-2 shadow-2xl animate-in fade-in zoom-in-95 duration-150 space-y-1 z-50">
                        <Link
                          to="/purulia"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800/80 text-stone-800 dark:text-stone-200 transition-colors"
                        >
                          <Mountain className="w-4 h-4 text-[#BA532B]" />
                          <div>
                            <div className="text-xs font-semibold text-stone-900 dark:text-white">Purulia</div>
                            <div className="text-[10px] text-stone-500 dark:text-stone-400">Ayodhya Hills, Bamni Falls & Chhau</div>
                          </div>
                        </Link>
                        <Link
                          to="/bankura"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800/80 text-stone-800 dark:text-stone-200 transition-colors"
                        >
                          <Landmark className="w-4 h-4 text-amber-500" />
                          <div>
                            <div className="text-xs font-semibold text-stone-900 dark:text-white">Bankura</div>
                            <div className="text-[10px] text-stone-500 dark:text-stone-400">Terracotta Temples, Mukutmanipur</div>
                          </div>
                        </Link>
                        <div className="border-t border-stone-200 dark:border-stone-800 my-1" />
                        <Link
                          to="/destinations"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center justify-between p-2 rounded-xl text-xs font-semibold text-[#BA532B] hover:bg-[#BA532B]/10 transition-colors"
                        >
                          <span>Browse All 22+ Destinations</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.id}
                  href={isHome ? `#${item.id}` : `/#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative py-1 transition-colors ${
                    isActive
                      ? isScrolledOrSubpage
                        ? 'text-[#BA532B] font-semibold'
                        : 'text-white font-semibold'
                      : isScrolledOrSubpage
                      ? 'text-stone-700 dark:text-stone-300 hover:text-[#BA532B]'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#BA532B] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* 3. Action Icons & Plan Your Trip Button */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 whitespace-nowrap">
            {/* Minimal & Aesthetic Search Bar Trigger */}
            <button
              type="button"
              onClick={() => setSearchDialogOpen(true)}
              className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition-all cursor-pointer group ${
                isHeaderSolid
                  ? 'border-stone-200/90 dark:border-white/10 bg-stone-100/70 dark:bg-white/5 text-stone-600 dark:text-stone-300 hover:border-laterite/40 hover:bg-stone-100'
                  : 'border-white/20 bg-white/10 text-stone-200 hover:bg-white/15 hover:border-white/30'
              }`}
              title="Search destinations"
              aria-label="Search destinations"
            >
              <Search className="w-3.5 h-3.5 opacity-70" />
              <span className="font-light text-[11px] tracking-wide">Search...</span>
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 opacity-80 group-hover:translate-x-0.5 transition-transform duration-200">
                <ArrowRight className="w-2.5 h-2.5 opacity-80" />
              </span>
            </button>

            {/* Mobile Search Icon */}
            <button
              type="button"
              onClick={() => setSearchDialogOpen(true)}
              className={`sm:hidden transition-colors p-2 rounded-full cursor-pointer ${
                isHeaderSolid
                  ? 'text-stone-700 dark:text-stone-300 hover:text-[#BA532B] hover:bg-stone-200/50 dark:hover:bg-stone-800/60'
                  : 'text-stone-200 hover:text-white hover:bg-white/10'
              }`}
              title="Search destinations"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist Heart Icon */}
            <button
              type="button"
              onClick={() => setWishlistOpen(true)}
              className={`relative transition-colors p-2 rounded-full cursor-pointer ${
                isHeaderSolid
                  ? 'text-stone-700 dark:text-stone-300 hover:text-[#BA532B] hover:bg-stone-200/50 dark:hover:bg-stone-800/60'
                  : 'text-stone-200 hover:text-white hover:bg-white/10'
              }`}
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart
                className={`w-4 sm:w-[1.125rem] h-4 sm:h-[1.125rem] ${
                  wishlist.length > 0 ? 'text-[#BA532B] fill-[#BA532B]' : ''
                }`}
              />
              {wishlist.length > 0 && (
                <span className="absolute 0 top-0.5 right-0.5 w-4 h-4 bg-[#BA532B] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* User Profile / Login Icon */}
            <Link
              to="/login"
              className={`transition-colors p-2 rounded-full hidden sm:inline-flex cursor-pointer ${
                isHeaderSolid
                  ? 'text-stone-700 dark:text-stone-300 hover:text-[#BA532B] hover:bg-stone-200/50 dark:hover:bg-stone-800/60'
                  : 'text-stone-200 hover:text-white hover:bg-white/10'
              }`}
              title="User Account"
              aria-label="Account"
            >
              <User className="w-4 sm:w-[1.125rem] h-4 sm:h-[1.125rem]" />
            </Link>

            {/* Rounded Plan Your Trip CTA (hidden on mobile to ensure hamburger button stays visible) */}
            <a
              href={isHome ? '#plan-trip' : '/#plan-trip'}
              onClick={(e) => handleNavClick(e, 'plan-trip')}
              aria-label="Plan My Trip"
              className="hidden md:inline-flex bg-[#BA532B] hover:bg-[#a64724] active:scale-95 text-white font-medium text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 shrink-0 whitespace-nowrap items-center gap-1.5 border border-white/10"
            >
              <span>Plan Your Trip</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5 shrink-0" />
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`xl:hidden p-2 rounded-xl transition-colors cursor-pointer flex items-center justify-center ${
                isHeaderSolid
                  ? 'text-stone-800 dark:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-800'
                  : 'text-stone-200 hover:text-white hover:bg-white/10'
              }`}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Drawer with Backdrop */}
      {mobileMenuOpen && (
        <>
          {/* Dimmed backdrop overlay */}
          <div
            className="fixed inset-0 top-[58px] sm:top-[68px] bg-black/50 backdrop-blur-xs xl:hidden z-40 transition-opacity duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="relative z-50 xl:hidden bg-[#FAF8F5]/98 dark:bg-stone-950/98 backdrop-blur-2xl border-t border-[#E8E2D9] dark:border-stone-800 px-5 sm:px-6 py-5 space-y-4 shadow-2xl max-h-[calc(100vh-70px)] overflow-y-auto">
            {/* Quick Search */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchDialogOpen(true);
              }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 text-xs font-medium group cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#BA532B]" />
                <span>Search Purulia & Bankura...</span>
              </span>
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-stone-200/80 dark:bg-stone-800 text-stone-500 dark:text-stone-400 group-hover:translate-x-0.5 transition-transform duration-200">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            {/* District Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <Link
                to="/purulia"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-stone-100/70 dark:bg-stone-900/70 border border-stone-200 dark:border-stone-800 hover:border-[#BA532B]/50 transition-colors"
              >
                <Mountain className="w-4 h-4 text-[#BA532B] mb-1" />
                <div className="text-xs font-bold text-stone-900 dark:text-white">Purulia</div>
                <div className="text-[10px] text-stone-500 dark:text-stone-400">Ayodhya Hills</div>
              </Link>

              <Link
                to="/bankura"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-stone-100/70 dark:bg-stone-900/70 border border-stone-200 dark:border-stone-800 hover:border-amber-500/50 transition-colors"
              >
                <Landmark className="w-4 h-4 text-amber-500 mb-1" />
                <div className="text-xs font-bold text-stone-900 dark:text-white">Bankura</div>
                <div className="text-[10px] text-stone-500 dark:text-stone-400">Terracotta & Silk</div>
              </Link>
            </div>

            {/* Navigation Links with Smooth Scrolling */}
            <div className="flex flex-col space-y-1 pt-2 border-t border-stone-200 dark:border-stone-800 text-sm">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={isHome ? `#${item.id}` : `/#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`py-2 px-3 rounded-xl font-medium transition-colors flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-[#BA532B]/10 text-[#BA532B] font-semibold'
                        : 'text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#BA532B]" />}
                  </a>
                );
              })}
            </div>

            {/* Mobile Plan Your Trip CTA */}
            <div className="pt-3 border-t border-stone-200 dark:border-stone-800">
              <a
                href={isHome ? '#plan-trip' : '/#plan-trip'}
                onClick={(e) => handleNavClick(e, 'plan-trip')}
                aria-label="Plan My Trip"
                className="w-full flex items-center justify-center gap-2 bg-[#BA532B] hover:bg-[#a64724] text-white py-3 rounded-full text-sm font-semibold shadow-lg shadow-[#BA532B]/20"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Plan Your Trip</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Navbar;
