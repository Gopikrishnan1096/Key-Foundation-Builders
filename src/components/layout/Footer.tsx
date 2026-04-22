import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { site, fullAddress } from "@/lib/site";
import { Logo } from "@/components/brand/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services#residential", label: "Residential" },
  { href: "/services#commercial", label: "Commercial" },
  { href: "/services#steel", label: "Steel Structures" },
  { href: "/services#godown", label: "Godown & Industrial" },
  { href: "/services#renovation", label: "Renovation" },
];

const locationLinks = [
  "Kochi", "Thrissur", "Kozhikode", "Thiruvananthapuram",
  "Palakkad", "Kannur", "Ernakulam", "Alappuzha",
];

const policyLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const socials = [
  { Icon: Facebook, href: site.social.facebook, label: "Facebook" },
  { Icon: Instagram, href: site.social.instagram, label: "Instagram" },
  { Icon: Youtube, href: site.social.youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* Thin gold top border */}
      <div className="h-[1px] bg-[#C9A96E]" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-20 pb-10">
        {/* ── Main grid ── */}
        <div className="grid gap-16 lg:grid-cols-5 pb-16 border-b border-white/10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-8">
            <Logo variant="footer" onDarkBackground={true} />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs font-sans italic">
              &ldquo;{site.tagline}&rdquo;
            </p>
            <div>
              <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mb-4">Follow Us</p>
              <div className="flex gap-4">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] text-white/30 font-bold uppercase tracking-[0.25em] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/50 text-sm hover:text-[#C9A96E] transition-colors font-sans"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] text-white/30 font-bold uppercase tracking-[0.25em] mb-8">Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/50 text-sm hover:text-[#C9A96E] transition-colors font-sans"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations + Policies */}
          <div className="space-y-10">
            <div>
              <h4 className="text-[10px] text-white/30 font-bold uppercase tracking-[0.25em] mb-8">Locations</h4>
              <ul className="space-y-3">
                {locationLinks.slice(0, 5).map((city) => (
                  <li key={city}>
                    <span className="text-white/50 text-sm font-sans">{city}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] text-white/30 font-bold uppercase tracking-[0.25em] mb-6">Policies</h4>
              <ul className="space-y-3">
                {policyLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-white/50 text-sm hover:text-[#C9A96E] transition-colors font-sans"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/25 font-bold uppercase tracking-[0.2em] text-center md:text-left">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-8">
            {policyLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[10px] text-white/25 font-bold uppercase tracking-[0.2em] hover:text-[#C9A96E] transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <span className="text-[10px] text-white/25 font-bold uppercase tracking-[0.2em]">
              RERA Compliant
            </span>
          </div>
        </div>

        {/* RERA disclaimer */}
        <p className="mt-6 text-[9px] text-white/15 leading-relaxed max-w-3xl">
          Key Foundation Builders operates in compliance with applicable Kerala RERA regulations.
          All project information, pricing estimates, and timelines are indicative and subject to
          site-specific conditions and formal agreements.
        </p>
      </div>
    </footer>
  );
}
