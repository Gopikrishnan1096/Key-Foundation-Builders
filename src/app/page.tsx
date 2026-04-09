import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { StatsCounters } from "@/components/home/StatsCounters";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { EstimateCalculator } from "@/components/home/EstimateCalculator";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeCta } from "@/components/home/HomeCta";
import { site } from "@/lib/site";

import { BrandStory } from "@/components/home/BrandStory";

export const metadata: Metadata = {
  title: `${site.name} | Premium Builders & Construction Company in Kerala`,
  description: `Kerala's premier luxury construction company — Key Foundation Builders. Redefining landmarks with architectural excellence. 10+ years of trust in Kochi, Ernakulam & across Kerala.`,
  alternates: {
    canonical: site.siteUrl,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStory />
      <ServicesPreview />
      <FeaturedProjects />
      <EstimateCalculator />
      <WhyChooseUs />
      <Testimonials />
      <HomeCta />
    </>
  );
}
