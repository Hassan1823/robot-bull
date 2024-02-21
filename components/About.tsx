"use client";

type Props = {};

import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "./Hero";
import Image from "next/image";
import Link from "next/link";
import ParallaxText from "./TextScoll";

const AboutComp = (props: Props) => {
  return (
    //! main container
    <div className="w-full h-auto flex flex-col justify-center items-center space-y-8 pt-[20vh]">
      {/* about button */}
      <div className="w-full h-auto flex justify-center items-center text-center">
        <motion.button
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          custom={8}
          className="py-2 px-6 bg-transparent border-[3px] font-medium border-[#253992] rounded-full"
        >
          About Us
        </motion.button>
      </div>

      {/* about headlines */}
      <div className="w-full h-auto flex flex-col justify-center items-center text-center lg:gap-8 gap-4">
        {/* line 1 */}
        <motion.div
          className="w-full h-auto flex lg:flex-row flex-col justify-center items-center text-center lg:text-6xl text-5xl font-bold lg:gap-8 gap-4 p-2"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          custom={9}
        >
          <p className="">{"Our Technology"}</p>
          <div>
            <motion.div
              className="w-[50px] h-[50px] border-[5px] border-[#253992] bg-[#253992] rounded-xl"
              whileHover={{ scale: 1, rotate: 180 }}
              whileTap={{ scale: 1, rotate: -180, borderRadius: "100%" }}
            />
          </div>
          <p className="">{"Empowers You"}</p>
        </motion.div>

        {/* line 2 */}
        <motion.div
          className="w-full h-auto flex flex-wrap justify-center items-center text-center xl:text:8xl lg:text-7xl md:text-6xl text-5xl font-bold lg:gap-8 gap-4 p-2"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          custom={13}
        >
          <h1 className="strokeText">{"To Unleash Your MEME Creativity"}</h1>
        </motion.div>

        {/* line 3 */}
        <motion.div
          className="w-full h-auto flex flex-wrap justify-center items-center text-center xl:text:8xl lg:text-7xl md:text-6xl text-5xl font-bold lg:gap-8 gap-4 p-2"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          custom={14}
        >
          <p className="">{"Take Your MEMES to the Next Level"}</p>
        </motion.div>
      </div>

      {/* meme description */}
      <div className="w-full h-auto flex flex-col justify-center items-center lg:gap-4 gap-2">
        <motion.p
          className="xl:w-[60%] lg:w-[70%] md:w-[85%] w-full p-2 h-auto lg:text-xl text-lg text-[#909595] text-center flex flex-wrap font-medium"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          custom={7}
        >
          {`"Explore MEME AI, inspired by Elon Musk's recent tweet recognizing the impact of memes. Our platform offers a AI meme generator and an NFT marketplace, empowering users to have fun while making the most of memes."`}
        </motion.p>

        <motion.div
          className=""
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          custom={7}
        >
          <Image
            src={"/meme.png"}
            alt="meme"
            width={380}
            height={380}
            className="object-contain rounded-xl"
          />
        </motion.div>

        <motion.p
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          custom={2}
        >
          <Link
            href={"https://twitter.com/elonmusk/status/1740023004992548930"}
            target="_blank"
            className="text-xs text-white font-semibold text-center w-full"
          >
            {"https://twitter.com/elonmusk/status/1740023004992548930"}
          </Link>
        </motion.p>

        <motion.p
          className="xl:w-[60%] lg:w-[70%] md:w-[85%] w-full p-2 h-auto lg:text-xl text-lg text-[#909595] text-center flex flex-wrap font-medium"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          custom={7}
        >
          {`MEME AI COIN is more than just a meme generator; it’s a unique intersection of technology and comedy, where algorithms learn and play with human quirks. Dive into a world where AI doesn’t just learn from humans; it laughs with us!`}
        </motion.p>
      </div>

      {/* meme footer parallax */}
      <motion.div
        className="lg:space-y-8 space-y-4 py-8 px-3"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom={8}
      >
        <ParallaxText baseVelocity={-2}>Framer Motion</ParallaxText>
        <ParallaxText baseVelocity={5}>Framer Motion</ParallaxText>
      </motion.div>
    </div>
  );
};

export default AboutComp;

export const imagesData = [
  "/robotbull-logo.png",
  "/robotbull-logo.png",
  "/robotbull-logo.png",
  "/robotbull-logo.png",
  "/robotbull-logo.png",
  "/robotbull-logo.png",
  "/robotbull-logo.png",
  "/robotbull-logo.png",
  "/robotbull-logo.png",
  "/robotbull-logo.png",
  "/robotbull-logo.png",
];
