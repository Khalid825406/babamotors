"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/constants";

const inputClass =
  "w-full border border-white/15 px-3.5 py-3 text-sm text-white bg-black/40 placeholder:text-white/40 focus:outline-none focus:border-gold";

export default function ExchangeForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    currentCar: "",
    year: "",
    km: "",
    fuel: "",
    expectedPrice: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = `Hi, I'd like an exchange quote.\nName: ${form.name}\nPhone: ${form.phone}\nCurrent Car: ${form.currentCar}\nYear: ${form.year}\nKM Driven: ${form.km}\nFuel: ${form.fuel}\nExpected Price: ${form.expectedPrice}`;
    window.open(whatsappLink(message), "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-black/30 border border-white/10 p-6 sm:p-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          required
          placeholder="Name"
          className={inputClass}
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
        />
        <input
          required
          placeholder="Phone"
          className={inputClass}
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
      </div>
      <input
        required
        placeholder="Current Car (Brand & Model)"
        className={inputClass}
        value={form.currentCar}
        onChange={(e) => update("currentCar", e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          required
          placeholder="Year"
          className={inputClass}
          value={form.year}
          onChange={(e) => update("year", e.target.value)}
        />
        <input
          required
          placeholder="KM Driven"
          className={inputClass}
          value={form.km}
          onChange={(e) => update("km", e.target.value)}
        />
        <input
          required
          placeholder="Fuel"
          className={inputClass}
          value={form.fuel}
          onChange={(e) => update("fuel", e.target.value)}
        />
      </div>
      <input
        placeholder="Expected Price"
        className={inputClass}
        value={form.expectedPrice}
        onChange={(e) => update("expectedPrice", e.target.value)}
      />

      <button
        type="submit"
        className="w-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wide bg-gold text-white hover:bg-gold-light transition-colors"
      >
        Get Exchange Quote
      </button>
    </form>
  );
}
