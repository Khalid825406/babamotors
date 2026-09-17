"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";
import { brands, fuelTypes, transmissionTypes, priceRanges } from "@/lib/cars";

export default function HeroSearch() {
  const router = useRouter();
  const [brand, setBrand] = useState("");
  const [budget, setBudget] = useState("");
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");

  function handleSearch() {
    const params = new URLSearchParams();
    if (brand) params.set("brand", brand);
    if (budget) params.set("budget", budget);
    if (fuel) params.set("fuel", fuel);
    if (transmission) params.set("transmission", transmission);
    router.push(`/cars?${params.toString()}`);
  }

  const selectClass =
    "w-full border border-white/15 px-3 py-3 text-sm text-white bg-black/40 focus:outline-none focus:border-gold";

  return (
    <div className="bg-charcoal/90 backdrop-blur-sm border border-white/10 p-6 lg:p-8">
      <h3 className="font-display text-xl font-semibold text-white mb-1">
        Find Your Perfect Car
      </h3>
      <div className="gold-line !w-10 mb-5" />

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase text-white/50 mb-1.5">
            Brand
          </label>
          <select className={selectClass} value={brand} onChange={(e) => setBrand(e.target.value)}>
            <option value="">All Brands</option>
            {brands.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-white/50 mb-1.5">
            Model
          </label>
          <select className={selectClass} disabled>
            <option>All Models</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-white/50 mb-1.5">
            Budget
          </label>
          <select className={selectClass} value={budget} onChange={(e) => setBudget(e.target.value)}>
            <option value="">Any Budget</option>
            {priceRanges.map((p) => (
              <option key={p.label} value={p.label}>{p.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-white/50 mb-1.5">
            Fuel
          </label>
          <select className={selectClass} value={fuel} onChange={(e) => setFuel(e.target.value)}>
            <option value="">Any Fuel</option>
            {fuelTypes.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-white/50 mb-1.5">
            Transmission
          </label>
          <select className={selectClass} value={transmission} onChange={(e) => setTransmission(e.target.value)}>
            <option value="">Any</option>
            {transmissionTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleSearch}
        className="mt-6 w-full lg:w-auto inline-flex items-center justify-center gap-2 px-10 py-3.5 text-sm font-semibold uppercase tracking-wide bg-gold text-white border border-gold hover:bg-gold-light transition-colors"
      >
        <Search size={16} /> Search Cars
      </button>
    </div>
  );
}
