// ~ imports
import Image from "next/image";
import Link from "next/link";

// ~ local imports
import { NavDataItems } from "@/lib/data";

// ~ icons import
import { HiMenuAlt4 } from "react-icons/hi";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-full max-h-[15vh] h-auto flex lg:justify-start justify-between items-center text-center xl:px-[10%] px-[5%] space-x-[5%] duration-300 py-4 lg:bg-black bg-[#15161C] fixed top-0 left-0 z-[9999]">
      <Image
        src={"/robotBull-logo.png"}
        alt="logo"
        width={500}
        height={500}
        className="object-center lg:w-44 w-32 h-auto"
      />

      {/* <NavItems /> */}
      <div className="space-x-[10%] lg:block hidden">
        {NavDataItems.map((item: any, index: number) => (
          <Link href={item.src} key={index}>
            <span className="hover:text-[#3e2bc5] text-white duration-500">
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      {/* menu icons */}
      <div className="flex lg:hidden text-center justify-center items-center lg:text-lg text-base gap-2 font-semibold text-[#3e2bc5]">
        <HiMenuAlt4 className="lg:w-8 w-6 lg:h-8 h-6" />
        Menu
      </div>
    </div>
  );
};

export default Header;
