import FallingSVGList from "./components/falling-svg-container";
import { svgObjects } from "@/constants/svg-list";

export default function Page() {
  return (
    <div className="relative w-full h-[calc(100svh-4rem)] overflow-hidden bg-gray-100">
      <div className="flex h-full">
        {/* 왼쪽 설명 칸 */}
        <div className="w-1/2 p-4">
          <h1 className="font-semibold text-2xl">
            공처럼 튀는 애니메이션 구현 v0
          </h1>
          <p className="mt-4">
            SVG 파일을 불러와서 랜덤한 위치에서 랜덤한 속도로 떨어지는
          </p>
          <p className="font-semibold">
            🔥🔥🔥🔥 Warning!! SVG 파일이 너무 많으면 컴퓨터가 불탐🔥🔥🔥🔥
          </p>
        </div>

        {/* 오른쪽 FallingSVGList */}
        <div className="w-1/2 h-full bg-base-300">
          <FallingSVGList svgObjects={svgObjects} />
        </div>
      </div>
    </div>
  );
}
