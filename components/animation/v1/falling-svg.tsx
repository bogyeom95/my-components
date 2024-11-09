"use client";
import Image from "next/image";
import { forwardRef } from "react";
const FallingSVG = forwardRef(function FallingSVG(
  { svg, width, height }: { svg: string; width: number; height: number },
  ref: React.Ref<HTMLImageElement>
) {
  return (
    <Image
      src={svg}
      alt="svg"
      width={width}
      height={height}
      ref={ref}
      style={{
        position: "absolute",
        left: "0px",
        top: "0px",
        userSelect: "none",
        pointerEvents: "none",
      }}
    />
  );
});

export default FallingSVG;
