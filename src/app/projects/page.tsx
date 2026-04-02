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
    <div className="bg-slate-50 min-h-[50vh]">
      <ProjectsClient projects={projects} />
    </div>
  );
}
