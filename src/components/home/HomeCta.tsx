import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function HomeCta() {
  const wa = `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(
    `Hi ${site.name}, I'm ready to discuss my project.`,
  )}`;

  return (
    <section className="bg-primary py-16 text-white md:py-20">
      <Container className="text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Ready to build your dream home?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-300">
          Call us for a site visit or send a quick message — we typically reply
          within one business day.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={`tel:${site.phoneRaw}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-md transition hover:bg-slate-100 sm:w-auto"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call Now
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-primary shadow-md transition hover:bg-amber-400 sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
