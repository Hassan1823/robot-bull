"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"forward" | "reverse">(
    "forward"
  );

  useEffect(() => {
    addAnimation();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;
        const isEndReached = scrollLeft + clientWidth === scrollWidth;
        const isStartReached = scrollLeft === 0;

        if (isEndReached) {
          setScrollDirection("forward");
        } else if (isStartReached) {
          setScrollDirection("reverse");
        }
      }
    };

    if (scrollerRef.current) {
      scrollerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollerRef.current) {
        scrollerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        scrollDirection === "forward" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="cursor-pointer flex justify-center items-center text-center mx-[5vw]"
          >
            <img
              src={"https://logowik.com/content/uploads/images/uniswap8205.jpg"}
              alt="logo"
              className="object-contain w-36"
            />
          </div>
        ))}
      </ul>
    </div>
  );
};
