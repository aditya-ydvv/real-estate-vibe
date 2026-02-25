import Link from "next/link";

import { MotionItem, MotionReveal, MotionStagger } from "@/components/ui/Motion";

const popularAreas = [
  [
    { label: "Homes for sale in South Delhi", href: "/search?mode=buy&area=south-delhi" },
    { label: "Apartments in Dwarka", href: "/search?mode=buy&area=dwarka" },
    { label: "Villas on Golf Course Road", href: "/search?mode=buy&area=golf-course-road" },
    { label: "Builder floors in Vasant Vihar", href: "/search?mode=buy&area=vasant-vihar" },
  ],
  [
    { label: "Luxury homes in DLF Phase 5", href: "/search?mode=buy&area=dlf-phase-5" },
    { label: "Noida Sector 150 residences", href: "/search?mode=buy&area=noida-150" },
    { label: "Gurgaon rentals in Sector 54", href: "/search?mode=rent&area=sector-54" },
    { label: "Indirapuram family apartments", href: "/search?mode=buy&area=indirapuram" },
  ],
  [
    { label: "Greater Noida West duplexes", href: "/search?mode=buy&area=gno-west" },
    { label: "Aerocity furnished rentals", href: "/search?mode=rent&area=aerocity" },
    { label: "Faridabad independent floors", href: "/search?mode=rent&area=faridabad-15" },
    { label: "Premium homes in Vasant Kunj", href: "/search?mode=buy&area=vasant-kunj" },
  ],
];

const markets = [
  [
    { label: "Delhi Real Estate Market", href: "/search?area=delhi" },
    { label: "Gurgaon Real Estate Market", href: "/search?area=gurgaon" },
    { label: "Noida Real Estate Market", href: "/search?area=noida" },
  ],
  [
    { label: "Greater Noida Real Estate Market", href: "/search?area=greater-noida" },
    { label: "Faridabad Real Estate Market", href: "/search?area=faridabad" },
    { label: "Ghaziabad Real Estate Market", href: "/search?area=ghaziabad" },
  ],
];

function LinkColumn({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item.label}>
          <Link href={item.href} className="text-sm text-zinc-700 transition hover:text-zinc-950 hover:underline">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function LinksHubSection() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50/60 py-18">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <MotionReveal className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Real Estate in Popular Areas
          </h3>
          <MotionStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularAreas.map((column, index) => (
              <MotionItem key={`popular-${index}`}>
                <LinkColumn items={column} />
              </MotionItem>
            ))}
          </MotionStagger>
        </MotionReveal>

        <MotionReveal className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">Real Estate Markets</h3>
          <MotionStagger className="grid gap-6 sm:grid-cols-2">
            {markets.map((column, index) => (
              <MotionItem key={`market-${index}`}>
                <LinkColumn items={column} />
              </MotionItem>
            ))}
          </MotionStagger>
        </MotionReveal>
      </div>
    </section>
  );
}
