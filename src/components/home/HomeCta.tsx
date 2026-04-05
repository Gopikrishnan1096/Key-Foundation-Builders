import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { QuickEnquiryForm } from "@/components/home/QuickEnquiryForm";

export function HomeCta() {
  return (
    <section className="bg-primary py-16 text-white md:py-20">
      <Container>
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
          {/* Left: Copy */}
          <div className="flex-1">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">
              Ready to Begin?
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
              Get a Free Site Visit &amp; Estimate
            </h2>
            <p className="mt-4 max-w-md text-slate-300">
              Tell us about your project and we&apos;ll arrange a free on-site
              consultation. No commitment — just honest advice from Kerala&apos;s
              trusted construction experts.
            </p>

            {/* Trust signals */}
            <ul className="mt-8 space-y-3">
              {[
                "✅ Free site visit — no obligation",
                "✅ Detailed estimate within 48 hours",
                "✅ 10+ years, 50+ completed projects",
                "✅ Serving all districts of Kerala",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  {item}
                </li>
              ))}
            </ul>

            {/* Fallback phone CTA */}
            <div className="mt-8">
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-accent" aria-hidden />
                Or call us: {site.phone}
              </a>
            </div>
          </div>

          {/* Right: Quick Enquiry Form */}
          <div className="w-full shrink-0 md:max-w-sm lg:max-w-md">
            <QuickEnquiryForm />
          </div>
        </div>

        {/* Bottom nav prompts */}
        <div className="mt-14 flex flex-wrap justify-center gap-4 border-t border-white/10 pt-10 text-center text-sm text-slate-400">
          <Link href="/projects" className="hover:text-accent transition">View Projects →</Link>
          <Link href="/services" className="hover:text-accent transition">Our Services →</Link>
          <Link href="/about" className="hover:text-accent transition">About Us →</Link>
          <Link href="/contact" className="hover:text-accent transition">Contact Us →</Link>
        </div>
      </Container>
    </section>
  );
}

