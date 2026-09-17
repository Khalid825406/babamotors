"use client";

import { brands, bodyTypes, fuelTypes, transmissionTypes, priceRanges } from "@/lib/cars";

export interface Filters {
  price: string[];
  brand: string[];
  body: string[];
  fuel: string[];
  transmission: string[];
  extras: string[];
}

interface FilterPanelProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  onClear: () => void;
}

const EXTRAS = [
  "1st Owner",
  "Low KM",
  "Sunroof",
  "Automatic",
  "Finance Available",
  "Exchange Available",
];

function FilterGroup({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (val: string) => void;
}) {
  return (
    <div className="border-b border-white/10 py-5">
      <h4 className="text-sm font-semibold uppercase tracking-wide text-white mb-3">
        {title}
      </h4>
      <div className="space-y-2">
        {options.map((opt) => {
          const active = selected.includes(opt);
          return (
            <button
              key={opt}
              onClick={() => onToggle(opt)}
              className={`w-full text-left px-3 py-2 text-sm transition-colors border ${
                active
                  ? "bg-gold text-white border-gold border-l-4 border-l-white/60"
                  : "bg-transparent text-white/60 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function FilterPanel({ filters, onChange, onClear }: FilterPanelProps) {
  function toggle(group: keyof Filters, val: string) {
    const current = filters[group];
    const next = current.includes(val)
      ? current.filter((v) => v !== val)
      : [...current, val];
    onChange({ ...filters, [group]: next });
  }

  return (
    <div className="bg-charcoal border border-white/10 p-5">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-display text-lg font-semibold text-white">Filters</h3>
        <button onClick={onClear} className="text-xs uppercase font-semibold text-gold hover:underline">
          Clear All
        </button>
      </div>

      <FilterGroup
        title="Price"
        options={priceRanges.map((p) => p.label)}
        selected={filters.price}
        onToggle={(v) => toggle("price", v)}
      />
      <FilterGroup
        title="Brand"
        options={brands}
        selected={filters.brand}
        onToggle={(v) => toggle("brand", v)}
      />
      <FilterGroup
        title="Body"
        options={bodyTypes}
        selected={filters.body}
        onToggle={(v) => toggle("body", v)}
      />
      <FilterGroup
        title="Fuel"
        options={fuelTypes}
        selected={filters.fuel}
        onToggle={(v) => toggle("fuel", v)}
      />
      <FilterGroup
        title="Transmission"
        options={transmissionTypes}
        selected={filters.transmission}
        onToggle={(v) => toggle("transmission", v)}
      />
      <div className="pt-5">
        <h4 className="text-sm font-semibold uppercase tracking-wide text-white mb-3">
          Additional
        </h4>
        <div className="space-y-2">
          {EXTRAS.map((opt) => {
            const active = filters.extras.includes(opt);
            return (
              <button
                key={opt}
                onClick={() => toggle("extras", opt)}
                className={`w-full text-left px-3 py-2 text-sm transition-colors border ${
                  active
                    ? "bg-gold text-white border-gold border-l-4 border-l-white/60"
                    : "bg-transparent text-white/60 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
