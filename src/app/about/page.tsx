import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | Our Legacy Since 1995",
  description:
    "Key Foundation Builders — 30+ years of civil & steel construction excellence in Kerala. Meet our team, mission, and the values that make us Kerala's most trusted builders.",
};

const storyImage =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80";

const team = [
  {
    name: "Founder & MD",
    role: "Managing Director",
    desc: "30 years of on-site experience across residential, commercial and industrial projects throughout Kerala.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Lead Structural Engineer",
    role: "Structural & Site Planning",
    desc: "Specialises in reinforced concrete design, steel structure coordination, and flood-resilient foundation engineering.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Site Operations Team",
    role: "Field Execution & Quality",
    desc: "A dedicated crew of foremen, masons, and safety supervisors ensuring every detail meets specification.",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&q=80",
  },
];

const achievements = [
  "100+ projects completed across Kerala",
  "Trusted by 500+ families and businesses",
  "Expert in monsoon-resilient construction",
  "Transparent BOQ & milestone billing",
  "RERA compliant on all applicable projects",
  "In-house structural + MEP coordination",
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* ── Page Hero ── */}
      <div className="relative bg-[#0A0A0A] pt-40 pb-24 overflow-hidden">
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,110,0.1)_0%,transparent_60%)] pointer-events-none" />
        {/* Background image with dark overlay */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=60"
            alt="Construction site"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 to-[#0A0A0A]" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.4em] uppercase mb-6">
            WHO WE ARE
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif text-white leading-[1.02] max-w-3xl">
            Building{" "}
            <em className="not-italic text-[#C9A96E]">Kerala</em>
            <br />
            Since 1995
          </h1>
          <p className="mt-8 text-white/55 text-lg leading-relaxed max-w-xl">
            A Kerala-based construction firm built on engineering integrity, transparent pricing,
            and schedules you can actually plan around.
          </p>
        </div>
      </div>

      {/* ── Company Story ── */}
      <section className="py-24 md:py-40">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            {/* Image */}
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[600px] overflow-hidden">
              <Image
                src={storyImage}
                alt="Key Foundation Builders — Our Story"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center px-10 py-20 lg:px-20 xl:px-28">
              <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.35em] uppercase mb-8">
                OUR STORY
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-[1.1] mb-8">
                One Promise.
                <br />
                <em className="not-italic text-[#C9A96E]">30 Years Kept.</em>
              </h2>
              <div className="space-y-5">
                <p className="text-[#555] text-base leading-relaxed">
                  Key Foundation Builders began with a simple commitment: deliver civil work that survives
                  Kerala&apos;s monsoon cycle and day-to-day use — without surprises on the bill. That
                  promise has never changed in three decades.
                </p>
                <p className="text-[#555] text-base leading-relaxed">
                  Today we partner with families, business owners, and industrial operators — from initial
                  soil checks and foundation design through finishing coordination and handover — with one
                  accountable team on site from day one.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 mt-12 bg-[#C9A96E] text-[#0A0A0A] px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#DFC08C] transition-all duration-300 self-start"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="bg-[#FAFAF8] py-24 border-y border-zinc-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.35em] uppercase mb-5">
              PURPOSE
            </p>
            <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A]">
              Mission &{" "}
              <em className="not-italic text-[#C9A96E]">Vision</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-1 bg-zinc-200">
            <div className="bg-white p-12 md:p-16 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#C9A96E] transition-all duration-500 group-hover:w-full" />
              <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.35em] uppercase mb-6">
                Mission
              </p>
              <h3 className="text-2xl font-serif text-[#1A1A1A] mb-6">Build with Integrity</h3>
              <p className="text-[#666] leading-relaxed">
                Execute safe, code-aware construction with transparent cost breakdowns and proactive
                communication — so clients make decisions with confidence, not anxiety.
              </p>
            </div>
            <div className="bg-[#0A0A0A] p-12 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(201,169,110,0.1)_0%,transparent_60%)] pointer-events-none" />
              <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.35em] uppercase mb-6 relative z-10">
                Vision
              </p>
              <h3 className="text-2xl font-serif text-white mb-6 relative z-10">Kerala&apos;s Most Trusted Builder</h3>
              <p className="text-white/55 leading-relaxed relative z-10">
                Become Kerala&apos;s most referred residential and light industrial builder — known for durable
                detailing, respectful crews, and delivery you can bet your business on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">
            <div className="lg:w-[360px] shrink-0">
              <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.35em] uppercase mb-6">
                TRACK RECORD
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-[1.1]">
                Earned, Not{" "}
                <em className="not-italic text-[#C9A96E]">Claimed</em>
              </h2>
              <p className="text-[#666] mt-6 leading-relaxed">
                Every number below represents a project finished, a family moved in, or a business that opened on time.
              </p>
            </div>
            <div className="flex-1 grid gap-[1px] sm:grid-cols-2 bg-zinc-100">
              {achievements.map((item) => (
                <div key={item} className="bg-white p-8 flex items-start gap-5 group hover:bg-[#FAFAF8] transition-colors duration-300">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#C9A96E] mt-0.5" aria-hidden />
                  <span className="text-[#333] font-medium leading-snug group-hover:text-[#1A1A1A] transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-[#0A0A0A] border-y border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { num: "30+", label: "Years of Trust" },
              { num: "100+", label: "Projects Completed" },
              { num: "500+", label: "Happy Clients" },
              { num: "8+", label: "Districts Served" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center py-14 px-6 ${i < 3 ? "border-r border-white/8" : ""}`}
              >
                <div className="text-5xl md:text-6xl font-serif text-[#C9A96E] leading-none mb-4">
                  {stat.num}
                </div>
                <div className="text-[11px] text-white/40 font-bold uppercase tracking-[0.3em] text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.35em] uppercase mb-5">
              LEADERSHIP
            </p>
            <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A]">
              The People{" "}
              <em className="not-italic text-[#C9A96E]">Behind</em>{" "}
              the Build
            </h2>
            <p className="text-[#666] mt-6 max-w-xl mx-auto text-base leading-relaxed">
              You&apos;ll meet these faces on site walkthroughs — not just on the website.
            </p>
          </div>
          <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3 bg-zinc-100">
            {team.map((m) => (
              <div key={m.name} className="group relative bg-white overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-8">
                    <p className="text-[#C9A96E] text-[10px] font-bold uppercase tracking-[0.3em] mb-1">{m.role}</p>
                    <h3 className="text-white font-serif text-xl">{m.name}</h3>
                  </div>
                </div>
                <div className="p-8 border-t border-zinc-100">
                  <p className="text-[#666] text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#C9A96E] py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0A0A0A] mb-6">
            Ready to Build Something Remarkable?
          </h2>
          <p className="text-[#0A0A0A]/60 max-w-xl mx-auto mb-10 text-base leading-relaxed">
            Get a free consultation and transparent quote. We respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#0A0A0A] text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#1A1A1A] transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center justify-center border border-[#0A0A0A]/30 text-[#0A0A0A] px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#0A0A0A]/10 transition-colors"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
