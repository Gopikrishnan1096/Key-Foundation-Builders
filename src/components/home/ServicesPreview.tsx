import Link from "next/link";
import { servicePreviews } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesPreview() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Services"
          subtitle="End-to-end civil and structural execution for projects across Kerala."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicePreviews.map((s) => (
            <Link
              key={s.id}
              href={s.href}
              className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
            >
              <s.icon
                className="h-10 w-10 text-accent transition group-hover:scale-110"
                aria-hidden
              />
              <h3 className="mt-4 font-semibold text-primary group-hover:text-accent">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {s.short}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
