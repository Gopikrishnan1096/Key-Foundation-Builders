import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedProjects() {
  const featured = getFeaturedProjects(6);

  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <p className="text-primary font-bold tracking-[0.4em] uppercase mb-4 text-xs">Architectural Portfolio</p>
            <h2 className="text-4xl md:text-7xl font-serif text-zinc-900 leading-tight">
              Signature <br />
              <span className="italic text-primary">Landmarks</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-4 text-zinc-900 text-xs font-bold uppercase tracking-[0.3em] hover:text-primary transition-all pb-2 border-b border-zinc-200"
          >
            Explore Collection
            <div className="h-[1px] w-8 bg-primary transition-all group-hover:w-16" />
          </Link>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className={`group relative overflow-hidden bg-zinc-900 aspect-[3/4] ${
                i === 1 ? "md:mt-12" : i === 2 ? "lg:mt-24" : ""
              }`}
            >
              <Image
                src={p.gallery[0]}
                alt={p.name}
                fill
                className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              
              <div className="absolute inset-x-0 bottom-0 p-10 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <div className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-3">{p.location}</div>
                <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight">
                  {p.name}
                </h3>
                
                <div className="mt-6 flex items-center gap-3 text-[10px] text-white/50 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  View Detail <div className="h-[1px] w-4 bg-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
