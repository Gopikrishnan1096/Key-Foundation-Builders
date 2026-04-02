import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { StatsCounters } from "@/components/home/StatsCounters";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeCta } from "@/components/home/HomeCta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: `${site.tagline} Homes, commercial buildings, warehouses, and renovations across Kerala.`,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsCounters />
      <ServicesPreview />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <HomeCta />
    </>
  );
}
