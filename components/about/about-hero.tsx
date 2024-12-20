import { Badge } from "@/components/ui/badge";

export function AboutHero() {
  return (
    <section className="px-4 pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-16">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center gap-6 text-center">
        <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
          About Us
        </Badge>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl lg:leading-tight">
          Siz xəyal edin biz reallığa çevirək!
        </h1>
        <p className="max-w-[750px] text-base text-gray-700 sm:text-lg md:text-xl lg:text-2xl">
          Syno Sites qeyri-adi rəqəmsal təcrübələr yaratmağa həsr olunmuş irəli
          düşünən veb inkişaf agentliyidir. Biz təsir yaradan həllər təqdim
          etmək üçün yaradıcılığı texniki təcrübə ilə birləşdiririk.
        </p>
      </div>
    </section>
  );
}
