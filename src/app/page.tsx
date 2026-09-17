import Hero from "@/components/home/Hero";
import BrowseByBrand from "@/components/home/BrowseByBrand";
import FeaturedInventory from "@/components/home/FeaturedInventory";
import Newsletter from "@/components/home/Newsletter";
import WhyBabaMotors from "@/components/home/WhyBabaMotors";
import FinanceTeaser from "@/components/home/FinanceTeaser";
import ExchangeTeaser from "@/components/home/ExchangeTeaser";
import Reviews from "@/components/home/Reviews";
import Location from "@/components/home/Location";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BrowseByBrand />
      <Reviews />
      <FeaturedInventory />
      <Newsletter />
      <WhyBabaMotors />
      <FinanceTeaser />
      <ExchangeTeaser />
      
      <Location />
      <FinalCTA />
    </>
  );
}
