"use client";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function AnimationControllExam() {
  const container = useRef<HTMLDivElement | null>(null);
  const nav = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null); // 트윈 인스턴스를 저장할 참조
  const [isTweenInitialized, setIsTweenInitialized] = useState(false); // 트윈 초기화를 상태로 관리

  useGSAP(() => {
    // 트윈이 초기화되지 않았을 때만 실행
    if (!isTweenInitialized) {
      tweenRef.current = gsap.to(".box", {
        duration: 2,
        x: () => nav.current?.offsetWidth || 0,
        xPercent: -100,
        rotation: 360,
        ease: "none",
        paused: true,
      });
      setIsTweenInitialized(true);
    }
  }, [isTweenInitialized]); // 의존성 배열에 초기화 상태 추가

  // 버튼 클릭 핸들러 함수
  const handlePlay = () => tweenRef.current?.play();
  const handlePause = () => tweenRef.current?.pause();
  const handleResume = () => tweenRef.current?.resume();
  const handleReverse = () => tweenRef.current?.reverse();
  const handleRestart = () => tweenRef.current?.restart();

  return (
    <div ref={container} className="flex flex-col gap-4">
      <div className="box rounded-md w-24 h-24 bg-black"></div>
      <div ref={nav} className="nav">
        <button className="btn" onClick={handlePlay}>
          play()
        </button>
        <button className="btn" onClick={handlePause}>
          pause()
        </button>
        <button className="btn" onClick={handleResume}>
          resume()
        </button>
        <button className="btn" onClick={handleReverse}>
          reverse()
        </button>
        <button className="btn" onClick={handleRestart}>
          restart()
        </button>
      </div>
    </div>
  );
}
