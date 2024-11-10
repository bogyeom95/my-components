"use client";
import { MouseEventHandler, PropsWithChildren, useMemo } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  className?: string;
  distance?: 0 | 20 | 30 | 60 | 80;
  duration?: {
    in?: number;
    out?: number;
  };

  onClick?: MouseEventHandler<HTMLDivElement>;
}

export default function FadeIn({
  children,
  distance = 20,
  duration,

  ...props
}: PropsWithChildren<Props>) {
  const { ref, inView } = useInView({});

  const variants: Variants = useMemo(
    () => ({
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: duration?.in ?? 0.4 },
      },
      hidden: {
        opacity: 0,
        y: `${distance}px`,
        transition: { duration: duration?.out ?? 0.25 },
      },
    }),
    [distance, duration]
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}
