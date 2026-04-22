"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { site } from "@/lib/site";
import { Logo } from "@/components/brand/Logo";

// ── Mega-nav structure ──────────────────────────────────────────────────────
const megaNav = [
  {
    label: "WHO WE ARE",
    href: "/about",
    items: [
      { label: "Our Philosophy", href: "/about#philosophy" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Our Legacy", href: "/about#legacy" },
      { label: "Awards & Recognition", href: "/about#awards" },
    ],
  },
  {
    label: "WHAT WE DO",
    href: "/services",
    items: [
      { label: "Residential Construction", href: "/services#residential" },
      { label: "Commercial Projects", href: "/services#commercial" },
      { label: "Steel Structures", href: "/services#steel" },
      { label: "Godown & Industrial", href: "/services#godown" },
      { label: "Renovation & Maintenance", href: "/services#renovation" },
    ],
  },
  {
    label: "PROJECTS",
    href: "/projects",
    items: [
      { label: "All Projects", href: "/projects" },
      { label: "Residential", href: "/projects?cat=houses" },
      { label: "Commercial", href: "/projects?cat=commercial" },
      { label: "Industrial", href: "/projects?cat=warehouses" },
    ],
  },
  {
    label: "CONTACT",
    href: "/contact",
    items: [],
  },
];

const utilityLinks = [
  { label: "GALLERY", href: "/gallery" },
  { label: "CONTACT", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHome = pathname === "/";

  // ── Scroll listener ───────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close mobile on route change ──────────────────────────────────────────
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // ── Body scroll lock when mobile open ─────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // ── Nav bg: transparent on home hero, solid black on scroll / other pages ─
  const isTransparent = isHome && !scrolled;

  // ── Mega-menu hover helpers ───────────────────────────────────────────────
  const openMenu = (label: string) => {
    if (menuTimerRef.current) clearTimeout(menuTimerRef.current);
    setActiveMenu(label);
  };
  const closeMenu = () => {
    menuTimerRef.current = setTimeout(() => setActiveMenu(null), 120);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${isTransparent ? "bg-transparent" : "bg-[#0A0A0A] border-b border-white/5"
      }`}>


      {/* ── Main nav bar ── */}
      {isTransparent ? (
        /* ── HERO STATE: Centered logo, 'MENU' hamburger left ── */
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 lg:px-12 h-24">

          {/* Left: MENU button */}
          <div className="flex-1 flex items-center">
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className="group flex items-center gap-4 text-white transition-opacity hover:opacity-80"
            >
              <span className="text-[12px] font-bold tracking-[0.15em] uppercase hidden sm:block">
                MENU
              </span>
              <div className="flex flex-col gap-[5px] items-start justify-center w-6">
                <span className="h-[1px] bg-white w-full transition-all duration-300 group-hover:w-4" />
                <span className="h-[1px] bg-white w-5 transition-all duration-300 group-hover:w-full" />
                <span className="h-[1px] bg-white w-4 transition-all duration-300 group-hover:w-5" />
              </div>
            </button>
          </div>

          {/* CENTERED LOGO */}
          <div className="flex justify-center flex-shrink-0 mt-[10px]">
            <Logo variant="header" onDarkBackground={true} isHome={isHome} />
          </div>

          {/* Right: spacer to keep logo perfectly centered */}
          <div className="flex-1" />
        </div>
      ) : (
        /* ── SCROLLED STATE: Normal left-aligned logo ── */
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 lg:px-12 h-24">
          {/* Logo */}
          <Logo variant="header" onDarkBackground={true} isHome={isHome} />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Main">
            {megaNav.map((item) => {
              const hasItems = item.items.length > 0;
              const isActive = pathname === item.href || pathname.startsWith(item.href + "?");
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasItems && openMenu(item.label)}
                  onMouseLeave={closeMenu}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors ${isActive ? "text-[#C9A96E]" : "text-white/80 hover:text-white"
                      }`}
                  >
                    {item.label}
                    {hasItems && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeMenu === item.label ? "rotate-180" : ""}`} />
                    )}
                  </Link>

                  {/* Mega dropdown */}
                  {hasItems && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-6 transition-all duration-200 ${activeMenu === item.label
                        ? "opacity-100 pointer-events-auto translate-y-0"
                        : "opacity-0 pointer-events-none -translate-y-2"
                        }`}
                      onMouseEnter={() => openMenu(item.label)}
                      onMouseLeave={closeMenu}
                    >
                      <div className="bg-[#0A0A0A] border border-white/10 p-8 min-w-[240px] shadow-2xl">
                        <p className="text-[10px] text-[#C9A96E] font-bold tracking-[0.25em] uppercase mb-6">
                          {item.label}
                        </p>
                        <ul className="space-y-4">
                          {item.items.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                className="block text-sm text-white/70 hover:text-[#C9A96E] transition-colors font-medium leading-tight"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3 text-[11px] font-bold tracking-[0.15em] uppercase border border-white/40 text-white hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
            >
              INQUIRE NOW
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      )}

      {/* ── Mobile full-screen overlay menu ── */}
      <div
        id="mobile-menu"
        aria-hidden={!mobileOpen}
        className={`fixed inset-0 z-[60] bg-[#0A0A0A] flex flex-col transition-transform duration-400 ease-in-out lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"
          } ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/10 shrink-0">
          <Logo variant="header" onDarkBackground={true} withLink={false} />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-6 pt-10 gap-0 flex-1 overflow-y-auto" aria-label="Mobile">
          {megaNav.map((item) => {
            const active = pathname === item.href;
            return (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center py-5 text-2xl font-serif border-b border-white/10 transition-colors ${active ? "text-[#C9A96E]" : "text-white hover:text-[#C9A96E]"
                    }`}
                >
                  {item.label}
                </Link>
                {item.items.length > 0 && (
                  <div className="pl-4 pb-2 space-y-2">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm text-white/50 hover:text-[#C9A96E] transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Bottom CTA */}
        <div className="px-6 pb-10 pt-6 shrink-0">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center w-full border border-[#C9A96E] text-[#C9A96E] py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#C9A96E] hover:text-[#0A0A0A] transition-all"
          >
            GET FREE QUOTE
          </Link>
          <p className="text-center text-white/30 text-xs mt-4">
            <a href={`tel:${site.phoneRaw}`} className="hover:text-[#C9A96E] transition-colors">
              {site.phone}
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}
