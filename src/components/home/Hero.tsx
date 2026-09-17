// import Image from "next/image";
// import Button from "@/components/ui/Button";
// import HeroSearch from "./HeroSearch";
// import FadeIn from "@/components/motion/FadeIn";
// import SpecArc from "@/components/motion/SpecArc";
// import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
// import { ShieldCheck, Wallet, RefreshCcw, CarFront, MapPinned } from "lucide-react";

// const SPECS = [
//   { no: "01", icon: <ShieldCheck strokeWidth={1.5} />, label: "Quality Used Cars" },
//   { no: "02", icon: <Wallet strokeWidth={1.5} />, label: "Finance Available" },
//   { no: "03", icon: <RefreshCcw strokeWidth={1.5} />, label: "Easy Exchange" },
//   { no: "04", icon: <CarFront strokeWidth={1.5} />, label: "Test Drive" },
//   { no: "05", icon: <MapPinned strokeWidth={1.5} />, label: "Local Trust" },
// ];

// export default function Hero() {
//   return (
//     <section className="relative hero-red-glow overflow-hidden" style={{paddingTop:'60px'}}>
//       <div className="container-page relative z-10 pt-12 flex flex-col items-center text-center">
//         <div className="relative w-full max-w-4xl flex flex-col items-center">
          

//           <div
//             className="panel-notch p-[1.5px] w-full sm:w-[100%] mx-auto "
//             style={{
//               background:
//                 "linear-gradient(150deg, rgb(255 255 255 / 41%) 0%, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.03) 55%, rgb(255 255 255 / 9%) 100%)",
//             }}
//           >
//             <FadeIn
//               y={10}
//               className="panel-notch relative overflow-hidden bg-[#5c0f0c]/55 backdrop-blur-sm flex flex-col items-center pt-6 sm:pt-2 px-4 min-h-[220px] sm:min-h-[320px] lg:min-h-[290px]"
//             >
//               <div className="absolute inset-x-0 top-0 h-1/4 pointer-events-none bg-gradient-to-b from-white/20 to-transparent" />
//               <h1 className="relative text-metal font-display text-5xl sm:text-7xl lg:text-9xl font-bold leading-none tracking-tight">
//                 BABA MOTORS
//               </h1>
//             </FadeIn>
//           </div>

//           <div className="relative -mt-16 sm:-mt-24 lg:-mt-28 mx-auto w-[95%] sm:w-[90%] aspect-[16/8]" style={{
//             position:"absolute",
//             top:"206px"
//           }}>
//             <Image
//               src="/hero.png"
//               alt="Baba Motors featured car"
//               fill
//               priority
//               className="object-contain drop-shadow-2xl"
//             />
//           </div>
//         </div>

//         <FadeIn delay={0.5} y={0} className="mt-44 sm:mt-56 lg:mt-44">
//           <p className="font-display text-lg sm:text-xl text-white font-semibold uppercase tracking-wide">
//             Quality Used Cars, Trusted in Ranchi
//           </p>
//           <p className="text-white/60 mt-2 max-w-md mx-auto text-sm">
//             Quality pre-owned cars with exchange and finance assistance.
//           </p>
//         </FadeIn>

//         <FadeIn delay={0.75}>
//           <div className="flex flex-col sm:flex-row gap-4 mt-7">
//             <Button href="/cars" variant="secondary" className="!bg-white !text-black !border-white">
//               Explore Cars
//             </Button>
//             <Button href="/sell" variant="ghost-dark">
//               Sell / Exchange Your Car
//             </Button>
//           </div>
//         </FadeIn>
//       </div>

//       <div className="container-page relative z-10 mt-4">
//         <SpecArc items={SPECS} />
//       </div>

//       <div className="container-page relative z-10">
//         <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pb-12">
//           <StaggerItem>
//             <div className="relative aspect-[16/10] overflow-hidden">
//               <Image
//                 src="/inside-1.png"
//                 alt="Baba Motors showroom interior"
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
//               <div className="absolute bottom-0 left-0 p-5">
//                 <p className="text-white font-display font-semibold uppercase text-sm tracking-wide">
//                   Built For Trust
//                 </p>
//                 <p className="text-white/60 text-xs mt-1 max-w-[220px]">
//                   Every car inspected and quality-checked before it reaches you.
//                 </p>
//               </div>
//             </div>
//           </StaggerItem>
//           <StaggerItem>
//             <div className="relative aspect-[16/10] overflow-hidden">
//               <Image
//                 src="/inside-2.png"
//                 alt="Baba Motors test drive experience"
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
//               <div className="absolute bottom-0 left-0 p-5">
//                 <p className="text-white font-display font-semibold uppercase text-sm tracking-wide">
//                   Smart. Simple. Trustworthy.
//                 </p>
//                 <p className="text-white/60 text-xs mt-1 max-w-[220px]">
//                   Transparent pricing and real photos for every listed car.
//                 </p>
//               </div>
//             </div>
//           </StaggerItem>
//         </StaggerGrid>
//       </div>

//       <div className="container-page relative z-10 pb-16 lg:pb-20">
//         <FadeIn delay={0.2}>
//           <HeroSearch />
//         </FadeIn>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import Button from "@/components/ui/Button";
import HeroSearch from "./HeroSearch";
import FadeIn from "@/components/motion/FadeIn";
import SpecArc from "@/components/motion/SpecArc";
import {
  StaggerGrid,
  StaggerItem,
} from "@/components/motion/StaggerGrid";
import {
  ShieldCheck,
  Wallet,
  RefreshCcw,
  CarFront,
  MapPinned,
} from "lucide-react";

