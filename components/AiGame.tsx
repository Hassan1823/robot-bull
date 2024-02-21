"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInAnimationVariants } from "./Hero";

type Props = {};

const AiGameComp = (props: Props) => {
  return (
    <>
      <div className="w-full h-auto flex flex-col max-xl:px-[5%] px-[10%] gap-8 pt-[20vh]">
        {/* ai game title */}
        <motion.div
          className="text-9xl max-xl:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl lg:text-start text-center font-extrabold w-full flex flex-wrap lg:justify-start justify-center items-center h-auto "
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          custom={8}
        >
          <h1>MEME AI GAME</h1>
        </motion.div>

        {/* ai game body  */}
        <div className="w-full h-auto flex flex-wrap justify-center items-start max-lg:gap-8 gap-0">
          {/* left div */}
          <div className="lg:w-[70%] w-full h-auto flex flex-col justify-evenly items-center space-y-6 lg:pr-[15%] pr-0">
            <motion.p
              className="w-full flex flex-wrap font-semibold lg:text-xl text-lg text-[#909595] lg:text-start text-center"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              custom={4}
            >
              {`Welcome to MEMEAI GAME, where entertainment meets innovation! Our game combines the addictive gameplay of Flappy Bird with a groundbreaking STAKE TO PLAY mechanism, introducing a thrilling way to earn rewards.`}
            </motion.p>

            {/* STAKE TO PLAY */}
            <div className="w-full h-auto flex flex-col justify-center  lg:items-start items-center space-y-3">
              <motion.h1
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={5}
                className="w-full lg:text-2xl text-xl flex flex-wrap font-semibold lg:justify-start justify-center  lg:text-start text-center"
              >
                {`STAKE TO PLAY`}
              </motion.h1>

              <motion.p
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={5}
                className="w-full flex flex-wrap font-normal lg:text-base text-sm text-[#909595] lg:text-start text-center"
              >
                {`In MEMEAI GAME, the more $MEMEAI tokens you stake, the greater the rewards you can unlock. It’s not just about skill; it’s about your commitment to the game. The STAKE TO PLAY feature adds a new dimension to gaming, making every move count both in skill and strategy.`}
              </motion.p>
            </div>

            {/* LEADERBOARD CHALLENGE */}
            <div className="w-full h-auto flex flex-col justify-center  lg:items-start items-center space-y-3">
              <motion.h1
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={5}
                className="w-full lg:text-2xl text-xl flex flex-wrap font-semibold lg:justify-start justify-center  lg:text-start text-center"
              >
                {`LEADERBOARD CHALLENGE`}
              </motion.h1>

              <motion.p
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={5}
                className="w-full flex flex-wrap font-normal lg:text-base text-sm text-[#909595] lg:text-start text-center"
              >
                {`Compete with players from around the world on our leaderboard. Every week, the top 10 rankers will be generously rewarded with tokens. It’s not just about playing the game; it’s about rising to the top and claiming your spot among the elite MEMEAI players.`}
              </motion.p>
            </div>

            {/* ENGAGING GAMEPLAY*/}
            <div className="w-full h-auto flex flex-col justify-center  lg:items-start items-center space-y-3">
              <motion.h1
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={5}
                className="w-full lg:text-2xl text-xl flex flex-wrap font-semibold lg:justify-start justify-center  lg:text-start text-center"
              >
                {`ENGAGING GAMEPLAY`}
              </motion.h1>

              <motion.p
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={5}
                className="w-full flex flex-wrap font-normal lg:text-base text-sm text-[#909595] lg:text-start text-center"
              >
                {`Experience the excitement of MEMEAI GAME with its engaging levels and entertaining challenges. The game is designed to keep you hooked with its dynamic and interactive environment. Each level brings new surprises, ensuring that you stay entertained while earning rewards.`}
              </motion.p>
            </div>

            {/* WEEKLY TOKEN REWARDS*/}
            <div className="w-full h-auto flex flex-col justify-center  lg:items-start items-center space-y-3">
              <motion.h1
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={5}
                className="w-full lg:text-2xl text-xl flex flex-wrap font-semibold lg:justify-start justify-center  lg:text-start text-center"
              >
                {`WEEKLY TOKEN REWARDS`}
              </motion.h1>

              <motion.p
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={5}
                className="w-full flex flex-wrap font-normal lg:text-base text-sm text-[#909595] lg:text-start text-center"
              >
                {`We believe in rewarding dedication and skill. That’s why, every week, we distribute tokens to the top 10 players on the leaderboard. It’s not just a game; it’s a chance to showcase your prowess and be duly recognized for your achievements.`}
              </motion.p>
            </div>

            {/* BE THE CHAMPION*/}
            <div className="w-full h-auto flex flex-col justify-center  lg:items-start items-center space-y-3">
              <motion.h1
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={5}
                className="w-full lg:text-2xl text-xl flex flex-wrap font-semibold lg:justify-start justify-center  lg:text-start text-center"
              >
                {`BE THE CHAMPION`}
              </motion.h1>

              <motion.p
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={5}
                className="w-full flex flex-wrap font-normal lg:text-base text-sm text-[#909595] lg:text-start text-center"
              >
                {`Become the ultimate MEMEAI champion by mastering the gameplay, climbing the leaderboard, and earning the highest rewards. The MEMEAI community is waiting for a new champion – will it be you?`}
              </motion.p>
            </div>
          </div>

          {/* right div */}
          <motion.div
            className="lg:w-[30%] w-full h-auto flex flex-col justify-center items-center"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={9}
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-transparent relative group/card dark:bg-transparent w-auto h-auto rounded-xl p-6  ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/game.png"
                    height={1000}
                    width={1000}
                    className="h-[45vh] w-full object-contain rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        </div>

        {/* ai game footer */}
        <motion.h1
          className="w-full lg:text-2xl text-xl flex flex-wrap font-semibold lg:justify-start justify-center  lg:text-start text-center"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          custom={8}
        >
          {
            "Embark on a gaming adventure like never before. Stake, play, win – it's time to redefine your gaming experience!.... Coming soon!"
          }
        </motion.h1>
      </div>

      {/* how does it even work */}
      <div className="w-full h-auto flex flex-col justify-center items-start pt-[30vh]">
        {/* how does work title */}
        <motion.div
          className="w-full h-auto flex lg:flex-row flex-col justify-center items-center text-center lg:text-6xl text-5xl font-bold lg:gap-8 gap-4 p-2"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          custom={9}
        >
          <div>
            <motion.div
              className="w-[50px] h-[50px] border-[5px] border-[#253992] bg-[#253992] rounded-xl"
              whileHover={{ scale: 1, rotate: 180 }}
              whileTap={{ scale: 1, rotate: -180, borderRadius: "100%" }}
            />
          </div>
          <p className="">{"So, how"}</p>
          <p className="strokeText">{"does it even"}</p>
        </motion.div>

        <motion.div
          className="w-full h-auto flex flex-wrap justify-center items-center text-center xl:text:8xl lg:text-7xl md:text-6xl text-5xl font-bold lg:gap-8 gap-4 p-2"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          custom={11}
        >
          <p className="">{"work?"}</p>
        </motion.div>

        {/* how works cards */}
        <div className="w-full h-auto flex flex-wrap justify-center items-center gap-[5%] py-[8%] px-4">
          {/* card1 */}
          <motion.div
            className="cursor-pointer w-60 space-y-5 h-auto p-4 flex flex-col justify-center items-center text-center"
            whileHover={{
              scale: 1.05,
            }}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={4}
          >
            {/* svg */}
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M21.63 14.75C21.63 15.64 21.39 16.48 20.95 17.2C20.13 18.57 18.62 19.5 16.88 19.5C15.94 19.5 15.06 19.22 14.32 18.73C13.7 18.35 13.19 17.82 12.82 17.2C12.38 16.48 12.13 15.64 12.13 14.75C12.13 12.13 14.26 10 16.88 10C17.24 10 17.59 10.04 17.92 10.12C20.05 10.59 21.63 12.49 21.63 14.75Z"
                  stroke="#253992"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M15.03 14.75L16.2 15.92L18.73 13.58"
                  stroke="#253992"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M20.6901 4.01999V6.23999C20.6901 7.04999 20.1801 8.06001 19.6801 8.57001L17.92 10.12C17.59 10.04 17.2401 10 16.8801 10C14.2601 10 12.1301 12.13 12.1301 14.75C12.1301 15.64 12.3801 16.48 12.8201 17.2C13.1901 17.82 13.7001 18.35 14.3201 18.73V19.07C14.3201 19.68 13.92 20.49 13.41 20.79L12.0001 21.7C10.6901 22.51 8.87006 21.6 8.87006 19.98V14.63C8.87006 13.92 8.46006 13.01 8.06006 12.51L4.22003 8.47C3.72003 7.96 3.31006 7.05001 3.31006 6.45001V4.12C3.31006 2.91 4.22008 2 5.33008 2H18.67C19.78 2 20.6901 2.90999 20.6901 4.01999Z"
                  stroke="#253992"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>

            {/* title */}
            <h1 className="font-medium text-xl">Generate</h1>

            {/* title */}
            <h1 className="font-medium text-base text-slate-400">{`Effortlessly transform witty thoughts into visually stunning memes with our seamless Text-to-Picture feature.`}</h1>
          </motion.div>

          {/* card2 */}
          <motion.div
            className="cursor-pointer w-60 space-y-5 h-auto p-4 flex flex-col justify-center items-center text-center"
            whileHover={{
              scale: 1.05,
            }}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={8}
          >
            {/* svg */}
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M18.2892 2.88976C17.2615 2.75159 15.9068 2.75 14 2.75C13.5858 2.75 13.25 2.41421 13.25 2C13.25 1.58579 13.5858 1.25 14 1.25H14.0564C15.8942 1.24998 17.3498 1.24997 18.489 1.40314C19.6615 1.56076 20.6104 1.89288 21.3588 2.64124C22.0432 3.32568 22.417 3.97665 22.5924 4.98199C22.7501 5.88571 22.7501 7.1045 22.75 8.90369L22.75 9C22.75 9.41422 22.4142 9.75 22 9.75C21.5858 9.75 21.25 9.41422 21.25 9C21.25 7.08092 21.2471 5.9986 21.1147 5.23984C20.9973 4.56666 20.7852 4.18904 20.2981 3.7019C19.8749 3.27869 19.2952 3.02503 18.2892 2.88976Z"
                  fill="#253992"
                ></path>{" "}
                <path
                  d="M2.75001 15C2.75001 14.5858 2.41422 14.25 2.00001 14.25C1.58579 14.25 1.25001 14.5858 1.25001 15L1.25 15.0963C1.24995 16.8955 1.24992 18.1143 1.40762 19.018C1.58304 20.0233 1.95681 20.6743 2.64125 21.3588C3.38961 22.1071 4.33856 22.4392 5.51098 22.5969C6.6502 22.75 8.10583 22.75 9.94359 22.75H10C10.4142 22.75 10.75 22.4142 10.75 22C10.75 21.5858 10.4142 21.25 10 21.25C8.09318 21.25 6.73852 21.2484 5.71085 21.1102C4.70476 20.975 4.12512 20.7213 3.70191 20.2981C3.21477 19.811 3.00275 19.4333 2.88529 18.7602C2.75289 18.0014 2.75001 16.9191 2.75001 15Z"
                  fill="#253992"
                ></path>{" "}
                <path
                  d="M22.75 15C22.75 14.5858 22.4142 14.25 22 14.25C21.5858 14.25 21.25 14.5858 21.25 15C21.25 16.9191 21.2471 18.0014 21.1147 18.7602C20.9973 19.4333 20.7852 19.811 20.2981 20.2981C19.8749 20.7213 19.2952 20.975 18.2892 21.1102C17.2615 21.2484 15.9068 21.25 14 21.25C13.5858 21.25 13.25 21.5858 13.25 22C13.25 22.4142 13.5858 22.75 14 22.75H14.0564C15.8942 22.75 17.3498 22.75 18.489 22.5969C19.6615 22.4392 20.6104 22.1071 21.3588 21.3588C22.0432 20.6743 22.417 20.0233 22.5924 19.018C22.7501 18.1143 22.7501 16.8955 22.75 15.0963L22.75 15Z"
                  fill="#253992"
                ></path>{" "}
                <path
                  d="M10 1.25H9.94359C8.10584 1.24998 6.65019 1.24997 5.51098 1.40314C4.33856 1.56076 3.38961 1.89288 2.64125 2.64124C1.95681 3.32568 1.58304 3.97665 1.40762 4.98199C1.24992 5.8857 1.24995 7.10448 1.25 8.90364L1.25001 9C1.25001 9.41422 1.58579 9.75 2.00001 9.75C2.41422 9.75 2.75001 9.41422 2.75001 9C2.75001 7.08092 2.75289 5.9986 2.88529 5.23984C3.00275 4.56666 3.21477 4.18904 3.70191 3.7019C4.12512 3.27869 4.70476 3.02503 5.71085 2.88976C6.73852 2.75159 8.09319 2.75 10 2.75C10.4142 2.75 10.75 2.41421 10.75 2C10.75 1.58579 10.4142 1.25 10 1.25Z"
                  fill="#253992"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 9.25C10.4812 9.25 9.25001 10.4812 9.25001 12C9.25001 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25ZM10.75 12C10.75 11.3096 11.3096 10.75 12 10.75C12.6904 10.75 13.25 11.3096 13.25 12C13.25 12.6904 12.6904 13.25 12 13.25C11.3096 13.25 10.75 12.6904 10.75 12Z"
                  fill="#253992"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.32438 9.45049C6.59435 7.97738 8.77637 6.25 12 6.25C15.2236 6.25 17.4057 7.97738 18.6756 9.45049L18.7079 9.48791C18.9789 9.80202 19.2576 10.125 19.4491 10.5121C19.6632 10.9448 19.75 11.4094 19.75 12C19.75 12.5906 19.6632 13.0552 19.4491 13.4879C19.2576 13.875 18.9789 14.198 18.7079 14.5121L18.6756 14.5495C17.4057 16.0226 15.2236 17.75 12 17.75C8.77637 17.75 6.59435 16.0226 5.32438 14.5495L5.29211 14.5121C5.0211 14.198 4.7424 13.875 4.5509 13.4879C4.33676 13.0552 4.25001 12.5906 4.25001 12C4.25001 11.4094 4.33676 10.9448 4.5509 10.5121C4.74241 10.125 5.02109 9.80202 5.2921 9.48791L5.32438 9.45049ZM12 7.75C9.369 7.75 7.56642 9.14707 6.46048 10.4299C6.14652 10.7941 5.99368 10.9785 5.89533 11.1773C5.81198 11.3457 5.75001 11.566 5.75001 12C5.75001 12.434 5.81198 12.6543 5.89533 12.8227C5.99368 13.0215 6.14652 13.2059 6.46048 13.5701C7.56642 14.8529 9.369 16.25 12 16.25C14.631 16.25 16.4336 14.8529 17.5395 13.5701C17.8535 13.2059 18.0063 13.0215 18.1047 12.8227C18.188 12.6543 18.25 12.434 18.25 12C18.25 11.566 18.188 11.3457 18.1047 11.1773C18.0063 10.9785 17.8535 10.7941 17.5395 10.4299C16.4336 9.14707 14.631 7.75 12 7.75Z"
                  fill="#253992"
                ></path>{" "}
              </g>
            </svg>

            {/* title */}
            <h1 className="font-medium text-xl">Integration</h1>

            {/* title */}
            <h1 className="font-medium text-base text-slate-400">{`Level up your social media game by linking MEME NFTs to your Twitter profile picture, standing out in the meme-loving crowd.`}</h1>
          </motion.div>

          {/* card */}
          <motion.div
            className="cursor-pointer w-60 space-y-5 h-auto p-4 flex flex-col justify-center items-center text-center"
            whileHover={{
              scale: 1.05,
            }}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={12}
          >
            {/* svg */}
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5.57598 21.8207C4.04771 23.2353 1.14274 22.647 1.14274 22.647C1.14274 22.647 0.492092 19.6908 1.96908 18.2138C2.18975 17.9753 2.46097 17.7892 2.76287 17.6691C3.06476 17.5491 3.3897 17.498 3.71388 17.5197C4.03806 17.5415 4.35327 17.6354 4.63643 17.7948C4.9196 17.9541 5.16354 18.1747 5.3504 18.4405C5.61593 18.6275 5.83629 18.8714 5.99538 19.1545C6.15447 19.4377 6.24825 19.7527 6.26988 20.0768C6.2915 20.4008 6.24041 20.7256 6.12035 21.0273C6.00029 21.329 5.8143 21.6001 5.57598 21.8207Z"
                  stroke="#253992"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M21.3027 2.48152L22.7843 1"
                  stroke="#253992"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M21.5001 7.65834L21.3028 2.48151L16.126 2.28427C15.3607 2.30058 14.6112 2.50483 13.9435 2.87902C13.2758 3.2532 12.7103 3.78585 12.2969 4.43004L6.66895 13.7443L10.031 17.1109L19.3452 11.4874C19.9914 11.0754 20.5261 10.5105 20.902 9.84263C21.2778 9.17476 21.5001 8.54418 21.5001 7.65834Z"
                  stroke="#253992"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M6.67241 13.7488L3.66855 13.012C3.56459 12.986 3.46872 12.9346 3.38957 12.8624C3.31043 12.7902 3.25048 12.6994 3.21514 12.5982C3.17955 12.5039 3.17131 12.4014 3.19136 12.3025C3.21142 12.2037 3.25894 12.1125 3.32849 12.0394L5.5094 9.86417C5.80509 9.5809 6.17541 9.38779 6.57694 9.30748C6.97847 9.22717 7.39457 9.263 7.77646 9.41076L8.99997 9.84455"
                  stroke="#253992"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M10.0352 17.1165L10.772 20.1204C10.7979 20.2242 10.8492 20.3199 10.9212 20.399C10.9932 20.4781 11.0837 20.5382 11.1846 20.5738C11.2791 20.6097 11.3818 20.6182 11.4809 20.5981C11.58 20.578 11.6714 20.5303 11.7445 20.4604L13.9232 18.2738C14.2051 17.9773 14.3967 17.6066 14.4756 17.2051C14.5545 16.8036 14.5174 16.388 14.3686 16.0068L13.9232 14.8742"
                  stroke="#253992"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M16.171 9.31331C17.11 9.31331 17.8713 8.55206 17.8713 7.61302C17.8713 6.67397 17.11 5.91272 16.171 5.91272C15.232 5.91272 14.4707 6.67397 14.4707 7.61302C14.4707 8.55206 15.232 9.31331 16.171 9.31331Z"
                  stroke="#253992"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>

            {/* title */}
            <h1 className="font-medium text-xl">Create NFT</h1>

            {/* title */}
            <h1 className="font-medium text-base text-slate-400">{`Display and sell these digital masterpieces in an unprecedented manner, unlocking a new level of appreciation.`}</h1>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AiGameComp;
