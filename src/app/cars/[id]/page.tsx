import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  CalendarCheck,
  ChevronRight,
  Fuel,
  Gauge,
  MapPin,
  MessageCircle,
  Phone,
  Settings2,
  ShieldCheck,
  Tag,
  UserRound,
} from "lucide-react";

import {
  cars,
  getCarById,
  formatKm,
  formatPrice,
} from "@/lib/cars";

import {
  callLink,
  whatsappLink,
} from "@/lib/constants";

import ImageGallery from "@/components/ImageGallery";
import SpecsGrid from "@/components/SpecsGrid";
import Badge from "@/components/ui/Badge";
import DarkCarCard from "@/components/DarkCarCard";

/* =========================================================
   STATIC PARAMS
========================================================= */

export function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id,
  }));
}

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const car = getCarById(id);

  if (!car) {
    return {};
  }

  return {
    title: `${car.year} ${car.brand} ${car.model} ${car.variant} | Baba Motors`,
    description: `${car.year} ${car.brand} ${car.model} ${car.variant} - ${formatPrice(
      car.price
    )}. ${formatKm(car.kmDriven)}, ${car.fuel}, ${car.transmission}.`,
  };
}

/* =========================================================
   QUICK SPEC
========================================================= */

function QuickSpec({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Gauge;
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-white/[0.08]
        bg-white/[0.025]
        p-4
        transition-all
        duration-300
        hover:border-white/[0.16]
        hover:bg-white/[0.04]
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-xl
          bg-white/[0.04]
          transition-colors
          group-hover:bg-white/[0.07]
        "
      >
        <Icon
          size={17}
          strokeWidth={1.6}
          className="text-white/45"
        />
      </div>

      <p
        className="
          mt-3
          text-[9px]
          font-medium
          uppercase
          tracking-[0.14em]
          text-white/30
        "
      >
        {label}
      </p>

      <p className="mt-1 text-xs font-semibold text-white">
        {value}
      </p>
    </div>
  );
}

/* =========================================================
   TRUST ITEM
========================================================= */

