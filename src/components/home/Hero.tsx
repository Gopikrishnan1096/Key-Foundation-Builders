import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Clock, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { QuickEnquiryForm } from "@/components/home/QuickEnquiryForm";

const heroImage =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80";

const badges = [
  { icon: ShieldCheck, text: "10+ Years Experience" },
  { icon: Star, text: "50+ Projects Completed" },
  { icon: Clock, text: "On-Time Delivery" },
];

export function Hero() {
  return (
    <section className="relative -mt-[5.75rem] min-h-[90vh] pt-[5.75rem] sm:-mt-[6.25rem] sm:pt-[6.25rem] md:min-h-[95vh]">
      <Image
        src={heroImage}
        alt="Construction site and building framework in Kerala"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Multi-stop gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/30 md:from-primary/90 md:via-primary/60 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-primary/20" />

      <Container className="relative flex min-h-[90vh] flex-col justify-center py-24 md:min-h-[95vh] md:py-32">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Left: Copy */}
          <div className="max-w-2xl flex-1">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent backdrop-blur-sm">
              ⭐ Kerala&apos;s Trusted Builders
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Building Strong<br />
              <span className="text-accent">Foundations</span> for<br />
              Kerala&apos;s Future
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">
              Trusted construction experts for homes, commercial spaces, and
              warehouse projects — transparent pricing, quality materials, and
              on-time delivery across Kerala.
            </p>

            {/* Credential badge strip */}
            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm"
                >
                  <Icon className="h-4 w-4 text-accent" aria-hidden />
                  <span className="text-sm font-semibold text-white">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 md:hidden">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-center text-base font-semibold text-primary shadow-lg transition hover:bg-amber-400 hover:shadow-xl"
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

            {/* Desktop CTAs */}
            <div className="mt-8 hidden gap-3 md:flex">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/80 bg-white/10 px-6 py-3 text-center text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                View Our Projects
              </Link>
            </div>
          </div>

          {/* Right: Quick Enquiry Form — desktop only */}
          <div className="hidden w-full max-w-xs shrink-0 md:block lg:max-w-sm">
            <QuickEnquiryForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

