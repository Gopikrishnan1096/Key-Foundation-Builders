"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

export function BrandStory() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e?.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-white py-24 md:py-40 overflow-hidden" ref={ref}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">

          {/* ── Left: Full-bleed portrait image ── */}
          <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[700px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"
              alt="Key Foundation Builders — Our Legacy"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-[8000ms] hover:scale-105"
            />
            {/* Subtle dark tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
          </div>

          {/* ── Right: Editorial copy ── */}
          <div className="flex flex-col justify-center px-10 py-20 lg:px-20 xl:px-28 bg-white">
            {/* Category label */}
            <p className={`text-[#C9A96E] text-[11px] font-bold tracking-[0.3em] uppercase mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              OUR LEGACY
            </p>

            {/* Headline */}
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] leading-[1.1] mb-8 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Built On <br />
              <em className="not-italic text-[#C9A96E]">Strong Foundations</em>
            </h2>

            {/* Body copy */}
            <div className={`space-y-5 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <p className="text-[#666666] text-base leading-relaxed">
                At Key Foundation Builders, we believe strength, safety, and trust are non‑negotiable.
                Since {site.founded}, we&apos;ve delivered civil and steel construction projects across Kerala
                with disciplined engineering, quality materials, and transparent execution.
              </p>
              <p className="text-[#666666] text-base leading-relaxed">
                Every project is a commitment — to your vision, your timeline, and your budget. From
                foundation to finishing, we bring three decades of Kerala construction expertise to every site.
              </p>
            </div>

            {/* Pull-quote */}
            <blockquote className={`my-10 border-l-2 border-[#C9A96E] pl-6 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <p className="text-[#C9A96E] text-lg font-serif italic leading-relaxed">
                &ldquo;Strength, safety, and trust are non‑negotiable.&rdquo;
              </p>
            </blockquote>

            {/* Stats row */}
            <div className={`flex items-center gap-10 pb-10 border-b border-zinc-200 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div>
                <div className="text-4xl font-serif text-[#1A1A1A]">30+</div>
                <div className="text-[10px] text-[#666666] uppercase tracking-[0.2em] mt-1 font-bold">Years of Trust</div>
              </div>
              <div className="w-[1px] h-12 bg-zinc-200" />
              <div>
                <div className="text-4xl font-serif text-[#1A1A1A]">100+</div>
                <div className="text-[10px] text-[#666666] uppercase tracking-[0.2em] mt-1 font-bold">Projects Completed</div>
              </div>
              <div className="w-[1px] h-12 bg-zinc-200" />
              <div>
                <div className="text-4xl font-serif text-[#1A1A1A]">5</div>
                <div className="text-[10px] text-[#666666] uppercase tracking-[0.2em] mt-1 font-bold">Service Types</div>
              </div>
            </div>

            {/* Read more link */}
            <Link
              href="/about"
              className={`inline-flex items-center gap-3 mt-10 text-[#C9A96E] text-[11px] font-bold uppercase tracking-[0.2em] hover:gap-5 transition-all duration-300 group ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              READ MORE
              <span className="h-[1px] w-8 bg-[#C9A96E] transition-all duration-300 group-hover:w-12" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
