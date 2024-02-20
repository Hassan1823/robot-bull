"use client";
import { useState } from "react";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ContainerScroll } from "./ui/container-scroll-animation-reverse";
import { ContainerScrollForward } from "./ui/container-scroll-animation-forward";

type Props = {};

const HeroComp = (props: Props) => {
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
    <div className="w-full h-auto flex lg:flex-row flex-col">
      <div className="lg:w-1/2 w-full h-auto py-2 md:pl-[10%] pl-[5%] flex flex-col justify-between items-start gap-6 duration-300 mt-[12vh]">
        {/* button */}
        <div className=" w-full flex justify-center md:justify-start items-center">
          <button className="px-6 py-2 border rounded-full font-semibold bg-[#3e2bc5] border-transparent">
            Ai MEME Generator
          </button>
        </div>

        {/* heading */}
        <div className="xl:text-7xl text-6xl font-extrabold space-y-2 w-full md:text-start text-center pr-[5%] md:pr-0">
          <h1>{"BILLION DOLLAR"}</h1>
          <h1>{"MEME"}</h1>
          <h1>{"INDUSTRY"}</h1>
        </div>

        {/* Quote */}
        <div className="xl:text-xl text-lg font-medium space-y-2 md:w-[70%] text-[#A8AEAE] w-full p-2 md:text-start text-center pr-[5%] md:pr-0">
          {`Transforming Meme Communities into Marketing Titans! Create, Sell, and Dominate with Unique NFTs on Our Exclusive Marketplace – Your Gateway to Fun, Engagement, and Profit!"`}
        </div>

        {/* social icons */}
        <div className=" w-full flex md:justify-start justify-center items-center text-center space-x-6 pr-[5%] md:pr-0">
          <Link href={""} passHref className="">
            <FaTelegramPlane className="w-6 h-6 text-white" />
          </Link>
          <Link href={""} passHref className="">
            <FaXTwitter className="w-6 h-6 text-white" />
          </Link>
        </div>

        {/* bottom buttons */}
        <div className=" w-full flex flex-wrap md:justify-start justify-center items-center gap-6 pr-[5%] md:pr-0">
          <button className="px-6 py-2 border rounded-full font-semibold bg-black border-[#3e2bc5]">
            MEME Generator
          </button>
          <button className="px-6 py-2 border rounded-full font-semibold bg-black border-[#3e2bc5]">
            NFT Marketplace
          </button>
          <button className="px-6 py-2 border rounded-full font-semibold bg-[#3e2bc5] border-transparent">
            Buy Token
          </button>
        </div>

        {/* copy token */}
        <div className=" w-full flex flex-col justify-center md:items-start items-center gap-6 pr-[5%] md:pr-0 py-8">
          <p className="font-medium md:text-base text-sm">{text}</p>
          <button
            className="px-6 py-2 border rounded-full font-semibold bg-[#3e2bc5] border-transparent"
            onClick={handleClick}
          >
            {`${copiedText ? "Copied" : "COPY CONTRACT ADDRESS"}`}
          </button>
        </div>
      </div>

      <div className="lg:w-1/2 w-full h-auto lg:flex hidden justify-end items-center">
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll users={users} />
        </div>

        <div className="flex flex-col overflow-hidden">
          <ContainerScrollForward users={users} />
        </div>
      </div>
    </div>
  );
};

export default HeroComp;

export const users = [
  {
    name: "Manu Arora",
    designation: "Founder, Algochurn",
    image: "https://picsum.photos/id/10/300/300",
    badge: "Mentor",
  },
  {
    name: "Sarah Singh",
    designation: "Founder, Sarah's Kitchen",
    image: "https://picsum.photos/id/11/300/300",
    badge: "Mentor",
  },
  {
    name: "John Doe",
    designation: "Software Engineer, Tech Corp",
    image: "https://picsum.photos/id/12/300/300",
    badge: "Mentor",
  },
  {
    name: "Jane Smith",
    designation: "Product Manager, Innovate Inc",
    image: "https://picsum.photos/id/13/300/300",
    badge: "Mentor",
  },
];
