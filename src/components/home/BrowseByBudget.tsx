import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";

const BUDGETS = [
  { label: "Under ₹3 Lakh", query: "Under ₹3 Lakh", seed: "budget-3l" },
  { label: "Under ₹5 Lakh", query: "₹3–5 Lakh", seed: "budget-5l" },
  { label: "Under ₹8 Lakh", query: "₹5–8 Lakh", seed: "budget-8l" },
  { label: "Under ₹10 Lakh", query: "₹8–12 Lakh", seed: "budget-10l" },
  { label: "Premium Cars", query: "₹12 Lakh+", seed: "budget-premium" },
];

export default function BrowseByBudget() {
  return (
    <section className="bg-black py-20 border-t border-white/5">
      <div className="container-page">
        <FadeIn className="text-center max-w-xl mx-auto mb-12">
          <div className="gold-line mx-auto mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase">
            Find a Car by Budget
          </h2>
        </FadeIn>

        <StaggerGrid className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {BUDGETS.map((b) => (
            <StaggerItem key={b.label}>
              <Link
                href={`/cars?budget=${encodeURIComponent(b.query)}`}
                className="group block bg-charcoal border border-white/10 hover:border-gold transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`https://picsum.photos/seed/${b.seed}/500/400`}
                    alt={b.label}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="20vw"
                  />
                </div>
                <div className="p-4 text-center">
                  <span className="text-sm font-semibold text-white uppercase tracking-wide">
                    {b.label}
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
