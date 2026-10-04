import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import imgPalashLangur from '@/assets/1.0.jpg';
import imgMarbleLake from '@/assets/2.jpg';
import imgGhatRoad from '@/assets/3.jpg';
import imgChhauDance from '@/assets/4.jpg';
import imgSalForest from '@/assets/5.webp';
import imgTerracottaTemples from '@/assets/6.jpg';
import imgBankuraHorses from '@/assets/7.jpg';
import imgVillageLife from '@/assets/8.jpg';
import imgKashipurRajbari from '@/assets/10.webp';

export function PhotoGallerySection() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const gallery = [
    {
      url: imgPalashLangur,
      title: 'Hanuman Langur in Palash Bloom',
      location: 'Ayodhya Hills, Purulia',
      span: 'sm:col-span-2 lg:col-span-2 lg:row-span-2 h-72 sm:h-80 lg:h-[24rem]',
    },
    {
      url: imgMarbleLake,
      title: 'Blue Marble Lake',
      location: 'Ayodhya Hills, Purulia',
      span: 'col-span-1 h-48 sm:h-56 lg:h-[11.5rem]',
    },
    {
      url: imgGhatRoad,
      title: 'Winding Mountain Ghat Roads',
      location: 'Ayodhya Ridge, Purulia',
      span: 'col-span-1 h-48 sm:h-56 lg:h-[11.5rem]',
    },
    {
      url: imgChhauDance,
      title: 'Purulia Chhau Martial Dancers',
      location: 'Baghmundi, Purulia',
      span: 'col-span-1 h-48 sm:h-56 lg:h-60',
    },
    {
      url: imgSalForest,
      title: 'Canopy of Whispering Sal Forest',
      location: 'Joypur Forest, Bankura',
      span: 'col-span-1 h-48 sm:h-56 lg:h-60',
    },
    {
      url: imgTerracottaTemples,
      title: '17th-Century Terracotta Temples',
      location: 'Bishnupur, Bankura',
      span: 'col-span-1 h-48 sm:h-56 lg:h-60',
    },
    {
      url: imgBankuraHorses,
      title: 'Panchmura Terracotta Bankura Horses',
      location: 'Panchmura, Bankura',
      span: 'col-span-1 h-48 sm:h-56 lg:h-60',
    },
    {
      url: imgVillageLife,
      title: 'Traditional Village Homestead',
      location: 'Rural Purulia & Bankura',
      span: 'col-span-1 h-48 sm:h-56 lg:h-60',
    },
    {
      url: imgKashipurRajbari,
      title: 'Historic Kashipur Rajbari Palace',
      location: 'Kashipur, Purulia',
      span: 'col-span-1 h-48 sm:h-56 lg:h-60',
    },
  ];

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedPhotoIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => (prev + 1) % gallery.length);
      }
      if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, gallery.length]);

  return (
    <section className="py-20 lg:py-28 bg-offwhite dark:bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-laterite font-mono">
            Visual Portfolio
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-charcoal dark:text-cream">
            Moments from Purulia & Bankura
          </h2>
          <p className="text-sm text-softgrey">
            Click on any photograph to view in high resolution.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {gallery.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhotoIndex(idx)}
              className={`editorial-card group relative cursor-pointer rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all ${photo.span}`}
            >
              <img
                src={photo.url}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] font-mono uppercase text-beige">{photo.location}</span>
                <span className="font-editorial font-bold text-sm">{photo.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Accessible Lightbox Modal */}
        {selectedPhotoIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Photo Lightbox"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
              }}
              className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div
              className="max-w-4xl max-h-[85vh] flex flex-col items-center space-y-3"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gallery[selectedPhotoIndex].url}
                alt={gallery[selectedPhotoIndex].title}
                className="max-h-[75vh] w-auto rounded-xl object-contain shadow-2xl"
              />
              <div className="text-center text-white space-y-0.5">
                <div className="font-editorial text-lg font-bold">{gallery[selectedPhotoIndex].title}</div>
                <div className="text-xs text-beige font-mono">{gallery[selectedPhotoIndex].location}</div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex((prev) => (prev + 1) % gallery.length);
              }}
              className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
