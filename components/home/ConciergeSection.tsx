import Image from "next/image";
import Link from "next/link";

import { MotionReveal } from "@/components/ui/Motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ConciergeSection() {
  return (
    <section className="bg-zinc-50/80 py-18">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <MotionReveal direction="left">
          <div className="rounded-2xl border border-border/60 bg-white p-4 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Before</p>
                <div className="relative h-60 overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80"
                    alt="Home before concierge staging"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">After</p>
                <div className="relative h-60 overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1616594039964-5f6a0de9be14?auto=format&fit=crop&w=1200&q=80"
                    alt="Home after concierge staging"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal direction="right">
          <div className="flex h-full flex-col justify-between rounded-2xl bg-zinc-950 p-8 text-white shadow-xl shadow-black/25">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">Signature Service</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">Prime Concierge</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                We prepare your home for market with design upgrades, staging, and media production to maximize buyer interest and command stronger offers.
              </p>
            </div>
            <Link
              href="/services/concierge"
              className={cn(buttonVariants({ variant: "secondary" }), "mt-8 w-fit bg-white text-zinc-900 hover:bg-white/90")}
            >
              Learn More
            </Link>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
