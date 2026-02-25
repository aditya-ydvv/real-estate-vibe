import { MapPin } from "lucide-react";

import { PropertyBadge } from "@/components/real-estate/property-badge";
import { PropertyStatsRow } from "@/components/real-estate/property-stats-row";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Property } from "@/lib/data/properties";

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden border-border/60 shadow-lg shadow-black/5">
      <div className={`relative h-56 ${property.imageClassName}`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {property.badges.map((badge) => (
            <PropertyBadge key={`${property.id}-${badge.label}`} label={badge.label} tone={badge.tone} />
          ))}
        </div>
      </div>

      <CardContent className="space-y-4 p-5">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-tight tracking-tight">{property.title}</h3>
          <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            <span>{property.location}</span>
          </p>
        </div>
        <p className="text-2xl font-semibold">{property.price}</p>
        <PropertyStatsRow beds={property.beds} baths={property.baths} areaSqft={property.areaSqft} />
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-3 p-5 pt-0">
        <Button variant="outline" className="w-full">
          View Details
        </Button>
        <Button className="w-full">Schedule Tour</Button>
      </CardFooter>
    </Card>
  );
}
