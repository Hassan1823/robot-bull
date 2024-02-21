import AboutComp from "@/components/About";
import HeroComp from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-full min-h-screen h-auto">
      <div className="" id="home">
        <HeroComp />
      </div>
      <div className="" id="about">
        <AboutComp />
      </div>
    </main>
  );
}
