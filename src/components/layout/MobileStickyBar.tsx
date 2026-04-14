"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Phone, FileText } from "lucide-react";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function MobileStickyBar() {
  const pathname = usePathname();
  const wa = `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(
    `Hi ${site.name}, I'd like a quote.`,
  )}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(15,23,42,0.08)] md:hidden">
      {/* Top nav row */}
      <div className="flex items-stretch justify-between border-b border-slate-100">
        {navLinks.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-1 items-center justify-center py-1.5 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                active
                  ? "text-primary border-t-2 border-primary bg-primary/5"
                  : "text-zinc-500 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Bottom action row */}
      <div className="mx-auto flex max-w-lg items-stretch justify-between gap-1 px-2 py-1.5">
        {/* Call number 1 */}
        <a
          href={`tel:${site.phoneRaw}`}
          aria-label={`Call ${site.phone}`}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg py-1.5 text-primary transition hover:bg-slate-50"
        >
          <Phone className="h-5 w-5 text-accent" aria-hidden />
          <span className="text-[9px] font-semibold leading-tight text-zinc-500">Call 1</span>
        </a>
        {/* Call number 2 */}
        <a
          href={`tel:${site.phone2Raw}`}
          aria-label={`Call ${site.phone2}`}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg py-1.5 text-primary transition hover:bg-slate-50"
        >
          <Phone className="h-5 w-5 text-primary" aria-hidden />
          <span className="text-[9px] font-semibold leading-tight text-zinc-500">Call 2</span>
        </a>
        {/* WhatsApp */}
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg py-1.5 text-primary transition hover:bg-slate-50"
        >
          <MessageCircle className="h-5 w-5 text-green-600" aria-hidden />
          <span className="text-[9px] font-semibold leading-tight text-zinc-500">WhatsApp</span>
        </a>
        {/* Get Quote */}
        <Link
          href="/contact"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg py-1.5 text-primary transition hover:bg-slate-50"
        >
          <FileText className="h-5 w-5 text-accent" aria-hidden />
          <span className="text-[9px] font-semibold leading-tight text-zinc-500">Get Quote</span>
        </Link>
      </div>
    </div>
  );
}

