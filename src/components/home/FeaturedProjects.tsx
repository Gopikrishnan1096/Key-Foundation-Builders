import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedProjects() {
  const featured = getFeaturedProjects(6);

  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="A snapshot of recent sites — from villas to warehouses."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <Image
                  src={p.gallery[0]}
                  alt={p.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-primary group-hover:text-accent">
                  {p.name}
                </h3>
                <p className="text-sm text-slate-600">{p.location}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex rounded-lg border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            View All Projects
          </Link>
        </div>
      </Container>
    </section>
  );
}
