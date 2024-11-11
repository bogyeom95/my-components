"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Counter({
  from,
  to,
  duration,
}: {
  from: number;
  to: number;
  duration: number;
}) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, to, { duration: duration });

    return animation.stop;
  }, []);

  return <motion.h1>{rounded}</motion.h1>;
}
