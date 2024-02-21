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
        className="font-[600] text-[64px] flex flex-nowrap whitespace-nowrap w-[100vw] space-x-6 justify-center items-center text-center"
        style={{ x }}
      >
        {/* children content here */}
        <span className="block">
          {" "}
          <motion.div
            className="w-[50px] h-[50px] border-[5px] border-[#253992] bg-[#253992] rounded-xl"
            whileHover={{ scale: 1, rotate: 180 }}
            whileTap={{ scale: 1, rotate: -180, borderRadius: "100%" }}
          />
        </span>
        <span className="block">Take Your</span>
        <span className="block">
          {" "}
          <motion.div
            className="w-[50px] h-[50px] border-[5px] border-[#253992] bg-[#253992] rounded-xl"
            whileHover={{ scale: 1, rotate: 180 }}
            whileTap={{ scale: 1, rotate: -180, borderRadius: "100%" }}
          />
        </span>
        <span className="block strokeText">MEMES to the Next Level</span>
        <span className="block">
          {" "}
          <motion.div
            className="w-[50px] h-[50px] border-[5px] border-[#253992] bg-[#253992] rounded-xl"
            whileHover={{ scale: 1, rotate: 180 }}
            whileTap={{ scale: 1, rotate: -180, borderRadius: "100%" }}
          />
        </span>
        <span className="block">Take Your</span>
        <span className="block">
          {" "}
          <motion.div
            className="w-[50px] h-[50px] border-[5px] border-[#253992] bg-[#253992] rounded-xl"
            whileHover={{ scale: 1, rotate: 180 }}
            whileTap={{ scale: 1, rotate: -180, borderRadius: "100%" }}
          />
        </span>
        <span className="block strokeText">MEMES to the Next Level</span>
        {/* Add more Image components here */}
      </motion.div>
    </div>
  );
};

export default ParallaxText;
