"use client";

import React from "react";
import { fadeInAnimationVariants } from "./Hero";
import { motion } from "framer-motion";

type Props = {};

const FAQComp = (props: Props) => {
  return (
    <div className="w-full h-auto flex flex-col max-xl:px-[5%] px-[10%] gap-8 pt-[20vh] justify-center lg:items-start items-center">
      {/* top button */}
      <motion.button
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom={4}
        className="border-[0.2px] text-[#253992] px-6 py-3 rounded-full text-base font-medium"
      >
        frequently asked questions
      </motion.button>

      {/* line 1 */}
      <motion.div
        className="w-full h-auto flex lg:flex-row flex-col lg:justify-start justify-center items-center text-center lg:text-6xl text-5xl font-bold lg:gap-8 gap-4 p-2"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom={9}
      >
        <p className="">{"Have a"}</p>
        <div>
          <motion.div
            className="w-[50px] h-[50px] border-[5px] border-[#253992] bg-[#253992] rounded-xl"
            whileHover={{ scale: 1, rotate: 180 }}
            whileTap={{ scale: 1, rotate: -180, borderRadius: "100%" }}
          />
        </div>
        <p className="">{"Question?"}</p>
      </motion.div>

      {/* FAQ section  */}
    </div>
  );
};

export default FAQComp;
