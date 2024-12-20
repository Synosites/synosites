import { Badge } from "@/components/ui/badge";

export function ProjectsHeader() {
  return (
    <div className="space-y-4 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold">Our Projects</h1>
        <Badge variant="secondary">Portfolio</Badge>
      </div>
      <p className="text-lg text-muted-foreground">
        Discover our latest work and successful project deliveries.
      </p>
    </div>
  );
}
