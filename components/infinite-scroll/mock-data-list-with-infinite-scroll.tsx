"use client";
import { MockDataType } from "@/constants/mock-data";
import React from "react";
import Card from "../card";
import { getMockDataListWithCursorSearch } from "@/app/infinite-scroll/actions";
import { MdOutlineSentimentVeryDissatisfied } from "react-icons/md";

export interface MockDataListWithInfiniteScrollProps {
  initialMockDataList: MockDataType[];
  initialCursor: number | null;
}

export default function MockDataListWithInfiniteScroll({
  initialMockDataList,
  initialCursor,
}: MockDataListWithInfiniteScrollProps) {
  const [mockDataList, setMockDataList] =
    React.useState<MockDataType[]>(initialMockDataList);
  const [cursor, setCursor] = React.useState<number | null>(initialCursor);
  const trigger = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      async (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        const element = entries[0];
        if (element.isIntersecting && trigger.current) {
          observer.unobserve(trigger.current);

          const { data, nextCursor } = await getMockDataListWithCursorSearch(
            cursor,
            10
          );
          setCursor(nextCursor);
          setMockDataList((prev) => [...prev, ...data]);
        }
      },
      {
        threshold: 1.0,
      }
    );
    if (trigger.current) {
      observer.observe(trigger.current);
    }
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
          <span className="loading loading-dots loading-md "></span>
        </span>
      )}
    </div>
  );
}
