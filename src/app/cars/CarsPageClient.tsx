"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import DarkCarCard from "@/components/DarkCarCard";
import FilterPanel, { Filters } from "@/components/FilterPanel";
import PageHero from "@/components/PageHero";
import { cars, priceRanges } from "@/lib/cars";

const EMPTY_FILTERS: Filters = {
  price: [],
  brand: [],
  body: [],
  fuel: [],
  transmission: [],
  extras: [],
};

const SORT_OPTIONS = [
  "Recommended",
  "Newest",
  "Price Low to High",
  "Price High to Low",
  "Lowest KM",
];

export default function CarsPageClient() {
  const searchParams = useSearchParams();

  const initialFilters: Filters = {
    ...EMPTY_FILTERS,
    brand: searchParams.get("brand") ? [searchParams.get("brand")!] : [],
    price: searchParams.get("budget") ? [searchParams.get("budget")!] : [],
    fuel: searchParams.get("fuel") ? [searchParams.get("fuel")!] : [],
    transmission: searchParams.get("transmission")
      ? [searchParams.get("transmission")!]
      : [],
  };

  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [sort, setSort] = useState("Recommended");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = cars.filter((car) => {
      if (filters.brand.length && !filters.brand.includes(car.brand)) return false;
      if (filters.body.length && !filters.body.includes(car.bodyType)) return false;
      if (filters.fuel.length && !filters.fuel.includes(car.fuel)) return false;
      if (
        filters.transmission.length &&
        !filters.transmission.includes(car.transmission)
      )
        return false;
      if (filters.price.length) {
        const matchesPrice = filters.price.some((label) => {
          const range = priceRanges.find((r) => r.label === label);
          return range ? car.price >= range.min && car.price < range.max : true;
        });
        if (!matchesPrice) return false;
      }
      if (filters.extras.length) {
        const matchesExtras = filters.extras.every((extra) => {
          switch (extra) {
            case "1st Owner":
              return car.owner === "1st Owner";
            case "Low KM":
              return car.kmDriven < 35000;
            case "Sunroof":
              return car.sunroof;
            case "Automatic":
              return car.transmission !== "Manual";
            case "Finance Available":
              return car.financeAvailable;
            case "Exchange Available":
              return car.exchangeAvailable;
            default:
              return true;
          }
        });
        if (!matchesExtras) return false;
      }
      return true;
    });

    result = [...result];
    switch (sort) {
      case "Newest":
        result.sort((a, b) => b.year - a.year);
        break;
      case "Price Low to High":
        result.sort((a, b) => a.price - b.price);
        break;
      case "Price High to Low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "Lowest KM":
        result.sort((a, b) => a.kmDriven - b.kmDriven);
        break;
      default:
        break;
    }
    return result;
  }, [filters, sort]);

  return (
    <div className="bg-black min-h-screen pt-[70px]">
      <PageHero
        title="Used Cars in Ranchi"
        subtitle="Find quality pre-owned cars from Baba Motors."
      />

      <div className="container-page py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <aside className="hidden lg:block">
            <FilterPanel
              filters={filters}
              onChange={setFilters}
              onClear={() => setFilters(EMPTY_FILTERS)}
            />
          </aside>

          <div>
            <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
              <p className="text-sm text-white/50">
                <span className="font-semibold text-white">{filtered.length}</span>{" "}
                Cars Available
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase border border-white/25 text-white"
                >
                  <SlidersHorizontal size={14} /> Filters
                </button>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-white/15 px-3 py-2 text-sm text-white bg-charcoal focus:outline-none focus:border-gold"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="border border-white/10 p-16 text-center text-white/50">
                No cars match your filters. Try adjusting your search.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filtered.map((car, i) => (
                    <motion.div
                      key={car.id}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <DarkCarCard car={car} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-black overflow-y-auto p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg font-semibold text-white">
                Filters
              </h3>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters" className="text-white">
                <X size={22} />
              </button>
            </div>
            <FilterPanel
              filters={filters}
              onChange={setFilters}
              onClear={() => setFilters(EMPTY_FILTERS)}
            />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full mt-5 py-3 bg-gold text-white text-sm font-semibold uppercase"
            >
              Show {filtered.length} Cars
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
