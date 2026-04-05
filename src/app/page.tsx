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
  title: `${site.name} | Best Construction Company in Kochi, Kerala`,
  description: `Kerala's trusted construction company — Key Foundation Builders. 10+ years experience, 50+ projects completed across Kochi, Thrissur, Kozhikode & all of Kerala. Specialising in house construction, commercial buildings & warehouses. Call today for a free site visit.`,
  alternates: {
    canonical: site.siteUrl,
  },
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
