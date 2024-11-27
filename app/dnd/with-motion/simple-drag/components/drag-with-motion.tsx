"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DragWithMotion() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  useEffect(() => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const MARGIN = 0;
      setConstraints({
        top: 0 + MARGIN,
        left: 0 + MARGIN,
        right: containerRect.width - 96 - MARGIN, // 박스의 너비(96px)를 제외한 값으로 설정
        bottom: containerRect.height - 96 - MARGIN, // 박스의 높이(96px)를 제외한 값으로 설정
      });
    }
  }, []);

  return (
    <div className="p-4 w-full">
      <div className="mb-2">
        <h1 className="text-3xl font-bold">Drag Boundary with Framer Motion</h1>
      </div>
      <div
        ref={containerRef}
        className="w-4/5 h-96 bg-base-300 relative overflow-hidden"
      >
        <motion.div
          className="h-24 w-24 absolute bg-white cursor-move rounded-xl shadow-xl"
          drag
          dragConstraints={constraints} // 설정된 경계로 드래그 제한
          dragElastic={0.2}
          whileDrag={{ scale: 1.1 }}
        />
      </div>
    </div>
  );
}
