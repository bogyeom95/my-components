import FallingSVGList from "@/components/animation/bouncing/v1/falling-svg-container";
import { svgObjects } from "@/constants/svg-list";

export default function Page() {
  return (
    <div className="relative w-full h-[calc(100svh-4rem)] overflow-hidden bg-gray-100">
      <div className="flex h-full">
        {/* 왼쪽 설명 칸 */}
        <div className="w-1/2 p-4">
          <h1 className="font-semibold text-2xl">
            공처럼 튀는 애니메이션 구현 v1
          </h1>
          <p className="mt-4">
            matter.js 라이브러리를 사용하여 SVG 파일이 떨어지는 애니메이션을
            구현
          </p>
        </div>

        {/* 오른쪽 FallingSVGList */}
        <div className="w-1/2 h-full bg-base-300">
          <FallingSVGList svgs={svgObjects} />
        </div>
      </div>
    </div>
  );
}
