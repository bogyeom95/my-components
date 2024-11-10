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
  // hidden: {
  //   transition: {
  //     staggerChildren: 0.15,
  //     delayChildren: 0.15,
  //   },
  // },
};

export default function Section({
  title,
  description,
}: PropsWithChildren<Props>) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      variants={container}
      initial="hidden"
    >
      <div className="flex flex-col items-center border-2 m-4">
        <FadeIn distance={20}>
          <h3 className="text-2xl font-semibold text-center ">{title}</h3>
        </FadeIn>
        <FadeIn distance={20}>
          <p className="text-base text-center mt-10">{description}</p>
        </FadeIn>
      </div>
    </motion.section>
  );
}
