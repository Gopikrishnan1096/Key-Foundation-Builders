"use client";

import Link from "next/link";
import { MessageCircle, Phone, FileText } from "lucide-react";
import { site } from "@/lib/site";

export function MobileStickyBar() {
  const wa = `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(
    `Hi ${site.name}, I'd like a quote.`,
  )}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(15,23,42,0.08)] md:hidden">
      <div className="mx-auto flex max-w-lg items-stretch justify-between gap-1 px-2 py-2">
        {/* Call number 1 */}
        <a
          href={`tel:${site.phoneRaw}`}
          aria-label={`Call ${site.phone}`}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg py-2 text-primary transition hover:bg-slate-50"
        >
          <Phone className="h-6 w-6 text-accent" aria-hidden />
          <span className="text-[9px] font-semibold leading-tight text-zinc-500">Call 1</span>
        </a>
        {/* Call number 2 */}
        <a
          href={`tel:${site.phone2Raw}`}
          aria-label={`Call ${site.phone2}`}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg py-2 text-primary transition hover:bg-slate-50"
        >
          <Phone className="h-6 w-6 text-primary" aria-hidden />
          <span className="text-[9px] font-semibold leading-tight text-zinc-500">Call 2</span>
        </a>
        {/* WhatsApp */}
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg py-2 text-primary transition hover:bg-slate-50"
        >
          <MessageCircle className="h-5 w-5 text-green-600" aria-hidden />
          <span className="text-[10px] font-semibold leading-tight">WhatsApp</span>
        </a>
        {/* Get Quote */}
        <Link
          href="/contact"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg py-2 text-primary transition hover:bg-slate-50"
        >
          <FileText className="h-5 w-5 text-accent" aria-hidden />
          <span className="text-[10px] font-semibold leading-tight">Get Quote</span>
        </Link>
      </div>
    </div>
  );
}
