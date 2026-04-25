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
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-white py-24 md:py-40 overflow-hidden" ref={ref}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">

          {/* ── Left: Full-bleed portrait image ── */}
          <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[720px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"
              alt="Key Foundation Builders — Our Legacy since 1995"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-[10000ms] hover:scale-105"
            />
            {/* Layered gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/10" />
            {/* Floating year badge */}
            <div className="absolute bottom-10 left-10 bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#C9A96E]/30 px-8 py-6">
              <div className="text-5xl font-serif text-[#C9A96E] leading-none">30+</div>
              <div className="text-[10px] text-white/50 font-bold uppercase tracking-[0.25em] mt-2">Years of Excellence</div>
            </div>
          </div>

          {/* ── Right: Editorial copy ── */}
          <div className="flex flex-col justify-center px-10 py-20 lg:px-20 xl:px-28 bg-white">
            {/* Category label */}
            <p className={`text-[#C9A96E] text-[11px] font-bold tracking-[0.35em] uppercase mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              OUR LEGACY
            </p>

            {/* Headline */}
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] leading-[1.08] mb-8 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Built on{" "}
              <em className="not-italic text-[#C9A96E]">Trust</em>.{" "}
              <br />
              Delivered with{" "}
              <em className="not-italic text-[#C9A96E]">Pride.</em>
            </h2>

            {/* Body copy */}
            <div className={`space-y-5 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <p className="text-[#555] text-base leading-relaxed">
                Since {site.founded}, Key Foundation Builders has earned Kerala&apos;s highest trust in civil
                and steel construction — not through advertising, but through disciplined engineering,
                quality materials, and unwavering on-time execution.
              </p>
              <p className="text-[#555] text-base leading-relaxed">
                We treat every project as a long-term commitment to your vision, budget, and safety.
                From foundation to finishing, you deal with one accountable team from day one to handover.
              </p>
            </div>

            {/* Pull-quote */}
            <blockquote className={`my-10 border-l-2 border-[#C9A96E] pl-6 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <p className="text-[#C9A96E] text-xl font-serif italic leading-relaxed">
                &ldquo;Strength, safety, and trust are non‑negotiable.&rdquo;
              </p>
            </blockquote>

            {/* Stats row */}
            <div className={`grid grid-cols-3 gap-0 pb-10 border-b border-zinc-100 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              {[
                { num: "30+", label: "Years of Trust" },
                { num: "100+", label: "Projects Delivered" },
                { num: "8+", label: "Districts Covered" },
              ].map((stat, i) => (
                <div key={stat.label} className={`text-center ${i < 2 ? "border-r border-zinc-100" : ""}`}>
                  <div className="text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-none">{stat.num}</div>
                  <div className="text-[10px] text-[#999] uppercase tracking-[0.2em] mt-2 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className={`flex items-center gap-6 mt-10 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-[#C9A96E] text-[11px] font-bold uppercase tracking-[0.2em] hover:gap-5 transition-all duration-300 group"
              >
                OUR STORY
                <span className="h-[1px] w-8 bg-[#C9A96E] transition-all duration-300 group-hover:w-12" />
              </Link>
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center gap-3 text-[#1A1A1A] text-[11px] font-bold uppercase tracking-[0.2em] border border-zinc-200 px-6 py-3 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
