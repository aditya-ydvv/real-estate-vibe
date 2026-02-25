import Link from "next/link";
import { LockKeyhole } from "lucide-react";

import { listings } from "@/data/listings";
import { ListingCard } from "@/components/home/ListingCard";
import { MotionItem, MotionReveal, MotionStagger } from "@/components/ui/Motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const featuredListings = listings
  .filter((item) => item.mode === "buy")
  .sort((a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)))
  .slice(0, 5);

export function ExclusivesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
      <MotionReveal className="mb-8 space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          Dagar Prime Exclusives
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          Explore handpicked homes across Delhi NCR with private inventory and advisor-led tours.
        </p>
      </MotionReveal>

      <MotionStagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featuredListings.map((listing) => (
          <MotionItem key={listing.id}>
            <ListingCard listing={listing} />
          </MotionItem>
        ))}

        <MotionItem>
          <div className="flex h-full min-h-80 flex-col justify-between rounded-xl bg-zinc-950 p-6 text-white shadow-xl shadow-black/20">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-sm text-white/80">
                <LockKeyhole className="size-4" />
                Private Access
              </p>
              <h3 className="text-2xl font-semibold tracking-tight">Dagar Prime Private Exclusives</h3>
              <p className="mt-3 text-sm text-white/80">
                Unlock 250+ homes you won&apos;t find anywhere else.
              </p>
            </div>
            <Link
              href="/search?mode=buy&tag=exclusives"
              className={cn(buttonVariants({ variant: "secondary" }), "mt-6 w-full bg-white text-zinc-950 hover:bg-white/90")}
            >
              See Private Exclusives
            </Link>
          </div>
        </MotionItem>
      </MotionStagger>
    </section>
  );
}
