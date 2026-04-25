"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

const quotes = [
  {
    text: "Very professional work — timelines were crystal clear and the site was always organised. They built our dream home in Kochi in just 14 months. We'd build with Key Foundation again without hesitation.",
    name: "Anjana & Rohit Menon",
    role: "Homeowners, Ernakulam",
    stars: 5,
    initials: "AR",
    project: "2,800 sqft Residential Villa",
  },
  {
    text: "Best builders in Kerala for pragmatic problem-solving. They caught structural issues early and saved us costly rework. Our commercial fit-out in Thrissur came in on budget — that almost never happens.",
    name: "Dileep Mathew",
    role: "Business Owner, Thrissur",
    stars: 5,
    initials: "DM",
    project: "8,500 sqft Retail Complex",
  },
  {
    text: "Our 7,000 sqft warehouse slab and loading bay layout were executed exactly to specification. Exceptional coordination with our equipment vendor. I'd give them 6 stars if the form allowed it.",
    name: "Priya Nair",
    role: "Logistics Director, Kozhikode",
    stars: 5,
    initials: "PN",
    project: "7,000 sqft Industrial Warehouse",
  },
  {
    text: "Transparent pricing from day one — not a single hidden charge. They even suggested a better foundation design that saved us ₹3 lakhs without compromising strength. Highly recommend for Kochi construction.",
    name: "Santhosh Kumar",
    role: "Homeowner, Kakkanad, Kochi",
    stars: 5,
    initials: "SK",
    project: "1,900 sqft Heritage Renovation",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#C9A96E] text-[#C9A96E]" aria-hidden />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  // Auto-advance — inline logic avoids exhaustive-deps on `transition`
  useEffect(() => {
    const t = setInterval(() => {
      if (animating) return;
      setDirection("next");
      setAnimating(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % quotes.length);
        setAnimating(false);
      }, 350);
    }, 7000);
    return () => clearInterval(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  function transition(dir: "next" | "prev") {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) =>
        dir === "next" ? (c + 1) % quotes.length : (c - 1 + quotes.length) % quotes.length
      );
      setAnimating(false);
    }, 350);
  }

  const q = quotes[current];
  const wa = `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(
    `Hi ${site.name}, I've seen your testimonials and I'd like to discuss a project.`
  )}`;

  return (
    <section className="bg-[#111111] py-24 md:py-40 overflow-hidden" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 xl:gap-24 items-start">

          {/* ── Left: heading + controls ── */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.35em] uppercase mb-8">
              CLIENT STORIES
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] mb-10">
              Voices of{" "}
              <em className="not-italic text-[#C9A96E]">Trust</em>
            </h2>

            {/* Overall rating badge */}
            <div className="inline-flex flex-col gap-3 border border-white/10 p-6 mb-12">
              <StarRating count={5} />
              <div>
                <span className="text-4xl font-serif text-[#C9A96E]">4.9</span>
                <span className="text-[10px] text-white/30 font-bold uppercase tracking-[0.2em] ml-2">
                  / 5.0
                </span>
              </div>
              <div className="text-[10px] text-white/30 font-bold uppercase tracking-[0.2em]">
                Average Rating • 500+ Clients
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => transition("prev")}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center border border-white/15 text-white/50 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => transition("next")}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center border border-white/15 text-white/50 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <span className="text-[10px] text-white/20 font-bold tracking-[0.25em] ml-2">
                {String(current + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}
              </span>
            </div>

            {/* CTA */}
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 border border-[#C9A96E] text-[#C9A96E] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#C9A96E] hover:text-[#0A0A0A] transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>

          {/* ── Right: testimonial card ── */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div
              className={`relative transition-all duration-350 ${
                animating
                  ? direction === "next"
                    ? "opacity-0 translate-x-4"
                    : "opacity-0 -translate-x-4"
                  : "opacity-100 translate-x-0"
              }`}
            >
              {/* Large decorative quote mark */}
              <div className="absolute -top-12 -left-4 text-[220px] font-serif text-[#C9A96E]/8 leading-none select-none pointer-events-none">
                &ldquo;
              </div>

              <div className="relative z-10 bg-white/3 border border-white/8 p-10 md:p-14">
                {/* Stars + project tag */}
                <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                  <StarRating count={q.stars} />
                  <span className="text-[9px] text-[#C9A96E]/70 font-bold uppercase tracking-[0.25em] border border-[#C9A96E]/20 px-3 py-1.5">
                    {q.project}
                  </span>
                </div>

                {/* Quote text */}
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-white italic leading-[1.4] mb-12">
                  &ldquo;{q.text}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#C9A96E]/10 border border-[#C9A96E]/30 text-[#C9A96E] text-sm font-bold font-serif">
                    {q.initials}
                  </div>
                  <div>
                    <p className="text-[#C9A96E] text-[11px] font-bold uppercase tracking-[0.25em]">
                      {q.name}
                    </p>
                    <p className="text-white/35 text-xs font-medium mt-1">{q.role}</p>
                  </div>
                </div>
              </div>

              {/* Progress indicators */}
              <div className="flex gap-2 mt-6">
                {quotes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? "next" : "prev");
                      setTimeout(() => {
                        setCurrent(i);
                      }, 50);
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-[2px] transition-all duration-500 ${
                      i === current ? "w-10 bg-[#C9A96E]" : "w-4 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
