"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

import FadeIn from "@/components/motion/FadeIn";

const VIDEO_SRC = "/videos/Mahindra_XUV700_driving_on_road_20260917110506.mp4";

/* =========================================================
   DIAGONAL STRIPES
========================================================= */

function DiagonalStripes() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        bottom-6
        left-8
        flex
        items-end
        gap-1.5
        opacity-80
      "
    >
      {[18, 24, 30, 36, 42].map((height, index) => (
        <span
          key={index}
          className="w-[3px] bg-white/25"
          style={{
            height,
            transform: "skewX(-20deg)",
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   NEWSLETTER
========================================================= */

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  /* =========================================================
     SUBMIT
  ========================================================= */

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
  }

  return (
    <section
      className="
        bg-charcoal
        py-12
        sm:py-16
        lg:py-20
      "
    >
      <div className="container-page">
        <FadeIn
          className="
            panel-notch
            overflow-hidden
            p-[1.5px]
          "
          style={{
            background:
              "linear-gradient(150deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.08) 25%, rgba(255,255,255,0.02) 55%, rgba(255,255,255,0.25) 100%)",
          }}
        >
          {/* =====================================================
              MAIN CARD
          ===================================================== */}

          <div
            className="
              panel-notch
              overflow-hidden
              bg-[#141414]
              p-2
              sm:p-3
            "
          >
            <div
              className="
                grid
                grid-cols-1
                gap-2
                sm:gap-3
                lg:grid-cols-[1.05fr_1fr]
              "
            >
              {/* =================================================
                  LEFT CONTENT
              ================================================= */}

              <div
                className="
                  panel-notch-sm
                  relative
                  flex
                  min-h-[300px]
                  flex-col
                  justify-center
                  overflow-hidden
                  bg-[#1a1a1a]
                  p-7
                  sm:min-h-[340px]
                  sm:p-10
                  lg:min-h-0
                  lg:p-12
                "
              >
                {/* CONTENT */}

                <div className="relative z-10">
                  <h2
                    className="
                      font-display
                      text-2xl
                      font-bold
                      uppercase
                      tracking-wide
                      text-white
                      sm:text-3xl
                    "
                  >
                    Stay In Touch
                  </h2>

                  <p
                    className="
                      mt-3
                      max-w-sm
                      text-sm
                      leading-6
                      text-white/50
                    "
                  >
                    Sign up for updates and get exclusive
                    deals you won&apos;t find anywhere else,
                    straight to your inbox.
                  </p>

                  {/* =================================================
                      EMAIL FORM
                  ================================================= */}

                  <form
                    onSubmit={handleSubmit}
                    className="
                      mt-7
                      flex
                      w-full
                      max-w-sm
                      items-center
                      gap-2
                    "
                  >
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setSubmitted(false);
                      }}
                      className="
                        min-w-0
                        flex-1
                        rounded-full
                        border
                        border-white/15
                        bg-white/5
                        px-5
                        py-3
                        text-sm
                        text-white
                        placeholder:text-white/40
                        transition-all
                        duration-300
                        focus:border-gold
                        focus:bg-white/[0.07]
                        focus:outline-none
                      "
                    />

                    <button
                      type="submit"
                      aria-label="Subscribe"
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-gold
                        text-white
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:bg-gold-light
                        active:scale-95
                      "
                    >
                      {submitted ? (
                        <Check size={18} />
                      ) : (
                        <ArrowRight size={18} />
                      )}
                    </button>
                  </form>

                  {/* SUCCESS MESSAGE */}

                  {submitted && (
                    <p
                      className="
                        mt-3
                        text-xs
                        text-gold
                      "
                    >
                      Thanks! We&apos;ll keep you posted.
                    </p>
                  )}
                </div>

                {/* DECORATION */}

                <DiagonalStripes />
              </div>

              {/* =================================================
                  RIGHT VIDEO
              ================================================= */}

              <div
                className="
                  panel-notch-sm
                  relative
                  min-h-[240px]
                  overflow-hidden
                  bg-black
                  sm:min-h-[340px]
                  lg:min-h-0
                "
              >
                <video
                  src={VIDEO_SRC}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                  "
                />

                {/* SUBTLE VIDEO OVERLAY */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/25
                    via-transparent
                    to-black/10
                  "
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}