import Link from "next/link";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { site, fullAddress } from "@/lib/site";
import { QuickEnquiryForm } from "@/components/home/QuickEnquiryForm";

export function HomeCta() {
  const waUrl = `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(
    `Hi ${site.name}, I'd like to discuss a project.`
  )}`;

  return (
    <section className="min-h-[600px]">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* ── Left: Black panel ── */}
        <div className="bg-[#0A0A0A] px-10 py-20 lg:px-16 xl:px-24 flex flex-col justify-center">
          <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.3em] uppercase mb-8">
            NEXT STEP
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8">
            Begin Your <br />
            <em className="not-italic text-[#C9A96E]">Masterpiece</em>
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-12 max-w-md">
            Schedule a private consultation to discuss your vision with our lead
            engineering team — across all of Kerala.
          </p>

          {/* Feature list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            {[
              "Complimentary Site Appraisal",
              "Fixed-Price Engineering Quote",
              "Advanced Resource Planning",
              "Statewide Project Coverage",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-white/50 text-[10px] font-bold uppercase tracking-widest">
                <div className="h-[1px] w-5 bg-[#C9A96E] shrink-0" />
                {item}
              </div>
            ))}
          </div>

          {/* Contact info */}
          <div className="space-y-5 border-t border-white/10 pt-10">
            <a
              href={`tel:${site.phoneRaw}`}
              className="flex items-center gap-5 group"
            >
              <div className="flex h-11 w-11 items-center justify-center border border-white/10 group-hover:border-[#C9A96E] transition-colors shrink-0">
                <Phone className="h-4 w-4 text-[#C9A96E]" />
              </div>
              <div>
                <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold mb-0.5">Primary</p>
                <p className="text-white font-serif text-lg group-hover:text-[#C9A96E] transition-colors">{site.phone}</p>
              </div>
            </a>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 group"
            >
              <div className="flex h-11 w-11 items-center justify-center border border-white/10 group-hover:border-green-500 transition-colors shrink-0">
                <MessageCircle className="h-4 w-4 text-green-500" />
              </div>
              <div>
                <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold mb-0.5">WhatsApp</p>
                <p className="text-white font-serif text-lg group-hover:text-green-400 transition-colors">{site.phone2}</p>
              </div>
            </a>

            <div className="flex items-start gap-5">
              <div className="flex h-11 w-11 items-center justify-center border border-white/10 shrink-0 mt-0.5">
                <MapPin className="h-4 w-4 text-[#C9A96E]" />
              </div>
              <div>
                <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold mb-0.5">Headquarters</p>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">{fullAddress()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: White panel with form ── */}
        <div className="bg-white px-10 py-20 lg:px-16 xl:px-24 flex flex-col justify-center">
          <div className="max-w-lg w-full mx-auto">
            <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.3em] uppercase mb-6">
              GET IN TOUCH
            </p>
            <h3 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-10 leading-tight">
              Send an <em className="not-italic text-[#C9A96E]">Enquiry</em>
            </h3>
            <QuickEnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
