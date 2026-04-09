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

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-black/90 border-b border-white/10 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? "h-16 sm:h-20" : "h-20 sm:h-24"
        }`}
      >
        <Logo
          variant="header"
          onDarkBackground={true}
          isHome={isHome}
        />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all hover:scale-110 ${
                  active ? "text-primary" : "text-gray-300 hover:text-primary"
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
            className="inline-flex items-center rounded-sm bg-primary px-6 py-2.5 text-sm font-bold text-black uppercase tracking-wider transition-all hover:bg-white hover:scale-105"
          >
            Get Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-primary md:hidden"
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
        className={`fixed inset-0 z-40 bg-black/95 transition-all duration-300 md:hidden ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          <nav className="flex flex-col gap-6" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-2xl font-bold text-white hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-8 inline-flex justify-center rounded-sm bg-primary px-6 py-4 text-center text-lg font-bold text-black uppercase"
              onClick={() => setOpen(false)}
            >
              Get Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
