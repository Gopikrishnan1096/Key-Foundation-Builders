import Link from "next/link";
import { servicePreviews } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesPreview() {
  return (
    <section className="py-24 bg-black">
      <Container>
        <div className="text-center mb-16">
          <p className="text-primary font-bold tracking-[0.3em] uppercase mb-4 text-sm">Expertise</p>
          <h2 className="text-4xl md:text-6xl font-black text-white italic">OUR <span className="text-primary">SERVICES</span></h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicePreviews.map((s) => (
            <Link
              key={s.id}
              href={s.href}
              className="group relative rounded-sm border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-primary/50"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-colors"></div>
              
              <s.icon
                className="relative h-12 w-12 text-primary mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3"
                aria-hidden
              />
              <h3 className="relative text-xl font-black text-white uppercase tracking-wider group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="relative mt-4 text-sm leading-relaxed text-gray-400 group-hover:text-gray-300">
                {s.short}
              </p>

              <div className="mt-8 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <div className="h-0.5 w-6 bg-primary"></div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
