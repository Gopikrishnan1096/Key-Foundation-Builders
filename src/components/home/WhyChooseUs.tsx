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
    <section className="py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why us"
          title="Why Choose Key Foundation Builders"
          subtitle="We combine site discipline with clear communication so your build stays predictable."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition group-hover:bg-accent/20">
                <Icon className="h-6 w-6 text-accent" aria-hidden />
              </div>
              <h3 className="mt-4 font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

