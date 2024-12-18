import { Badge } from "@/components/ui/badge";

export function AboutHero() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10">
      <div className="flex flex-col items-start gap-4">
        <Badge variant="secondary">About Us</Badge>
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Siz xəyal edin biz reallığa çevirək!
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Syno Sites is a forward-thinking web development agency dedicated to creating exceptional digital experiences. We combine creativity with technical expertise to deliver solutions that make an impact.
        </p>
      </div>
    </section>
  );
}
