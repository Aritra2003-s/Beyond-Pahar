import React from 'react';
import { Calendar, CloudSun, Leaf, Sun, CloudRain } from 'lucide-react';
import winterEscapesImg from '@/assets/Winter Escapes.jpg';
import springJourneysImg from '@/assets/Spring Journeys.jpg';
import monsoonLandscapesImg from '@/assets/Monsoon Landscapes.webp';
import summerPlanningImg from '@/assets/Summer Planning.JPG';

export function SeasonalTravelSection() {
  const seasons = [
    {
      title: 'Winter Escapes',
      months: 'November to February',
      description: 'Crisp morning air and mild sunny afternoons make this the classic period for climbing Joychandi Pahar, hiking down to Bamni Falls, and exploring Bishnupur’s open-air temple complexes.',
      image: winterEscapesImg,
      tag: 'Crisp Days & Clear Skies',
    },
    {
      title: 'Spring Journeys',
      months: 'Late February to Mid March',
      description: 'The deciduous Sal and Mahua woodlands burst into vivid scarlet as Palash and Shimul trees flower in abundance across the hills of Baranti and Ajodhya.',
      image: springJourneysImg,
      tag: 'Palash Flower Bloom',
    },
    {
      title: 'Monsoon Landscapes',
      months: 'July to September',
      description: 'Torrential downpours replenish the hill aquifers, turning Bamni and Turga into roaring cascades while filling Mukutmanipur and Khairabera reservoirs to their lush emerald shorelines.',
      image: monsoonLandscapesImg,
      tag: 'Full Cascades & Green Hills',
    },
    {
      title: 'Summer Planning',
      months: 'April to June',
      description: 'Daytime temperatures are high across the red laterite plains. Travelers visiting in early summer prioritize dawn temple circuits, evening lake breezes, and restful forest retreats with shade.',
      image: summerPlanningImg,
      tag: 'Early Dawn & Lakeside Calm',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-offwhite dark:bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-laterite font-mono">
            Rarh Climate Cycles
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-charcoal dark:text-cream">
            Every season has its own story.
          </h2>
          <p className="text-sm sm:text-base text-softgrey leading-relaxed">
            From the fiery crimson Palash canopy of early spring to the crisp winter temple breezes and dramatic monsoon waterfalls.
          </p>
        </div>

        {/* 4 Editorial Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map((item, idx) => (
            <div
              key={idx}
              className="editorial-card rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="editorial-img-wrap aspect-[4/3] w-full">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3">
                  <span className="bg-charcoal/85 text-cream text-[10px] font-semibold px-2 py-0.5 rounded-md font-mono">
                    {item.months}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-laterite tracking-wider">
                    {item.tag}
                  </span>
                  <h3 className="font-editorial text-xl font-bold text-charcoal dark:text-cream">
                    {item.title}
                  </h3>
                  <p className="text-xs text-softgrey leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
