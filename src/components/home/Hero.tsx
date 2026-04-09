"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-black text-white overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-black to-black opacity-30"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Trusted Builders in Kerala
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
          BUILDING <span className="text-primary italic">STRONG</span> <br />
          FOUNDATIONS FOR YOUR <span className="text-primary italic">FUTURE</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 font-medium">
          Premium Construction & Civil Engineering Excellence across Kerala. 
          Turning your architectural dreams into structural reality since 2014.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/contact"
            className="group relative w-full sm:w-auto overflow-hidden bg-primary text-black px-10 py-5 rounded-sm text-lg font-black uppercase tracking-widest transition-all hover:bg-white"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Free Quote
              <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </span>
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto border-2 border-white/20 px-10 py-5 rounded-sm text-lg font-black uppercase tracking-widest transition-all hover:bg-white hover:text-black hover:border-white"
          >
            View Projects
          </Link>
        </div>

        {/* Stats Preview */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-12">
          <div className="text-center">
            <div className="text-3xl font-black text-primary">10+</div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-primary">50+</div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-1">Projects Done</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-primary">100%</div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-1">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-primary">24/7</div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-1">Support</div>
          </div>
        </div>
      </div>

      {/* Construction Element Decor */}
      <div className="absolute top-1/4 -left-12 w-24 h-24 border-4 border-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-12 w-48 h-48 border-4 border-primary/10 rounded-full animate-pulse delay-700"></div>
    </section>
  );
}
