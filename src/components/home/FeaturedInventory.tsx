"use client";

import { useMemo, useState } from "react";
import DarkCarCard from "@/components/DarkCarCard";
import Button from "@/components/ui/Button";
import PillTabs from "@/components/ui/PillTabs";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { cars } from "@/lib/cars";

const TABS = ["Latest", "Featured", "Popular"];

export default function FeaturedInventory() {
  const [tab, setTab] = useState("Featured");

  const list = useMemo(() => {
    const sorted = [...cars];
    if (tab === "Latest") sorted.sort((a, b) => b.year - a.year);
    else if (tab === "Popular") sorted.sort((a, b) => a.kmDriven - b.kmDriven);
    return sorted.slice(0, 6);
  }, [tab]);

  return (
    <section className="bg-black py-20 border-t border-white/5">
      <div className="container-page">
        <FadeIn className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
          <h2 className="flex items-center gap-3 font-display text-2xl sm:text-3xl uppercase tracking-wide">
            <span className="text-gold font-bold">|</span>
            <span className="text-white font-bold">Car</span>
            <span className="text-white/50 font-medium">By</span>
          </h2>
          <PillTabs options={TABS} active={tab} onChange={setTab} dark />
        </FadeIn>

        <StaggerGrid key={tab} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((car) => (
            <StaggerItem key={car.id}>
              <DarkCarCard car={car} />
            </StaggerItem>
          ))}
        </StaggerGrid>

        <FadeIn className="text-center mt-12">
          <Button href="/cars" variant="secondary" className="!bg-transparent !text-white !border-white/30 hover:!bg-white hover:!text-black">
            View All Cars
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
