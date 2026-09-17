"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SpecArcItem {
  no: string;
  icon: ReactNode;
  label: string;
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function SpecArc({ items }: { items: SpecArcItem[] }) {
  const center = (items.length - 1) / 2;
  const amplitude = 26;

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 1000 120"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full text-white/15 pointer-events-none"
        fill="none"
      >
        <path d="M0,24 Q500,120 1000,24" stroke="currentColor" strokeWidth="1" />
      </svg>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={container}
        className="relative flex justify-between items-start gap-1 sm:gap-3 px-1 sm:px-6 py-10"
      >
        {items.map(({ no, icon, label }, i) => {
          const dist = i - center;
          const translateY = (dist * dist) * amplitude * -0.12 + Math.abs(dist) * -2;
          return (
            <motion.div
              key={no}
              variants={item}
              style={{ transform: `translateY(${translateY}px)` }}
              className="flex flex-col items-center text-center gap-2 w-1/5"
            >
              <span className="text-white font-display text-xs sm:text-sm font-bold">
                {no}
              </span>
              <span className="text-white/80 [&>svg]:size-[18px] sm:[&>svg]:size-6">{icon}</span>
              <span className="text-white/50 text-[9px] sm:text-[11px] uppercase tracking-wide leading-tight">
                {label}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
