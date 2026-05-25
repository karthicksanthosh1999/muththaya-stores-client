"use client";
import { motion } from "framer-motion";

type TProps = {
  title: string;
  description: string;
};

const TitleSection = ({ title, description }: TProps) => {
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
    <div className="max-w-7xl mx-auto relative">
      <div className="relative py-16 flex justify-center px-4 sm:px-0">
        <div className="max-w-xl text-center">
          <div className="pb-4">
            <motion.span
              className="inline-flex items-center rounded-2xl bg-lime-100 px-4 py-1.5 text-xs sm:text-sm font-serif font-medium text-lime-700"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}>
              {title.split("").map((char, index) => (
                <motion.span key={index} variants={child}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </div>
          <motion.h1
            variants={child}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-semibold text-gray-900 xl:text-4xl font-serif ">
            {description}
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
