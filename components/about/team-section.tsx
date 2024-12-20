import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const team = [
  {
    name: "Adil Abdulkerim",
    role: "Founder & CEO",
    image: "",
  },
  {
    name: "Rufan Niyazli",
    role: "Lead Developer",
    image: "",
  },
  {
    name: "Kenan Ibrahimov",
    role: "Design Director & Business Manager",
    image: "",
  },
  {
    name: "Beyler ",
    role: "Backend Developer & Syber Secure",
    image: "",
  },
];

export function TeamSection() {
  return (
    <section className="py-12 md:py-16">
      <h2 className="mb-8 text-2xl font-bold text-center md:text-3xl">
        Our Team
      </h2>
      <div className="mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 sm:px-4 lg:px-8">
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
