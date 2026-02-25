import Link from "next/link";

import type { Listing, ListingMode } from "@/data/listings";
import { listings } from "@/data/listings";
import { ListingCard } from "@/components/home/ListingCard";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

type SearchParams = Record<string, string | string[] | undefined>;

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function toSlug(value: string) {
  return normalize(value).replace(/[^a-z0-9]+/g, "-");
}

function getSingleValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function filterListings(data: Listing[], params: SearchParams) {
  const mode = getSingleValue(params.mode)?.toLowerCase();
  const query = normalize(getSingleValue(params.q) ?? "");
  const area = normalize(getSingleValue(params.area) ?? "");
  const tag = normalize(getSingleValue(params.tag) ?? "");

  return data.filter((listing) => {
    if (mode === "buy" || mode === "rent") {
      if (listing.mode !== (mode as ListingMode)) return false;
    }

    if (area) {
      const areaMatch =
        listing.neighborhoodTag.toLowerCase() === area ||
        toSlug(listing.locality) === area ||
        toSlug(listing.city) === area;
      if (!areaMatch) return false;
    }

    if (tag) {
      const tagMatch = (listing.tags ?? []).some((entry) => normalize(entry) === tag);
      if (!tagMatch) return false;
    }

    if (query) {
      const haystack = [
        listing.title,
        listing.addressLine,
        listing.locality,
        listing.city,
        listing.id,
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(query)) return false;
    }

    return true;
  });
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const mode = getSingleValue(params.mode);
  const q = getSingleValue(params.q);
  const area = getSingleValue(params.area);
  const tag = getSingleValue(params.tag);

  const results = filterListings(listings, params);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-xl border border-border/60 bg-white p-5 shadow-sm">
          <h1 className="text-2xl font-semibold tracking-tight">Search Listings</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {results.length} result{results.length === 1 ? "" : "s"} found
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            {mode ? <span className="rounded-full bg-zinc-100 px-3 py-1">Mode: {mode}</span> : null}
            {q ? <span className="rounded-full bg-zinc-100 px-3 py-1">Query: {q}</span> : null}
            {area ? <span className="rounded-full bg-zinc-100 px-3 py-1">Area: {area}</span> : null}
            {tag ? <span className="rounded-full bg-zinc-100 px-3 py-1">Tag: {tag}</span> : null}
            <Link href="/search" className="rounded-full bg-zinc-900 px-3 py-1 text-white">
              Reset
            </Link>
          </div>
        </div>

        {results.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {results.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-10 text-center">
            <h2 className="text-lg font-semibold">No listings matched your filters</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Try changing mode, area, tag, or search keywords.
            </p>
            <Link href="/search" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
              Clear all filters
            </Link>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
