"use client";

import Image from "next/image";
import image from "@/sources/header/bg-page-title.jpg";
import { motion } from "framer-motion";

type TProps = {
  page: string;
  bread: string[];
};

const Hero = ({ bread, page }: TProps) => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05, // delay between letters
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative bg-inner-to-r h-75 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Background Image"
          className="object-fill w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div className="relative z-5 flex flex-col justify-center items-center h-full text-center">
        <motion.h1
          className="text-3xl md:text-5xl font-bold leading-tight mb-4 flex flex-wrap"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          {page.split("").map((char, index) => (
            <motion.span key={index} variants={child}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        <div className="flex items-center gap-2">
          <p className="text-sm md:text-lg text-gray-100 mb-8">
            {bread[0] ?? "N/A"}
          </p>
          <span className="text-lg text-gray-100 mb-8"></span>
          <p className="text-sm md:text-lg text-gray-100 mb-8">
            {bread[1] ?? "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
