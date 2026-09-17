"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import FadeIn from "@/components/motion/FadeIn";

interface Banner {
  id: number;
  image: string;
  mobileImage?: string;
}

const BANNERS: Banner[] = [
  {
    id: 1,
    image: "/banner-1.jpeg",
    mobileImage: "/banner-1.jpeg",
  },
  {
    id: 2,
    image: "/banner-2.jpeg",
    mobileImage: "/banner-2.jpeg",
  },
  {
    id: 3,
    image: "/banner-3.jpeg",
    mobileImage: "/banner-3.jpeg",
  },
  {
    id: 4,
    image: "/banner-4.jpeg",
    mobileImage: "/banner-4.jpeg",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* =========================================================
     AUTO SLIDE
  ========================================================= */

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BANNERS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  /* =========================================================
     NEXT SLIDE
  ========================================================= */

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % BANNERS.length);
  };

  /* =========================================================
     PREVIOUS SLIDE
  ========================================================= */

  const prevSlide = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + BANNERS.length) % BANNERS.length
    );
  };

  /* =========================================================
     GO TO SLIDE
  ========================================================= */

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <section
      className="
        relative
        w-full
        max-w-full
        overflow-hidden
        bg-black
        py-5
        sm:py-8
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <FadeIn>
        {/* =====================================================
            SLIDER OUTER WRAPPER
        ===================================================== */}

        <div
          className="
            group
            relative
            flex
            w-full
            justify-center
            overflow-hidden
          "
        >
          {/* =================================================
              OUTER CARD

              - 50% desktop width
              - Strong visible white border
              - Rounded corners
              - Border will stay visible
              - Image will never cover the border
          ================================================= */}

        <div
  className="
    relative
    w-[94%]
    max-w-[94%]

    rounded-[20px]
    border
    border-white

    bg-white

    shadow-[0_15px_50px_rgba(0,0,0,0.45)]

    sm:w-[50%]
    sm:max-w-[50%]
    sm:rounded-[24px]
  "
>
            {/* =================================================
                INNER SLIDER

                Separate container so image cannot touch
                or cover the outer border.
            ================================================= */}

            <div
              className="
                relative
                w-full
                overflow-hidden

                rounded-[21px]
                bg-[#111111]

                sm:rounded-[25px]
              "
            >
              {/* =================================================
                  SLIDES
              ================================================= */}

              {BANNERS.map((banner, index) => {
                const isActive = index === current;

                return (
                  <div
                    key={banner.id}
                    className={`
                      w-full
                      overflow-hidden
                      transition-all
                      duration-700
                      ease-in-out

                      ${
                        isActive
                          ? "relative z-10 opacity-100"
                          : "pointer-events-none absolute inset-0 z-0 opacity-0"
                      }
                    `}
                  >
                    {/* =================================================
                        DESKTOP IMAGE
                    ================================================= */}

                    <div className="hidden w-full sm:block">
                      <Image
                        src={banner.image}
                        alt={`BaBa Motors banner ${
                          index + 1
                        }`}
                        width={1920}
                        height={1080}
                        priority={index === 0}
                        sizes="50vw"
                        className="
                          block
                          h-auto
                          w-full
                          max-w-full
                          object-contain
                          object-center
                        "
                      />
                    </div>

                    {/* =================================================
                        MOBILE IMAGE
                    ================================================= */}

                    <div className="block w-full sm:hidden">
                      <Image
                        src={
                          banner.mobileImage ||
                          banner.image
                        }
                        alt={`BaBa Motors banner ${
                          index + 1
                        }`}
                        width={1080}
                        height={1350}
                        priority={index === 0}
                        sizes="100vw"
                        className="
                          block
                          h-auto
                          w-full
                          max-w-full
                          object-contain
                          object-center
                        "
                      />
                    </div>
                  </div>
                );
              })}

              {/* =================================================
                  PREVIOUS BUTTON
              ================================================= */}

              {BANNERS.length > 1 && (
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous banner"
                  className="
                    absolute
                    left-3
                    top-1/2
                    z-30

                    flex
                    h-10
                    w-10
                    -translate-y-1/2
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/30

                    bg-black/55
                    text-white

                    opacity-0

                    backdrop-blur-md
                    shadow-lg

                    transition-all
                    duration-300

                    group-hover:opacity-100

                    hover:scale-105
                    hover:border-white
                    hover:bg-black/85

                    sm:left-5
                    sm:h-12
                    sm:w-12
                  "
                >
                  <ChevronLeft
                    size={21}
                    strokeWidth={1.7}
                  />
                </button>
              )}

              {/* =================================================
                  NEXT BUTTON
              ================================================= */}

              {BANNERS.length > 1 && (
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next banner"
                  className="
                    absolute
                    right-3
                    top-1/2
                    z-30

                    flex
                    h-10
                    w-10
                    -translate-y-1/2
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/30

                    bg-black/55
                    text-white

                    opacity-0

                    backdrop-blur-md
                    shadow-lg

                    transition-all
                    duration-300

                    group-hover:opacity-100

                    hover:scale-105
                    hover:border-white
                    hover:bg-black/85

                    sm:right-5
                    sm:h-12
                    sm:w-12
                  "
                >
                  <ChevronRight
                    size={21}
                    strokeWidth={1.7}
                  />
                </button>
              )}

              {/* =================================================
                  DOTS
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-4
                  left-1/2
                  z-30

                  flex
                  -translate-x-1/2
                  items-center
                  gap-2

                  rounded-full

                  border
                  border-white/20

                  bg-black/50

                  px-3
                  py-2

                  backdrop-blur-md
                  shadow-lg

                  sm:bottom-5
                "
              >
                {BANNERS.map((banner, index) => (
                  <button
                    key={banner.id}
                    type="button"
                    aria-label={`Go to banner ${
                      index + 1
                    }`}
                    aria-current={
                      current === index
                        ? "true"
                        : undefined
                    }
                    onClick={() =>
                      goToSlide(index)
                    }
                    className={`
                      h-[3px]
                      rounded-full
                      transition-all
                      duration-300

                      ${
                        current === index
                          ? "w-10 bg-white"
                          : "w-5 bg-white/35 hover:bg-white/70"
                      }
                    `}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}