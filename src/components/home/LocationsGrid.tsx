"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const locations = [
  {
    name: "Kochi",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Thrissur",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Kozhikode",
    image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Thiruvananthapuram",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Palakkad",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Kannur",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Ernakulam",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Alappuzha",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
  },
];

export function LocationsGrid() {
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
    <section className="bg-white py-24 md:py-32" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className={`text-[#C9A96E] text-[11px] font-bold tracking-[0.3em] uppercase mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            LOCATIONS
          </p>
          <h2 className={`text-4xl md:text-6xl font-serif text-[#1A1A1A] leading-tight transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            We Deliver Excellence Across
          </h2>
          <p className={`text-[#666666] mt-4 text-base transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Every district of Kerala
          </p>
        </div>

        {/* City grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
          {locations.map((city, i) => (
            <div
              key={city.name}
              className={`group relative overflow-hidden aspect-[4/3] cursor-default transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Image
                src={city.image}
                alt={city.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* City name — bottom-left */}
              <div className="absolute bottom-0 inset-x-0 p-5">
                <p className="text-white font-serif text-lg leading-tight mb-1.5">
                  {city.name}
                </p>
                {/* Gold underline on hover */}
                <div className="h-[1px] w-0 bg-[#C9A96E] transition-all duration-400 group-hover:w-8" />
              </div>
            </div>
          ))}
        </div>

        {/* All locations CTA */}
        <div className="flex justify-center mt-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-[#1A1A1A] text-[#1A1A1A] px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
          >
            START YOUR PROJECT
            <span className="h-[1px] w-4 bg-current" />
          </Link>
        </div>
      </div>
    </section>
  );
}
