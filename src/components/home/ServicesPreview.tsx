"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "residential",
    title: "Residential Construction",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    href: "/services#residential",
  },
  {
    id: "commercial",
    title: "Commercial Projects",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200",
    href: "/services#commercial",
  },
  {
    id: "steel",
    title: "Steel Structures",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e66837?auto=format&fit=crop&q=80&w=1200",
    href: "/services#steel",
  },
  {
    id: "godown",
    title: "Godown & Industrial",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    href: "/services#godown",
  },
  {
    id: "renovation",
    title: "Renovation & Maintenance",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=1200",
    href: "/services#renovation",
  },
];

export function ServicesPreview() {
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
        <div className="text-center mb-16">
          <p className={`text-[#C9A96E] text-[11px] font-bold tracking-[0.3em] uppercase mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            WHAT WE DO
          </p>
          <h2 className={`text-4xl md:text-6xl font-serif text-[#1A1A1A] leading-tight transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Comprehensive <em className="not-italic text-[#C9A96E]">Mastery</em>
          </h2>
        </div>

        {/* Image card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.slice(0, 3).map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 100} visible={visible} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 mt-1">
          {services.slice(3).map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={(i + 3) * 100} visible={visible} />
          ))}
        </div>

        {/* All services link */}
        <div className="flex justify-center mt-14">
          <Link
            href="/services"
            className="inline-flex items-center gap-4 border border-[#1A1A1A] text-[#1A1A1A] px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
          >
            ALL SERVICES
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
  visible,
}: {
  service: (typeof services)[0];
  delay: number;
  visible: boolean;
}) {
  return (
    <Link
      href={service.href}
      className={`group relative overflow-hidden aspect-[4/3] block transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background image */}
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/60 transition-all duration-500" />

      {/* Service name — bottom */}
      <div className="absolute inset-x-0 bottom-0 p-8">
        <h3 className="text-white font-serif text-xl md:text-2xl leading-tight mb-3">
          {service.title}
        </h3>
        {/* Gold arrow — appears on hover */}
        <div className="flex items-center gap-3 text-[#C9A96E] text-[10px] font-bold uppercase tracking-[0.2em] translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          EXPLORE
          <div className="h-[1px] w-6 bg-[#C9A96E]" />
          <span>→</span>
        </div>
      </div>
    </Link>
  );
}
