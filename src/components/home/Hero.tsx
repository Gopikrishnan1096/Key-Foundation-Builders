"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-50/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
          alt="Modern luxury facade"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-20 mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-primary font-bold tracking-[0.4em] uppercase mb-6 text-xs sm:text-sm animate-fade-in">
            Crafting Architectural Excellence
          </p>
          <h1 className="text-5xl md:text-8xl font-serif text-zinc-900 leading-[1.1] mb-12 tracking-tight">
            Building <span className="italic text-primary">Landmarks</span>. <br />
            Creating Trust.
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Link
              href="/projects"
              className="group relative w-full sm:w-auto overflow-hidden bg-primary text-white px-12 py-5 rounded-sm text-sm font-bold uppercase tracking-widest transition-all hover:bg-zinc-900"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto border border-zinc-900/20 backdrop-blur-sm px-12 py-5 rounded-sm text-sm font-bold uppercase tracking-widest text-zinc-900 transition-all hover:bg-zinc-900 hover:text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-[10px] text-primary/60 font-bold uppercase tracking-[0.3em] vertical-text">Scroll</span>
      </div>
    </section>
  );
}
