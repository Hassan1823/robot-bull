"use client";

import { NavDataItems } from "@/lib/data";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll/modules";

type Props = {};

const FooterComp = (props: Props) => {
  return (
    <div className="w-full h-auto flex flex-col duration-300 lg:gap-12 gap-8 lg:p-8 p-4">
      {/* nav items */}
      <div className="w-full flex flex-wrap text-center text-xs justify-center items-center lg:gap-12 gap-6 lg:text-sm">
        {NavDataItems.map((item: any, index: number) => (
          <Link
            key={index}
            activeClass="active"
            to={item.src}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            // onSetActive={handleSetActive}
          >
            <span className="hover:text-[#3e2bc5] cursor-pointer text-white duration-500">
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      {/* social icons */}
      <div className="w-full flex gap-4 text-center justify-center items-center">
        <button className="border rounded-full border-blue-500 p-2.5 text-center">
          <FaXTwitter className="w-4 h-4 text-white" />
        </button>
        <button className="border rounded-full border-blue-500 p-2.5 text-center">
          <FaTelegramPlane className="w-4 h-4 text-white" />
        </button>
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
