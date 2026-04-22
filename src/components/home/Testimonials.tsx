"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const quotes = [
  {
    text: "Very professional work — timelines were clear and the site was always organised. They built our dream home in Kochi in just 14 months. We'd build with Key Foundation again without hesitation.",
    name: "Anjana & Rohit",
    role: "Homeowners, Ernakulam",
    stars: 5,
    initials: "AR",
  },
  {
    text: "Best builders in Kerala for pragmatic problem-solving. They caught structural issues early and saved us costly rework. Our commercial fit-out in Thrissur came in on budget.",
    name: "Dileep Mathew",
    role: "Business Owner, Thrissur",
    stars: 5,
    initials: "DM",
  },
  {
    text: "Our 7,000 sqft warehouse slab and loading bay layout were executed exactly to spec. Strong coordination with our equipment vendor. I'd give them 6 stars if I could.",
    name: "Priya Nair",
    role: "Logistics Director, Kozhikode",
    stars: 5,
    initials: "PN",
  },
  {
    text: "Transparent pricing from day one — no hidden charges. They even suggested a better foundation design that saved us ₹3 lakhs. Highly recommend for Kochi home construction.",
    name: "Santhosh Kumar",
    role: "Homeowner, Kakkanad, Kochi",
    stars: 5,
    initials: "SK",
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
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  const prev = () => setCurrent((c) => (c - 1 + quotes.length) % quotes.length);
  const next = () => setCurrent((c) => (c + 1) % quotes.length);

  const q = quotes[current];

  return (
    <section className="bg-[#111111] py-24 md:py-40" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.3em] uppercase mb-6">
            CLIENT STORIES
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
            Voices of <em className="not-italic text-[#C9A96E]">Trust</em>
          </h2>
        </div>

        {/* Rating badge */}
        <div className={`flex justify-center mb-16 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="inline-flex items-center gap-4 border border-white/10 px-8 py-4">
            <StarRating count={5} />
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-serif text-[#C9A96E]">4.9</span>
              <span className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold">/ 5.0 Rating</span>
            </div>
          </div>
        </div>

        {/* Main testimonial */}
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          key={current}
        >
          {/* Large decorative quote mark */}
          <div className="absolute -top-8 -left-4 text-[180px] font-serif text-[#C9A96E]/15 leading-none select-none pointer-events-none">
            &ldquo;
          </div>

          <div className="relative z-10 animate-fade-in">
            {/* Stars */}
            <div className="mb-8">
              <StarRating count={q.stars} />
            </div>

            {/* Quote text */}
            <blockquote className="text-2xl md:text-3xl font-serif text-white italic leading-relaxed mb-12">
              &ldquo;{q.text}&rdquo;
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-6 pt-8 border-t border-white/10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#C9A96E]/10 border border-[#C9A96E]/30 text-[#C9A96E] text-sm font-bold">
                {q.initials}
              </div>
              <div>
                <p className="text-[#C9A96E] text-[11px] font-bold uppercase tracking-[0.25em]">
                  {q.name}
                </p>
                <p className="text-white/40 text-xs font-medium mt-1">{q.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Prev/Next arrows — no dots */}
        <div className={`flex items-center justify-between max-w-4xl mx-auto mt-14 transition-all duration-700 delay-300 ${visible ? "opacity-100" : "opacity-0"}`}>
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex items-center gap-3 text-white/40 hover:text-[#C9A96E] text-[10px] font-bold uppercase tracking-[0.2em] transition-colors group"
          >
            <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            PREV
          </button>

          {/* Slide counter */}
          <p className="text-[10px] text-white/20 font-bold tracking-[0.2em]">
            {String(current + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}
          </p>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex items-center gap-3 text-white/40 hover:text-[#C9A96E] text-[10px] font-bold uppercase tracking-[0.2em] transition-colors group"
          >
            NEXT
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
