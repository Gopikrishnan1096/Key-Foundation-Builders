import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { serviceBlocks } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Residential construction, commercial projects, warehouses, and renovation in Kerala.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-slate-100 bg-slate-50 py-12 md:py-16">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Services
          </p>
          <h1 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Structured offerings for residential, commercial, warehouse, and
            renovation programmes — scoped clearly before shovel hits soil.
          </p>
        </Container>
      </div>

      <Container className="space-y-20 py-16">
        {serviceBlocks.map((block, i) => {
          const reverse = i % 2 === 1;
          return (
            <section
              key={block.id}
              id={block.id}
              className="grid items-center gap-10 scroll-mt-24 lg:grid-cols-2"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-lg lg:order-none ${
                  reverse ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={block.image}
                  alt={block.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className={reverse ? "lg:order-1" : ""}>
                <h2 className="text-2xl font-bold text-primary">{block.title}</h2>
                <div className="mt-4 space-y-4 text-slate-600 leading-relaxed">
                  {block.body.map((p) => (
                    <p key={p.slice(0, 30)}>{p}</p>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </Container>

      <section className="border-t border-slate-100 bg-primary py-16 text-white">
        <Container className="text-center">
          <h2 className="text-2xl font-bold">Need help choosing a service?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-100">
            Describe your site and goals — we&apos;ll recommend a package and
            rough timeline.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-none bg-dark px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-dark"
          >
            Contact Us
          </Link>
        </Container>
      </section>
    </div>
  );
}
