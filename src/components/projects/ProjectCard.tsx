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
      className="group relative overflow-hidden bg-white aspect-[3/4] flex flex-col justify-end p-10 transition-all duration-700"
    >
      <div className="absolute inset-0 z-0">
        <ImageSrc src={cover} alt={project.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
      </div>
      
      <div className="relative z-10 transform transition-all duration-500 group-hover:translate-y-[-10px]">
        <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4">{project.location}</p>
        <h3 className="text-2xl md:text-3xl font-serif text-white uppercase leading-tight mb-6">
          {project.name}
        </h3>
        <div className="flex items-center gap-4 text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] pt-6 border-t border-white/10">
          <span>{project.sqft.toLocaleString()} SQFT</span>
          <div className="h-1 w-1 bg-primary rounded-full"></div>
          <span>{project.year}</span>
        </div>
      </div>

      <div className="absolute inset-0 border border-zinc-200 group-hover:border-primary/30 transition-all duration-700"></div>
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