const SPECS = [
  {
    no: "01",
    icon: <ShieldCheck strokeWidth={1.5} />,
    label: "Quality Used Cars",
  },
  {
    no: "02",
    icon: <Wallet strokeWidth={1.5} />,
    label: "Finance Available",
  },
  {
    no: "03",
    icon: <RefreshCcw strokeWidth={1.5} />,
    label: "Easy Exchange",
  },
  {
    no: "04",
    icon: <CarFront strokeWidth={1.5} />,
    label: "Test Drive",
  },
  {
    no: "05",
    icon: <MapPinned strokeWidth={1.5} />,
    label: "Local Trust",
  },
];

export default function Hero() {
  return (
    <section
      className="relative hero-red-glow overflow-hidden"
      style={{ paddingTop: "60px" }}
    >
      <div className="container-page relative z-10 pt-12 flex flex-col items-center text-center">
        <div className="relative w-full max-w-4xl flex flex-col items-center">

          {/* =====================================================
              BABA MOTORS TITLE PANEL
              
              DESKTOP: SAME AS BEFORE
              MOBILE: REDUCED HEIGHT
          ====================================================== */}

          <div
            className="
              panel-notch
              p-[1.5px]
              w-full
              sm:w-[100%]
              mx-auto
            "
            style={{
              background:
                "linear-gradient(150deg, rgb(255 255 255 / 41%) 0%, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.03) 55%, rgb(255 255 255 / 9%) 100%)",
            }}
          >
            <FadeIn
              y={10}
              className="
                panel-notch
                relative
                overflow-hidden
                bg-[#5c0f0c]/55
                backdrop-blur-sm
                flex
                flex-col
                items-center
                pt-6
                sm:pt-2
                px-4

                min-h-[150px]
                sm:min-h-[320px]
                lg:min-h-[290px]
              "
            >
              {/* Top Shine */}
              <div className="absolute inset-x-0 top-0 h-1/4 pointer-events-none bg-gradient-to-b from-white/20 to-transparent" />

              <h1
                className="
                  relative
                  text-metal
                  font-display
                  text-5xl
                  sm:text-7xl
                  lg:text-9xl
                  font-bold
                  leading-none
                  tracking-tight
                "
              >
                BABA MOTORS
              </h1>
            </FadeIn>
          </div>

          {/* =====================================================
              CAR

              MOBILE:
              - Normal flow mein rahegi
              - BABA MOTORS ke immediately baad
              - No fixed top
              - No huge gap

              DESKTOP:
              - EXACTLY SAME POSITION AS BEFORE
          ====================================================== */}

          <div
            className="
              relative
              sm:absolute

              w-[100%]
              sm:w-[90%]

              aspect-[16/8]

              -mt-24
              sm:-mt-24
              lg:-mt-28

              mx-auto

              sm:top-[206px]
            "
          >
            <Image
              src="/hero.png"
              alt="Baba Motors featured car"
              fill
              priority
              className="
                object-contain
                drop-shadow-2xl
              "
            />
          </div>
        </div>

        {/* =====================================================
            HERO TEXT

            MOBILE:
            Car ke immediately baad

            DESKTOP:
            SAME AS BEFORE
        ====================================================== */}

        <FadeIn
          delay={0.5}
          y={0}
          className="
            mt-5
            sm:mt-56
            lg:mt-44
          "
        >
          <p
            className="
              font-display
              text-lg
              sm:text-xl
              text-white
              font-semibold
              uppercase
              tracking-wide
            "
          >
            Quality Used Cars, Trusted in Ranchi
          </p>

          <p
            className="
              text-white/60
              mt-2
              max-w-md
              mx-auto
              text-sm
            "
          >
            Quality pre-owned cars with exchange and finance assistance.
          </p>
        </FadeIn>

        {/* =====================================================
            BUTTONS
        ====================================================== */}

        <FadeIn delay={0.75}>
          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-7
            "
          >
            <Button
              href="/cars"
              variant="secondary"
              className="!bg-white !text-black !border-white"
            >
              Explore Cars
            </Button>

            <Button
              href="/sell"
              variant="ghost-dark"
            >
              Sell / Exchange Your Car
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* =====================================================
          SPEC ARC
      ====================================================== */}

      <div className="container-page relative z-10 mt-4">
        <SpecArc items={SPECS} />
      </div>

      {/* =====================================================
          SHOWROOM IMAGES
      ====================================================== */}

      <div className="container-page relative z-10">
        <StaggerGrid
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-3
            mt-4
            pb-12
          "
        >
          <StaggerItem>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/inside-1.png"
                alt="Baba Motors showroom interior"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-white font-display font-semibold uppercase text-sm tracking-wide">
                  Built For Trust
                </p>

                <p className="text-white/60 text-xs mt-1 max-w-[220px]">
                  Every car inspected and quality-checked before it reaches you.
                </p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/inside-2.png"
                alt="Baba Motors test drive experience"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-white font-display font-semibold uppercase text-sm tracking-wide">
                  Smart. Simple. Trustworthy.
                </p>

                <p className="text-white/60 text-xs mt-1 max-w-[220px]">
                  Transparent pricing and real photos for every listed car.
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerGrid>
      </div>

      {/* =====================================================
          SEARCH
      ====================================================== */}

      <div className="container-page relative z-10 pb-16 lg:pb-20">
        <FadeIn delay={0.2}>
          <HeroSearch />
        </FadeIn>
      </div>
    </section>
  );
}