"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

export type GalleryImage = {
  src: string;
  label?: string;
};

type ImageGalleryProps = {
  images: GalleryImage[] | string[];
  alt: string;
};

/* =========================================================
   COMPONENT
========================================================= */

export default function ImageGallery({
  images,
  alt,
}: ImageGalleryProps) {
  /* =======================================================
     NORMALIZE IMAGES

     Supports:

     string[]
     [
       "/cars/front.jpg",
       "/cars/rear.jpg"
     ]

     AND

     GalleryImage[]
     [
       {
         src: "/cars/front.jpg",
         label: "FRONT"
       }
     ]
  ======================================================= */

  const normalizedImages = useMemo<GalleryImage[]>(() => {
    return images.map((image, index) => {
      if (typeof image === "string") {
        return {
          src: image,
          label:
            index === 0
              ? "FRONT"
              : index === 1
              ? "REAR"
              : `VIEW ${index + 1}`,
        };
      }

      return {
        src: image.src,
        label: image.label || `VIEW ${index + 1}`,
      };
    });
  }, [images]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  /* =======================================================
     CLIENT MOUNT

     Required for createPortal because document doesn't exist
     during server rendering.
  ======================================================= */

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  /* =======================================================
     ACTIVE IMAGE
  ======================================================= */

  const activeImage =
    normalizedImages[activeIndex] ||
    normalizedImages[0];

  /* =======================================================
     OPEN / CLOSE
  ======================================================= */

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  /* =======================================================
     PREVIOUS
  ======================================================= */

  const previousImage = () => {
    setActiveIndex((current) =>
      current === 0
        ? normalizedImages.length - 1
        : current - 1
    );
  };

  /* =======================================================
     NEXT
  ======================================================= */

  const nextImage = () => {
    setActiveIndex((current) =>
      current === normalizedImages.length - 1
        ? 0
        : current + 1
    );
  };

  /* =======================================================
     KEYBOARD CONTROLS
  ======================================================= */

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          closeLightbox();
          break;

        case "ArrowLeft":
          previousImage();
          break;

        case "ArrowRight":
          nextImage();
          break;
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    /* Lock page scrolling */
    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow =
        previousOverflow;
    };
  }, [lightboxOpen, normalizedImages.length]);

  /* =======================================================
     RESET INDEX IF IMAGES CHANGE
  ======================================================= */

  useEffect(() => {
    if (
      activeIndex >= normalizedImages.length &&
      normalizedImages.length > 0
    ) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveIndex(0);
    }
  }, [activeIndex, normalizedImages.length]);

  /* =======================================================
     EMPTY STATE
  ======================================================= */

  if (!normalizedImages.length) {
    return (
      <div className="flex aspect-[16/10] items-center justify-center rounded-2xl bg-[#111] text-sm text-white/40">
        No vehicle images available
      </div>
    );
  }

  /* =======================================================
     MAIN GALLERY
  ======================================================= */

  return (
    <>
      <div className="w-full">
        {/* =================================================
            MAIN IMAGE
        ================================================= */}

        <div className="relative overflow-hidden rounded-[22px] bg-[#0b0b0b]">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={activeImage.src}
              alt={`${alt} - ${
                activeImage.label || "Vehicle"
              }`}
              fill
              priority
              className="
                cursor-zoom-in
                object-cover
                transition-transform
                duration-500
                hover:scale-[1.015]
              "
              sizes="
                (max-width: 768px) 100vw,
                (max-width: 1280px) 70vw,
                900px
              "
              onClick={openLightbox}
            />
          </div>

          {/* =================================================
              IMAGE LABEL
          ================================================= */}

          {activeImage.label && (
            <div
              className="
                absolute
                bottom-4
                left-4
                rounded-md
                border
                border-white/10
                bg-black/70
                px-3
                py-1.5
                text-[9px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-white
                backdrop-blur-md
              "
            >
              {activeImage.label}
            </div>
          )}

          {/* =================================================
              FULLSCREEN
          ================================================= */}

          <button
            type="button"
            onClick={openLightbox}
            aria-label="Open image gallery"
            className="
              absolute
              right-4
              top-4
              z-10
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-black/60
              text-white/80
              backdrop-blur-md
              transition-all
              hover:bg-black/80
              hover:text-white
            "
          >
            <Maximize2 size={16} />
          </button>

          {/* =================================================
              MAIN GALLERY LEFT / RIGHT
          ================================================= */}

          {normalizedImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="
                  absolute
                  left-4
                  top-1/2
                  z-10
                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-black/60
                  text-white/70
                  backdrop-blur-md
                  transition-all
                  hover:bg-black/80
                  hover:text-white
                "
              >
                <ChevronLeft size={19} />
              </button>

              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="
                  absolute
                  right-4
                  top-1/2
                  z-10
                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-black/60
                  text-white/70
                  backdrop-blur-md
                  transition-all
                  hover:bg-black/80
                  hover:text-white
                "
              >
                <ChevronRight size={19} />
              </button>
            </>
          )}
        </div>

        {/* =================================================
            THUMBNAILS
        ================================================= */}

        {normalizedImages.length > 1 && (
          <div
            className="
              mt-3
              flex
              gap-2
              overflow-x-auto
              pb-1
              scrollbar-thin
            "
          >
            {normalizedImages.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`
                  group
                  relative
                  h-[76px]
                  w-[105px]
                  shrink-0
                  overflow-hidden
                  rounded-xl
                  border
                  bg-[#0d0d0d]
                  transition-all
                  duration-300
                  sm:h-[82px]
                  sm:w-[115px]
                  ${
                    activeIndex === index
                      ? "border-white/80 ring-1 ring-white/30"
                      : "border-white/10 hover:border-white/30"
                  }
                `}
              >
                <Image
                  src={image.src}
                  alt={`${alt} ${
                    image.label || index + 1
                  }`}
                  fill
                  className={`
                    object-cover
                    transition-all
                    duration-300
                    ${
                      activeIndex === index
                        ? "scale-100 opacity-100"
                        : "scale-105 opacity-55 group-hover:opacity-90"
                    }
                  `}
                  sizes="120px"
                />

                {/* OVERLAY */}

                {activeIndex !== index && (
                  <span className="absolute inset-0 bg-black/15 transition-colors group-hover:bg-transparent" />
                )}

                {/* LABEL */}

                {image.label && (
                  <span
                    className="
                      absolute
                      bottom-1.5
                      left-1.5
                      rounded
                      bg-black/70
                      px-1.5
                      py-0.5
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-white/80
                    "
                  >
                    {image.label}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* =====================================================
          LIGHTBOX

          IMPORTANT:
          createPortal renders this directly under <body>.

          This prevents the website navbar/header stacking
          context from appearing above the lightbox.
      ====================================================== */}

      {mounted &&
        lightboxOpen &&
        createPortal(
          <div
            className="
              fixed
              inset-0
              z-[2147483647]
              flex
              h-[100dvh]
              w-screen
              flex-col
              overflow-hidden
              bg-black/[0.97]
              text-white
            "
            role="dialog"
            aria-modal="true"
            aria-label="Vehicle image gallery"
          >
            {/* =================================================
                TOP BAR
            ================================================= */}

            <div
              className="
                relative
                z-[2147483649]
                flex
                h-[76px]
                w-full
                shrink-0
                items-center
                justify-between
                border-b
                border-white/10
                bg-[#111]/95
                px-5
                backdrop-blur-xl
                sm:h-[84px]
                sm:px-8
              "
            >
              {/* COUNTER */}

              <div
                className="
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.04]
                  px-4
                  py-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-white/70
                "
              >
                {activeIndex + 1} /{" "}
                {normalizedImages.length}
              </div>

              {/* CENTER TITLE */}

              <div className="absolute left-1/2 hidden -translate-x-1/2 text-center sm:block">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  Baba Motors
                </p>

                <p className="mt-1 text-xs font-medium text-white/70">
                  {activeImage.label ||
                    "Vehicle Image"}
                </p>
              </div>

              {/* =================================================
                  CLOSE BUTTON

                  This is now inside the portal and above
                  everything else.
              ================================================= */}

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close gallery"
                className="
                  relative
                  z-[2147483650]
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/[0.06]
                  text-white/80
                  transition-all
                  duration-300
                  hover:border-white/40
                  hover:bg-white/[0.12]
                  hover:text-white
                "
              >
                <X
                  size={22}
                  strokeWidth={1.7}
                />
              </button>
            </div>

            {/* =================================================
                IMAGE AREA

                IMPORTANT:
                Clicking empty black area closes.
                Clicking image/arrows does NOT close.
            ================================================= */}

            <div
              className="
                relative
                min-h-0
                flex-1
                overflow-hidden
              "
              onClick={(event) => {
                if (
                  event.target === event.currentTarget
                ) {
                  closeLightbox();
                }
              }}
            >
              {/* =================================================
                  IMAGE WRAPPER
              ================================================= */}

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  px-4
                  pb-[105px]
                  pt-4
                  sm:px-20
                  sm:pb-[125px]
                  sm:pt-6
                "
              >
                <div
                  className="
                    relative
                    h-full
                    w-full
                    max-w-[1500px]
                  "
                >
                  <Image
                    src={activeImage.src}
                    alt={`${alt} - ${
                      activeImage.label ||
                      "Vehicle"
                    }`}
                    fill
                    priority
                    className="
                      select-none
                      object-contain
                    "
                    sizes="100vw"
                  />
                </div>
              </div>

              {/* =================================================
                  PREVIOUS BUTTON
              ================================================= */}

              {normalizedImages.length > 1 && (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    previousImage();
                  }}
                  aria-label="Previous image"
                  className="
                    absolute
                    left-3
                    top-1/2
                    z-[2147483648]
                    flex
                    h-12
                    w-12
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-black/70
                    text-white/75
                    backdrop-blur-md
                    transition-all
                    hover:border-white/35
                    hover:bg-black/90
                    hover:text-white
                    sm:left-6
                    sm:h-14
                    sm:w-14
                  "
                >
                  <ChevronLeft
                    size={25}
                    strokeWidth={1.5}
                  />
                </button>
              )}

              {/* =================================================
                  NEXT BUTTON
              ================================================= */}

              {normalizedImages.length > 1 && (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    nextImage();
                  }}
                  aria-label="Next image"
                  className="
                    absolute
                    right-3
                    top-1/2
                    z-[2147483648]
                    flex
                    h-12
                    w-12
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-black/70
                    text-white/75
                    backdrop-blur-md
                    transition-all
                    hover:border-white/35
                    hover:bg-black/90
                    hover:text-white
                    sm:right-6
                    sm:h-14
                    sm:w-14
                  "
                >
                  <ChevronRight
                    size={25}
                    strokeWidth={1.5}
                  />
                </button>
              )}
            </div>

            {/* =================================================
                BOTTOM THUMBNAILS
            ================================================= */}

            {normalizedImages.length > 1 && (
              <div
                className="
                  relative
                  z-[2147483649]
                  w-full
                  shrink-0
                  border-t
                  border-white/10
                  bg-[#111]/95
                  px-4
                  py-3
                  backdrop-blur-xl
                  sm:px-8
                  sm:py-4
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    max-w-[1150px]
                    gap-2
                    overflow-x-auto
                    pb-1
                  "
                >
                  {normalizedImages.map(
                    (image, index) => (
                      <button
                        key={`lightbox-${image.src}-${index}`}
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          setActiveIndex(index);
                        }}
                        className={`
                          relative
                          h-[58px]
                          w-[82px]
                          shrink-0
                          overflow-hidden
                          rounded-lg
                          border
                          transition-all
                          duration-200
                          sm:h-[68px]
                          sm:w-[96px]
                          ${
                            activeIndex === index
                              ? "border-white ring-1 ring-white/30"
                              : "border-white/10 opacity-50 hover:opacity-90"
                          }
                        `}
                      >
                        <Image
                          src={image.src}
                          alt={`${alt} thumbnail ${
                            index + 1
                          }`}
                          fill
                          className="object-cover"
                          sizes="100px"
                        />

                        {image.label && (
                          <span
                            className="
                              absolute
                              bottom-1
                              left-1
                              rounded
                              bg-black/75
                              px-1.5
                              py-0.5
                              text-[7px]
                              font-bold
                              uppercase
                              tracking-wider
                              text-white/80
                            "
                          >
                            {image.label}
                          </span>
                        )}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>,
          document.body
        )}
    </>
  );
}