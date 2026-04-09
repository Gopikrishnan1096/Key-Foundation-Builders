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
  const onDarkBackground = isHome && !scrolled;

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

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 border-b border-zinc-200 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? "h-16 sm:h-20" : "h-20 sm:h-24"
        }`}
      >
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
                  active ? "text-primary border-b border-primary/40 pb-1" : "text-zinc-600"
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
            className="group inline-flex items-center bg-primary px-8 py-3 text-[10px] font-bold text-white uppercase tracking-[0.2em] transition-all hover:bg-zinc-900"
          >
            Inquire Now
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-primary md:hidden"
          /* eslint-disable-next-line jsx-a11y/aria-proptypes */
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          <nav className="flex flex-col gap-10" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-3xl font-serif text-zinc-900 hover:text-primary transition-colors italic"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-12 inline-flex justify-center bg-primary px-6 py-5 text-center text-[10px] font-bold text-white uppercase tracking-[0.3em]"
              onClick={() => setOpen(false)}
            >
              Request Consultation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
