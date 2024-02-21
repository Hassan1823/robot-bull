"use client";

import React from "react";
// import "@/styles/ParallaxText.css";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Image from "next/image";
import { imagesData } from "./About";
import { fadeInAnimationVariants } from "./Hero";

interface ParallaxProps {
  children: any;
  baseVelocity: number;
}

const ParallaxText = ({ children, baseVelocity = 100 }: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="font-[600] text-[64px] flex flex-nowrap whitespace-nowrap w-[100vw] space-x-6"
        style={{ x }}
      >
        {/* children content here */}
        <div className="w-full h-auto flex flex-nowrap justify-center items-center text-center lg:text-6xl text-5xl font-bold lg:gap-8 gap-4 p-2">
          <div>
            <motion.div
              className="w-[50px] h-[50px] border-[5px] border-[#253992] bg-[#253992] rounded-xl"
              whileHover={{ scale: 1, rotate: 180 }}
              whileTap={{ scale: 1, rotate: -180, borderRadius: "100%" }}
            />
          </div>
          <p className="">{"Take Your"}</p>
          <div>
            <motion.div
              className="w-[50px] h-[50px] border-[5px] border-[#253992] bg-[#253992] rounded-xl"
              whileHover={{ scale: 1, rotate: 180 }}
              whileTap={{ scale: 1, rotate: -180, borderRadius: "100%" }}
            />
          </div>
          <p className="strokeText">{"MEMES to the Next Level"}</p>
        </div>
        <div className="w-full h-auto flex flex-nowrap justify-center items-center text-center lg:text-6xl text-5xl font-bold lg:gap-8 gap-4 p-2">
          <div>
            <motion.div
              className="w-[50px] h-[50px] border-[5px] border-[#253992] bg-[#253992] rounded-xl"
              whileHover={{ scale: 1, rotate: 180 }}
              whileTap={{ scale: 1, rotate: -180, borderRadius: "100%" }}
            />
          </div>
          <p className="">{"Take Your"}</p>
          <div>
            <motion.div
              className="w-[50px] h-[50px] border-[5px] border-[#253992] bg-[#253992] rounded-xl"
              whileHover={{ scale: 1, rotate: 180 }}
              whileTap={{ scale: 1, rotate: -180, borderRadius: "100%" }}
            />
          </div>
          <p className="strokeText">{"MEMES to the Next Level"}</p>
        </div>
        <div className="w-full h-auto flex flex-nowrap justify-center items-center text-center lg:text-6xl text-5xl font-bold lg:gap-8 gap-4 p-2">
          <div>
            <motion.div
              className="w-[50px] h-[50px] border-[5px] border-[#253992] bg-[#253992] rounded-xl"
              whileHover={{ scale: 1, rotate: 180 }}
              whileTap={{ scale: 1, rotate: -180, borderRadius: "100%" }}
            />
          </div>
          <p className="">{"Take Your"}</p>
          <div>
            <motion.div
              className="w-[50px] h-[50px] border-[5px] border-[#253992] bg-[#253992] rounded-xl"
              whileHover={{ scale: 1, rotate: 180 }}
              whileTap={{ scale: 1, rotate: -180, borderRadius: "100%" }}
            />
          </div>
          <p className="strokeText">{"MEMES to the Next Level"}</p>
        </div>
        <div className="w-full h-auto flex flex-nowrap justify-center items-center text-center lg:text-6xl text-5xl font-bold lg:gap-8 gap-4 p-2">
          <div>
            <motion.div
              className="w-[50px] h-[50px] border-[5px] border-[#253992] bg-[#253992] rounded-xl"
              whileHover={{ scale: 1, rotate: 180 }}
              whileTap={{ scale: 1, rotate: -180, borderRadius: "100%" }}
            />
          </div>
          <p className="">{"Take Your"}</p>
          <div>
            <motion.div
              className="w-[50px] h-[50px] border-[5px] border-[#253992] bg-[#253992] rounded-xl"
              whileHover={{ scale: 1, rotate: 180 }}
              whileTap={{ scale: 1, rotate: -180, borderRadius: "100%" }}
            />
          </div>
          <p className="strokeText">{"MEMES to the Next Level"}</p>
        </div>

        {/* Add more Image components here */}
      </motion.div>
    </div>
  );
};

export default ParallaxText;
