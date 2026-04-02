import { Carousel, CarouselSlide } from "@/components/embla/Carousel";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const quotes = [
  {
    text: "Very professional work — timelines were clear and the site was always organized. We’d build with them again without hesitation.",
    name: "Anjana & Rohit",
    role: "Homeowners, Kochi",
  },
  {
    text: "Best builders in Kerala for pragmatic problem-solving. They caught detail issues early and saved us costly rework.",
    name: "Dileep Mathew",
    role: "Commercial tenant fit-out, Thrissur",
  },
  {
    text: "Our warehouse slab and loading bay layout were executed exactly to spec. Strong coordination with our equipment vendor.",
    name: "Priya Nair",
    role: "Logistics operator, Kozhikode",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-slate-100 bg-white py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say"
          subtitle="Word-of-mouth from homeowners and business owners across Kerala."
        />
        <Carousel>
          {quotes.map((q) => (
            <CarouselSlide key={q.name}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
                <p className="flex-1 text-slate-700 leading-relaxed">&ldquo;{q.text}&rdquo;</p>
                <footer className="mt-4 border-t border-slate-200 pt-4">
                  <cite className="not-italic">
                    <span className="font-semibold text-primary">{q.name}</span>
                    <span className="mt-1 block text-sm text-slate-500">{q.role}</span>
                  </cite>
                </footer>
              </blockquote>
            </CarouselSlide>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
