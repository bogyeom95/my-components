"use client";
import { useEffect, useRef } from "react";
import {
  Engine,
  World,
  Bodies,
  Runner,
  IChamferableBodyDefinition,
  Body,
} from "matter-js";
import dynamic from "next/dynamic";
import { SvgObject } from "@/constants/svg-list";

const FallingSVG = dynamic(() => import("./falling-svg"), { ssr: false });
export default function FallingSVGContainer({ svgs }: { svgs: SvgObject[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Engine | null>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const bodiesRef = useRef<Body[]>([]);

  const allSvgObjs = svgs.flatMap((svgObj) => {
    const { nums = 1 } = svgObj; // nums가 없으면 기본값 1 사용
    return Array(nums).fill(svgObj);
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const engine = Engine.create();
    engineRef.current = engine;

    // Set gravity
    engine.gravity = {
      x: 0, //  x축 방향(수평 방향) 중력의 강도를 정의
      y: 0.05, // y축 방향(수직 방향) 중력의 강도를 정의
      scale: 0.01,
    };

    // 컨테이너의 크기를 기준으로 경계 값을 설정
    const left = 0; // 컨테이너의 왼쪽 가장자리 좌표를 0으로 설정
    const right = container.offsetWidth; // 컨테이너의 너비를 가져와 오른쪽 가장자리 좌표로 설정
    const top = 0; // 컨테이너의 위쪽 가장자리 좌표를 0으로 설정
    const bottom = container.offsetHeight; // 컨테이너의 높이를 가져와 아래쪽 가장자리 좌표로 설정

    // Create boundaries
    // Bodies.rectangle(x, y, width, height, options)
    const options: IChamferableBodyDefinition = {
      isStatic: true,
    };

    // 바닥 생성
    const ground = Bodies.rectangle(
      (left + right) / 2, // x 좌표: 컨테이너의 중앙
      bottom + 50, // y 좌표: 컨테이너의 아래쪽 가장자리보다 50px 아래에 위치시켜 바닥을 만듦
      right - left, // 너비: 컨테이너의 전체 너비로 설정
      100, // 높이: 100px로 설정하여 바닥의 두께를 결정
      options
    );

    // 천장 생성
    const ceiling = Bodies.rectangle(
      (left + right) / 2, // x 좌표: 컨테이너의 중앙
      top - 1000, // y 좌표: 컨테이너의 위쪽 가장자리보다 500px 위에 위치시켜 천장을 만듦
      right - left, // 너비: 컨테이너의 전체 너비로 설정
      100, // 높이: 100px로 설정하여 천장의 두께를 결정
      options
    );

    // 왼쪽 벽 생성
    const leftWall = Bodies.rectangle(
      left, // x 좌표
      (top + bottom) / 2, // y 좌표: 컨테이너의 중앙
      10, // 너비: 1px로 설정하여 벽의 두께를 결정
      bottom - top + 1000, // 높이: 컨테이너의 전체 높이로 설정
      options
    );

    // 오른쪽 벽 생성
    const rightWall = Bodies.rectangle(
      right, // x 좌표
      (top + bottom) / 2, // y 좌표: 컨테이너의 중앙
      10, // 너비: 1px로 설정하여 벽의 두께를 결정
      bottom - top + 1000, // 높이: 컨테이너의 전체 높이로 설정
      options
    );

    World.add(engine.world, [ground, ceiling, leftWall, rightWall]);

    // Create bodies and add them to the world
    allSvgObjs.forEach((svgObj) => {
      const { width, height } = svgObj;
      const startX = Math.random() * container.offsetWidth; // body가 생성될 x축 초기 위치
      const startY = -height; // body가 생성될 y축 초기 위치를 설정
      const angle = Math.random() * Math.PI * 2; // body의 초기 회전 각도를 설정

      const body = Bodies.rectangle(startX, startY, width, height, {
        restitution: 1.1, // 충돌 후 물체가 얼마나 튀어오를지를 결정
        frictionAir: 0.01, //  공기 저항을 설정
        angle: angle, // body의 초기 회전 각도를 설정
      });

      bodiesRef.current.push(body);
      World.add(engine.world, body);
    });

    // Start the engine runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Centralized animation loop
    const update = () => {
      if (!engineRef.current) return;

      Engine.update(engineRef.current);

      bodiesRef.current.forEach((body, index) => {
        const image = imageRefs.current[index];
        if (image) {
          const { width, height } = allSvgObjs[index];
          image.style.left = `${body.position.x - width / 2}px`;
          image.style.top = `${body.position.y - height / 2}px`;
          image.style.transform = `rotate(${body.angle}rad)`;
        }
      });

      requestAnimationFrame(update);
    };

    update();

    return () => {
      // clearn up
      Runner.stop(runner);
      Engine.clear(engine);
      bodiesRef.current.forEach((body) => {
        World.remove(engine.world, body);
      });
      bodiesRef.current = [];
    };
  }, [allSvgObjs]);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {allSvgObjs.map((svgObj, index) => (
        <FallingSVG
          key={index}
          {...svgObj}
          ref={(el) => (imageRefs.current[index] = el)}
        />
      ))}
    </div>
  );
}
