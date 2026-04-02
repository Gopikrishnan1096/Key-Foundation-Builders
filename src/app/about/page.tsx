import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Story, mission, and team behind Key Foundation Builders — Kerala construction experts.",
};

const storyImage =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80";

const team = [
  {
    name: "Founder",
    role: "Managing Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Lead Engineer",
    role: "Structural & Site Planning",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Site Supervisors",
    role: "Field Operations",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=400&q=80",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-slate-100 bg-slate-50 py-12 md:py-16">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            About
          </p>
          <h1 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
            About Key Foundation Builders
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            We are a Kerala-based construction firm focused on durable structures,
            honest estimates, and schedules you can plan around.
          </p>
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-lg">
            <Image
              src={storyImage}
              alt="Construction team at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary">Company story</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Key Foundation Builders started with a simple commitment: deliver
              civil work that survives Kerala&apos;s monsoon cycle and
              day-to-day use — without surprises on the bill.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Today we partner with families, business owners, and industrial
              operators from initial soil checks through finishing coordination,
              keeping one accountable team on site from start to handover.
            </p>
          </div>
        </div>
      </Container>

      <section className="border-y border-slate-100 bg-slate-50 py-16">
        <Container>
          <SectionHeading
            title="Mission & Vision"
            subtitle="What drives every pour, lift, and handover we sign off."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-md">
              <h3 className="text-lg font-bold text-primary">Mission</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Execute safe, code-aware construction with transparent cost
                breakdowns and proactive communication so clients can make
                decisions with confidence.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-md">
              <h3 className="text-lg font-bold text-primary">Vision</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Become Kerala&apos;s most referred residential and light
                industrial builder — known for durable detailing, respectful
                crews, and predictable delivery.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <SectionHeading
          title="Achievements"
          subtitle="Milestones earned project by project."
        />
        <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-1 md:grid-cols-3">
          {[
            "100+ projects completed",
            "Skilled in-house and partner workforce",
            "Deep Kerala site experience — coast to hills",
          ].map((t) => (
            <li
              key={t}
              className="flex gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
            >
              <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" />
              <span className="font-medium text-primary">{t}</span>
            </li>
          ))}
        </ul>
      </Container>

      <section className="bg-slate-50 py-16">
        <Container>
          <SectionHeading
            title="Team"
            subtitle="Leadership and field leads you’ll meet on walkthroughs."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <article
                key={m.name}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md"
              >
                <div className="relative aspect-square bg-slate-200">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-primary">{m.name}</h3>
                  <p className="text-sm text-slate-600">{m.role}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
