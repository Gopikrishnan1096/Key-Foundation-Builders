"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/65 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2400"
          alt="Construction site"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="container relative z-20 mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-dark font-bold tracking-[0.4em] uppercase mb-6 text-xs sm:text-sm animate-fade-in">
            {site.tagline}
          </p>
          <h1 className="text-5xl md:text-8xl font-serif text-dark leading-[1.05] mb-8 tracking-tight">
            Building Kerala’s <span className="italic text-primary">Strongest</span>{" "}
            Foundations <br className="hidden sm:block" /> Since {site.founded}
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-zinc-700 leading-relaxed">
            Residential, commercial, and steel structure projects delivered with disciplined engineering,
            quality materials, and on-time execution across Kerala.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Link
              href="/contact"
              className="group relative w-full sm:w-auto overflow-hidden bg-primary text-dark px-12 py-5 rounded-sm text-sm font-bold uppercase tracking-widest transition-all hover:bg-dark hover:text-white focus-ring"
            >
              Get Free Quote
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto border border-dark/20 backdrop-blur-sm px-12 py-5 rounded-sm text-sm font-bold uppercase tracking-widest text-dark transition-all hover:bg-dark hover:text-white focus-ring"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-[10px] text-dark/60 font-bold uppercase tracking-[0.3em] vertical-text">
          Scroll
        </span>
      </div>
    </section>
  );
}
