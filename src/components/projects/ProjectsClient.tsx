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
      <SectionHeading
        title="Our Projects"
        subtitle="Explore recent deliveries across residential, commercial, and industrial work."
      />

      <div
        className="mb-12 flex flex-wrap justify-center gap-4"
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
              aria-selected={active}
              onClick={() => setFilter(c.id)}
              className={`rounded-sm px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-all ${
                active
                  ? "bg-primary text-black"
                  : "bg-white/5 text-gray-500 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-slate-600">No projects in this category yet.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}
    </Container>
  );
}
