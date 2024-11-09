"use client";
import Image from "next/image";
import { forwardRef } from "react";
const FallingSVG = forwardRef(function FallingSVG(
  { svg, width, height }: { svg: string; width: number; height: number },
  ref: React.Ref<HTMLImageElement>
) {
  return (
    <div
      ref={ref}
      className="border-2 rounded-full border-slate-500 overflow-hidden p-2"
      style={{
        position: "absolute",
        left: "0px",
        top: "0px",
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <Image src={svg} alt="svg" fill className="object-cover" />
    </div>
  );
});

export default FallingSVG;
