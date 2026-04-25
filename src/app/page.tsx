import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBadgeStrip } from "@/components/home/TrustBadgeStrip";
import { BrandStory } from "@/components/home/BrandStory";
import { StatsCounters } from "@/components/home/StatsCounters";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { EstimateCalculator } from "@/components/home/EstimateCalculator";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeCta } from "@/components/home/HomeCta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | Kerala's Premier Construction Company`,
  description: `Kerala's most trusted construction company — Key Foundation Builders. 30+ years of residential, commercial & steel structure excellence across Kochi, Ernakulam, Thrissur & all Kerala. Get a free quote today.`,
  alternates: {
    canonical: site.siteUrl,
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic hero with CTA + floating stats */}
      <Hero />

      {/* 2. Trust badge marquee — builds instant credibility */}
      <TrustBadgeStrip />

      {/* 3. Brand story — who we are */}
      <BrandStory />

      {/* 4. Animated stats counters */}
      <StatsCounters />

      {/* 5. Services with image cards */}
      <ServicesPreview />

      {/* 6. Why choose us — differentiators */}
      <WhyChooseUs />

      {/* 7. Featured project portfolio */}
      <FeaturedProjects />

      {/* 8. Estimate calculator — interactive lead tool */}
      <EstimateCalculator />

      {/* 9. Client testimonials */}
      <Testimonials />

      {/* 10. Lead capture: quote form + contact */}
      <HomeCta />
    </>
  );
}
