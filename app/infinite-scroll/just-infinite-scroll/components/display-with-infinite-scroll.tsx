"use client";
import { MockDataType } from "@/constants/mock-data";
import React from "react";
import Card from "../../../../components/card";
import { getMockDataListWithCursorSearch } from "@/app/infinite-scroll/just-infinite-scroll/actions";
import { MdOutlineSentimentVeryDissatisfied } from "react-icons/md";
import CardSkeleton from "../../../../components/card-skeleton";

export interface DisplayWithInfiniteScrollProps {
  initialMockDataList: MockDataType[];
  initialCursor: number | null;
  limit: number;
}

export default function DisplayWithInfiniteScroll({
  initialMockDataList,
  initialCursor,
  limit = 5,
}: DisplayWithInfiniteScrollProps) {
  const [mockDataList, setMockDataList] =
    React.useState<MockDataType[]>(initialMockDataList);
  const [cursor, setCursor] = React.useState<number | null>(initialCursor);
  const trigger = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    // IntersectionObserver를 생성하여 특정 요소가 화면에 나타날 때 데이터 로딩을 수행
    const observer = new IntersectionObserver(
      async (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        const element = entries[0];
        /**
         * 조건 설명:
         * element.isIntersecting:
         * - IntersectionObserverEntry의 속성으로, 관찰 대상 요소가 화면에 나타나면 true를 반환
         *
         * trigger.current:
         * - useRef를 통해 설정된 특정 DOM 요소의 참조
         * - 이 요소는 무한 스크롤 트리거로 사용되며, 화면에 존재하는 경우에만 observer가 정상 동작
         */
        if (element.isIntersecting && trigger.current) {
          // 중복 호출을 방지하기 위해 일시적으로 관찰 해제
          observer.unobserve(trigger.current);

          // 다음 데이터를 서버에서 받아와 상태를 갱신
          const { data, nextCursor } = await getMockDataListWithCursorSearch(
            cursor,
            limit
          );
          setCursor(nextCursor); // 커서 상태 업데이트
          setMockDataList((prev) => [...prev, ...data]); // 기존 데이터에 새 데이터를 추가
        }
      },
      {
        threshold: 1.0, // 요소가 완전히 보일 때만 교차 이벤트가 발생하도록 설정
      }
    );

    // 트리거 요소가 존재할 경우 옵저버로 감시 시작
    if (trigger.current) {
      observer.observe(trigger.current);
    }

    // 컴포넌트가 언마운트되거나 cursor가 변경될 때 옵저버를 해제하여 메모리 누수를 방지
    return () => {
      observer.disconnect();
    };
  }, [cursor]);

  return (
    <div className="flex flex-col gap-5 p-5">
      {mockDataList.map((mockData) => (
        <Card mockData={mockData} key={mockData.id} />
      ))}
      {cursor === -1 ? (
        <h1 className="text-2xl font-semibold flex items-center gap-1">
          <MdOutlineSentimentVeryDissatisfied />
          <span>No More Post...</span>
        </h1>
      ) : (
        <span ref={trigger} className="w-full flex justify-center">
          <CardSkeleton />
        </span>
      )}
    </div>
  );
}
