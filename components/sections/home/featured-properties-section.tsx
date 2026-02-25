import { featuredProperties } from "@/lib/data/properties";
import { PropertyCard } from "@/components/real-estate/property-card";

export function FeaturedPropertiesSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Featured Collection</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Properties crafted for modern living
          </h2>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-primary underline-offset-4 transition hover:underline"
        >
          View all listings
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {featuredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
