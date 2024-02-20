"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
export const ContainerScrollForward = ({
  users,
}: {
  users: {
    name: string;
    designation: string;
    image: string;
    badge?: string;
  }[];
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [2, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div
      className="h-auto flex items-center justify-center absolute top-0 left-[60vw] duration-500"
      ref={containerRef}
    >
      <div
        className="py-40 w-full relative duration-500"
        style={{
          perspective: "1000px",
        }}
      >
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          users={users}
        />
      </div>
    </div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  users,
}: {
  rotate: any;
  scale: any;
  translate: any;
  users: {
    name: string;
    designation: string;
    image: string;
    badge?: string;
  }[];
}) => {
  return (
    <motion.div
      style={{
        x: 100,
        y: -100,
        scale,
        rotate: 340,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="-mt-12 mx-auto h-[120vh] lg:w-[20vw] w-[40vw] p-6 bg-transparent duration-500"
    >
      <div className="bg-transparent h-full w-full rounded-2xl grid grid-cols-1 gap-4 overflow-hidden p-4 duration-500">
        {users.map((user, idx: number) => (
          <motion.div
            key={`user-${idx}`}
            className="bg-transparent rounded-md cursor-pointer relative"
            style={{ translateY: translate }}
            whileHover={{
              boxShadow:
                "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            }}
          >
            {/* <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-transparent px-2 py-1">
              {user.badge}
            </div> */}
            <img
              src={user.image}
              className="text-sm lg:w-[20vw] w-[40vw] h-[50vh]"
              alt="thumbnail"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
