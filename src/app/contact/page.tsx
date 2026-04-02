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
    <div className="bg-slate-50">
      <div className="border-b border-slate-100 bg-white py-12 md:py-16">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Share your name, phone, and a short note — we&apos;ll follow up with
            next steps and scheduling.
          </p>
        </Container>
      </div>

      <Container className="grid gap-12 py-12 lg:grid-cols-2 lg:py-16">
        <div>
          <h2 className="text-lg font-semibold text-primary">Send a message</h2>
          <p className="mt-2 text-sm text-slate-600">
            Submitting opens your email app with the message pre-filled. You can
            edit before sending.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary">Contact details</h2>
          <ul className="mt-6 space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-md">
            <li className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Phone
                </p>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="font-medium text-primary hover:text-accent"
                >
                  {site.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Address
                </p>
                <p className="font-medium text-slate-700">{fullAddress()}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-primary hover:text-accent"
                >
                  {site.email}
                </a>
              </div>
            </li>
          </ul>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-md">
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
      </Container>
    </div>
  );
}
