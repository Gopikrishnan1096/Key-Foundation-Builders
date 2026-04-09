import Link from "next/link";
import { servicePreviews } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-zinc-200">
      <Container>
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-primary font-bold tracking-[0.4em] uppercase mb-6 text-xs">Our Discipline</p>
          <h2 className="text-4xl md:text-6xl font-serif text-zinc-900 leading-tight">
            Comprehensive <br />
            <span className="italic text-primary">Mastery</span>
          </h2>
        </div>

        <div className="grid gap-1 bg-zinc-200">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {servicePreviews.map((s) => (
              <Link
                key={s.id}
                href={s.href}
                className="group relative bg-white p-10 transition-all duration-500 hover:bg-slate-50"
              >
                <div className="mb-12">
                  <s.icon
                    className="h-10 w-10 text-primary/60 transition-all duration-500 group-hover:text-primary group-hover:scale-110"
                    aria-hidden
                  />
                </div>
                <h3 className="text-xl font-serif text-zinc-900 mb-4 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500 group-hover:text-zinc-600 transition-colors">
                  {s.short}
                </p>

                <div className="mt-12 flex items-center gap-4 text-primary text-[10px] font-bold uppercase tracking-[0.2em] transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Services <div className="h-[1px] w-8 bg-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
