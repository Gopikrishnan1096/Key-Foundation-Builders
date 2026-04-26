"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { X, ArrowRight, ChevronDown } from "lucide-react";
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

  // ── Mega-menu hover helpers ───────────────────────────────────────────────
  const openMenu = (label: string) => {
    if (menuTimerRef.current) clearTimeout(menuTimerRef.current);
    setActiveMenu(label);
  };
  const closeMenu = () => {
    menuTimerRef.current = setTimeout(() => setActiveMenu(null), 120);
  };

  return (
    <header
      className={`absolute inset-x-0 top-0 z-50 transition-all duration-500 ${
        isHome ? "bg-transparent" : "bg-[#0A0A0A]"
      }`}
    >
      {isHome ? (
        <div className="mx-auto grid grid-cols-3 items-center max-w-[1440px] px-6 lg:px-12 h-24">
          {/* ── Home Page Nav Bar (Minimalist) ── */}
          {/* Left: Menu Toggle */}
          <div className="flex justify-start">
            <button
              type="button"
              className="group flex items-center gap-3 text-white transition-opacity hover:opacity-80"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(true)}
            >
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
                MENU
              </span>
              <div className="flex flex-col gap-[6px] items-start w-6">
                <span className="h-[1px] bg-white w-6 transition-all duration-300 group-hover:w-4" />
                <span className="h-[1px] bg-white w-4 transition-all duration-300 group-hover:w-6" />
              </div>
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <Logo variant="header" onDarkBackground={true} isHome={true} />
          </div>

          {/* Right: CTA */}
          <div className="flex justify-end">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-6 py-2.5 text-[10px] font-bold tracking-[0.15em] uppercase border border-white/30 text-white hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
            >
              INQUIRE NOW
            </Link>
          </div>
        </div>
      ) : (
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 lg:px-12 h-24">
          {/* ── Inner Pages Nav Bar (Full Desktop Nav) ── */}
          
          {/* Logo */}
          <Logo variant="header" onDarkBackground={true} isHome={false} />

          {/* Desktop nav — always visible on large screens */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Main">
            {megaNav.map((item) => {
              const hasItems = item.items.length > 0;
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + "?");
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasItems && openMenu(item.label)}
                  onMouseLeave={closeMenu}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors ${
                      isActive
                        ? "text-[#C9A96E]"
                        : "text-white/85 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {hasItems && (
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${
                          activeMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Mega dropdown */}
                  {hasItems && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-6 transition-all duration-200 ${
                        activeMenu === item.label
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

          {/* Right: CTA + mobile hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-6 py-2.5 text-[10px] font-bold tracking-[0.15em] uppercase border border-white/30 text-white hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
            >
              INQUIRE NOW
            </Link>
            
            <button
              type="button"
              className="lg:hidden group flex items-center gap-3 text-white transition-opacity hover:opacity-80"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(true)}
            >
              <div className="flex flex-col gap-[6px] items-start w-6">
                <span className="h-[1px] bg-white w-6 transition-all duration-300 group-hover:w-4" />
                <span className="h-[1px] bg-white w-4 transition-all duration-300 group-hover:w-6" />
              </div>
            </button>
          </div>
        </div>
      )}

      {/* ── Full-screen mobile menu ── */}
      <div
        id="mobile-menu"
        aria-hidden={!mobileOpen}
        className={`fixed inset-0 z-[70] bg-[#0A0A0A] flex flex-col transition-transform duration-500 ease-in-out ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Top bar with close button */}
        <div className="flex items-center justify-between px-6 lg:px-12 h-24 border-b border-white/10 shrink-0 bg-[#0A0A0A]">
          <Logo variant="header" onDarkBackground={true} isHome={false} />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="text-white/70 hover:text-white transition-colors p-2"
          >
            <X className="h-7 w-7 stroke-[1.5px]" />
          </button>
        </div>

        {/* Scrollable menu content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-10 lg:py-16 flex flex-col gap-12 w-full min-h-full justify-between">
            
            {/* Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              {megaNav.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl md:text-3xl font-serif text-white tracking-wide mb-4 hover:text-[#C9A96E] transition-colors"
                  >
                    {item.label}
                  </Link>
                  <div className="h-[1px] bg-white/10 w-full mb-6"></div>
                  {item.items.length > 0 && (
                    <div className="flex flex-col gap-5 pl-2">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-[15px] text-white/60 hover:text-white transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom CTA & Phone */}
            <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 pb-6 pt-8 border-t border-white/10 shrink-0">
              <p className="text-center md:text-left text-white/50 text-[14px]">
                {site.phone}
              </p>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full md:w-auto px-10 py-4 border border-[#C9A96E] text-[#C9A96E] text-center text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#C9A96E] hover:text-[#0A0A0A] transition-colors"
              >
                GET FREE QUOTE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

