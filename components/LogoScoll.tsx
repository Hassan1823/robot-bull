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

interface ParallaxProps {
  children: any;
  baseVelocity: number;
}

const ParallaxLogo = ({ children, baseVelocity = 100 }: ParallaxProps) => {
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
        className="font-[600] uppercase text-[64px] flex flex-nowrap whitespace-nowrap w-[100vw]"
        style={{ x }}
      >
        {imagesData &&
          imagesData.map((image: any, index: number) => (
            <Image
              key={index}
              src={image}
              alt="logo"
              width={300}
              height={300}
              className="object-contain mx-[5vw]"
            />
          ))}

        {/* Add more Image components here */}
      </motion.div>
    </div>
  );
};

export default ParallaxLogo;
