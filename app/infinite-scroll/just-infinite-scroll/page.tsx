import DisplayWithInfiniteScroll from "./components/display-with-infinite-scroll";
import { getMockDataListWithCursorSearch } from "./actions";

export default async function InfiniteScrollShowPage() {
  const limit = 5;
  const { data, nextCursor } = await getMockDataListWithCursorSearch(
    null,
    limit
  );

  return (
    <div className="w-full flex justify-between *:p-4">
      <div className="text-4xl font-semibold hidden sm:block sm:w-1/2 h-[calc(100svh-4rem)] overflow-y-auto">
        <h1>Infinite Scroll 컴포넌트</h1>
        <p className="text-base font-normal mt-4">
          이 컴포넌트는 Intersection Observer API를 사용하여 무한 스크롤 기능을
          구현한 예제입니다.
        </p>
      </div>

      <div className="h-[calc(100svh-4rem)] overflow-y-auto w-full sm:w-1/2 bg-base-300 flex justify-center">
        <DisplayWithInfiniteScroll
          initialMockDataList={data}
          initialCursor={nextCursor}
          limit={limit}
        />
      </div>
    </div>
  );
}
