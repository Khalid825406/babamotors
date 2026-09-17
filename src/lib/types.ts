export type FuelType = "Petrol" | "Diesel" | "CNG" | "Electric" | "Hybrid";
export type TransmissionType = "Manual" | "Automatic" | "AMT" | "CVT" | "DCT";
export type BodyType = "SUV" | "Hatchback" | "Sedan" | "MUV" | "Luxury";

export interface Car {
  id: string;
  brand: string;
  model: string;
  variant: string;
  year: number;
  price: number; // in rupees
  kmDriven: number;
  fuel: FuelType;
  transmission: TransmissionType;
  bodyType: BodyType;
  owner: string;
  color: string;
  engine: string;
  mileage: string;
  insurance: string;
  registration: string;
  sunroof: boolean;
  financeAvailable: boolean;
  exchangeAvailable: boolean;
  badges: string[];
  images: {
    label: string;
    src: string;
  }[];
  thumbnail: string;
}
