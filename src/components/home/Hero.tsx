import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const heroImage =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80";

export function Hero() {
  return (
    <section className="relative -mt-[5.75rem] min-h-[85vh] pt-[5.75rem] sm:-mt-[6.25rem] sm:pt-[6.25rem] md:min-h-[90vh]">
      <Image
        src={heroImage}
        alt="Construction site and building framework in Kerala"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/30" />
      <Container className="relative flex min-h-[85vh] flex-col justify-center py-24 md:min-h-[90vh] md:py-32">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Key Foundation Builders
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Building Strong Foundations for Kerala&apos;s Future
        </h1>
        <p className="mt-6 max-w-xl text-lg text-slate-200">
          Trusted construction experts for homes, commercial spaces, and
          warehouse projects — transparent pricing, quality materials, and
          on-time delivery.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-center text-base font-semibold text-primary shadow-lg transition hover:bg-amber-400"
          >
            Get Free Quote
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/80 bg-white/10 px-6 py-3 text-center text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            View Projects
          </Link>
        </div>
      </Container>
    </section>
  );
}
