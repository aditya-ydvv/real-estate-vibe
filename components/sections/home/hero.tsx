import { BadgeCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-100 via-white to-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(20,184,166,0.12),transparent_40%),radial-gradient(circle_at_85%_0%,rgba(59,130,246,0.16),transparent_40%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-18 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Curated premium homes in top-tier locations
          </p>

          <div className="space-y-4">
            <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Discover your next signature address.
            </h1>
            <p className="max-w-lg text-base text-muted-foreground sm:text-lg">
              A modern real-estate experience with handpicked listings, neighborhood intelligence, and private tours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg">Browse Properties</Button>
            <Button size="lg" variant="outline">
              Speak to an Advisor
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <p className="inline-flex items-center gap-1.5">
              <BadgeCheck className="size-4 text-primary" />
              3,500+ luxury listings
            </p>
            <p className="inline-flex items-center gap-1.5">
              <BadgeCheck className="size-4 text-primary" />
              120+ vetted agents
            </p>
          </div>
        </div>

        <Card className="border-border/60 bg-background/80 shadow-xl shadow-black/5">
          <CardContent className="space-y-6 p-6">
            <p className="text-sm font-medium text-muted-foreground">Quick search</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium">Location</span>
                <input
                  type="text"
                  placeholder="New York"
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium">Property Type</span>
                <select className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]">
                  <option>Any</option>
                  <option>Penthouse</option>
                  <option>Single Family</option>
                  <option>Townhome</option>
                  <option>Condo</option>
                </select>
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium">Min Price</span>
                <select className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]">
                  <option>No Min</option>
                  <option>$500k</option>
                  <option>$1M</option>
                  <option>$2M</option>
                </select>
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium">Beds</span>
                <select className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]">
                  <option>Any</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                </select>
              </label>
            </div>

            <Button className="w-full">Search Homes</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
