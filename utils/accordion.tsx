"use client";

import React, { useState, useRef, FC } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

interface accordionProps {
  title: any;
  answer: any;
}

const AccordionComp: FC<accordionProps> = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
    if (contentRef.current) {
      contentRef.current.style.maxHeight = accordionOpen
        ? "0"
        : `${contentRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="py-2 h-auto space-y-4">
      <button
        className="flex w-full justify-between text-center items-center"
        onClick={toggleAccordion}
      >
        <span className="lg:text-xl text-base font-semibold">{title}</span>
        <span>
          {accordionOpen ? (
            <FaChevronUp className="w-5 h-5 text-white" />
          ) : (
            <FaChevronDown className="w-5 h-5 text-white" />
          )}
        </span>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: accordionOpen
            ? `${contentRef.current?.scrollHeight}px`
            : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        <div className="lg:text-base text-sm font-light lg:text-start text-center text-slate-400">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default AccordionComp;
