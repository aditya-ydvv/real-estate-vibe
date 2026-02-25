export type ListingMode = "buy" | "rent";

export type ListingStatus = "Coming Soon" | "Open House" | "New" | "Price Drop" | "Exclusive";

export interface Listing {
  id: string;
  mode: ListingMode;
  title: string;
  price: number; // INR
  priceUnit?: "month"; // only for rent
  currency: "INR";
  beds: number;
  baths: number;
  areaSqFt: number;
  addressLine: string;
  locality: string;
  city: string;
  neighborhoodTag: string;
  statusBadge: ListingStatus;
  openHouse?: { day: string; start: string; end: string };
  imageUrl: string; // placeholder image
  createdAt: string; // ISO
  tags?: string[];
}

export const listings: Listing[] = [
  {
    id: "DPE-DEL-0001",
    mode: "buy",
    title: "4BHK Builder Floor with Terrace, GK-1",
    price: 82500000,
    currency: "INR",
    beds: 4,
    baths: 4,
    areaSqFt: 3100,
    addressLine: "B-Block, Greater Kailash I, New Delhi 110048",
    locality: "Greater Kailash I",
    city: "Delhi",
    neighborhoodTag: "south-delhi",
    statusBadge: "Exclusive",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80", // placeholder image
    createdAt: "2026-02-10T10:15:00Z",
    tags: ["exclusives", "prime"],
  },
  {
    id: "DPE-DEL-0002",
    mode: "buy",
    title: "3BHK Luxury Apartment, Vasant Kunj",
    price: 29500000,
    currency: "INR",
    beds: 3,
    baths: 3,
    areaSqFt: 1850,
    addressLine: "Sector C, Vasant Kunj, New Delhi 110070",
    locality: "Vasant Kunj",
    city: "Delhi",
    neighborhoodTag: "vasant-kunj",
    statusBadge: "New",
    imageUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80", // placeholder image
    createdAt: "2026-02-12T08:05:00Z",
  },
  {
    id: "DPE-DEL-0003",
    mode: "rent",
    title: "Furnished 2BHK, Aerocity",
    price: 165000,
    priceUnit: "month",
    currency: "INR",
    beds: 2,
    baths: 2,
    areaSqFt: 1180,
    addressLine: "Aerocity, New Delhi 110037",
    locality: "Aerocity",
    city: "Delhi",
    neighborhoodTag: "aerocity",
    statusBadge: "Exclusive",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80", // placeholder image
    createdAt: "2026-02-15T12:30:00Z",
    tags: ["exclusives"],
  },
  {
    id: "DPE-GGN-0004",
    mode: "buy",
    title: "5BHK Villa, Golf Course Road",
    price: 180000000,
    currency: "INR",
    beds: 5,
    baths: 6,
    areaSqFt: 6200,
    addressLine: "Golf Course Road, Gurugram 122009",
    locality: "Golf Course Road",
    city: "Gurgaon",
    neighborhoodTag: "golf-course-road",
    statusBadge: "Open House",
    openHouse: { day: "Sat", start: "11:00", end: "14:00" },
    imageUrl:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80", // placeholder image
    createdAt: "2026-02-06T09:20:00Z",
    tags: ["exclusives", "luxury"],
  },
  {
    id: "DPE-GGN-0005",
    mode: "buy",
    title: "4BHK Apartment, DLF Phase 5",
    price: 67500000,
    currency: "INR",
    beds: 4,
    baths: 4,
    areaSqFt: 2850,
    addressLine: "DLF Phase 5, Gurugram 122002",
    locality: "DLF Phase 5",
    city: "Gurgaon",
    neighborhoodTag: "dlf-phase-5",
    statusBadge: "Price Drop",
    imageUrl:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80", // placeholder image
    createdAt: "2026-02-04T18:45:00Z",
  },
  {
    id: "DPE-GGN-0006",
    mode: "rent",
    title: "3BHK High-Rise, Sector 54",
    price: 240000,
    priceUnit: "month",
    currency: "INR",
    beds: 3,
    baths: 3,
    areaSqFt: 2200,
    addressLine: "Sector 54, Gurugram 122011",
    locality: "Sector 54",
    city: "Gurgaon",
    neighborhoodTag: "sector-54",
    statusBadge: "New",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80", // placeholder image
    createdAt: "2026-02-18T07:10:00Z",
  },
  {
    id: "DPE-NOI-0007",
    mode: "buy",
    title: "3BHK Park-Facing, Noida Sector 150",
    price: 22500000,
    currency: "INR",
    beds: 3,
    baths: 3,
    areaSqFt: 1750,
    addressLine: "Sector 150, Noida 201310",
    locality: "Sector 150",
    city: "Noida",
    neighborhoodTag: "noida-150",
    statusBadge: "New",
    imageUrl:
      "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?auto=format&fit=crop&w=1600&q=80", // placeholder image
    createdAt: "2026-02-09T15:00:00Z",
  },
  {
    id: "DPE-NOI-0008",
    mode: "rent",
    title: "2BHK Family Home, Noida Sector 76",
    price: 52000,
    priceUnit: "month",
    currency: "INR",
    beds: 2,
    baths: 2,
    areaSqFt: 1250,
    addressLine: "Sector 76, Noida 201304",
    locality: "Sector 76",
    city: "Noida",
    neighborhoodTag: "noida-76",
    statusBadge: "Coming Soon",
    imageUrl:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80", // placeholder image
    createdAt: "2026-02-20T06:40:00Z",
  },
  {
    id: "DPE-GNO-0009",
    mode: "buy",
    title: "4BHK Duplex, Greater Noida West",
    price: 19500000,
    currency: "INR",
    beds: 4,
    baths: 4,
    areaSqFt: 2400,
    addressLine: "Techzone 4, Greater Noida West 201306",
    locality: "Greater Noida West",
    city: "Greater Noida",
    neighborhoodTag: "gno-west",
    statusBadge: "Exclusive",
    imageUrl:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1600&q=80", // placeholder image
    createdAt: "2026-02-03T11:10:00Z",
    tags: ["exclusives"],
  },
  {
    id: "DPE-FBD-0010",
    mode: "rent",
    title: "3BHK Independent Floor, Faridabad Sector 15",
    price: 68000,
    priceUnit: "month",
    currency: "INR",
    beds: 3,
    baths: 3,
    areaSqFt: 2100,
    addressLine: "Sector 15, Faridabad 121007",
    locality: "Sector 15",
    city: "Faridabad",
    neighborhoodTag: "faridabad-15",
    statusBadge: "New",
    imageUrl:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80", // placeholder image
    createdAt: "2026-02-11T13:25:00Z",
  },
  {
    id: "DPE-GZB-0011",
    mode: "buy",
    title: "3BHK Apartment, Indirapuram",
    price: 16500000,
    currency: "INR",
    beds: 3,
    baths: 3,
    areaSqFt: 1620,
    addressLine: "Indirapuram, Ghaziabad 201014",
    locality: "Indirapuram",
    city: "Ghaziabad",
    neighborhoodTag: "indirapuram",
    statusBadge: "New",
    imageUrl:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80", // placeholder image
    createdAt: "2026-02-14T09:05:00Z",
  },
  {
    id: "DPE-DEL-0012",
    mode: "buy",
    title: "6BHK Bungalow, Vasant Vihar",
    price: 165000000,
    currency: "INR",
    beds: 6,
    baths: 7,
    areaSqFt: 7200,
    addressLine: "Vasant Vihar, New Delhi 110057",
    locality: "Vasant Vihar",
    city: "Delhi",
    neighborhoodTag: "vasant-vihar",
    statusBadge: "Exclusive",
    imageUrl:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80", // placeholder image
    createdAt: "2026-02-01T16:45:00Z",
    tags: ["exclusives", "luxury"],
  },
];
