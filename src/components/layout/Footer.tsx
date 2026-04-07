import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { site, fullAddress } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";

const quick = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="footer" />
            <p className="mt-4 text-sm text-slate-600">{site.tagline}</p>
            <div className="mt-4 flex gap-3">
              <a
                href={site.social.facebook}
                className="rounded-lg border border-slate-200 bg-white p-2 text-slate-600 transition hover:border-accent hover:text-accent"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={site.social.instagram}
                className="rounded-lg border border-slate-200 bg-white p-2 text-slate-600 transition hover:border-accent hover:text-accent"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={site.social.youtube}
                className="rounded-lg border border-slate-200 bg-white p-2 text-slate-600 transition hover:border-accent hover:text-accent"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-primary">Links</p>
            <ul className="mt-4 space-y-2">
              {quick.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-600 hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-primary">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                <a href={`tel:${site.phoneRaw}`} className="hover:text-accent">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                <a href={`mailto:${site.email}`} className="hover:text-accent">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span>{fullAddress()}</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-primary">Start a project</p>
            <p className="mt-4 text-sm text-slate-600">
              Tell us about your site, timeline, and budget — we’ll respond with
              next steps.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Contact us
            </Link>
          </div>
        </div>

        <p className="mt-12 border-t border-slate-200 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
