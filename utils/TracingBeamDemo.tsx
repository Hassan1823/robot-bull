"use client";
// import { calsans } from "@/fonts/calsans";
import { fadeInAnimationVariants } from "@/components/Hero";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="">
      <div className="max-w-[2xl] mx-auto antialiased pt-4 relative min-h-screen h-full flex flex-col space-y-8 justify-around ">
        {dummyContent.map((item, index) => (
          <motion.div
            key={`content-${index}`}
            className="mb-10 space-y-4 w-full min-h-[15vh] h-auto"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={8 + index}
          >
            <p className="text-xl font-semibold pb-4">{item.phase}</p>

            <ul className="w-full h-auto space-y-3 list-disc">
              {item.list.map((list, idx) => (
                <li
                  key={idx}
                  className="text-xl font-medium text-slate-400 w-full flex gap-4 justify-start items-center"
                >
                  <GoDotFill className="w-4 h-4 text-slate-400" />
                  {list}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    phase: `Phase 1`,
    list: [
      `Fairlaunch`,
      `CoinMarketCap`,
      `CoinGecko`,
      `Multi crypto site listings`,
      `Youtube marketing`,
    ],
  },
  {
    phase: `Phase 2`,
    list: [
      `CEX listing`,
      `MEME Generator`,
      `NFT Marketplace Development`,
      `Telegram marketing & AMA’s`,
      `Twitter marketing`,
    ],
  },
  {
    phase: `Phase 3`,
    list: [
      `Generator 2.0 public testing`,
      `NFT collection development`,
      `Trending`,
      `NFT Marketplace public testing`,
      `Twitter spaces events`,
    ],
  },
  {
    phase: `Phase 4`,
    list: [
      `New CEX listing`,
      `Discord marketing`,
      `NFT whitelist contest`,
      `NFT presale launch`,
      `NFT staking`,
    ],
  },
];
