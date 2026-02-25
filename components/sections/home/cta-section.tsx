import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="px-4 pb-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border/70 bg-[linear-gradient(135deg,#171f31_0%,#243a6d_45%,#4d88c6_100%)] p-8 text-white shadow-xl shadow-black/20 sm:p-12">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/75">Work With Experts</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Ready to buy, invest, or list your property with confidence?
        </h2>
        <p className="mt-4 max-w-2xl text-white/80">
          Partner with our advisors for data-backed pricing, private-market access, and white-glove support from search to closing.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button className="bg-white text-slate-900 hover:bg-white/90">
            Book a Consultation
            <ArrowRight className="size-4" />
          </Button>
          <Button
            variant="outline"
            className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            Explore Agent Network
          </Button>
        </div>
      </div>
    </section>
  );
}
