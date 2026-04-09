import { CheckCircle2, Clock, CreditCard, Package, MapPin, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: BadgeCheck,
    title: "10+ Years of Excellence",
    desc: "A decade of construction expertise building homes and commercial projects across Kerala.",
  },
  {
    icon: CheckCircle2,
    title: "50+ Projects Completed",
    desc: "From compact homes to 7,000 sqft warehouses — a proven track record you can trust.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    desc: "No hidden costs. Detailed BOQ before work starts so you know exactly what you're paying for.",
  },
  {
    icon: Package,
    title: "ISI-Certified Materials",
    desc: "We source only quality, ISI-certified building materials for strength and durability.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Clear timelines and weekly progress updates — your project stays on schedule.",
  },
  {
    icon: MapPin,
    title: "Serving All of Kerala",
    desc: "Kochi, Thrissur, Kozhikode, Thiruvananthapuram — we work across every district.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-black py-24 border-t border-white/5">
      <Container>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <p className="text-primary font-bold tracking-[0.3em] uppercase mb-4 text-sm">Why Us</p>
            <h2 className="text-4xl md:text-5xl font-black text-white italic leading-tight">THE <span className="text-primary">DIFFERENCE</span> WE BUILD</h2>
            <p className="text-gray-400 mt-6 text-lg">
              We combine traditional structural integrity with modern engineering discipline.
            </p>
            <div className="mt-8 h-1 w-24 bg-primary"></div>
          </div>

          <div className="md:w-2/3 grid gap-6 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative rounded-sm border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary transform group-hover:rotate-12 transition-transform">
                    <Icon className="h-6 w-6 text-black" aria-hidden />
                  </div>
                  <h3 className="font-black text-white uppercase tracking-wider text-sm">{title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

