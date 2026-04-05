"use client";

import { useEffect, useRef, useState } from "react";
import { Home, Building2, MapPin, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";

const items = [
  { icon: Home, value: 100, suffix: "+", label: "Homes Built" },
  { icon: Building2, value: 50, suffix: "+", label: "Projects Completed" },
  { icon: Award, value: 10, suffix: "+", label: "Years Experience" },
  {
    icon: MapPin,
    kind: "text" as const,
    main: "Kerala",
    label: "Serving Kerala Region",
  },
];

function useCountUp(target: number, active: boolean, duration = 1400) {
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

type StatDef =
  | {
      icon: typeof Home;
      value: number;
      suffix: string;
      label: string;
      kind?: "count";
    }
  | {
      icon: typeof MapPin;
      kind: "text";
      main: string;
      label: string;
    };

function StatItem(def: StatDef) {
  const Icon = def.icon;
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setActive(true);
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isText = def.kind === "text";
  const target = !isText ? def.value : 0;
  const display = useCountUp(target, active && !isText);
  const suffix = !isText ? def.suffix : "";

  return (
    <div
      ref={ref}
      className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <Icon className="h-8 w-8 text-accent" aria-hidden />
      {isText ? (
        <p className="mt-3 text-2xl font-bold text-primary">{def.main}</p>
      ) : (
        <p className="mt-3 text-3xl font-bold tabular-nums text-primary">
          {display}
          {suffix}
        </p>
      )}
      <p className="mt-1 text-sm font-medium text-slate-600">{def.label}</p>
    </div>
  );
}

export function StatsCounters() {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <StatItem key={item.label} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
