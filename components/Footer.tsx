import { NavDataItems } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

type Props = {};

const FooterComp = (props: Props) => {
  return (
    <div className="w-full h-auto flex flex-col duration-300 lg:gap-12 gap-8 lg:p-8 p-4">
      {/* nav items */}
      <div className="w-full flex flex-wrap text-center text-xs justify-center items-center lg:gap-12 gap-6 lg:text-sm">
        {NavDataItems.map((item: any, index: number) => (
          <Link href={item.src} key={index} passHref>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>

      {/* social icons */}
      <div className="w-full flex gap-4 text-center justify-center items-center">
        <Link
          href={""}
          passHref
          className="border rounded-full border-blue-500 p-2.5 text-center"
        >
          <FaXTwitter className="w-4 h-4 text-white" />
        </Link>
        <Link
          href={""}
          passHref
          className="border rounded-full border-blue-500 p-2.5 text-center"
        >
          <FaTelegramPlane className="w-4 h-4 text-white" />
        </Link>
      </div>

      {/* info mail */}
      <p className="md:text-xl text-base font-bold w-full text-center">
        {"info@robotbull.io"}
      </p>

      {/* copyright */}
      <p className="text-xs text-gray-500 w-full text-center">
        {"2024 Robot Bull. All Rights Reserved"}
      </p>
    </div>
  );
};

export default FooterComp;
