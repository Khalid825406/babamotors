import AnimatedText from "@/components/motion/AnimatedText";
import FadeIn from "@/components/motion/FadeIn";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <div className="bg-black py-14">
      <div className="container-page">
        <FadeIn y={0}>
          <div className="gold-line mb-4" />
        </FadeIn>
        <AnimatedText
          as="h1"
          text={title}
          wordDelay={0.06}
          className="font-display text-3xl sm:text-4xl font-bold text-white"
        />
        {subtitle && (
          <FadeIn delay={0.3}>
            <p className="text-white/60 mt-3 max-w-lg">{subtitle}</p>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
