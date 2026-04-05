import { Carousel, CarouselSlide } from "@/components/embla/Carousel";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star } from "lucide-react";

const quotes = [
  {
    text: "Very professional work — timelines were clear and the site was always organised. They built our dream home in Kochi in just 14 months. We'd build with Key Foundation again without hesitation.",
    name: "Anjana & Rohit",
    role: "Homeowners, Ernakulam",
    initials: "AR",
    color: "bg-blue-500",
    stars: 5,
  },
  {
    text: "Best builders in Kerala for pragmatic problem-solving. They caught structural issues early and saved us costly rework. Our commercial fit-out in Thrissur came in on budget.",
    name: "Dileep Mathew",
    role: "Business Owner, Thrissur",
    initials: "DM",
    color: "bg-emerald-500",
    stars: 5,
  },
  {
    text: "Our 7,000 sqft warehouse slab and loading bay layout were executed exactly to spec. Strong coordination with our equipment vendor. I'd give them 6 stars if I could.",
    name: "Priya Nair",
    role: "Logistics Director, Kozhikode",
    initials: "PN",
    color: "bg-purple-500",
    stars: 5,
  },
  {
    text: "Transparent pricing from day one — no hidden charges. They even suggested a better foundation design that saved us ₹3 lakhs. Highly recommend for Kochi home construction.",
    name: "Santhosh Kumar",
    role: "Homeowner, Kakkanad, Kochi",
    initials: "SK",
    color: "bg-amber-500",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="border-y border-slate-100 bg-white py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Client Reviews"
          title="What our clients say"
          subtitle="Real feedback from homeowners and business owners across Kerala."
        />

        {/* Google trust badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 shadow-sm">
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-slate-800">4.9</span>
              <StarRating count={5} />
            </div>
            <span className="text-xs text-slate-500">Google Verified Reviews</span>
          </div>
        </div>

        <Carousel>
          {quotes.map((q) => (
            <CarouselSlide key={q.name}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition hover:shadow-md">
                {/* Stars */}
                <StarRating count={q.stars} />

                <p className="mt-4 flex-1 text-slate-700 leading-relaxed">
                  &ldquo;{q.text}&rdquo;
                </p>
                <footer className="mt-5 flex items-center gap-3 border-t border-slate-200 pt-4">
                  {/* Avatar circle */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${q.color}`}
                    aria-hidden
                  >
                    {q.initials}
                  </div>
                  <cite className="not-italic">
                    <span className="block font-semibold text-primary">{q.name}</span>
                    <span className="block text-sm text-slate-500">{q.role}</span>
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

