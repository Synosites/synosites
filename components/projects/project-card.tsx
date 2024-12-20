import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { ProjectType } from "@/lib/types";

export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Card className="group overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 p-6 pt-0">
        {project.liveUrl && (
          <Button variant="outline" size="sm" className="gap-2">
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Button>
        )}
        {project.githubUrl && (
          <Button variant="outline" size="sm" className="gap-2">
            <Github className="h-4 w-4" />
            Source Code
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
