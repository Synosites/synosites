import { ProjectCard } from "./project-card";
import { projects } from "@/lib/data";

export function ProjectsList() {
  return (
    <div className="grid gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}