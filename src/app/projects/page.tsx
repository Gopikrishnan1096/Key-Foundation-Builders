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
    <div className="bg-black min-h-screen pt-24">
      <div className="container mx-auto px-4 py-16">
        <p className="text-primary font-bold tracking-[0.3em] uppercase mb-4 text-sm text-center">Portfolio</p>
        <h1 className="text-5xl md:text-7xl font-black text-white italic text-center mb-16 uppercase">OUR <span className="text-primary">WORKS</span></h1>
        <ProjectsClient projects={projects} />
      </div>
    </div>
  );
}
