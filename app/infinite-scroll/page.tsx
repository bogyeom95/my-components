import MockDataListWithInfiniteScroll from "@/components/infinite-scroll/mock-data-list-with-infinite-scroll";
import { getMockDataListWithCursorSearch } from "./actions";

export default async function InfiniteScrollShowPage() {
  const { data, nextCursor } = await getMockDataListWithCursorSearch(null, 10);

  return (
    <div className="w-full flex justify-center">
      <MockDataListWithInfiniteScroll
        initialMockDataList={data}
        initialCursor={nextCursor}
      />
    </div>
  );
}
