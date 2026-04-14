import { CheckCircle2, Clock, CreditCard, Package, MapPin, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: BadgeCheck,
    title: "30+ Years of Excellence",
    desc: "Three decades of trusted civil & steel construction across Kerala.",
  },
  {
    icon: CheckCircle2,
    title: "100+ Projects Completed",
    desc: "From homes to commercial builds and steel/godown projects — a proven track record you can trust.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    desc: "No hidden costs. Detailed BOQ before work starts so you know exactly what you're paying for.",
  },
  {
    icon: Package,
    title: "Quality Materials",
    desc: "We specify reliable brands and quality grades for long-term strength and durability.",
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
    <section className="bg-slate-50 py-24 md:py-32 border-t border-zinc-200">
      <Container>
        <div className="flex flex-col md:flex-row gap-20 items-start">
          <div className="md:w-1/3 sticky top-32">
            <p className="text-primary font-bold tracking-[0.4em] uppercase mb-6 text-xs">The Excellence</p>
            <h2 className="text-4xl md:text-6xl font-serif text-zinc-900 leading-tight">
              Distinction <br />
              <span className="italic text-primary">Engined</span>
            </h2>
            <p className="text-zinc-500 mt-8 text-lg font-serif italic">
               &ldquo;Quality is not an act, it is a habit.&rdquo;
            </p>
            <div className="mt-10 h-[1px] w-12 bg-primary"></div>
          </div>

          <div className="md:w-2/3 grid gap-1 sm:grid-cols-2 bg-zinc-200">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative bg-white p-10 transition-all duration-500 hover:bg-slate-50"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex h-12 w-12 items-center justify-center bg-white border border-zinc-200 group-hover:border-primary/30 transition-all">
                    <Icon className="h-4 w-4 text-primary/80 group-hover:text-primary transition-colors" aria-hidden />
                  </div>
                  <h3 className="font-serif text-zinc-900 text-lg transition-all group-hover:text-primary">{title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-500 group-hover:text-zinc-600 transition-colors">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

