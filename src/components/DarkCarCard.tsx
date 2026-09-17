import Image from "next/image";
import Link from "next/link";
import type { Car } from "@/lib/types";
import { formatPrice } from "@/lib/cars";

function SpecRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <p className="text-[10px] leading-[1.5]">
      <span className="text-white/35">{label}: </span>
      <span className="font-medium text-white/75">{value}</span>
    </p>
  );
}

export default function DarkCarCard({ car }: { car: Car }) {
  return (
    <div
      className="
        card-notch
        group
        h-full
        p-[1px]
        transition-all
        duration-500
        hover:-translate-y-1
      "
      style={{
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.08) 22%, rgba(255,255,255,0.025) 55%, rgba(255,255,255,0.18) 100%)",
      }}
    >
      <div
        className="
          card-notch
          flex
          h-full
          flex-col
          bg-[#151515]
          p-4
        "
      >
        {/* ================= CAR IMAGE ================= */}
        <div
          className="
            relative
            aspect-[4/3]
            w-full
            overflow-hidden
            rounded-[18px]
            bg-[#0d0d0d]
          "
        >
          {/* Soft background glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-0
              h-[65%]
              w-[75%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/[0.035]
              blur-3xl
            "
          />

          <Image
            src={car.thumbnail}
            alt={`${car.year} ${car.brand} ${car.model}`}
            fill
            className="
              relative
              z-10
              object-contain
              p-2
              transition-transform
              duration-500
              ease-out
              group-hover:scale-[1.05]
            "
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 768px) 50vw,
              (max-width: 1200px) 33vw,
              25vw
            "
          />

          {/* Image bottom shadow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              z-20
              h-10
              bg-gradient-to-t
              from-[#0d0d0d]/70
              to-transparent
            "
          />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex flex-1 flex-col px-1 pt-4 pb-1">
          
          {/* Brand */}
          <h3
            className="
              font-display
              text-[15px]
              font-bold
              uppercase
              leading-tight
              tracking-[0.04em]
              text-white
            "
          >
            {car.brand}
          </h3>

          {/* Model + Year */}
          <p
            className="
              mt-1
              text-[10px]
              font-medium
              uppercase
              tracking-[0.08em]
              text-white/45
            "
          >
            {car.model} {car.year}
          </p>

          {/* ================= SPECS ================= */}
          <div className="mt-3.5 space-y-[3px]">
            <SpecRow
              label="Price"
              value={`Starting from ${formatPrice(car.price)}`}
            />

            <SpecRow
              label="Type"
              value={car.bodyType}
            />

            <SpecRow
              label="Engine"
              value={car.engine}
            />
          </div>

          {/* ================= BUTTON ================= */}
          <Link
            href={`/cars/${car.id}`}
            className="
              mt-4
              block
              w-full
              rounded-full
              border
              border-white/20
              bg-transparent
              px-4
              py-[8px]
              text-center
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white/65
              transition-all
              duration-300
              hover:border-white/40
              hover:bg-white/[0.04]
              hover:text-white
            "
          >
            Explore Product
          </Link>
        </div>
      </div>
    </div>
  );
}