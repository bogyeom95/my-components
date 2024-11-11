"use client";
import { useInView } from "react-intersection-observer";
import { motion, Variants } from "framer-motion";
import FadeIn from "./fade-in";
import { PropsWithChildren } from "react";

interface Props {
  className?: string;
  title: string;
  description: string;
}

const container: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

export default function Section({
  title,
  description,
}: PropsWithChildren<Props>) {
  const { ref, inView } = useInView();

  return (
    <motion.section
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      variants={container}
    >
      <div className="flex flex-col items-center border-2 m-4">
        <FadeIn distance={80}>
          <h3 className="text-2xl font-semibold text-center">{title}</h3>
        </FadeIn>
        <FadeIn distance={80}>
          <p className="text-base text-center mt-10">{description}</p>
        </FadeIn>
      </div>
    </motion.section>
  );
}
