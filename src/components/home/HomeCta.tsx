import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { QuickEnquiryForm } from "@/components/home/QuickEnquiryForm";

export function HomeCta() {
  return (
    <section className="bg-black py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2"></div>
      
      <Container className="relative z-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
          {/* Left: Copy */}
          <div className="flex-1">
            <p className="text-primary font-bold tracking-[0.3em] uppercase mb-4 text-sm">
              Ready to Begin?
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white italic leading-tight">
              GET A FREE <span className="text-primary">SITE VISIT</span> <br /> & ESTIMATE
            </h2>
            <p className="mt-8 max-w-xl text-gray-400 text-lg leading-relaxed">
              Tell us about your project and we&apos;ll arrange a free on-site
              consultation. No commitment — just honest advice from Kerala&apos;s
              trusted construction experts.
            </p>

            {/* Trust signals */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Free site visit — no obligation",
                "Detailed estimate in 48 hours",
                "10+ years of experience",
                "Serving all districts of Kerala",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[10px]">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>

            {/* Phone CTA */}
            <div className="mt-12">
              <a
                href={`tel:${site.phoneRaw}`}
                className="group inline-flex items-center gap-4 text-white hover:text-primary transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center bg-white/10 group-hover:bg-primary group-hover:text-black transition-all">
                  <Phone className="h-5 w-5" aria-hidden />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Call Us Anytime</span>
                  <span className="text-xl font-black">{site.phone}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Quick Enquiry Form */}
          <div className="w-full shrink-0 lg:max-w-lg">
            <QuickEnquiryForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
