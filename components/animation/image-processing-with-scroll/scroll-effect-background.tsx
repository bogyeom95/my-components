"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollEffectBackgound({
  image,
  children,
}: {
  image: string;
  children: React.ReactNode;
}) {
  const [lightness, setLightness] = useState(0);
  const triggerRef = useRef(null);

  useEffect(() => {
    const element = triggerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;

        const newLightness = ratio * 100;
        setLightness(newLightness);
      },
      {
        root: null,
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={triggerRef}
      style={{
        height: "100%",
        width: "100%",
        backgroundImage: `url(${image})`,
        backgroundColor: `hsl(0, 0%, ${lightness}%)`,
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        transition: "background-color 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );
}
