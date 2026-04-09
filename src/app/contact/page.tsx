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
    <div className="bg-slate-50 min-h-screen pt-32 md:pt-40">
      <div className="py-20">
        <Container>
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <p className="text-primary font-bold tracking-[0.4em] uppercase mb-6 text-xs text-center">Inquiry</p>
            <h1 className="text-5xl md:text-8xl font-serif text-zinc-900 leading-tight text-center">
              Get in <br />
              <span className="italic text-primary">Touch</span>
            </h1>
          </div>
        </Container>
      </div>

      <Container className="grid gap-20 pb-32 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="p-10 md:p-14 bg-white border border-zinc-200">
            <h2 className="text-3xl font-serif text-zinc-900 mb-10 italic">Send an Inquiry</h2>
            <ContactForm />
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-16">
          <div className="grid gap-12 sm:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="h-14 w-14 flex items-center justify-center bg-white text-primary border border-zinc-200">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mb-2">Private Line</span>
                <a href={`tel:${site.phoneRaw}`} className="text-zinc-900 font-serif text-xl hover:text-primary transition-colors">
                  {site.phone}
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="h-14 w-14 flex items-center justify-center bg-white text-primary border border-zinc-200">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mb-2">Electronic Mail</span>
                <a href={`mailto:${site.email}`} className="text-zinc-900 font-serif text-xl hover:text-primary transition-colors break-all">
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="flex flex-col gap-6">
              <div className="h-14 w-14 flex items-center justify-center bg-white text-primary border border-zinc-200">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mb-2">Headquarters</span>
                <p className="text-zinc-900 font-serif text-lg leading-relaxed max-w-sm">
                  {fullAddress()}
                </p>
              </div>
            </div>
            
            <div className="overflow-hidden border border-zinc-200 grayscale group hover:grayscale-0 transition-all duration-1000">
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
