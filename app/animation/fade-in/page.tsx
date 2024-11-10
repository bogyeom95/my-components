import Section from "@/components/animation/fade-in/section";
import { mockDataList } from "@/constants/mock-data";

export default async function page() {
  return (
    <div className="relative w-full h-[calc(100svh-4rem)] overflow-hidden ">
      <div className="flex h-full">
        {/* 왼쪽 설명 칸 */}
        <div className="w-1/2 p-4">
          <h1 className="font-semibold text-2xl">이미지 처리 with Scroll v0</h1>
        </div>

        <div className="w-1/2 h-full overflow-y-auto">
          {mockDataList.map((data, index) => (
            <Section
              title={data.title}
              description={data.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
