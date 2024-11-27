import ScrollEffectBackgound from "./components/scroll-effect-background";

export default async function page() {
  return (
    <div className="relative w-full h-[calc(100svh-4rem)] overflow-hidden ">
      <div className="flex h-full">
        {/* 왼쪽 설명 칸 */}
        <div className="w-1/2 p-4">
          <h1 className="font-semibold text-2xl">이미지 처리 with Scroll v0</h1>
        </div>

        <div className="w-1/2 h-full bg-base-300 overflow-y-auto">
          <div className="h-screen bg-black">Header</div>

          <ScrollEffectBackgound image="/placeholder.jpg">
            <div className="h-full w-full flex items-center justify-center text-white">
              <p>스크롤에 따라 배경이 변화하는 컴포넌트</p>
            </div>
          </ScrollEffectBackgound>
          <div className="h-screen bg-black">Footer</div>
        </div>
      </div>
    </div>
  );
}
