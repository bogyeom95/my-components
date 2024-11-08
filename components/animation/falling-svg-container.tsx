"use client";
import { SvgObject } from "@/constants/svg-list";
import dynamic from "next/dynamic";
import { useRef } from "react";

const FallingSVG = dynamic(() => import("./falling-svg"), { ssr: false });

export default function FallingSVGList({
  svgObjects,
}: {
  svgObjects: SvgObject[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[calc(100svh-4rem)] overflow-hidden"
    >
      {svgObjects.map((svgObject) =>
        Array.from({ length: svgObject.nums }).map((_, idx) => (
          <FallingSVG
            key={svgObject.id + idx}
            {...svgObject}
            containerRef={containerRef}
          />
        ))
      )}
    </div>
  );
}
