import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { ProjectsClient } from "@/components/projects/ProjectsClient";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Portfolio of homes, commercial buildings, and warehouse projects across Kerala.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-black min-h-screen pt-32 md:pt-40">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <p className="text-primary font-bold tracking-[0.4em] uppercase mb-6 text-xs text-center">Our Portfolio</p>
          <h1 className="text-5xl md:text-8xl font-serif text-white leading-tight text-center">
            Signature <br />
            <span className="italic text-primary">Success</span>
          </h1>
        </div>
        <ProjectsClient projects={projects} />
      </div>
    </div>
  );
}
