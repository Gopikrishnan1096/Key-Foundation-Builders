"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getFeaturedProjects } from "@/lib/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects(6);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e?.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-[#FAFAF8] py-24 md:py-32" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className={`flex flex-col md:flex-row justify-between items-end mb-16 gap-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="max-w-xl">
            <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.3em] uppercase mb-5">
              ARCHITECTURAL PORTFOLIO
            </p>
            <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] leading-tight">
              Signature <em className="not-italic text-[#C9A96E]">Landmarks</em>
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-4 text-[#1A1A1A] text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#C9A96E] transition-colors pb-2 border-b border-zinc-300 hover:border-[#C9A96E]"
          >
            EXPLORE ALL
            <div className="h-[1px] w-8 bg-current transition-all duration-300 group-hover:w-14" />
          </Link>
        </div>

        {/* Project grid — staggered portrait cards */}
        <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className={`group relative overflow-hidden bg-[#1A1A1A] aspect-[3/4] transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } ${i === 1 ? "md:mt-10" : i === 2 ? "lg:mt-20" : ""}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Image
                src={p.gallery[0]}
                alt={p.name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70" />

              {/* Content — bottom */}
              <div className="absolute inset-x-0 bottom-0 p-8 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-[#C9A96E] text-[10px] font-bold uppercase tracking-[0.25em] mb-2">
                  {p.location}
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-white leading-tight">
                  {p.name}
                </h3>
                <div className="mt-4 flex items-center gap-3 text-[10px] text-white/50 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-100">
                  View Detail
                  <div className="h-[1px] w-4 bg-[#C9A96E]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
