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
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-zinc-200 pt-32 pb-16">
      <Container>
        <div className="grid gap-20 lg:grid-cols-2">
          <div className="space-y-12">
            <div>
              <Logo variant="footer" onDarkBackground={false} />
              <p className="text-zinc-600 text-sm leading-relaxed max-w-sm mt-8 italic font-serif">
                "{site.tagline}"
              </p>
            </div>
            
            <div className="flex gap-8">
              {[
                { icon: Facebook, href: site.social.facebook, label: "Facebook" },
                { icon: Instagram, href: site.social.instagram, label: "Instagram" },
                { icon: Youtube, href: site.social.youtube, label: "Youtube" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="group flex flex-col items-center gap-2"
                  aria-label={social.label}
                >
                  <div className="h-12 w-12 flex items-center justify-center bg-white border border-zinc-200 group-hover:bg-primary transition-all">
                    <social.icon className="h-5 w-5 text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h4 className="text-zinc-900 font-bold uppercase tracking-[0.3em] text-[10px] mb-10">Navigation</h4>
              <ul className="space-y-6">
                {quick.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-zinc-600 text-xs hover:text-primary transition-colors uppercase tracking-widest font-bold"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-zinc-900 font-bold uppercase tracking-[0.3em] text-[10px] mb-10">Contact</h4>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-2">Private Line</span>
                    <a href={`tel:${site.phoneRaw}`} className="text-zinc-900 text-lg font-serif hover:text-primary transition-colors">
                      {site.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-2">Office Headquarters</span>
                    <p className="text-zinc-900 text-sm font-serif leading-relaxed max-w-xs">
                      {fullAddress()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em] leading-loose text-center md:text-left">
            © {new Date().getFullYear()} {site.name}. 
            Architectural Excellence in Kerala.
          </p>
          <div className="flex gap-10">
            <Link href="/privacy" className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em] hover:text-zinc-900 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em] hover:text-zinc-900 transition-colors">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
