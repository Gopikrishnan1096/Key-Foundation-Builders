import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedProjects() {
  const featured = getFeaturedProjects(6);

  return (
    <section className="bg-dark py-24">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <p className="text-primary font-bold tracking-[0.3em] uppercase mb-4 text-sm">Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-black text-white italic">FEATURED <span className="text-primary">WORKS</span></h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors"
          >
            Explore All Projects <div className="h-0.5 w-12 bg-primary transition-all group-hover:w-20"></div>
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group relative overflow-hidden bg-black aspect-[3/4]"
            >
              <Image
                src={p.gallery[0]}
                alt={p.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2">{p.location}</div>
                <h3 className="text-2xl font-black text-white uppercase leading-tight">
                  {p.name}
                </h3>
                <div className="mt-4 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
