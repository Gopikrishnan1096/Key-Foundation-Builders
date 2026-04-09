import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { site, fullAddress, mapsEmbedSrc } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${site.name} for quotes and site visits in Kerala.`,
};

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen pt-24">
      <div className="py-20">
        <Container>
          <p className="text-primary font-bold tracking-[0.3em] uppercase mb-4 text-sm">Contact</p>
          <h1 className="text-5xl md:text-7xl font-black text-white italic mb-8 uppercase">GET IN <span className="text-primary">TOUCH</span></h1>
          <p className="max-w-xl text-gray-400 text-lg leading-relaxed">
            Planning a construction project in Kerala? We provide detailed consultations and transparent pricing.
          </p>
        </Container>
      </div>

      <Container className="grid gap-16 pb-24 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="p-10 border border-white/10 bg-white/5 rounded-sm">
            <h2 className="text-2xl font-black text-white uppercase italic tracking-wider mb-8">Send a <span className="text-primary">Msg</span></h2>
            <ContactForm />
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-12">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="flex gap-4 p-8 border border-white/10 bg-white/5 rounded-sm">
              <div className="h-12 w-12 flex items-center justify-center bg-primary text-black shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Call Us</span>
                <a href={`tel:${site.phoneRaw}`} className="text-white font-bold text-lg hover:text-primary transition-colors italic">
                  {site.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-4 p-8 border border-white/10 bg-white/5 rounded-sm">
              <div className="h-12 w-12 flex items-center justify-center bg-primary text-black shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Email Us</span>
                <a href={`mailto:${site.email}`} className="text-white font-bold text-lg hover:text-primary transition-colors italic break-all">
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 border border-white/10 bg-white/5 rounded-sm">
            <div className="flex gap-4 mb-8">
              <div className="h-12 w-12 flex items-center justify-center bg-primary text-black shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Office Location</span>
                <p className="text-white font-bold leading-relaxed">
                  {fullAddress()}
                </p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-sm grayscale group hover:grayscale-0 transition-all duration-700">
              <iframe
                title={`Map — ${site.name}`}
                src={mapsEmbedSrc()}
                className="h-64 w-full border-0 md:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
