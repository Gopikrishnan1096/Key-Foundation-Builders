import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { serviceBlocks } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services | Civil, Steel & Industrial Construction Kerala",
  description:
    "Key Foundation Builders offers residential construction, commercial projects, steel structures, godown/warehouse, and renovation across Kerala. Transparent pricing. Free quotes.",
};

const highlights = [
  "Free site appraisal & consultation",
  "Transparent BOQ before work begins",
  "No hidden charges at any milestone",
  "Single accountable team from start to handover",
];

export default function ServicesPage() {
  const wa = `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(
    `Hi ${site.name}, I'd like a quote for a construction project.`
  )}`;

  return (
    <div className="bg-white">
      {/* ── Page Hero ── */}
      <div className="relative bg-[#0A0A0A] pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,169,110,0.1)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1581092160562-40aa08e66837?auto=format&fit=crop&w=2400&q=60"
            alt="Construction services"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 to-[#0A0A0A]" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.4em] uppercase mb-6">
            WHAT WE DO
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif text-white leading-[1.02] max-w-4xl">
            Comprehensive{" "}
            <em className="not-italic text-[#C9A96E]">Mastery</em>
          </h1>
          <p className="mt-8 text-white/55 text-lg leading-relaxed max-w-xl">
            Five specialist services scoped clearly before a single shovel hits the soil — residential,
            commercial, steel, industrial, and renovation.
          </p>

          {/* Promise strip */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-12">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-3 text-white/50 text-[11px] font-bold uppercase tracking-widest">
                <div className="h-[1px] w-4 bg-[#C9A96E] shrink-0" />
                {h}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Service Blocks ── */}
      <div className="max-w-[1440px] mx-auto">
        {serviceBlocks.map((block, i) => {
          const reverse = i % 2 === 1;
          return (
            <section
              key={block.id}
              id={block.id}
              className={`grid lg:grid-cols-2 scroll-mt-24 ${i < serviceBlocks.length - 1 ? "border-b border-zinc-100" : ""}`}
            >
              {/* Image — full bleed, no gap */}
              <div className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px] overflow-hidden ${reverse ? "lg:order-2" : ""}`}>
                <Image
                  src={block.image}
                  alt={block.imageAlt}
                  fill
                  className="object-cover transition-transform duration-[8000ms] hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Number badge */}
                <div className="absolute top-8 right-8 bg-[#0A0A0A]/80 backdrop-blur-sm border border-[#C9A96E]/20 px-5 py-3">
                  <span className="text-[#C9A96E] font-serif text-2xl leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-center px-10 py-16 lg:px-16 xl:px-20 ${reverse ? "lg:order-1" : ""} ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"}`}>
                <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.35em] uppercase mb-6">
                  SERVICE {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] leading-[1.1] mb-8">
                  {block.title}
                </h2>
                <div className="space-y-4">
                  {block.body.map((p) => (
                    <p key={p.slice(0, 30)} className="text-[#555] text-base leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                <div className="flex gap-4 mt-10">
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#C9A96E] text-[#0A0A0A] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#DFC08C] transition-all duration-300"
                  >
                    Get Quote
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 border border-zinc-200 text-[#1A1A1A] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── Final CTA ── */}
      <section className="bg-[#0A0A0A] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
            <div className="max-w-2xl">
              <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.35em] uppercase mb-6">
                NEXT STEP
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-[1.1]">
                Not sure which service fits?
                <br />
                <em className="not-italic text-[#C9A96E]">Talk to our team.</em>
              </h2>
              <p className="text-white/45 text-base leading-relaxed mt-6">
                Describe your site and goals — we&apos;ll recommend the right package and provide a
                transparent rough timeline. Free, no obligations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#C9A96E] text-[#0A0A0A] px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#DFC08C] transition-all duration-300"
              >
                Get Free Quote
              </Link>
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center justify-center border border-white/20 text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
