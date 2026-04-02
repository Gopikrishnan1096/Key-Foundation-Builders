import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const cover = project.gallery[0];
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
        <ImageSrc src={cover} alt={project.name} />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-primary group-hover:text-accent">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-slate-600">{project.location}</p>
        <p className="mt-2 text-xs font-medium text-slate-500">
          {project.sqft.toLocaleString()} sqft · {project.year}
        </p>
      </div>
    </Link>
  );
}

function ImageSrc({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition duration-500 group-hover:scale-105"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  );
}
