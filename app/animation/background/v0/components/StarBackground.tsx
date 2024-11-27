"use client";
import { useEffect, useRef, useState } from "react";

type Star = {
  size: number;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
};
function debounce<
  T extends (
    this: unknown,
    ...args: any[] // eslint-disable-line
  ) => void,
>(callback: T, limit: number = 100) {
  let timeout: ReturnType<typeof setTimeout>;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}

const initializeStars = (width: number, height: number): Star[] => {
  const canvasSize = width + height;
  const numStars = canvasSize / 10;
  const newStars: Star[] = [];
  for (let i = 0; i < numStars; i++) {
    const size = Math.random() < 0.05 ? 3 : Math.random() < 0.3 ? 2 : 1;

    newStars.push({
      size,
      x: Math.random() * width,
      y: Math.random() * height,
      speedX: Math.random(),
      speedY: Math.random(),
    });
  }
  return newStars;
};

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasHeight, setCanvasHeight] = useState(0);

  useEffect(() => {
    const initialWidth = window.innerWidth * 2;
    const initialHeight = window.innerHeight * 2 + 200;
    setCanvasWidth(initialWidth);
    setCanvasHeight(initialHeight);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    let stars = initializeStars(canvasWidth, canvasHeight);

    let animationFrameId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      for (const star of stars) {
        ctx.fillStyle = "white";
        ctx.fillRect(star.x, star.y, star.size, star.size);
        star.x += star.speedX;
        star.y += star.speedY;
        if (star.x < 0) star.x = canvasWidth;
        if (star.x > canvasWidth) star.x = 0;
        if (star.y < 0) star.y = canvasHeight;
        if (star.y > canvasHeight) star.y = 0;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      console.log("resize");
      const newWidth = window.innerWidth * 2;
      const newHeight = window.innerHeight * 2 + 200;
      setCanvasWidth(newWidth);
      setCanvasHeight(newHeight);
      stars = initializeStars(newWidth, newHeight);
    };

    const debouncedResizeHandler = debounce(handleResize, 200);
    window.addEventListener("resize", debouncedResizeHandler);

    return () => {
      window.removeEventListener("resize", debouncedResizeHandler);
      cancelAnimationFrame(animationFrameId);
    };
  }, [canvasWidth, canvasHeight]);

  return (
    <canvas
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] bg-black"
    />
  );
}
