import { Phone, MessageCircle, Navigation } from "lucide-react";
import { DEALER, callLink, whatsappLink } from "@/lib/constants";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import MapEmbed from "@/components/MapEmbed";

export default function Location() {
  return (
    <section className="bg-black py-20 border-t border-white/5">
      <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <FadeIn className="h-72 lg:h-96 border border-white/10">
          <MapEmbed className="w-full h-full" />
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="gold-line mb-5" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase">
            Visit Baba Motors
          </h2>
          <p className="text-white/60 mt-4 font-semibold">
            {DEALER.address}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Button href={DEALER.mapsUrl} variant="premium" icon={<Navigation size={16} />}>
              Get Directions
            </Button>
            <a
              href={callLink()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wide bg-transparent text-white border border-white/25 hover:border-gold hover:text-gold transition-colors"
            >
              <Phone size={16} /> Call Now
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wide bg-transparent text-white border border-white/25 hover:border-gold hover:text-gold transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
