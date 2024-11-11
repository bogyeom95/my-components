"use client";

import { useEffect, useRef, useState } from "react";

export const inrange = (v: number, min: number, max: number) => {
  if (v < min) return min;
  if (v > max) return max;
  return v;
};

export default function DragWithBoundary() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });

  // Window resize 이벤트 핸들러를 추가하여 Box의 위치를 조정
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && boxRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const boxRect = boxRef.current.getBoundingClientRect();
        const BOUNDARY_MARGIN = 12;

        setPosition((prevPosition) => ({
          x: inrange(
            prevPosition.x,
            BOUNDARY_MARGIN,
            containerRect.width - boxRect.width - BOUNDARY_MARGIN
          ),
          y: inrange(
            prevPosition.y,
            BOUNDARY_MARGIN,
            containerRect.height - boxRect.height - BOUNDARY_MARGIN
          ),
        }));
      }
    };

    // resize 이벤트 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    let initX = e.pageX;
    let initY = e.pageY;
    if (!containerRef.current || !boxRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const boxRect = boxRef.current.getBoundingClientRect();
    const BOUNDARY_MARGIN = 1;

    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.pageX - initX;
      const deltaY = moveEvent.pageY - initY;

      setPosition((prevPosition) => {
        const newX = prevPosition.x + deltaX;
        const newY = prevPosition.y + deltaY;

        // Boundary를 기준으로 새로운 위치를 제한
        const boundedX = inrange(
          newX,
          BOUNDARY_MARGIN,
          containerRect.width - boxRect.width - BOUNDARY_MARGIN
        );
        const boundedY = inrange(
          newY,
          BOUNDARY_MARGIN,
          containerRect.height - boxRect.height - BOUNDARY_MARGIN
        );

        // 새로운 위치가 설정된 경우만 업데이트하여 움직임을 누적하지 않도록 초기값 재설정
        initX = moveEvent.pageX;
        initY = moveEvent.pageY;

        return { x: boundedX, y: boundedY };
      });
    };

    const mouseUpHandler = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler, { once: true });
  };

  return (
    <div className="p-4 w-full">
      <div className="mb-2">
        <h1 className="text-3xl font-bold">Drag Boundary</h1>

        <span className="ml-4">
          x:{x} y:{y}
        </span>
      </div>
      <div ref={containerRef} className="w-4/5 h-96 bg-slate-100">
        <div
          ref={boxRef}
          className="h-24 w-24 absolute bg-white cursor-move rounded-xl shadow-xl"
          style={{ transform: `translate(${x}px, ${y}px)` }}
          onMouseDown={handleMouseDown}
        />
      </div>
    </div>
  );
}
