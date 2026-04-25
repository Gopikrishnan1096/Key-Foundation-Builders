import { CheckCircle2, Clock, CreditCard, Package, MapPin, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "30+ Years of Excellence",
    desc: "Three decades of trusted civil & steel construction across every district of Kerala — a reputation earned project by project.",
  },
  {
    icon: CheckCircle2,
    title: "100+ Projects Delivered",
    desc: "From luxury villas to commercial complexes and industrial warehouses — a proven track record you can inspect personally.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    desc: "Detailed BOQ before work begins. No hidden charges. You know exactly what you're paying for at every milestone.",
  },
  {
    icon: Package,
    title: "Quality Materials Only",
    desc: "We specify branded, tested-grade materials for structural durability. No compromise on your safety or lifespan.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Clear timelines, weekly progress updates, and milestone billing — your project stays on schedule and on budget.",
  },
  {
    icon: MapPin,
    title: "All Kerala Coverage",
    desc: "Kochi, Thrissur, Kozhikode, Thiruvananthapuram, Palakkad, Kannur — we mobilise across every district.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#FAFAF8] py-24 md:py-32 border-t border-zinc-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">

          {/* ── Left sticky heading ── */}
          <div className="lg:w-[340px] shrink-0 lg:sticky lg:top-32">
            <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.35em] uppercase mb-6">
              WHY KEY FOUNDATION
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] leading-[1.08]">
              Distinction{" "}
              <br />
              <em className="not-italic text-[#C9A96E]">Engineered</em>
            </h2>
            <p className="text-[#666] mt-8 text-base leading-relaxed font-sans">
              We are not the cheapest builder in Kerala. We are the most dependable — and our clients will tell you that makes all the difference.
            </p>
            <div className="mt-8 h-[1px] w-12 bg-[#C9A96E]" />

            {/* Trust stat */}
            <div className="mt-10 bg-[#0A0A0A] p-8">
              <div className="text-5xl font-serif text-[#C9A96E] leading-none">4.9</div>
              <div className="text-[10px] text-white/40 font-bold uppercase tracking-[0.25em] mt-2">
                Average Client Rating
              </div>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-[#C9A96E]" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right feature grid ── */}
          <div className="flex-1 grid gap-[1px] sm:grid-cols-2 bg-zinc-200">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative bg-white p-10 transition-all duration-500 hover:bg-[#FAFAF8]"
              >
                {/* Gold corner accent on hover */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#C9A96E] transition-all duration-500 group-hover:w-full" />

                <div className="flex flex-col gap-6">
                  <div className="flex h-12 w-12 items-center justify-center border border-zinc-100 group-hover:border-[#C9A96E]/40 group-hover:bg-[#C9A96E]/5 transition-all duration-300">
                    <Icon className="h-5 w-5 text-[#C9A96E]/70 group-hover:text-[#C9A96E] transition-colors" aria-hidden />
                  </div>
                  <h3 className="font-serif text-[#1A1A1A] text-lg leading-tight group-hover:text-[#C9A96E] transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#777] group-hover:text-[#555] transition-colors">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
