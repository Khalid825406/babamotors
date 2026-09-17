
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import FadeIn from "@/components/motion/FadeIn";
import {
  StaggerGrid,
  StaggerItem,
} from "@/components/motion/StaggerGrid";
import PillTabs from "@/components/ui/PillTabs";
import { bodyTypes } from "@/lib/cars";

interface GridItem {
  name: string;
  mark?: string;
  sub?: string;
  logo?: string;
  showName?: boolean;
}

const BRANDS: GridItem[] = [
  {
    name: "Maruti Suzuki",
    logo: "/maruti.png",
    showName: false,
  },
  {
    name: "Hyundai",
    logo: "/hayudai.png",
    showName: false,
  },
  {
    name: "Tata",
    logo: "/tata.png",
    showName: false,
  },
  {
    name: "Mahindra",
    logo: "/mahindra.png",
    showName: false,
  },
  {
    name: "Toyota",
    logo: "/toyota.png",
    showName: false,
  },
  {
    name: "Honda",
    logo: "/honda.png",
    showName: false,
  },
  {
    name: "Kia",
    logo: "/kia.png",
    showName: false,
  },
  {
    name: "Skoda",
    logo: "/skoda.png",
    showName: false,
  },
];

const TABS = ["Brands", "Types"];
const COLS = 4;

export default function BrowseByBrand() {
  const [tab, setTab] = useState("Brands");

  const items: GridItem[] =
    tab === "Brands"
      ? BRANDS
      : bodyTypes.map((b) => ({
          name: b,
          mark: b.toUpperCase(),
          showName: true,
        }));

  const paramKey = tab === "Brands" ? "brand" : "body";

  const lastRow = Math.floor((items.length - 1) / COLS);

  return (
    <section className="bg-black py-20">
      <div className="container-page">

        {/* Header */}
        <FadeIn className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
          <h2 className="flex items-center gap-3 font-display text-2xl sm:text-3xl uppercase tracking-wide">
            <span className="text-gold font-bold">|</span>

            <span className="text-white font-bold">
              Select
            </span>

            <span className="text-white/50 font-medium">
              Your Car By
            </span>
          </h2>

          <PillTabs
            options={TABS}
            active={tab}
            onChange={setTab}
            dark
          />
        </FadeIn>

        {/* Brand / Type Grid */}
        <StaggerGrid
          className="
            grid
            grid-cols-2
            sm:grid-cols-4
            sm:border
            sm:border-white/10
            gap-px
            sm:gap-0
            bg-white/10
            sm:bg-transparent
          "
          key={tab}
        >
          {items.map((item, i) => {
            const col = i % COLS;
            const row = Math.floor(i / COLS);

            const borderClasses = [
              col < COLS - 1
                ? "sm:border-r sm:border-white/10"
                : "",

              row < lastRow
                ? "sm:border-b sm:border-white/10"
                : "",
            ].join(" ");

            return (
              <StaggerItem key={item.name}>
                <Link
                  href={`/cars?${paramKey}=${encodeURIComponent(
                    item.name
                  )}`}
                  className={`
                    group
                    relative
                    flex
                    flex-col
                    items-center
                    justify-center
                    h-36
                    sm:h-40
                    px-4
                    bg-black
                    hover:bg-white/[0.035]
                    transition-all
                    duration-300
                    ${borderClasses}
                  `}
                >
                  {/* Logo */}
                  {tab === "Brands" && item.logo ? (
                    <div
                      className="
                        relative
                        flex
                        items-center
                        justify-center
                        w-28
                        h-20
                        sm:w-36
                        sm:h-24
                      "
                    >
                      <Image
                        src={item.logo}
                        alt={`${item.name} logo`}
                        fill
                        sizes="144px"
                        className="
                          object-contain
                          opacity-70
                          grayscale
                          group-hover:opacity-100
                          group-hover:grayscale-0
                          group-hover:scale-110
                          transition-all
                          duration-300
                        "
                      />
                    </div>
                  ) : (
                    /* Body Type */
                    <span
                      className="
                        font-display
                        text-lg
                        sm:text-xl
                        font-bold
                        text-white/60
                        group-hover:text-white
                        tracking-wide
                        transition-colors
                        duration-300
                      "
                    >
                      {item.mark}
                    </span>
                  )}

                  {/* Brand Name
                      Only shown when showName === true */}
                  {item.showName && (
                    <span
                      className="
                        text-[11px]
                        sm:text-xs
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-white/40
                        group-hover:text-white/80
                        transition-colors
                        duration-300
                        mt-1
                      "
                    >
                      {item.name}
                    </span>
                  )}

                  {/* Gold Hover Indicator */}
                  <span
                    className="
                      absolute
                      bottom-5
                      w-6
                      h-[2px]
                      bg-transparent
                      group-hover:bg-gold
                      group-hover:w-10
                      transition-all
                      duration-300
                    "
                  />
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGrid>

        {/* Bottom ruler */}
        <div className="ruler-ticks mt-10" />
      </div>
    </section>
  );
}

