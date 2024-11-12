"use client";
import { SvgObject } from "@/constants/svg-list";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FallingSVG({
  svg,
  width,
  height,
  containerRef,
}: SvgObject & { containerRef: React.RefObject<HTMLDivElement> }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    const generateUniquePosition = () => {
      const offsetX = Math.random() * (containerWidth - width);

      return { x: offsetX, y: -64 };
    };

    setPosition(generateUniquePosition());

    let velocityY = Math.random() * 10;
    const gravity = 0.2;
    let bounceDampingFactor = 0.7;
    const minVelocity = 1;
    let animationFrameId: number;

    const animate = () => {
      setPosition((prev) => {
        let newY = prev.y + velocityY;

        if (newY + height < containerHeight) {
          velocityY += gravity;
        } else {
          newY = containerHeight - height;
          velocityY = -velocityY * bounceDampingFactor;
          bounceDampingFactor -= 0.05;
          if (Math.abs(velocityY) < minVelocity) {
            cancelAnimationFrame(animationFrameId);
            return { ...prev, y: containerHeight - height };
          }
        }

        return { ...prev, y: newY };
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const delay = Math.random() * 5000;
    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [width, height, containerRef]);

  return (
    <Image
      src={svg}
      alt="svg"
      width={width}
      height={height}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
