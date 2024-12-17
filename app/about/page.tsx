import { AboutHero } from "@/components/about/about-hero";
import { TeamSection } from "@/components/about/team-section";
import { ValuesSection } from "@/components/about/values-section";

export default function AboutPage() {
  return (
    <div className="container">
      <AboutHero />
      <ValuesSection />
      <TeamSection />
    </div>
  );
}