import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  ArrowRight,
  Play,
  Mountain,
  Landmark,
  Compass,
  Bed,
  X
} from 'lucide-react';
import heroBg from '@/assets/hero-sunset-landscape.jpg';

export function HeroSection() {
  const [showStoryModal, setShowStoryModal] = useState(false);

  const featureCards = [
    {
      icon: Mountain,
      title: 'Scenic Hills',
      subtitle: 'Purulia & Bankura',
      link: '/destinations',
    },
    {
      icon: Landmark,
      title: 'Rich Heritage',
      subtitle: 'Culture & Tradition',
      link: '/destinations?category=Heritage%20%26%20Architecture',
    },
    {
      icon: Compass,
      title: 'Unique Experiences',
      subtitle: 'Nature & Adventure',
      link: '#experiences',
    },
    {
      icon: Bed,
      title: 'Comfy Stays',
      subtitle: 'From Homestays to Resorts',
      link: '/stays',
    },
  ];

  const scrollToNext = () => {
    const nextSection = document.getElementById('brand-story');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 overflow-hidden bg-stone-950 text-white select-none">
      {/* 1. Cinematic Background Image (Sunset over hills without person or text) */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Beyond the hills. Into the wild - BeyondPahar"
          className="w-full h-full object-cover object-center scale-[1.01] transform"
          loading="eager"
        />
        {/* Soft cinematic vignette overlay preserving golden sunset on right, maximizing text clarity on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/40" />
      </div>

      {/* 2. Main Hero Typography & Actions */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10 flex-1 flex flex-col justify-center max-w-7xl">
        <div className="max-w-2xl xl:max-w-3xl">
          {/* Breadcrumb Tagline */}
          <div className="inline-flex items-center gap-2 text-stone-200/90 text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold mb-4 sm:mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#BA532B] shrink-0" />
            <span>PURULIA & BANKURA</span>
            <span className="text-stone-400">|</span>
            <span>WEST BENGAL</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.05] text-balance drop-shadow-md">
            Beyond the hills.<br />
            Into the wild.
          </h1>

          {/* Description Paragraph */}
          <p className="text-stone-200/95 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl mt-5 sm:mt-7 mb-8 sm:mb-10 text-balance drop-shadow-sm">
            From the red earth and quiet hills of Purulia to the terracotta heritage and tranquil landscapes of Bankura, find journeys that stay with you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-7">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 bg-[#BA532B] hover:bg-[#a64724] active:scale-95 text-white font-medium text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-2xl shadow-black/50 hover:shadow-orange-950/50 hover:scale-[1.02] transition-all duration-200"
            >
              <span>Explore Destinations</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <button
              type="button"
              onClick={() => setShowStoryModal(true)}
              className="inline-flex items-center gap-3.5 text-white hover:text-amber-200 transition-colors group cursor-pointer"
              aria-label="Watch Our Story"
            >
              <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-white/25 group-hover:scale-105 transition-all shadow-lg">
                <Play className="w-4 sm:w-5 h-4 sm:h-5 fill-white text-white ml-0.5" />
              </div>
              <span className="font-medium text-sm sm:text-base tracking-wide">Watch Our Story</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Bottom Row: 4 Feature Cards */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl pt-8 sm:pt-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            const isAnchor = card.link.startsWith('#');
            return isAnchor ? (
              <a
                key={idx}
                href={card.link}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(card.link)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 p-4 sm:p-5 flex flex-col justify-between hover:bg-black/55 hover:border-white/25 transition-all duration-200 group text-left cursor-pointer"
              >
                <Icon className="w-6 h-6 text-stone-200 mb-3 sm:mb-4 stroke-[1.75] group-hover:text-amber-400 group-hover:scale-110 transition-all" />
                <div>
                  <div className="font-semibold text-white text-sm sm:text-[0.95rem] leading-tight">
                    {card.title}
                  </div>
                  <div className="text-[11px] text-stone-300/80 mt-1 leading-tight">
                    {card.subtitle}
                  </div>
                </div>
              </a>
            ) : (
              <Link
                key={idx}
                to={card.link}
                className="rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 p-4 sm:p-5 flex flex-col justify-between hover:bg-black/55 hover:border-white/25 transition-all duration-200 group text-left"
              >
                <Icon className="w-6 h-6 text-stone-200 mb-3 sm:mb-4 stroke-[1.75] group-hover:text-amber-400 group-hover:scale-110 transition-all" />
                <div>
                  <div className="font-semibold text-white text-sm sm:text-[0.95rem] leading-tight">
                    {card.title}
                  </div>
                  <div className="text-[11px] text-stone-300/80 mt-1 leading-tight">
                    {card.subtitle}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 4. Scroll Down Indicator on Right Edge */}
      <button
        onClick={scrollToNext}
        className="hidden 2xl:flex absolute right-8 bottom-24 flex-col items-center gap-2 select-none text-stone-300/80 hover:text-white transition-colors cursor-pointer group"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-mono [writing-mode:vertical-lr] rotate-180 group-hover:text-amber-300 transition-colors">
          Scroll Down
        </span>
        <div className="w-px h-10 border-l border-dashed border-stone-300/60 group-hover:border-white transition-colors" />
        <span className="text-xs animate-bounce">↓</span>
      </button>

      {/* 5. Watch Our Story Modal */}
      {showStoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-3xl bg-stone-900 border border-stone-700 p-6 sm:p-8 shadow-2xl text-left">
            <button
              onClick={() => setShowStoryModal(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close story modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#BA532B] text-xs uppercase font-mono tracking-widest mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>BeyondPahar Odyssey</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
              The Living Heart of Purulia & Bankura
            </h3>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
              Experience the ancient terracotta temples of Bishnupur whispering centuries of Malla dynasty glory, the acrobatic vigor of Chhau dancers leaping under the moonlit Sal forest, and the majestic granite hills of Ayodhya welcoming the golden dawn.
            </p>

            <div className="aspect-video w-full rounded-2xl overflow-hidden relative bg-black shadow-inner">
              <img
                src={heroBg}
                alt="BeyondPahar Cinematic Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-stone-950/40 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-[#BA532B] flex items-center justify-center mx-auto mb-3 shadow-xl">
                    <Play className="w-6 h-6 fill-white text-white ml-0.5" />
                  </div>
                  <div className="text-sm font-medium text-white">Cinematic Docu-Story Preview</div>
                  <div className="text-xs text-stone-300">Available across curated guided expeditions</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <a
                href="#experiences"
                onClick={(e) => {
                  e.preventDefault();
                  setShowStoryModal(false);
                  document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-[#BA532B] hover:bg-[#a64724] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                <span>Explore Curated Experiences</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroSection;
