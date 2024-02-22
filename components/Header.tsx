"use client";
// ~ imports
import Image from "next/image";

// ~ local imports
import { NavDataItems } from "@/lib/data";

// ~ icons import
import { HiMenuAlt4 } from "react-icons/hi";

import logo from "@/public/robotbull-logo.png";

import { Link } from "react-scroll/modules";
import { useState } from "react";

type Props = {};

const Header = (props: Props) => {
  const [mobile, setMobile] = useState(false);

  return (
    <div className="w-screen max-h-[15vh] h-auto flex lg:justify-start justify-between items-center text-center xl:px-[10%] px-[5%] space-x-[5%] duration-300 py-4 lg:bg-black bg-[#15161C] fixed top-0 left-0 z-[9999]">
      <Image
        src={logo}
        alt="logo"
        width={500}
        height={500}
        className="object-center lg:w-44 w-32 h-auto"
      />

      {/* <NavItems /> */}
      <div className="space-x-[10%] lg:block hidden">
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

      {/* menu icons */}
      <button
        className="flex lg:hidden text-center pr-3 cursor-pointer justify-center items-center lg:text-lg text-base gap-2 font-semibold text-[#3e2bc5]"
        onClick={() => setMobile(!mobile)}
      >
        <HiMenuAlt4 className="lg:w-8 w-6 lg:h-8 h-6" />
        Menu
      </button>
      {mobile && (
        <>
          <div className="fixed top-24 right-0 md:w-1/2 w-[80%] h-auto min-h-screen bg-[#3e2bc5] text-gray-900 duration-300 ease-in-out flex flex-col justify-start items-center text-center gap-8 pt-[5%]">
            {NavDataItems.map((item: any, index: number) => (
              <Link
                key={index}
                activeClass="active"
                to={item.src}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => setMobile(false)}
              >
                <span className="hover:text-black cursor-pointer duration-500 text-4xl font-extrabold">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
