import { ShieldCheck, Eye, Wallet, RefreshCcw, CarFront, MapPinned } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";

const CARDS = [
  { icon: ShieldCheck, title: "Quality", desc: "Quality-focused pre-owned vehicles." },
  { icon: Eye, title: "Transparency", desc: "Clear vehicle information and pricing." },
  { icon: Wallet, title: "Finance", desc: "Finance assistance available." },
  { icon: RefreshCcw, title: "Exchange", desc: "Easy vehicle exchange assistance." },
  { icon: CarFront, title: "Test Drive", desc: "Experience the car before purchase." },
  { icon: MapPinned, title: "Local Trust", desc: "Serving customers in Ranchi and nearby areas." },
];

export default function WhyBabaMotors() {
  return (
    <section className="bg-black py-20">
      <div className="container-page">
        <FadeIn className="text-center max-w-xl mx-auto mb-12">
          <div className="gold-line mx-auto mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Why Baba Motors?
          </h2>
        </FadeIn>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CARDS.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <div className="bg-charcoal p-7 border border-white/5 hover:border-gold/40 transition-colors h-full">
                <Icon size={28} className="text-gold" strokeWidth={1.5} />
                <h3 className="text-white font-semibold uppercase tracking-wide mt-4">
                  {title}
                </h3>
                <p className="text-white/60 text-sm mt-2">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
