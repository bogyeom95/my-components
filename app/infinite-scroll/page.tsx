import MockDataListWithInfiniteScroll from "@/components/infinite-scroll/mock-data-list-with-infinite-scroll";
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
          구현한 예제입니다. 초기 데이터와 커서를 props로 받아 시작하며, 특정
          지점에 스크롤이 도달할 때마다 서버에서 추가 데이터를 요청하여 화면에
          표시합니다. 데이터를 모두 불러온 후에는 “No More Post…”라는 메시지를
          출력하고, 그렇지 않으면 Card Skeleton을 표시하여 스크롤 시 새로운
          데이터를 가져오는 기능을 제공합니다.
        </p>
      </div>

      <div className="h-[calc(100svh-4rem)] overflow-y-auto w-full sm:w-1/2 bg-base-300 flex justify-center">
        <MockDataListWithInfiniteScroll
          initialMockDataList={data}
          initialCursor={nextCursor}
          limit={limit}
        />
      </div>
    </div>
  );
}
