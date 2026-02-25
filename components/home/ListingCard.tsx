import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";

import type { Listing } from "@/data/listings";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ListingCardProps = {
  listing: Listing;
};

const formatPrice = (listing: Listing) => {
  const formatted = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: listing.currency,
    maximumFractionDigits: 0,
  }).format(listing.price);

  if (listing.mode === "rent" && listing.priceUnit === "month") {
    return `${formatted} / month`;
  }

  return formatted;
};

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl border-border/60 shadow-md shadow-black/5 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/10">
      <div className="relative h-56">
        <Image src={listing.imageUrl} alt={listing.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <Badge className="border-transparent bg-white/95 text-zinc-900">{listing.statusBadge}</Badge>
        </div>
      </div>

      <CardContent className="space-y-3 p-5">
        <p className="text-xl font-semibold tracking-tight">{formatPrice(listing)}</p>
        <h3 className="line-clamp-2 text-base font-semibold leading-snug">{listing.title}</h3>
        <p className="inline-flex items-start gap-1.5 text-sm text-muted-foreground">
          <MapPin className="mt-0.5 size-4 shrink-0" />
          <span>{listing.addressLine}</span>
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <p className="inline-flex items-center gap-1.5">
            <BedDouble className="size-4" />
            {listing.beds} Beds
          </p>
          <p className="inline-flex items-center gap-1.5">
            <Bath className="size-4" />
            {listing.baths} Baths
          </p>
          <p className="inline-flex items-center gap-1.5">
            <Ruler className="size-4" />
            {listing.areaSqFt.toLocaleString()} sqft
          </p>
        </div>
        {listing.openHouse ? (
          <p className="text-xs font-medium text-emerald-700">
            Open House: {listing.openHouse.day}, {listing.openHouse.start} - {listing.openHouse.end}
          </p>
        ) : null}
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Link
          href={`/search?q=${encodeURIComponent(listing.id)}`}
          className={cn(buttonVariants({ variant: "outline" }), "w-full")}
        >
          View Listing
        </Link>
      </CardFooter>
    </Card>
  );
}
