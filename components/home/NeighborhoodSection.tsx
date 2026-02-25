import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { neighborhoods } from "@/data/neighborhoods";
import { MotionItem, MotionReveal, MotionStagger } from "@/components/ui/Motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function toSearchHref(params: Record<string, string>) {
  return `/search?${new URLSearchParams(params).toString()}`;
}

export function NeighborhoodSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
      <MotionReveal className="mb-8 space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          Find the Neighborhood For You
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          Curated areas across Delhi NCR, tailored to your lifestyle.
        </p>
      </MotionReveal>

      <MotionStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {neighborhoods.map((neighborhood) => (
          <MotionItem key={neighborhood.slug}>
            <Link href={toSearchHref(neighborhood.searchParams)} className="group relative block h-56 overflow-hidden rounded-xl">
              <Image
                src={neighborhood.imageUrl}
                alt={neighborhood.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition group-hover:from-black/75" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white transition duration-300 group-hover:-translate-y-1">
                <p className="inline-flex items-center gap-1.5 text-lg font-semibold">
                  {neighborhood.name}
                  <ArrowUpRight className="size-4" />
                </p>
                <p className="mt-1 text-xs text-white/85">{neighborhood.tagline}</p>
              </div>
            </Link>
          </MotionItem>
        ))}
      </MotionStagger>

      <MotionReveal className="mt-8">
        <Link href="/neighborhoods" className={cn(buttonVariants({ variant: "outline" }), "rounded-lg")}>
          View More Neighborhoods
        </Link>
      </MotionReveal>
    </section>
  );
}
