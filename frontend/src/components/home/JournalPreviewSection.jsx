import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, MapPin, Sparkles, Feather, Calendar } from 'lucide-react';
import { journalArticles } from '@/data/journal';

export function JournalPreviewSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] dark:bg-stone-950 border-y border-[#E8E2D9] dark:border-stone-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#BA532B]/10 border border-[#BA532B]/20 text-[#BA532B] dark:text-[#de6b3e] text-xs font-bold uppercase tracking-wider">
            <Feather className="w-3.5 h-3.5" />
            <span>The Rarh Chronicle</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-tight">
            Travel Journal & Field Dispatches
          </h2>

          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-light">
            Essays on seasonal botanical cycles, architectural archaeology, and intimate profiles of rural artists preserving centuries of Bengal craftsmanship.
          </p>
        </div>

        {/* 3 Distinct Featured Journal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {journalArticles.map((art) => (
            <article
              key={art.slug}
              className="group rounded-3xl bg-white dark:bg-stone-900 border border-[#E8E2D9] dark:border-stone-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
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
                  <span className="bg-[#BA532B] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
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
                    <MapPin className="w-3.5 h-3.5 text-[#BA532B]" />
                    <span className="font-semibold">{art.district}</span>
                  </div>
                </div>
              </div>

              {/* Card Body - Clean, Unhidden Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3.5">
                  <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#BA532B]" />
                    <span>{art.publishedDate}</span>
                    <span>•</span>
                    <span className="text-stone-700 dark:text-stone-300 font-semibold">{art.author}</span>
                  </div>

                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 leading-snug group-hover:text-[#BA532B] transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                    {art.subtitle}
                  </p>
                </div>

                {/* Read Article Action */}
                <div className="pt-4 border-t border-[#E8E2D9] dark:border-stone-800 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                    Dispatch #{art.slug.slice(0, 7)}
                  </span>

                  <Link
                    to={`/journal/${art.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#BA532B] group-hover:text-[#a64724] hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JournalPreviewSection;
