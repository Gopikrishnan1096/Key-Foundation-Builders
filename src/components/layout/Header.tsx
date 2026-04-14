"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { Logo } from "@/components/brand/Logo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Transparent hero mode: only on home page before scrolling
  const isTransparent = isHome && !scrolled;
  // Logo needs white glow when sitting on the dark hero image
  const onDarkBackground = isTransparent;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      isTransparent
        ? "bg-transparent"
        : "bg-white/95 border-b border-zinc-200 backdrop-blur-md shadow-sm"
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 h-20 sm:h-24">
        <Logo
          variant="header"
          onDarkBackground={onDarkBackground}
          isHome={isHome}
        />

        <nav className="hidden items-center gap-12 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-primary ${
                  active
                    ? isTransparent
                      ? "text-primary pb-1"
                      : "text-primary border-b border-primary/40 pb-1"
                    : isTransparent
                    ? "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
                    : "text-zinc-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className={`group inline-flex items-center px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
              isTransparent
                ? "bg-white/20 backdrop-blur-sm border border-white/60 text-white hover:bg-white hover:text-zinc-900"
                : "bg-primary text-white hover:bg-zinc-900"
            }`}
          >
            Inquire Now
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md text-primary md:hidden transition-all hover:bg-primary hover:text-white active:scale-95"
          /* eslint-disable-next-line jsx-a11y/aria-proptypes */
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu — z-[60] so it renders above the sticky header bar */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] bg-white flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        } ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Top bar — logo + close button */}
        <div className="flex items-center justify-between px-5 h-20 border-b border-zinc-100 shrink-0">
          <Logo variant="header" withLink={false} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors"
          >
            <X className="h-6 w-6" />
            <span className="text-xs font-bold uppercase tracking-widest">Close</span>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-6 pt-8 gap-1 flex-1 overflow-y-auto" aria-label="Mobile">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 py-4 text-2xl font-serif border-b border-zinc-100 transition-colors ${
                  active ? "text-primary" : "text-zinc-800 hover:text-primary"
                }`}
              >
                {active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA at bottom */}
        <div className="px-6 pb-10 pt-6 shrink-0">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-full bg-primary text-white py-5 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-900 transition-colors"
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
