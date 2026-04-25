"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2400",
    tag: "Residential Excellence",
    title: "Kerala's Most Trusted\nBuilding Partner",
    description:
      "30 years of engineering integrity — building homes, landmarks & legacies that stand through every monsoon.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2400",
    tag: "Luxury Villas & Homes",
    title: "Precision Engineering.\nEnduring Architecture.",
    description:
      "Bespoke luxury villas and premium residences crafted with superior materials and structural mastery.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=2400",
    tag: "Commercial & Industrial",
    title: "Commercial Excellence\nAcross Every District.",
    description:
      "State-of-the-art commercial complexes, warehouses, and steel structures that define modern Kerala.",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 300);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  const slide = slides[currentSlide];

  return (
    <section
      className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden"
      aria-label="Hero banner"
    >
      {/* ── Sliding Backgrounds ── */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, idx) => (
          <div
            key={s.image}
            className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={s.image}
              alt={`Slide ${idx + 1}`}
              fill
              priority={idx === 0}
              sizes="100vw"
              className={`object-cover transition-transform duration-[12000ms] ease-linear ${
                idx === currentSlide ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        ))}

        {/* Cinematic gradient overlay — stronger at bottom for text readability */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        {/* Left vignette */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* ── Text Content ── */}
      <div className="relative z-30 w-full px-6 text-center">
        <div className="max-w-[960px] mx-auto">

          {/* Gold tag — slide-specific */}
          <div
            key={`tag-${currentSlide}`}
            className={`transition-all duration-500 ${
              isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            <span className="inline-flex items-center gap-2 mb-7">
              <span className="h-[1px] w-8 bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-[10px] font-bold tracking-[0.45em] uppercase">
                {slide.tag}
              </span>
              <span className="h-[1px] w-8 bg-[#C9A96E]" />
            </span>
          </div>

          {/* Headline */}
          <div
            key={`title-${currentSlide}`}
            className={`transition-all duration-600 ${
              isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-serif text-white leading-[1.05] tracking-[-0.01em] mb-6 whitespace-pre-line">
              {slide.title}
            </h1>
          </div>

          {/* Description */}
          <div
            key={`desc-${currentSlide}`}
            className={`transition-all duration-700 delay-100 ${
              isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            <p className="text-base sm:text-lg text-white/70 font-sans font-light leading-relaxed max-w-2xl mx-auto mb-12">
              {slide.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-800 delay-200 ${
              isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Primary CTA — filled gold */}
            <Link
              href="/contact"
              className="group relative w-full sm:w-auto overflow-hidden bg-[#C9A96E] text-[#0A0A0A] px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(201,169,110,0.5)]"
            >
              <span className="relative z-10">GET FREE QUOTE</span>
              <span className="absolute inset-0 bg-[#DFC08C] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </Link>

            {/* Secondary CTA — outlined */}
            <Link
              href="/projects"
              className="w-full sm:w-auto border border-white/50 text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
            >
              VIEW PROJECTS
            </Link>

            {/* Direct call */}
            <a
              href={`tel:${site.phoneRaw}`}
              className="hidden sm:flex items-center gap-3 text-white/60 hover:text-[#C9A96E] transition-colors text-[11px] font-bold uppercase tracking-[0.15em]"
            >
              <span className="h-8 w-[1px] bg-white/20" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Floating stats strip at bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-16 sm:pb-20">
          <div className="flex items-center justify-center gap-0 sm:gap-0">
            {[
              { num: "30+", label: "Years of Trust" },
              { num: "100+", label: "Projects Done" },
              { num: "5", label: "Service Types" },
              { num: "8+", label: "Districts Served" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`flex items-center ${i < 3 ? "pr-6 sm:pr-10 mr-6 sm:mr-10 border-r border-white/15" : ""}`}
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-serif text-[#C9A96E] leading-none">
                    {stat.num}
                  </div>
                  <div className="text-[9px] text-white/40 font-bold uppercase tracking-[0.2em] mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Slide indicators ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-500 h-[2px] rounded-full ${
              idx === currentSlide
                ? "w-10 bg-[#C9A96E]"
                : "w-4 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* ── Scroll indicator ── */}
      <div className="hidden sm:flex absolute bottom-10 left-10 z-30 flex-col items-center gap-4">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent" />
        <span className="text-[9px] text-white/40 font-bold uppercase tracking-[0.35em] vertical-text">
          Scroll
        </span>
      </div>
    </section>
  );
}
