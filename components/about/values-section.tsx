import { Card } from "@/components/ui/card";
import { Lightbulb, Users, Rocket, Shield } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of the curve with cutting-edge technologies and approaches.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with our clients to achieve the best possible outcomes.",
  },
  {
    icon: Rocket,
    title: "Excellence",
    description: "Delivering high-quality solutions that exceed expectations.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Building trust through consistent and dependable service.",
  },
];

export function ValuesSection() {
  return (
    <section className="py-12 md:py-16">
      <h2 className="mb-8 text-2xl font-bold md:text-3xl">Our Values</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <Card key={value.title} className="p-6">
              <Icon className="mb-4 h-10 w-10" />
              <h3 className="mb-2 font-bold">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}