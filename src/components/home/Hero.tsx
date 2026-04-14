"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { site } from "@/lib/site";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2400",
    title: (
      <>
        Building Kerala’s <span className="italic text-primary">Strongest</span>{" "}
        Foundations <br className="hidden sm:block" /> Since {site.founded}
      </>
    ),
    description:
      "Residential, commercial, and steel structure projects delivered with disciplined engineering, quality materials, and on-time execution across Kerala.",
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2400",
    title: (
      <>
        Luxury <span className="italic text-primary">Residential</span>{" "}
        Excellence
      </>
    ),
    description:
      "Crafting bespoke luxury villas and premium residential spaces that blend modern aesthetics with timeless comfort and superior structural integrity.",
  },
  {
    image: "https://images.unsplash.com/photo-1541888081604-582772594411?auto=format&fit=crop&q=80&w=2400",
    title: (
      <>
        Innovative <span className="italic text-primary">Commercial</span>{" "}
        Hubs
      </>
    ),
    description:
      "Building state-of-the-art commercial complexes, offices, and retail spaces designed to elevate business and define modern Kerala.",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 6s per slide
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden group">
      {/* Sliding Cinematic Backgrounds */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity durationSingular ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10 duration-1000" : "opacity-0 z-0 duration-1000"
            }`}
          >
            {/* Subtle gradient for text readability — no heavy overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 z-10" />
            
            <Image
              src={slide.image}
              alt={`Slide ${idx + 1}`}
              fill
              priority={idx === 0}
              sizes="100vw"
              className={`object-cover transition-transform duration-[10000ms] ease-linear ${
                idx === currentSlide ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="container relative z-20 mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto min-h-[300px] flex flex-col justify-center">
          <p className="text-white/80 font-bold tracking-[0.4em] uppercase mb-6 text-xs sm:text-sm relative z-20 transition-all drop-shadow-md">
            {site.tagline}
          </p>
          
          {/* Key forces re-mount and thus re-animation of text content for each slide step */}
          <div key={currentSlide} className="animate-fade-in transition-all duration-700">
            <h1 className="text-5xl md:text-8xl font-serif text-white leading-[1.05] mb-8 tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
              {slides[currentSlide].title}
            </h1>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/85 font-medium leading-relaxed drop-shadow-md">
              {slides[currentSlide].description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 relative z-20">
            <Link
              href="/contact"
              className="group relative w-full sm:w-auto overflow-hidden bg-primary text-white px-12 py-5 rounded-sm text-sm font-bold uppercase tracking-widest transition-all hover:bg-white hover:text-zinc-900 focus-ring shadow-lg"
            >
              Get Free Quote
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto border border-white/60 backdrop-blur-sm bg-white/10 px-12 py-5 rounded-sm text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-zinc-900 focus-ring"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 text-dark/40 hover:text-dark hover:bg-white/50 backdrop-blur-sm rounded-full transition-all opacity-0 group-hover:opacity-100 hidden sm:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 text-dark/40 hover:text-dark hover:bg-white/50 backdrop-blur-sm rounded-full transition-all opacity-0 group-hover:opacity-100 hidden sm:block"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-24 sm:bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-500 rounded-full ${
              idx === currentSlide
                ? "w-8 h-2 bg-primary shadow-sm"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hidden sm:flex absolute bottom-10 left-10 z-30 flex-col items-center gap-4">
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/60 to-transparent" />
        <span className="text-[10px] text-white/60 font-bold uppercase tracking-[0.3em] vertical-text">
          Scroll
        </span>
      </div>
    </section>
  );
}
