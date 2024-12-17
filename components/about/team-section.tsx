import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80",
  },
  {
    name: "Sarah Chen",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&q=80",
  },
  {
    name: "Michael Brown",
    role: "Design Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=80",
  },
];

export function TeamSection() {
  return (
    <section className="py-12 md:py-16">
      <h2 className="mb-8 text-2xl font-bold md:text-3xl">Our Team</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {team.map((member) => (
          <Card key={member.name} className="p-6 text-center">
            <Avatar className="mx-auto mb-4 h-24 w-24">
              <AvatarImage src={member.image} alt={member.name} />
              <AvatarFallback>{member.name[0]}</AvatarFallback>
            </Avatar>
            <h3 className="mb-1 font-bold">{member.name}</h3>
            <p className="text-sm text-muted-foreground">{member.role}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}