function TrustItem({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof ShieldCheck;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-white/[0.07]
        bg-white/[0.02]
        px-4
        py-3.5
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-white/[0.045]
        "
      >
        <Icon
          size={16}
          strokeWidth={1.7}
          className="text-white/50"
        />
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-semibold text-white">
          {title}
        </p>

        <p className="mt-0.5 text-[9px] text-white/25">
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const car = getCarById(id);

  if (!car) {
    notFound();
  }

  const title = `${car.year} ${car.brand} ${car.model} ${car.variant}`;

  const similar = cars
    .filter(
      (item) =>
        item.id !== car.id &&
        item.bodyType === car.bodyType
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-[220px]
            top-[180px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-red-600/[0.035]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-[250px]
            top-[500px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-white/[0.015]
            blur-[160px]
          "
        />
      </div>

      {/* =====================================================
          PRODUCT SECTION
      ====================================================== */}

      <section className="relative z-10">
        <div
          className="
            container-page
            pb-16
            pt-[105px]
            lg:pb-20
            lg:pt-[120px]
          "
        >
          {/* =================================================
              BREADCRUMB
          ================================================== */}

          <div className="mb-7 flex items-center gap-2 text-[10px]">
            <Link
              href="/"
              className="
                text-white/30
                transition-colors
                hover:text-white
              "
            >
              Home
            </Link>

            <ChevronRight
              size={12}
              className="text-white/15"
            />

            <Link
              href="/cars"
              className="
                text-white/30
                transition-colors
                hover:text-white
              "
            >
              Buy Cars
            </Link>

            <ChevronRight
              size={12}
              className="text-white/15"
            />

            <span className="max-w-[220px] truncate text-white/55">
              {car.brand} {car.model}
            </span>
          </div>

          {/* =================================================
              MAIN GRID
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-7
              xl:grid-cols-[minmax(0,1.55fr)_420px]
              xl:gap-9
            "
          >
            {/* =================================================
                LEFT
            ================================================== */}

            <div className="min-w-0">
              {/* IMAGE GALLERY */}

              <div
                className="
                  rounded-[28px]
                  border
                  border-white/[0.08]
                  bg-[#111111]
                  p-2
                  shadow-[0_30px_100px_rgba(0,0,0,0.35)]
                  sm:p-3
                "
              >
               <ImageGallery
  images={car.images.map((image) => image.src)}
  alt={title}
/>
              </div>

              {/* QUICK SPECS */}

              <div
                className="
                  mt-4
                  grid
                  grid-cols-2
                  gap-2.5
                  sm:grid-cols-4
                "
              >
                <QuickSpec
                  icon={Gauge}
                  label="KM Driven"
                  value={formatKm(car.kmDriven)}
                />

                <QuickSpec
                  icon={Fuel}
                  label="Fuel Type"
                  value={car.fuel}
                />

                <QuickSpec
                  icon={Settings2}
                  label="Transmission"
                  value={car.transmission}
                />

                <QuickSpec
                  icon={UserRound}
                  label="Ownership"
                  value={car.owner}
                />
              </div>

              {/* TRUST ROW */}

              <div
                className="
                  mt-4
                  grid
                  grid-cols-1
                  gap-2.5
                  sm:grid-cols-3
                "
              >
                <TrustItem
                  icon={ShieldCheck}
                  title="Quality Checked"
                  description="Vehicle inspected"
                />

                <TrustItem
                  icon={CalendarCheck}
                  title="Test Drive"
                  description="Available on request"
                />

                <TrustItem
                  icon={MapPin}
                  title="Baba Motors"
                  description="Ranchi, Jharkhand"
                />
              </div>
            </div>

            {/* =================================================
                RIGHT - ENQUIRY
            ================================================== */}

            <aside className="min-w-0">
              <div
                className="
                  rounded-[28px]
                  border
                  border-white/[0.09]
                  bg-[#121212]
                  p-6
                  shadow-[0_30px_100px_rgba(0,0,0,0.4)]
                  sm:p-7
                  xl:sticky
                  xl:top-[105px]
                "
              >
                {/* BADGES */}

                <div className="mb-6 flex flex-wrap gap-2">
                  {car.badges.map((badge) => (
                    <Badge
                      key={badge}
                      label={badge}
                      premium={badge === "QUALITY USED"}
                    />
                  ))}
                </div>

                {/* BRAND */}

                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-white/30
                  "
                >
                  {car.brand}
                </p>

                {/* TITLE */}

                <h1
                  className="
                    mt-2
                    font-display
                    text-[28px]
                    font-bold
                    uppercase
                    leading-[1.05]
                    tracking-tight
                    text-white
                    sm:text-[32px]
                  "
                >
                  {car.model}
                </h1>

                <p
                  className="
                    mt-2
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.13em]
                    text-white/35
                  "
                >
                  {car.variant} · {car.year}
                </p>

                {/* PRICE */}

                <div className="mt-7 border-y border-white/[0.08] py-6">
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-white/25
                    "
                  >
                    Asking Price
                  </p>

                  <p
                    className="
                      mt-1
                      font-display
                      text-[32px]
                      font-bold
                      tracking-tight
                      text-white
                    "
                  >
                    {formatPrice(car.price)}
                  </p>

                  <p className="mt-1 text-[9px] text-white/25">
                    Best price available on enquiry
                  </p>
                </div>

                {/* DETAILS */}

                <div className="grid grid-cols-2 gap-x-6 gap-y-5 py-6">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.1em] text-white/25">
                      KM Driven
                    </p>

                    <p className="mt-1 text-xs font-semibold text-white">
                      {formatKm(car.kmDriven)}
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.1em] text-white/25">
                      Fuel
                    </p>

                    <p className="mt-1 text-xs font-semibold text-white">
                      {car.fuel}
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.1em] text-white/25">
                      Transmission
                    </p>

                    <p className="mt-1 text-xs font-semibold text-white">
                      {car.transmission}
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.1em] text-white/25">
                      Owner
                    </p>

                    <p className="mt-1 text-xs font-semibold text-white">
                      {car.owner}
                    </p>
                  </div>
                </div>

                {/* ACTIONS */}

                <div className="space-y-3">
                  {/* TEST DRIVE */}

                  <a
                    href={whatsappLink(
                      `Hi, I'd like to book a test drive for the ${title}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-white
                      px-5
                      py-3.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-black
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-white/90
                    "
                  >
                    <CalendarCheck size={16} />
                    Book Test Drive
                  </a>

                  {/* BEST PRICE */}

                  <a
                    href={whatsappLink(
                      `Hi, please share the best price for the ${title} (${formatPrice(
                        car.price
                      )}).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      border
                      border-white/15
                      bg-white/[0.025]
                      px-5
                      py-3.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-white
                      transition-all
                      duration-300
                      hover:border-white/30
                      hover:bg-white/[0.05]
                    "
                  >
                    <Tag size={16} />
                    Get Best Price
                  </a>

                  {/* SECONDARY */}

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={whatsappLink(
                        `Hi, I'm interested in the ${title}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        px-3
                        py-3
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.1em]
                        text-white/55
                        transition-all
                        hover:border-white/25
                        hover:text-white
                      "
                    >
                      <MessageCircle size={15} />
                      WhatsApp
                    </a>

                    <a
                      href={callLink()}
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        px-3
                        py-3
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.1em]
                        text-white/55
                        transition-all
                        hover:border-white/25
                        hover:text-white
                      "
                    >
                      <Phone size={15} />
                      Call Dealer
                    </a>
                  </div>
                </div>

                {/* FOOTER */}

                <div className="mt-6 border-t border-white/[0.07] pt-5">
                  <p className="text-[9px] leading-[1.8] text-white/25">
                    Vehicle availability, inspection, finance and
                    exchange options can be confirmed directly with
                    Baba Motors.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =====================================================
          SPECIFICATIONS
      ====================================================== */}

      <section
        className="
          relative
          z-10
          border-t
          border-white/[0.06]
          bg-[#0d0d0d]
        "
      >
        <div className="container-page py-16 lg:py-20">
          <div className="mb-8">
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white/25
              "
            >
              Vehicle Information
            </p>

            <h2
              className="
                mt-2
                font-display
                text-2xl
                font-bold
                tracking-tight
                text-white
                sm:text-3xl
              "
            >
              Specifications
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/30">
              Complete details and specifications of this
              pre-owned vehicle.
            </p>
          </div>

          <div
            className="
              rounded-[28px]
              border
              border-white/[0.08]
              bg-[#121212]
              p-5
              shadow-[0_25px_70px_rgba(0,0,0,0.2)]
              sm:p-7
              lg:p-8
            "
          >
            <SpecsGrid car={car} />
          </div>
        </div>
      </section>

      {/* =====================================================
          SIMILAR CARS
      ====================================================== */}

      {similar.length > 0 && (
        <section
          className="
            relative
            z-10
            border-t
            border-white/[0.05]
            bg-[#080808]
          "
        >
          <div className="container-page py-16 pb-24 lg:py-20">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-white/25
                  "
                >
                  More From Baba Motors
                </p>

                <h2
                  className="
                    mt-2
                    font-display
                    text-2xl
                    font-bold
                    tracking-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  Similar Cars
                </h2>
              </div>

              <Link
                href="/cars"
                className="
                  hidden
                  items-center
                  gap-1
                  rounded-full
                  border
                  border-white/10
                  px-4
                  py-2
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-white/40
                  transition-all
                  hover:border-white/25
                  hover:text-white
                  sm:flex
                "
              >
                View All
                <ChevronRight size={13} />
              </Link>
            </div>

            <div
              className="
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {similar.map((item) => (
                <DarkCarCard
                  key={item.id}
                  car={item}
                />
              ))}
            </div>

            <Link
              href="/cars"
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-1
                rounded-full
                border
                border-white/10
                px-5
                py-3
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.13em]
                text-white/45
                transition-all
                hover:border-white/25
                hover:text-white
                sm:hidden
              "
            >
              View All Cars
              <ChevronRight size={13} />
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}