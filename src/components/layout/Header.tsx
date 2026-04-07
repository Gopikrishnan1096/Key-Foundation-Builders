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
  { href: "/gallery", label: "Gallery" },
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md transition-colors duration-300">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 ${
          isHome
            ? "min-h-[5.75rem] py-2 sm:min-h-[6.25rem]"
            : "h-[4.5rem] sm:h-20"
        }`}
      >
        <Logo
          variant="header"
          onDarkBackground={false}
          isHome={isHome}
        />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-accent" : "text-slate-600"
                } hover:text-accent`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-primary shadow-md transition hover:bg-amber-400"
          >
            Get Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-primary md:hidden"
          aria-expanded={open ? "true" : "false"}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 z-40 bg-white transition md:hidden ${
          isHome ? "top-[5.75rem] sm:top-[6.25rem]" : "top-[4.5rem] sm:top-20"
        } ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          className="flex flex-col gap-1 border-t border-slate-100 px-4 py-6"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-3 text-base font-medium text-primary hover:bg-slate-50"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 inline-flex justify-center rounded-lg bg-accent px-4 py-3 text-center text-base font-semibold text-primary"
          >
            Get Quote
          </Link>
          <p className="mt-6 text-center text-sm text-slate-500">{site.name}</p>
        </nav>
      </div>
    </header>
  );
}
