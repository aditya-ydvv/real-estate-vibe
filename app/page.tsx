import { ConciergeSection } from "@/components/home/ConciergeSection";
import { ExclusivesSection } from "@/components/home/ExclusivesSection";
import { HeroSlideshow } from "@/components/home/HeroSlideshow";
import { LinksHubSection } from "@/components/home/LinksHubSection";
import { NeighborhoodSection } from "@/components/home/NeighborhoodSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSlideshow />
        <ExclusivesSection />
        <ConciergeSection />
        <NeighborhoodSection />
        <LinksHubSection />
      </main>
      <SiteFooter />
    </div>
  );
}
