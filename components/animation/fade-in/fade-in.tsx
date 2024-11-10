"use client";
import { MouseEventHandler, PropsWithChildren, useMemo } from "react";
import { motion, Variants } from "framer-motion";

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
  duration = { in: 0.4, out: 0.25 }, // 기본값을 설정하여 코드 유연성을 높임
  ...props
}: PropsWithChildren<Props>) {
  const variants: Variants = useMemo(
    () => ({
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: duration.in },
      },
      hidden: {
        opacity: 0,
        y: `${distance}px`,
        transition: { duration: duration.out },
      },
    }),
    [distance, duration]
  );

  return (
    <motion.div variants={variants} {...props}>
      {children}
    </motion.div>
  );
}
