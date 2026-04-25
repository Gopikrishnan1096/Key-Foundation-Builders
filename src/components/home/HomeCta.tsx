import Link from "next/link";
import { Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { site, fullAddress } from "@/lib/site";
import { QuickEnquiryForm } from "@/components/home/QuickEnquiryForm";

export function HomeCta() {
  const waUrl = `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(
    `Hi ${site.name}, I'd like to discuss a project and get a free quote.`
  )}`;

  return (
    <section className="min-h-[640px]" id="get-quote">
      <div className="grid lg:grid-cols-2 min-h-[640px]">

        {/* ── Left: Black brand panel ── */}
        <div className="bg-[#0A0A0A] px-10 py-20 lg:px-16 xl:px-20 flex flex-col justify-center relative overflow-hidden">
          {/* Radial background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,169,110,0.08)_0%,transparent_60%)] pointer-events-none" />

          <div className="relative z-10">
            <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.35em] uppercase mb-8">
              NEXT STEP
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.08] mb-8">
              Begin Your{" "}
              <em className="not-italic text-[#C9A96E]">Legacy</em>{" "}
              <br />
              in Kerala
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-12 max-w-md">
              Schedule a private consultation with our lead engineering team. No obligations — just a clear plan for your vision.
            </p>

            {/* Feature bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
              {[
                "Free Site Appraisal",
                "Fixed-Price BOQ Quote",
                "No Hidden Charges",
                "Kerala-Wide Coverage",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/60 text-[11px] font-bold uppercase tracking-widest">
                  <div className="h-[1px] w-5 bg-[#C9A96E] shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* Direct contact links */}
            <div className="space-y-5 border-t border-white/8 pt-10">
              {/* Call */}
              <a
                href={`tel:${site.phoneRaw}`}
                className="flex items-center gap-5 group"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-white/10 group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]/5 transition-all shrink-0">
                  <Phone className="h-4 w-4 text-[#C9A96E]" />
                </div>
                <div>
                  <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold mb-0.5">Call Direct</p>
                  <p className="text-white font-serif text-xl group-hover:text-[#C9A96E] transition-colors">{site.phone}</p>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 text-white/20 group-hover:text-[#C9A96E] group-hover:translate-x-1 transition-all" />
              </a>

              {/* WhatsApp */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 group"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-white/10 group-hover:border-green-500 group-hover:bg-green-500/5 transition-all shrink-0">
                  <MessageCircle className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold mb-0.5">WhatsApp</p>
                  <p className="text-white font-serif text-xl group-hover:text-green-400 transition-colors">{site.phone2}</p>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 text-white/20 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
              </a>

              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 items-center justify-center border border-white/10 shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-[#C9A96E]" />
                </div>
                <div>
                  <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold mb-0.5">Headquarters</p>
                  <p className="text-white/55 text-sm leading-relaxed max-w-xs">{fullAddress()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: Form panel ── */}
        <div className="bg-[#FAFAF8] px-10 py-20 lg:px-16 xl:px-20 flex flex-col justify-center">
          <div className="max-w-lg w-full mx-auto">
            <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.35em] uppercase mb-6">
              FREE CONSULTATION
            </p>
            <h3 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-4 leading-tight">
              Get Your{" "}
              <em className="not-italic text-[#C9A96E]">Free Quote</em>
            </h3>
            <p className="text-[#666] text-sm mb-10 leading-relaxed">
              Fill in your details and we&apos;ll reach out within 24 hours with a transparent, no-obligation estimate.
            </p>
            <QuickEnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
