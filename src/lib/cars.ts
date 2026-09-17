import carsData from "@/data/cars.json";
import type { Car } from "./types";

export const cars: Car[] = carsData as Car[];

export function getCarById(id: string): Car | undefined {
  return cars.find((c) => c.id === id);
}

export function formatPrice(price: number): string {
  if (price >= 100000) {
    const lakh = price / 100000;
    return `₹${lakh % 1 === 0 ? lakh.toFixed(0) : lakh.toFixed(2)} Lakh`;
  }
  return `₹${price.toLocaleString("en-IN")}`;
}

export function formatKm(km: number): string {
  return `${km.toLocaleString("en-IN")} km`;
}

export const brands = [
  "Maruti Suzuki",
  "Hyundai",
  "Tata",
  "Mahindra",
  "Toyota",
  "Honda",
  "Kia",
  "Renault",
  "Volkswagen",
  "Skoda",
  "MG",
  "Others",
];

export const bodyTypes = ["SUV", "Hatchback", "Sedan", "MUV", "Luxury"];
export const fuelTypes = ["Petrol", "Diesel", "CNG", "Electric", "Hybrid"];
export const transmissionTypes = ["Manual", "Automatic", "AMT", "CVT", "DCT"];

export const priceRanges = [
  { label: "Under ₹3 Lakh", min: 0, max: 300000 },
  { label: "₹3–5 Lakh", min: 300000, max: 500000 },
  { label: "₹5–8 Lakh", min: 500000, max: 800000 },
  { label: "₹8–12 Lakh", min: 800000, max: 1200000 },
  { label: "₹12 Lakh+", min: 1200000, max: Infinity },
];
