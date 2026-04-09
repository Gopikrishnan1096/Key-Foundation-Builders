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
      className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-sm aspect-[4/5] flex flex-col justify-end p-8 transition-all hover:bg-white/10 hover:border-primary/50"
    >
      <div className="absolute inset-0 z-0">
        <ImageSrc src={cover} alt={project.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 transform transition-transform group-hover:translate-y-[-10px] duration-500">
        <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-2">{project.location}</p>
        <h3 className="text-2xl font-black text-white uppercase leading-tight">
          {project.name}
        </h3>
        <p className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
          {project.sqft.toLocaleString()} SQFT <span className="h-1 w-1 bg-primary rounded-full"></span> {project.year}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
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
