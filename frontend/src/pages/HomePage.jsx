import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '@/components/home/HeroSection';
import { BrandStorySection } from '@/components/home/BrandStorySection';
import { DestinationShowcaseSection } from '@/components/home/DestinationShowcaseSection';
import { TwoMoodsSection } from '@/components/home/TwoMoodsSection';
import { ExperienceTypesSection } from '@/components/home/ExperienceTypesSection';
import { ChhauCultureSection } from '@/components/home/ChhauCultureSection';
import { BishnupurHeritageSection } from '@/components/home/BishnupurHeritageSection';
import { StaysRetreatsSection } from '@/components/home/StaysRetreatsSection';
import { FeaturedPackagesSection } from '@/components/home/FeaturedPackagesSection';
import { CustomTripPlannerSection } from '@/components/home/CustomTripPlannerSection';
import { SeasonalTravelSection } from '@/components/home/SeasonalTravelSection';
import { WhyRarhTrailsSection } from '@/components/home/WhyRarhTrailsSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { JournalPreviewSection } from '@/components/home/JournalPreviewSection';
import { PhotoGallerySection } from '@/components/home/PhotoGallerySection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { ResponsibleTourismSection } from '@/components/home/ResponsibleTourismSection';
import { ContactSection } from '@/components/home/ContactSection';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>BeyondPahar — Beyond the hills. Into the wild | Purulia & Bankura Travel</title>
        <meta
          name="description"
          content="From the red earth and quiet hills of Purulia to the terracotta heritage and tranquil landscapes of Bankura, find journeys that stay with you."
        />
      </Helmet>

      <div>
        {/* Section 1: Cinematic hero */}
        <section id="home">
          <HeroSection />
        </section>

        {/* Brand story & philosophy */}
        <BrandStorySection />

        {/* Section 2: Explore the destinations */}
        <section id="destinations">
          <DestinationShowcaseSection />
          <TwoMoodsSection />
        </section>

        {/* Section 3: Experiences & Masterclasses */}
        <section id="experiences">
          <ExperienceTypesSection />
          <ChhauCultureSection />
          <BishnupurHeritageSection />
        </section>

        {/* Section 4: Stays and retreats */}
        <section id="stays">
          <StaysRetreatsSection />
        </section>

        {/* Section 5: Featured packages */}
        <section id="packages">
          <FeaturedPackagesSection />
        </section>

        {/* Section 6: Custom trip planner */}
        <section id="plan-trip">
          <CustomTripPlannerSection />
        </section>

        {/* Section 7: Seasonal travel */}
        <SeasonalTravelSection />

        {/* Section 8: How it works */}
        <HowItWorksSection />

        {/* Section 9: Travel journal */}
        <section id="journal">
          <JournalPreviewSection />
        </section>

        {/* Section 10: About BeyondPahar */}
        <section id="about">
          <WhyRarhTrailsSection />
          <ResponsibleTourismSection />
        </section>

        {/* Section 11: Photo gallery */}
        <PhotoGallerySection />

        {/* Section 12: Testimonials */}
        <TestimonialsSection />

        {/* Section 13: Regional Hubs & Contact Desk */}
        <section id="contact">
          <ContactSection />
        </section>

        {/* Section 14: Final CTA */}
        <FinalCtaSection />
      </div>
    </>
  );
}

export default HomePage;
