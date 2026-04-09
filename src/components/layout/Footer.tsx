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
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Logo variant="footer" onDarkBackground={true} />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{site.tagline}</p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: site.social.facebook },
                { icon: Instagram, href: site.social.instagram },
                { icon: Youtube, href: site.social.youtube }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="h-10 w-10 flex items-center justify-center border border-white/10 hover:bg-primary hover:text-black transition-all text-gray-400"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul className="space-y-4">
              {quick.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-400 text-sm hover:text-primary transition-colors uppercase tracking-widest font-bold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="h-10 w-10 flex items-center justify-center bg-white/5 text-primary shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-black uppercase">Call Support</span>
                  <a href={`tel:${site.phoneRaw}`} className="text-white font-bold hover:text-primary transition-colors">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-10 w-10 flex items-center justify-center bg-white/5 text-primary shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-black uppercase">Email Us</span>
                  <a href={`mailto:${site.email}`} className="text-white font-bold hover:text-primary transition-colors">
                    {site.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Location</h4>
            <div className="flex gap-4">
              <div className="h-10 w-10 flex items-center justify-center bg-white/5 text-primary shrink-0">
                <MapPin className="h-4 w-4" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {fullAddress()}
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block bg-primary text-black px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1"
              >
                Send Message
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-loose text-center md:text-left">
            © {new Date().getFullYear()} {site.name}. <br className="md:hidden" />
            Designed for Excellence in Kerala.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[10px] text-gray-500 font-bold uppercase tracking-widest hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[10px] text-gray-500 font-bold uppercase tracking-widest hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
