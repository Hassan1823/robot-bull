import AboutComp from "@/components/About";
import AiGameComp from "@/components/AiGame";
import FAQComp from "@/components/FAQ";
import GeneratorComp from "@/components/Generator";
import HeroComp from "@/components/Hero";
import MarketplaceComp from "@/components/Marketplace";
import TokenomicsComp from "@/components/Tokenomics";

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
      <div className="" id="aiGame">
        <AiGameComp />
      </div>
      <div className="" id="tokenomics">
        <TokenomicsComp />
      </div>
      <div className="" id="faq">
        <FAQComp />
      </div>
    </main>
  );
}
