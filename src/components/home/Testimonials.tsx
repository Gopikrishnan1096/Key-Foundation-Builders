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
    <section className="bg-slate-50 py-24 md:py-32 border-t border-zinc-200">
      <Container>
        <div className="text-center mb-20">
          <p className="text-primary font-bold tracking-[0.4em] uppercase mb-6 text-xs">Client Stories</p>
          <h2 className="text-4xl md:text-6xl font-serif text-zinc-900 leading-tight">
            Voices of <br />
            <span className="italic text-primary">Trust</span>
          </h2>
        </div>

        {/* Updated Trust Badge */}
        <div className="mb-20 flex justify-center">
          <div className="inline-flex items-center gap-6 rounded-sm border border-zinc-200 bg-white px-8 py-4 shadow-sm">
            <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-serif text-zinc-900 leading-none">4.9</span>
                <StarRating count={5} />
              </div>
              <span className="text-[10px] text-primary/60 uppercase tracking-[0.2em] font-bold mt-1">Verified Experience</span>
            </div>
          </div>
        </div>

        <Carousel>
          {quotes.map((q) => (
            <CarouselSlide key={q.name}>
              <blockquote className="relative flex h-full flex-col bg-white p-12 md:p-16 transition-all border border-zinc-200 shadow-sm">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.01701 21L6.01701 18C6.01701 16.8954 6.91245 16 8.01701 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.01701C7.46473 8 7.01701 8.44772 7.01701 9V12C7.01701 12.5523 6.56929 13 6.01701 13H5.01701V21H6.01701Z" />
                  </svg>
                </div>
                
                <div className="mb-8">
                  <StarRating count={q.stars} />
                </div>

                <p className="flex-1 text-2xl md:text-3xl font-serif text-zinc-800 leading-relaxed italic">
                  &ldquo;{q.text}&rdquo;
                </p>
                
                <footer className="mt-12 flex items-center gap-6 border-t border-zinc-200 pt-10">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm text-xl font-bold bg-primary text-black"
                    aria-hidden
                  >
                    {q.initials}
                  </div>
                  <cite className="not-italic">
                    <span className="block text-lg font-bold text-zinc-900 uppercase tracking-widest">{q.name}</span>
                    <span className="block text-sm font-medium text-primary uppercase tracking-[0.2em] mt-1">{q.role}</span>
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

