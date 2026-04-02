import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  "Quality Materials",
  "On-Time Delivery",
  "Experienced Team",
  "Transparent Pricing",
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
        <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {points.map((text) => (
            <li
              key={text}
              className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
            >
              <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" aria-hidden />
              <span className="font-medium text-primary">{text}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
