export type PropertyBadgeTone = "new" | "featured" | "open-house" | "exclusive";

export type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  areaSqft: number;
  imageClassName: string;
  badges: {
    label: string;
    tone: PropertyBadgeTone;
  }[];
};

export const featuredProperties: Property[] = [
  {
    id: "soho-penthouse-01",
    title: "Skyline Penthouse",
    location: "SoHo, New York",
    price: "$4,250,000",
    beds: 4,
    baths: 3.5,
    areaSqft: 3200,
    imageClassName:
      "bg-[linear-gradient(130deg,#1d2434_0%,#344665_50%,#90a3c3_100%)]",
    badges: [
      { label: "New Listing", tone: "new" },
      { label: "Featured", tone: "featured" },
    ],
  },
  {
    id: "beverly-hills-estate-02",
    title: "Beverly Hills Estate",
    location: "Beverly Hills, Los Angeles",
    price: "$8,900,000",
    beds: 6,
    baths: 7,
    areaSqft: 6900,
    imageClassName:
      "bg-[linear-gradient(135deg,#2d1d19_0%,#8f5b44_55%,#d3bba6_100%)]",
    badges: [{ label: "Exclusive", tone: "exclusive" }],
  },
  {
    id: "beacon-hill-townhouse-03",
    title: "Historic Beacon Townhouse",
    location: "Beacon Hill, Boston",
    price: "$3,180,000",
    beds: 5,
    baths: 4,
    areaSqft: 4100,
    imageClassName:
      "bg-[linear-gradient(145deg,#102a24_0%,#1d5d4c_55%,#89c3b1_100%)]",
    badges: [{ label: "Open House", tone: "open-house" }],
  },
  {
    id: "south-lake-villa-04",
    title: "Contemporary Lake Villa",
    location: "South Lake Union, Seattle",
    price: "$2,470,000",
    beds: 4,
    baths: 3,
    areaSqft: 2950,
    imageClassName:
      "bg-[linear-gradient(135deg,#1f2540_0%,#4c6898_52%,#b5c9ed_100%)]",
    badges: [{ label: "Featured", tone: "featured" }],
  },
];
