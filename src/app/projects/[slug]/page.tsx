import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";
import { ProjectImageSlider } from "@/components/projects/ProjectImageSlider";
import { Container } from "@/components/ui/Container";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="bg-white pb-20">
      <Container className="py-10">
        <ProjectImageSlider images={project.gallery} alt={project.name} />

        <header className="mt-10 max-w-3xl">
          <h1 className="text-3xl font-bold text-primary sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-3 text-sm font-medium text-slate-500">
            <span>{project.location}</span>
            <span className="mx-2 text-slate-300">|</span>
            <span>{project.sqft.toLocaleString()} sqft</span>
            <span className="mx-2 text-slate-300">|</span>
            <span>{project.duration}</span>
          </p>
          <p className="mt-4 text-lg text-slate-600">{project.summary}</p>
        </header>

        <div className="mt-8 max-w-3xl space-y-4">
          {project.description.map((para) => (
            <p key={para.slice(0, 40)} className="leading-relaxed text-slate-600">
              {para}
            </p>
          ))}
        </div>

        {project.beforeAfter && project.beforeAfter.length > 0 ? (
          <section className="mt-14">
            <h2 className="text-xl font-bold text-primary">Before / After</h2>
            <div className="mt-6 space-y-12">
              {project.beforeAfter.map((pair) => (
                <div key={pair.before}>
                  {pair.label ? (
                    <p className="mb-3 text-sm font-semibold text-accent">
                      {pair.label}
                    </p>
                  ) : null}
                  <div className="grid gap-6 md:grid-cols-2">
                    <figure>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200">
                        <Image
                          src={pair.before}
                          alt="Before"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <figcaption className="mt-2 text-center text-xs font-medium text-slate-500">
                        Before
                      </figcaption>
                    </figure>
                    <figure>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200">
                        <Image
                          src={pair.after}
                          alt="After"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <figcaption className="mt-2 text-center text-xs font-medium text-slate-500">
                        After
                      </figcaption>
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-14 rounded-2xl bg-primary p-8 text-center text-white shadow-lg">
          <h2 className="text-xl font-bold">Start your project</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-slate-100">
            Share your site location and goals — we’ll outline scope, timeline,
            and a clear estimate.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-none bg-dark px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-dark"
          >
            Contact us
          </Link>
        </div>
      </Container>
    </article>
  );
}
