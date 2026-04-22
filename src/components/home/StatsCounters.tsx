"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 30, suffix: "+", label: "Years of Trust", kind: "count" as const },
  { value: 100, suffix: "+", label: "Projects Done", kind: "count" as const },
  { value: 5, suffix: "", label: "Service Types", kind: "count" as const },
  { value: null, suffix: "", label: "Coverage", main: "Kerala-Wide", kind: "text" as const },
];

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [n, setN] = useState(0);
  const startRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const step = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const p = Math.min((ts - startRef.current) / duration, 1);
      const eased = 1 - (1 - p) ** 3;
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

function StatItem({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
  const count = useCountUp(stat.value ?? 0, active && stat.kind === "count");
  const display = stat.kind === "text" ? stat.main : `${count}${stat.suffix}`;

  return (
    <div className="flex flex-col items-center py-14 px-6 border-r border-white/10 last:border-r-0 transition-all">
      <div className={`text-5xl md:text-7xl font-serif leading-none mb-4 transition-all duration-700 ${active ? "text-[#C9A96E] opacity-100" : "text-[#C9A96E]/20 opacity-0"}`}>
        {display}
      </div>
      <div className="text-[11px] text-white/40 font-bold uppercase tracking-[0.25em]">
        {stat.label}
      </div>
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
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-[#0A0A0A] border-y border-white/5" ref={ref}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-white/10 lg:divide-y-0">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
