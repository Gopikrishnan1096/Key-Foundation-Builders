import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { BrandStory } from "@/components/home/BrandStory";
import { StatsCounters } from "@/components/home/StatsCounters";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { LocationsGrid } from "@/components/home/LocationsGrid";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { EstimateCalculator } from "@/components/home/EstimateCalculator";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeCta } from "@/components/home/HomeCta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | Premium Builders & Construction Company in Kerala`,
  description: `Kerala's premier luxury construction company — Key Foundation Builders. Redefining landmarks with architectural excellence. 30+ years of trust in Kochi, Ernakulam & across Kerala.`,
  alternates: {
    canonical: site.siteUrl,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStory />
      <StatsCounters />
      <ServicesPreview />
      <LocationsGrid />
      <FeaturedProjects />
      <EstimateCalculator />
      <Testimonials />
      <HomeCta />
    </>
  );
}
