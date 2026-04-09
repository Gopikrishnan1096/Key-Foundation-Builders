"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/lib/types";
import { projectCategories } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Props = {
  projects: Project[];
};

export function ProjectsClient({ projects }: Props) {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [projects, filter]);

  return (
    <Container className="py-12 md:py-16">
      <div
        className="mb-20 flex flex-wrap justify-center gap-8"
        role="tablist"
        aria-label="Filter projects"
      >
        {projectCategories.map((c) => {
          const active = filter === c.id;
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={active ? "true" : "false"}
              onClick={() => setFilter(c.id)}
              className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all pb-2 border-b-2 ${
                active
                  ? "border-primary text-primary"
                  : "border-transparent text-zinc-500 hover:text-zinc-900"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-zinc-500 font-serif italic">No projects in this category yet.</p>
      ) : (
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}
    </Container>
  );
}
