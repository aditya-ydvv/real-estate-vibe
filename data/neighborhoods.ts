export interface Neighborhood {
  name: string;
  slug: string;
  tagline: string;
  imageUrl: string;
  searchParams: Record<string, string>;
}

export const neighborhoods: Neighborhood[] = [
  {
    name: "South Delhi",
    slug: "south-delhi",
    tagline: "Leafy streets, premium builder floors, and nightlife.",
    imageUrl:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=1600&q=80", // placeholder image
    searchParams: { area: "south-delhi" },
  },
  {
    name: "Dwarka",
    slug: "dwarka",
    tagline: "Spacious homes, strong connectivity, metro-first living.",
    imageUrl:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1600&q=80", // placeholder image
    searchParams: { area: "dwarka" },
  },
  {
    name: "Rohini",
    slug: "rohini",
    tagline: "Family-friendly sectors with parks and schools nearby.",
    imageUrl:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1600&q=80", // placeholder image
    searchParams: { area: "rohini" },
  },
  {
    name: "Golf Course Road",
    slug: "golf-course-road",
    tagline: "Gurgaon's most iconic luxury corridor.",
    imageUrl:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80", // placeholder image
    searchParams: { area: "golf-course-road" },
  },
  {
    name: "DLF Phase 1-5",
    slug: "dlf-phases",
    tagline: "Prime addresses close to business + lifestyle hubs.",
    imageUrl:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80", // placeholder image
    searchParams: { area: "dlf-phase-5" },
  },
  {
    name: "Noida Sector 150",
    slug: "noida-150",
    tagline: "Greener layouts, modern high-rises, great value.",
    imageUrl:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80", // placeholder image
    searchParams: { area: "noida-150" },
  },
  {
    name: "Dwarka Expressway",
    slug: "dwarka-expressway",
    tagline: "Fast-growing micro-market with new developments.",
    imageUrl:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=80", // placeholder image
    searchParams: { area: "dwarka-expressway" },
  },
  {
    name: "Sohna Road",
    slug: "sohna-road",
    tagline: "Residential clusters with strong NH-48 access.",
    imageUrl:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1600&q=80", // placeholder image
    searchParams: { area: "sohna" },
  },
];
