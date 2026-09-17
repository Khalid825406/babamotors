import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";

export default function ExchangeTeaser() {
  return (
    <section className="bg-charcoal">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <FadeIn y={0} className="relative h-72 lg:h-auto">
          <Image
            src="https://picsum.photos/seed/babamotors-exchange/900/700"
            alt="Exchange your car at Baba Motors"
            fill
            className="object-cover"
          />
        </FadeIn>
        <div className="flex items-center py-16">
          <FadeIn className="container-page !max-w-none lg:pl-16 pr-6">
            <div className="gold-line mb-5" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase">
              Exchange Your Car
            </h2>
            <p className="text-white/60 mt-4 max-w-md">
              Upgrade your existing car with Baba Motors.
            </p>
            <div className="mt-8">
              <Button href="/sell" variant="premium">
                Get Exchange Quote
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
