"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 30,  suffix: "+", label: "Years of Trust",         kind: "count" as const },
  { value: 100, suffix: "+", label: "Projects Completed",      kind: "count" as const },
  { value: 500, suffix: "+", label: "Happy Clients",           kind: "count" as const },
  { value: 8,   suffix: "+", label: "Districts Served",        kind: "count" as const },
];

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [n, setN] = useState(0);
  const startRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const step = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const p = Math.min((ts - startRef.current) / duration, 1);
      const eased = 1 - (1 - p) ** 4; // quartic ease-out for dramatic effect
      setN(Math.round(target * eased));
      if (p < 1) frameRef.current = requestAnimationFrame(step);
    };
    frameRef.current = requestAnimationFrame(step);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      startRef.current = null;
    };
  }, [active, target, duration]);

  return n;
}

function StatItem({ stat, active, index }: { stat: typeof stats[0]; active: boolean; index: number }) {
  const count = useCountUp(stat.value, active && stat.kind === "count");

  return (
    <div
      className={`relative flex flex-col items-center py-14 px-6 transition-all duration-700 ${
        active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Vertical divider — not on last */}
      {index < stats.length - 1 && (
        <div className="absolute right-0 top-1/4 h-1/2 w-[1px] bg-white/8" />
      )}

      {/* Number */}
      <div className={`text-5xl md:text-7xl font-serif leading-none mb-4 transition-all duration-1000 ${
        active ? "text-[#C9A96E]" : "text-[#C9A96E]/10"
      }`}>
        {count}{stat.suffix}
      </div>

      {/* Label */}
      <div className="text-[11px] text-white/40 font-bold uppercase tracking-[0.3em] text-center">
        {stat.label}
      </div>

      {/* Gold underline — animates in */}
      <div className={`mt-5 h-[1px] bg-[#C9A96E]/40 transition-all duration-700 ${
        active ? "w-8" : "w-0"
      }`} style={{ transitionDelay: `${index * 100 + 400}ms` }} />
    </div>
  );
}

export function StatsCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e?.isIntersecting) setActive(true); },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-[#0A0A0A] border-y border-white/5 relative overflow-hidden" ref={ref}>
      {/* Subtle radial glow behind numbers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={active} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
