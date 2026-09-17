"use client";

import { useState } from "react";
import { UploadCloud } from "lucide-react";
import { whatsappLink } from "@/lib/constants";

const inputClass =
  "w-full border border-white/15 px-3.5 py-3 text-sm text-white bg-charcoal placeholder:text-white/40 focus:outline-none focus:border-gold";

export default function SellForm() {
  const [form, setForm] = useState({
    registration: "",
    brand: "",
    model: "",
    year: "",
    km: "",
    fuel: "",
    condition: "",
  });
  const [photoCount, setPhotoCount] = useState(0);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = `Hi, I'd like a valuation for my car.\nRegistration Number: ${form.registration}\nBrand: ${form.brand}\nModel: ${form.model}\nYear: ${form.year}\nKM Driven: ${form.km}\nFuel: ${form.fuel}\nCondition: ${form.condition}\nPhotos ready to share: ${photoCount > 0 ? "Yes" : "No"}`;
    window.open(whatsappLink(message), "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-charcoal border border-white/10 p-6 sm:p-8 space-y-4">
      <input
        placeholder="Registration Number"
        className={inputClass}
        value={form.registration}
        onChange={(e) => update("registration", e.target.value)}
      />

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-xs uppercase text-white/40">or enter manually</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          placeholder="Brand"
          className={inputClass}
          value={form.brand}
          onChange={(e) => update("brand", e.target.value)}
        />
        <input
          placeholder="Model"
          className={inputClass}
          value={form.model}
          onChange={(e) => update("model", e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          placeholder="Year"
          className={inputClass}
          value={form.year}
          onChange={(e) => update("year", e.target.value)}
        />
        <input
          placeholder="KM Driven"
          className={inputClass}
          value={form.km}
          onChange={(e) => update("km", e.target.value)}
        />
        <input
          placeholder="Fuel"
          className={inputClass}
          value={form.fuel}
          onChange={(e) => update("fuel", e.target.value)}
        />
      </div>
      <input
        placeholder="Condition"
        className={inputClass}
        value={form.condition}
        onChange={(e) => update("condition", e.target.value)}
      />

      <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-white/15 px-4 py-8 cursor-pointer hover:border-gold transition-colors">
        <UploadCloud size={24} className="text-gold" />
        <span className="text-sm text-white/50 text-center">
          {photoCount > 0 ? `${photoCount} photo(s) selected` : "Upload Photos"}
        </span>
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => setPhotoCount(e.target.files?.length ?? 0)}
        />
      </label>

      <button
        type="submit"
        className="w-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wide bg-gold text-white hover:bg-gold-light transition-colors"
      >
        Request Valuation
      </button>
    </form>
  );
}
