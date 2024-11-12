import { svgObjects } from "@/constants/svg-list";
import ReorderList from "./components/reorder-list";

export default function page() {
  const svgs = svgObjects;
  return (
    <div className="w-full h-full flex flex-row justify-center  *:p-4 gap-2 ">
      <div className="w-1/4">
        <h1 className="text-2xl font-semibold">y 축 방향 drag & drop</h1>
        <p>현재 컨테이너 간 좌우 이동 구현 X</p>
      </div>
      <ReorderList svgs={svgs} />
      <ReorderList svgs={svgs} />
    </div>
  );
}
