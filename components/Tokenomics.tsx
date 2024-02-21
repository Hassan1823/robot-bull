"use client";

import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "./Hero";
import { useState } from "react";
import PieChartComp from "@/utils/pie-chart";
type Props = {};

const TokenomicsComp = (props: Props) => {
  const [copiedText, setCopiedText] = useState(false);
  const [text, setText] = useState(
    "0x695d38EB4e57E0f137e36df7c1f0f2635981246b"
  );

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(text); // Replace "Your desired text" with your actual content
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 1500); // Show success message briefly before hiding
    } catch (err) {
      console.error(`Failed to copy text: ${err}`);
    }
  };

  return (
    <div className="w-full h-auto flex flex-col max-xl:px-[5%] px-[10%] gap-8 pt-[10vh]">
      {/* title */}
      <motion.div
        className="text-7xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl text-center font-semibold w-full flex flex-wrap justify-center items-center h-auto "
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom={3}
      >
        <h1>Tokenomics</h1>
      </motion.div>

      {/* subtitle */}
      <motion.div
        className="text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base text-center font-semibold w-full flex flex-wrap justify-center items-center h-auto "
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom={4}
      >
        <h1>Contract Address</h1>

        {/* description */}
        <h1 className="w-full text-center font-medium text-base text-slate-400">{`Contract Renounced`}</h1>
      </motion.div>

      {/* copy token */}
      <motion.div
        className=" w-full flex flex-col justify-center items-center gap-6 pr-[5%] md:pr-0 py-8"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom={5}
      >
        <p className="font-medium md:text-base text-sm">{text}</p>
        <button
          className="px-6 py-2 border rounded-full font-semibold bg-[#3e2bc5] border-transparent"
          onClick={handleClick}
        >
          {`${copiedText ? "Copied" : "COPY CONTRACT ADDRESS"}`}
        </button>
      </motion.div>

      {/* NFT table */}
      <div className="w-full h-auto flex flex-wrap justify-center items-center">
        <div className="sm:w-1/2 w-full border p-2 space-y-4">
          <motion.div
            className="text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base sm:text-center text-start font-semibold w-full flex flex-wrap sm:justify-start justify-center items-center h-auto "
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={4}
          >
            <h1>Name</h1>
          </motion.div>

          <motion.div
            className="text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base sm:text-center text-start font-semibold w-full flex flex-wrap sm:justify-start justify-center items-center h-auto text-slate-400"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={4}
          >
            <h1>MEMEAICOIN</h1>
          </motion.div>

          <motion.h1
            className="w-full sm:text-start text-center font-medium text-base"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={4}
          >{`LP Locked`}</motion.h1>
        </div>

        <div className="sm:w-1/2 w-full h-full border p-2 space-y-4">
          <motion.div
            className="text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base sm:text-center text-start font-semibold w-full flex flex-wrap sm:justify-start justify-center items-center h-auto "
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={5}
          >
            <h1>Symbol</h1>
          </motion.div>

          <motion.div
            className="text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base sm:text-center text-start font-semibold w-full flex flex-wrap sm:justify-start justify-center items-center h-auto text-slate-400"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={5}
          >
            <h1>$MEMEAI</h1>
          </motion.div>

          <motion.h1
            className="w-full sm:text-start text-center font-medium text-base"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={5}
          >{`LP Locked`}</motion.h1>
        </div>

        <div className="sm:w-1/2 w-full border p-2 space-y-4">
          <motion.div
            className="text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base sm:text-center text-start font-semibold w-full flex flex-wrap sm:justify-start justify-center items-center h-auto "
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={6}
          >
            <h1>Chain</h1>
          </motion.div>

          <motion.div
            className="text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base sm:text-center text-start font-semibold w-full flex flex-wrap sm:justify-start justify-center items-center h-auto text-slate-600"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={6}
          >
            <h1>Ethereum</h1>
          </motion.div>

          <motion.h1
            className="w-full sm:text-start text-center font-medium text-base"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={6}
          >{`LP Locked`}</motion.h1>
        </div>

        <div className="sm:w-1/2 w-full border p-2 space-y-4">
          <motion.div
            className="text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base sm:text-center text-start font-semibold w-full flex flex-wrap sm:justify-start justify-center items-center h-auto "
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={7}
          >
            <h1>Decimals</h1>
          </motion.div>

          <motion.div
            className="text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base sm:text-center text-start font-semibold w-full flex flex-wrap sm:justify-start justify-center items-center h-auto text-slate-400"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={7}
          >
            <h1>9</h1>
          </motion.div>

          <motion.h1
            className="w-full sm:text-start text-center font-medium text-base"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={7}
          >{`LP Locked`}</motion.h1>
        </div>
      </div>

      {/* pie charts */}
      <div className="w-full h-auto flex flex-wrap justify-center items-center">
        {/* left */}
        <div className="lg:w-1/2 w-full h-auto flex flex-col justify-center items-center">
          <motion.div
            className="text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base text-center font-semibold w-full flex justify-center items-center h-auto "
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={4}
          >
            <h1>Total Supply</h1>
          </motion.div>

          <motion.div
            className="text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base text-center font-semibold w-full flex justify-center items-center h-auto text-slate-400"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={4}
          >
            <h1>1.000.000.000</h1>
          </motion.div>

          {/* pie chart */}
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={4}
          >
            <PieChartComp chartType={"pie"} />
          </motion.div>
        </div>

        {/* right */}
        <div className="lg:w-1/2 w-full h-auto flex flex-col justify-center items-center">
          <motion.div
            className="text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base text-center font-semibold w-full flex justify-center items-center h-auto "
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={4}
          >
            <h1>TAX Fee</h1>
          </motion.div>

          <motion.div
            className="text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base text-center font-semibold w-full flex justify-center items-center h-auto text-slate-400"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={4}
          >
            <h1>5%</h1>
          </motion.div>

          {/* doughnut chart */}
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={4}
          >
            <PieChartComp chartType={"doughnut"} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsComp;
