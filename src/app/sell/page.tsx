import type { Metadata } from "next";
import Image from "next/image";
import ExchangeForm from "./ExchangeForm";
import SellForm from "./SellForm";

export const metadata: Metadata = {
  title: "Sell / Exchange Your Car | Baba Motors",
  description:
    "Sell or exchange your car with Baba Motors, Ranchi. Get a fair valuation and upgrade your ride.",
};

export default function SellPage() {
  return (
    <div className="bg-black pt-[86px]">
      {/* =========================================================
          EXCHANGE YOUR CAR
      ========================================================= */}
      <section className="bg-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* =====================================================
              IMAGE
              - Full image visible
              - No cropping
              - Responsive
              - Rounded/card style
          ====================================================== */}
          <div className="order-2 flex items-center justify-center p-4 sm:p-6 lg:order-1 lg:p-8">
            <div
              className="
                relative
                w-full
                aspect-[16/10]
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#111111]
                shadow-[0_20px_60px_rgba(0,0,0,0.35)]
              "
            >
              <Image
                src="/carexchange.png"
                alt="Exchange your car at Baba Motors"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  object-contain
                  object-center
                  p-0
                "
              />
            </div>
          </div>

          {/* =====================================================
              CONTENT
          ====================================================== */}
          <div className="order-1 flex items-center py-12 sm:py-16 lg:order-2">
            <div
              className="
                container-page
                !max-w-none
                pl-6
                pr-6
                lg:pr-16
              "
            >
              <div className="gold-line mb-5" />

              <h1
                className="
                  font-display
                  text-3xl
                  font-bold
                  uppercase
                  text-white
                  sm:text-4xl
                "
              >
                Exchange Your Car
              </h1>

              <p className="mt-4 max-w-md text-white/60">
                Upgrade your existing car with Baba Motors.
              </p>

              <div className="mt-8">
                <ExchangeForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SELL YOUR CAR
      ========================================================= */}
      <section className="border-t border-white/5 bg-black py-16 sm:py-20">
        <div className="container-page mx-auto max-w-2xl text-center">
          <div className="gold-line mx-auto mb-5" />

          <h2
            className="
              font-display
              text-3xl
              font-bold
              uppercase
              text-white
              sm:text-4xl
            "
          >
            Sell Your Car
          </h2>

          <p className="mt-3 text-white/60">
            Thinking of selling your car in Ranchi?
          </p>
        </div>

        <div className="container-page mx-auto mt-10 max-w-2xl">
          <SellForm />
        </div>
      </section>
    </div>
  );
}