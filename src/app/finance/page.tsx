import type { Metadata } from "next";
import EmiCalculator from "./EmiCalculator";
import Location from "@/components/home/Location";

export const metadata: Metadata = {
  title: "Car Finance | Baba Motors",
  description: "Check your EMI and finance eligibility for a pre-owned car at Baba Motors, Ranchi.",
};

export default function FinancePage() {
  return (
    <div className="bg-black pt-[70px]">
      <div className="container-page py-16 text-center max-w-2xl mx-auto">
        <div className="gold-line mx-auto mb-5" />
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Drive Now. Pay Your Way.
        </h1>
        <p className="text-white/60 mt-4">
          Finance assistance available for eligible customers.
        </p>
      </div>

      <div className="container-page pb-20">
        <EmiCalculator />
      </div>

      <Location />
    </div>
  );
}
