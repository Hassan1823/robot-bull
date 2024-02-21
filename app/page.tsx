import AboutComp from "@/components/About";
import GeneratorComp from "@/components/Generator";
import HeroComp from "@/components/Hero";
import MarketplaceComp from "@/components/Marketplace";

export default function Home() {
  return (
    <main className="w-full min-h-screen h-auto">
      <div className="" id="home">
        <HeroComp />
      </div>
      <div className="" id="about">
        <AboutComp />
      </div>
      <div className="" id="generator">
        <GeneratorComp />
      </div>
      <div className="" id="marketplace">
        <MarketplaceComp />
      </div>
    </main>
  );
}
