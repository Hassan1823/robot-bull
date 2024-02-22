"use client";

import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "./Hero";
import AccordionComp from "@/utils/accordion";

type Props = {};

const FAQComp = (props: Props) => {
  return (
    <div className="w-full h-auto flex flex-col max-xl:px-[5%] px-[10%] gap-8 py-[20vh] justify-center lg:items-start items-center">
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
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom={10}
        className="p-4 bg-transparent rounded-lg w-full space-y-4"
      >
        {/* <AccordionComp /> */}
        <AccordionComp
          title={"How does the MEME AI generator revolutionize meme creation?"}
          answer={
            "The cutting-edge MEME AI effortlessly transforms your wittiest thoughts into visually stunning and innovative memes."
          }
        />
        <AccordionComp
          title={"Can I monetize my humor on the platform, and if so, how?"}
          answer={
            "Absolutely! Transform your hilarious creations into exclusive NFTs with just a click on our upcoming dedicated marketplace."
          }
        />
        <AccordionComp
          title={
            "What sets apart the NFT Marketplace for showcasing digital masterpieces?"
          }
          answer={
            "Our marketplace will allow you to showcase, sell, and collect digital masterpieces, creating an unprecedented level of appreciation."
          }
        />
      </motion.div>
    </div>
  );
};

export default FAQComp;
