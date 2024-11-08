import { mockDataList, MockDataType } from "@/constants/mock-data";

export async function getMockDataListWithCursorSearch(
  startAfter: number | null,
  limit: number = 1
): Promise<{ data: MockDataType[]; nextCursor: number | null }> {
  const startIndex = startAfter
    ? mockDataList.findIndex((item) => item.id > startAfter)
    : 0;

  if (startIndex === -1) {
    return { data: [], nextCursor: -1 };
  }
  const data = mockDataList.slice(startIndex, startIndex + limit);

  const nextCursor = data.length === limit ? data[data.length - 1].id : null;

  return {
    data,
    nextCursor,
  };
}
