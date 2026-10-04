import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  MapPin,
  Share2,
  Check,
  Compass,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { journalArticles } from '@/data/journal';
import { Button } from '@/components/ui/Button';

export function JournalDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const article = journalArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="py-24 container mx-auto px-4 text-center space-y-4">
        <h2 className="font-editorial text-3xl font-bold text-charcoal dark:text-cream">Article Not Found</h2>
        <p className="text-softgrey text-sm">The requested journal piece could not be located.</p>
        <Button asChild variant="outline" className="rounded-xl">
          <Link to="/journal">Back to All Dispatches</Link>
        </Button>
      </div>
    );
  }

  // Related articles (all articles except current)
  const relatedArticles = journalArticles.filter((a) => a.slug !== slug).slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareTitle = encodeURIComponent(`${article.title} — BeyondPahar Journal`);
  const shareUrl = encodeURIComponent(window.location.href);

  return (
    <article className="min-h-screen bg-[#FBF9F5] dark:bg-[#0D1814] text-charcoal dark:text-cream pb-24 transition-colors duration-300">
      {/* Comprehensive SEO Metadata */}
      <Helmet>
        <title>{`${article.title} | The Rarh Chronicle — BeyondPahar`}</title>
        <meta name="description" content={article.subtitle} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.subtitle} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={article.coverImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.subtitle} />
      </Helmet>

      {/* Editorial Header */}
      <header className="bg-white/80 dark:bg-[#121E19]/80 backdrop-blur-md border-b border-stone-200/80 dark:border-white/10 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/journal')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-laterite hover:text-terracotta transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Journal Dispatches</span>
            </button>

            <span className="text-xs font-mono uppercase tracking-wider text-softgrey dark:text-cream/60">
              {article.district} District
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-laterite text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                {article.category}
              </span>
              <span className="text-xs text-softgrey dark:text-cream/60 font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                {article.readTime}
              </span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold text-charcoal dark:text-cream leading-[1.12]">
              {article.title}
            </h1>

            <p className="text-base sm:text-xl text-softgrey dark:text-cream/80 font-light leading-relaxed">
              {article.subtitle}
            </p>

            {/* Author Byline & Social Sharing */}
            <div className="pt-6 border-t border-stone-100 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-laterite/10 dark:bg-laterite/20 text-laterite dark:text-terracotta flex items-center justify-center font-editorial font-bold text-sm">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <strong className="text-charcoal dark:text-cream block text-sm font-semibold">
                    {article.author}
                  </strong>
                  <span className="text-xs text-softgrey dark:text-cream/60 font-light">
                    {article.authorRole} • {article.publishedDate}
                  </span>
                </div>
              </div>

              {/* Social Sharing Bar */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 dark:border-white/10 text-xs font-medium bg-white dark:bg-white/5 hover:border-laterite/40 transition-colors cursor-pointer"
                  title="Copy article link"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-3.5 w-3.5 text-stone-500" />
                      <span>Share Link</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl border border-stone-200 dark:border-white/10 text-xs font-medium bg-white dark:bg-white/5 hover:border-emerald-500/40 text-stone-600 dark:text-stone-300 hover:text-emerald-500 transition-colors"
                >
                  WhatsApp
                </a>

                <a
                  href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl border border-stone-200 dark:border-white/10 text-xs font-medium bg-white dark:bg-white/5 hover:border-sky-500/40 text-stone-600 dark:text-stone-300 hover:text-sky-500 transition-colors"
                >
                  X
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Cover Photograph */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl my-10">
        <div className="rounded-3xl overflow-hidden shadow-md h-[340px] sm:h-[460px] relative bg-stone-100 dark:bg-stone-800">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Body Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-charcoal/90 dark:text-cream/90 text-sm sm:text-base leading-relaxed space-y-6 whitespace-pre-line font-serif text-justify sm:text-left">
          {article.content}
        </div>

        {/* Plan Trip CTA Box */}
        <div className="my-14 p-8 rounded-3xl bg-laterite/5 dark:bg-laterite/10 border border-laterite/20 text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-laterite dark:text-terracotta font-semibold">
            Inspired By This Dispatch?
          </span>
          <h3 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream">
            Experience {article.district} Firsthand
          </h3>
          <p className="text-xs sm:text-sm text-softgrey dark:text-cream/70 max-w-md mx-auto font-light leading-relaxed">
            Our local coordinators can arrange private visits to the exact master craftsmen and scenic trails documented in this essay.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="bg-laterite hover:bg-laterite/90 text-white rounded-xl text-xs font-semibold px-6 py-2.5">
              <Link to="/plan-your-trip">Plan a Journey Here</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-xl text-xs font-semibold px-6 py-2.5">
              <Link to={`/${article.district.toLowerCase()}`}>View {article.district} Guide</Link>
            </Button>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="pt-10 border-t border-stone-200/80 dark:border-white/10 space-y-6">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-laterite" />
              <h3 className="font-editorial text-xl font-bold text-charcoal dark:text-cream">
                Related Field Dispatches
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/journal/${rel.slug}`}
                  className="group block p-5 rounded-2xl bg-white dark:bg-[#14231D] border border-stone-200/80 dark:border-white/10 hover:border-laterite/40 transition-all shadow-xs"
                >
                  <div className="flex items-center gap-2 text-[11px] font-mono text-softgrey dark:text-cream/60 mb-2">
                    <span className="text-laterite font-semibold">{rel.category}</span>
                    <span>•</span>
                    <span>{rel.readTime}</span>
                  </div>
                  <h4 className="font-editorial text-base font-bold text-charcoal dark:text-cream group-hover:text-laterite transition-colors leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-softgrey dark:text-cream/60 line-clamp-2 mt-1.5 font-light">
                    {rel.subtitle}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default JournalDetailPage;
