import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import AnimatedText from "@/components/motion/AnimatedText";

export default function FinanceTeaser() {
  return (
    <section className="bg-black py-20">
      <div className="container-page text-center max-w-2xl mx-auto">
        <FadeIn y={0}>
          <div className="gold-line mx-auto mb-5" />
        </FadeIn>
        <AnimatedText
          as="h2"
          text="Drive Now. Pay Your Way."
          scroll
          className="font-display text-3xl sm:text-4xl font-bold text-white"
        />
        <FadeIn delay={0.15}>
          <p className="text-white/60 mt-4">
            Finance assistance available for eligible customers.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-8">
            <Button href="/finance" variant="premium">
              Check Finance Eligibility
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
