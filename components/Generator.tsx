"use client";

import React from "react";
import { fadeInAnimationVariants } from "./Hero";
import { motion } from "framer-motion";
import Image from "next/image";
import { GiPin } from "react-icons/gi";

type Props = {};

const GeneratorComp = (props: Props) => {
  return (
    <div className="w-full h-auto flex flex-col max-xl:px-[5%] px-[10%] pt-[20vh] gap-24">
      {/* main container for meme generator */}

      {/* generator title */}
      <motion.div
        className="text-7xl max-xl:text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl lg:text-start text-center font-extrabold w-full flex lg:justify-start justify-center items-center h-auto "
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom={8}
      >
        <h1>{"MEME AI GENERATOR"}</h1>
      </motion.div>

      {/* meme generator body  */}
      <div className="w-full h-auto flex flex-wrap justify-center items-start max-lg:gap-8 gap-0">
        {/* left div */}
        <div className="lg:w-1/2 w-full h-auto flex flex-col justify-evenly items-center space-y-4">
          <motion.div
            className="border py-1 w-full min-h-[40%] h-auto"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={6}
          >
            <Image
              src={"/generator1.png"}
              alt="generator img"
              width={500}
              height={500}
              className="object-contain w-full h-full"
            />
          </motion.div>

          <motion.div
            className="border py-1 w-full min-h-[40%] h-auto"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={7}
          >
            <Image
              src={"/generator2.png"}
              alt="generator img"
              width={500}
              height={500}
              className="object-contain w-full h-full"
            />
          </motion.div>

          <motion.div
            className="w-full flex justify-center lg:justify-start items-center"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={8}
          >
            <button className="px-6 py-2 border rounded-full font-semibold bg-[#3e2bc5] border-transparent mt-4">
              MEME Generator
            </button>
          </motion.div>
        </div>

        {/* right div */}
        <div className="lg:w-1/2 w-full h-auto flex flex-col justify-evenly items-center space-y-4 lg:px-4 px-8">
          <motion.h1
            className="w-full lg:text-5xl text-4xl flex flex-wrap font-semibold lg:justify-start justify-center  lg:text-start text-center"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={6}
          >
            {"No More Tedious Editing"}
          </motion.h1>

          <motion.p
            className="w-full flex flex-wrap font-semibold lg:text-xl text-lg text-[#909595] lg:text-start text-center"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={7}
          >
            {`The Meme AI Generator serves as an invaluable marketing tool tailored for crypto communities. Streamline the process of creating captivating memes effortlessly with a simple click of the mouse. With customizable features such as incorporating personalized text or quotes, along with the option to integrate your own logo or text, your memes can possess a distinct identity, enhancing their potential to gain viral traction within the crypto space. To unlock full access and ensure an optimal user experience, a requisite holding of a specified amount of $MEMEAI tokens is necessary.`}
          </motion.p>

          <div className="w-full h-auto flex lg:flex-col flex-row justify-center lg:items-start items-center space-y-6">
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              custom={8}
            >
              <GiPin className="w-8 h-8 text-[#3e2bc5]" />
            </motion.div>
            <motion.p
              className="w-full flex flex-wrap font-semibold text-base max-md:text-xs max-lg:text-sm text-[#edf1f1] lg:text-start text-center"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              custom={9}
            >
              {`The Text-to-Picture feature sparks a renaissance of creativity, seamlessly blending memes with the security and authenticity of blockchain technology.`}
            </motion.p>
          </div>
          <div className="w-full h-auto flex lg:flex-col flex-row justify-center lg:items-start items-center space-y-6">
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              custom={10}
            >
              <GiPin className="w-8 h-8 text-[#3e2bc5]" />
            </motion.div>
            <motion.p
              className="w-full flex flex-wrap font-semibold text-base max-md:text-xs max-lg:text-sm text-[#edf1f1] lg:text-start text-center"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              custom={11}
            >
              {`The Text-to-Picture feature sparks a renaissance of creativity, seamlessly blending memes with the security and authenticity of blockchain technology.`}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratorComp;
