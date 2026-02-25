import { Bath, BedDouble, Ruler } from "lucide-react";

import { cn } from "@/lib/utils";

type PropertyStatsRowProps = {
  beds: number;
  baths: number;
  areaSqft: number;
  className?: string;
};

function formatBathroomCount(baths: number) {
  return Number.isInteger(baths) ? baths.toString() : baths.toFixed(1);
}

export function PropertyStatsRow({
  beds,
  baths,
  areaSqft,
  className,
}: PropertyStatsRowProps) {
  return (
    <div className={cn("flex items-center gap-4 text-sm text-muted-foreground", className)}>
      <p className="inline-flex items-center gap-1.5">
        <BedDouble className="size-4" />
        <span>{beds} Beds</span>
      </p>
      <p className="inline-flex items-center gap-1.5">
        <Bath className="size-4" />
        <span>{formatBathroomCount(baths)} Baths</span>
      </p>
      <p className="inline-flex items-center gap-1.5">
        <Ruler className="size-4" />
        <span>{areaSqft.toLocaleString()} sqft</span>
      </p>
    </div>
  );
}
