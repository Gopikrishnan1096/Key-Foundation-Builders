"use client";

/**
 * TrustBadgeStrip — a full-width marquee strip of trust signals that appears
 * between the Hero and BrandStory sections. Infinite horizontal scroll.
 */

const badges = [
  "30+ Years in Kerala",
  "100+ Projects Delivered",
  "500+ Happy Families",
  "RERA Compliant",
  "Transparent Pricing",
  "On-Time Delivery",
  "All Kerala Coverage",
  "Steel & Civil Experts",
  "Quality Guaranteed",
  "Free Site Appraisal",
];

export function TrustBadgeStrip() {
  // Duplicate for seamless loop
  const items = [...badges, ...badges];

  return (
    <div className="bg-[#C9A96E] py-4 overflow-hidden relative">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#C9A96E] to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#C9A96E] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((badge, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-8">
            <span className="text-[#0A0A0A] text-[10px] font-bold uppercase tracking-[0.3em]">
              {badge}
            </span>
            <span className="h-[4px] w-[4px] rounded-full bg-[#0A0A0A]/30 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
