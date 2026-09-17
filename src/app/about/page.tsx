import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WhyBabaMotors from "@/components/home/WhyBabaMotors";
import Location from "@/components/home/Location";

export const metadata: Metadata = {
  title: "About Us | Baba Motors",
  description: "Baba Motors is a trusted pre-owned car dealership in Ranchi, Jharkhand.",
};

export default function AboutPage() {
  return (
    <div className="pt-[60px] bg-[#111111]">
      <PageHero 
        title="About Baba Motors"
        subtitle="A premium pre-owned car showroom serving Ranchi and nearby areas."
      />

      <section className="bg-black py-16 border-t border-white/5 ">
        <div className="container-page max-w-2xl mx-auto text-center">
          <p className="text-white/60 leading-relaxed">
            Baba Motors is committed to offering quality pre-owned vehicles with complete
            transparency. From selecting the right car to arranging finance and exchange,
            our team supports you at every step — so you can drive away with confidence.
          </p>
        </div>
      </section>

      <WhyBabaMotors />
      <Location />
    </div>
  );
}
