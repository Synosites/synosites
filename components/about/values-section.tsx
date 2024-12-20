import { Card } from "@/components/ui/card";
import { Lightbulb, Users, Rocket, Shield } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of the curve with cutting-edge technologies and approaches.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with our clients to achieve the best possible outcomes.",
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
      <h2 className="mb-8 text-2xl font-bold text-center md:text-3xl">
        Our Values
      </h2>
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <Card
              key={value.title}
              className="p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Icon
                className="mb-4 h-12 w-12 text-primary"
                aria-hidden="true"
              />
              <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
