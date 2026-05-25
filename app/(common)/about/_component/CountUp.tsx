"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

type TProps = {
  value: number;
  duration: number;
};

const CountUp = ({ value, duration }: TProps) => {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toLocaleString(),
  );

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [value]);

  return <motion.span className="z-10">{rounded}</motion.span>;
};

export default CountUp;
