"use client";

import React from "react";

import { fadeInAnimationVariants } from "./Hero";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};

const MarketplaceComp = (props: Props) => {
  return (
    <div className="w-full h-auto flex flex-col max-xl:px-[5%] px-[10%] gap-24 pt-[10vh]">
      {/* marketplace title */}
      <motion.div
        className="text-7xl max-xl:text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl lg:text-start text-center font-extrabold w-full flex lg:justify-start justify-center items-center h-auto "
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom={8}
      >
        <h1>
          MEME NFT <br /> MARKETPLACE
        </h1>
      </motion.div>

      {/* marketplace generator body  */}
      <div className="w-full h-auto flex flex-wrap justify-center items-start max-lg:gap-8 gap-0">
        {/* left div */}
        <div className="lg:w-1/2 w-full h-auto flex flex-col justify-evenly items-center space-y-4">
          <motion.h1
            className="w-full lg:text-5xl text-4xl flex flex-wrap font-semibold lg:justify-start justify-center  lg:text-start text-center"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={6}
          >
            {"An optimal platform for the sale of your NFTs"}
          </motion.h1>

          <motion.p
            className="w-full flex flex-wrap font-semibold lg:text-xl text-lg text-[#909595] lg:text-start text-center"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={7}
          >
            {`The Meme AI Marketplace stands as an optimal platform for the sale of your NFTs, offering versatility across various blockchain networks such as ETH, BSC, SOL, AVAX, MATIC, and more, owing to its meticulously designed multichain architecture. Utilize the Meme AI generator to effortlessly craft distinctive memes, subsequently facilitating direct listing on the marketplace. Alternatively, showcase entire collections for traders to engage in the buying and selling of your NFTs. While our primary focus lies in supporting meme NFT projects, our platform is inclusive and welcomes a diverse range of NFTs within the market. Positioned to emerge as a key player in the NFT industry, our platform ensures seamless functionality for buying, trading, selling, and creating. Embrace simplicity in the NFT space – join our marketplace today.`}
          </motion.p>
        </div>
        {/* right div */}
        <div className="lg:w-1/2 w-full h-auto flex flex-col justify-around items-center space-y-4 px-4">
          <motion.div
            className="w-full min-h-[40%] h-auto"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={6}
          >
            <Image
              src={"/marketplace.png"}
              alt="generator img"
              width={500}
              height={500}
              className="object-contain w-full h-full border"
            />
          </motion.div>

          <motion.div
            className="w-full flex justify-center lg:justify-end items-center"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={8}
          >
            <button className="px-6 py-2 border rounded-full font-semibold bg-[#3e2bc5] border-transparent mt-4">
              NFT Marketplace
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceComp;
