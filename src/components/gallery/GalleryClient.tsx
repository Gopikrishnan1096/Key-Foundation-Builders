"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Container } from "@/components/ui/Container";

export type GalleryCategory = "all" | "residential" | "commercial" | "construction";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: GalleryCategory;
  caption: string;
  subcaption?: string;
}

const images: GalleryImage[] = [
  {
    id: 1,
    src: "/gallery/house-render-1.jpg",
    alt: "Modern single-storey house with stone cladding and flat roof",
    category: "residential",
    caption: "Modern Residence — Kochi",
    subcaption: "Stone cladding & flat roof design with landscaped courtyard",
  },
  {
    id: 2,
    src: "/gallery/house-render-2.jpg",
    alt: "Contemporary house with purple facade and wooden window frames",
    category: "residential",
    caption: "Contemporary Villa — Thrissur",
    subcaption: "Contemporary finish with premium wooden window frames",
  },
  {
    id: 3,
    src: "/gallery/house-render-3.jpg",
    alt: "Elegant house with gabled roof and warm evening lighting",
    category: "residential",
    caption: "Elegant Home — Kozhikode",
    subcaption: "Gabled roof with warm exterior lighting and tropical landscaping",
  },
  {
    id: 4,
    src: "/gallery/construction-site-1.jpg",
    alt: "Multi-storey commercial building under construction with scaffolding",
    category: "commercial",
    caption: "Commercial Complex — Kerala",
    subcaption: "Multi-storey commercial space nearing completion",
  },
  {
    id: 5,
    src: "/gallery/construction-site-2.jpg",
    alt: "Large building under construction with concrete block walls and scaffolding",
    category: "construction",
    caption: "Large-Scale Project — Under Construction",
    subcaption: "Multi-level structure during active construction phase",
  },
];

const categories: { label: string; value: GalleryCategory }[] = [
  { label: "All Projects", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Construction", value: "construction" },
];

export function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + filtered.length) % filtered.length
    );
  }, [filtered.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % filtered.length
    );
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, prev, next]);

  const currentImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-28 pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.15),transparent)]"
        />
        <Container className="relative z-10 text-center">
          <span className="inline-block rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400 ring-1 ring-amber-500/20">
            Our Portfolio
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Project <span className="text-amber-400">Gallery</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Explore our completed homes, commercial spaces, and ongoing
            construction projects across Kerala — every project built with
            precision and pride.
          </p>
        </Container>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[4.5rem] sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.value}
                id={`gallery-filter-${cat.value}`}
                onClick={() => setActiveCategory(cat.value)}
                className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.value
                    ? "bg-amber-500 text-white shadow-md shadow-amber-500/30"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
            <span className="ml-auto shrink-0 text-sm text-slate-400">
              {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <Container>
          {filtered.length === 0 ? (
            <p className="py-20 text-center text-slate-500">
              No photos in this category yet.
            </p>
          ) : (
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 space-y-4">
              {filtered.map((img, i) => (
                <div
                  key={img.id}
                  className="group relative break-inside-avoid cursor-pointer overflow-hidden rounded-2xl bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  onClick={() => openLightbox(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${img.caption}`}
                  onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}
                >
                  <div className="relative">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={800}
                      height={600}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex w-full items-end justify-between">
                        <div>
                          <p className="text-sm font-bold text-white">
                            {img.caption}
                          </p>
                          {img.subcaption && (
                            <p className="mt-0.5 text-xs text-slate-300">
                              {img.subcaption}
                            </p>
                          )}
                        </div>
                        <div className="ml-3 shrink-0 rounded-full bg-amber-500 p-2 text-white shadow-lg">
                          <ZoomIn className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                    {/* Category badge */}
                    <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium capitalize text-white backdrop-blur-sm">
                      {img.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 border-t border-amber-100">
        <Container className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Love What You See?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Let&apos;s build your dream home or commercial space together. Get in
            touch for a free consultation and site visit.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-amber-500/30 transition hover:bg-amber-400"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-500 hover:text-amber-600"
            >
              View All Projects
            </Link>
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      {currentImage && lightboxIndex !== null && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close */}
          <button
            id="lightbox-close"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev */}
          {filtered.length > 1 && (
            <button
              id="lightbox-prev"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/20 sm:left-6"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-h-[85vh] max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={1200}
              height={900}
              className="max-h-[80vh] w-full rounded-xl object-contain shadow-2xl"
              priority
            />
            <div className="mt-4 text-center">
              <p className="text-base font-semibold text-white">
                {currentImage.caption}
              </p>
              {currentImage.subcaption && (
                <p className="mt-1 text-sm text-slate-400">
                  {currentImage.subcaption}
                </p>
              )}
              <p className="mt-2 text-xs text-slate-500">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>

          {/* Next */}
          {filtered.length > 1 && (
            <button
              id="lightbox-next"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/20 sm:right-6"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>
      )}
    </>
  );
}
