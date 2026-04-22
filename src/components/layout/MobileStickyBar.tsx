"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Phone, FileText } from "lucide-react";
import { site } from "@/lib/site";

export function MobileStickyBar() {
  const pathname = usePathname();
  const wa = `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(
    `Hi ${site.name}, I'd like a quote.`
  )}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 bg-[#0A0A0A] border-t border-white/10 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_30px_rgba(0,0,0,0.4)] md:hidden">
      <div className="flex items-stretch justify-between">
        {/* Call */}
        <a
          href={`tel:${site.phoneRaw}`}
          aria-label={`Call ${site.phone}`}
          className="flex flex-1 flex-col items-center justify-center gap-1 py-4 text-white/40 hover:text-[#C9A96E] transition-colors border-r border-white/10"
        >
          <Phone className="h-5 w-5" aria-hidden />
          <span className="text-[9px] font-bold uppercase tracking-widest">Call</span>
        </a>

        {/* WhatsApp — gold accent */}
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-1 py-4 text-white/40 hover:text-green-400 transition-colors border-r border-white/10"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          <span className="text-[9px] font-bold uppercase tracking-widest">WhatsApp</span>
        </a>

        {/* Quote — highlighted */}
        <Link
          href="/contact"
          className={`flex flex-1 flex-col items-center justify-center gap-1 py-4 transition-colors ${
            pathname === "/contact"
              ? "text-[#C9A96E]"
              : "text-white hover:text-[#C9A96E] bg-[#C9A96E]/10"
          }`}
        >
          <FileText className="h-5 w-5" aria-hidden />
          <span className="text-[9px] font-bold uppercase tracking-widest">Get Quote</span>
        </Link>
      </div>
    </div>
  );
}
