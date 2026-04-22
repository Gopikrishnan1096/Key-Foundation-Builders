"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2400",
    title: "Building Kerala's Strongest Foundations Since 1995",
    description:
      "Residential, commercial, and steel structure projects delivered with disciplined engineering, quality materials, and on-time execution across Kerala.",
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2400",
    title: "Precision Engineering. Enduring Architecture.",
    description:
      "Crafting bespoke luxury villas and premium residential spaces that blend modern aesthetics with timeless comfort and superior structural integrity.",
  },
  {
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=2400",
    title: "Commercial Excellence Across Every District.",
    description:
      "Building state-of-the-art commercial complexes, offices, and retail spaces designed to elevate business and define modern Kerala.",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        setPrevSlide(prev);
        return (prev + 1) % slides.length;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setPrevSlide(currentSlide);
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden group">
      {/* ── Sliding Backgrounds ── */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={`Slide ${idx + 1}`}
              fill
              priority={idx === 0}
              sizes="100vw"
              className={`object-cover transition-transform duration-[10000ms] ease-linear ${
                idx === currentSlide ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        ))}

        {/* Bottom-up black gradient overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
      </div>

      {/* ── Text Content ── */}
      <div className="relative z-30 w-full px-6 text-center">
        <div className="max-w-[900px] mx-auto">
          {/* Category tag */}
          <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.4em] uppercase mb-6 opacity-90">
            {site.tagline}
          </p>

          {/* Headline — re-animates on slide change */}
          <div key={currentSlide} className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.05] tracking-[-0.01em] mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-base sm:text-lg text-white/75 font-sans font-light leading-relaxed max-w-2xl mx-auto mb-10">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* CTA buttons — outlined white, hover → gold */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/projects"
              className="w-full sm:w-auto border border-white/60 text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
            >
              VIEW PROJECTS
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto border border-white/60 text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#C9A96E] hover:border-[#C9A96E] hover:text-[#0A0A0A] transition-all duration-300"
            >
              GET FREE QUOTE
            </Link>
          </div>
        </div>
      </div>

      {/* ── Slide indicators — thin horizontal lines ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-500 h-[2px] ${
              idx === currentSlide
                ? "w-12 bg-[#C9A96E]"
                : "w-6 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* ── Scroll indicator (left edge) ── */}
      <div className="hidden sm:flex absolute bottom-10 left-10 z-30 flex-col items-center gap-4">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent" />
        <span className="text-[10px] text-white/50 font-bold uppercase tracking-[0.3em] vertical-text">
          Scroll
        </span>
      </div>
    </section>
  );
}
