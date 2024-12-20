import { ProjectCard } from "./project-card";
import { projects } from "@/lib/data";

export function ProjectsList() {
  return (
    <div className="grid gap-6 py-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
