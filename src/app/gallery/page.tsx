import type { Metadata } from "next";
import { GalleryClient } from "@/components/gallery/GalleryClient";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery | Our Work",
  description:
    "Explore our portfolio of completed homes, commercial buildings, and construction projects across Kerala. See the quality craftsmanship of Key Foundation Builders.",
  alternates: {
    canonical: `${site.siteUrl}/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <GalleryClient />
    </div>
  );
}
