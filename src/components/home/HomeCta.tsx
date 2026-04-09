import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { QuickEnquiryForm } from "@/components/home/QuickEnquiryForm";

export function HomeCta() {
  return (
    <section className="bg-white py-24 md:py-40 relative overflow-hidden border-t border-zinc-200">
      {/* Editorial Background Accent */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-slate-50 -skew-x-12 transform translate-x-1/4" />
      
      <Container className="relative z-10">
        <div className="flex flex-col gap-24 lg:flex-row lg:items-center">
          {/* Left: Copy */}
          <div className="flex-1">
            <p className="text-primary font-bold tracking-[0.4em] uppercase mb-8 text-xs">
              Next Step
            </p>
            <h2 className="text-4xl md:text-7xl font-serif text-zinc-900 leading-tight">
              Begin Your <br />
              <span className="italic text-primary">Masterpiece</span>
            </h2>
            <p className="mt-10 max-w-xl text-zinc-600 text-lg leading-relaxed">
              Experience the pinnacle of Kerala&apos;s architectural execution. 
              Schedule a private consultation to discuss your vision with 
              our lead engineering team.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                "Complimentary Site Appraisal",
                "Fixed-Price Engineering Quote",
                "Advanced Resource Planning",
                "Statewide Project Coverage",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 text-zinc-600 font-bold uppercase tracking-widest text-[10px]">
                  <div className="h-[1px] w-6 bg-primary" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-16">
              <a
                href={`tel:${site.phoneRaw}`}
                className="group inline-flex items-center gap-6 text-zinc-900 hover:text-primary transition-all pb-4 border-b border-zinc-200"
              >
                <div className="flex h-12 w-12 items-center justify-center bg-slate-50 border border-zinc-200 group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="h-4 w-4" aria-hidden />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Private Line</span>
                  <span className="text-2xl font-serif">{site.phone}</span>
                </div>
              </a>
            </div>
          </div>

          <div className="w-full shrink-0 lg:max-w-xl">
            <div className="p-[1px] bg-gradient-to-br from-zinc-200 to-transparent">
              <div className="bg-slate-50 p-10 md:p-12 shadow-sm">
                <QuickEnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
