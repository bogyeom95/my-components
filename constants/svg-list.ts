export interface SvgObject {
  id: number;
  svg: string; // SVG 파일 경로
  name: string; // SVG 파일 이름
  nums: number;
  width: number;
  height: number;
}

export const svgObjects: SvgObject[] = [
  {
    id: 1,
    svg: "/for-animation/icons8-nextjs.svg",
    name: "Next.js",
    nums: 3,
    width: 48,
    height: 48,
  },
  {
    id: 2,
    svg: "/for-animation/icons8-react.svg",
    name: "React",
    nums: 3,
    width: 48,
    height: 48,
  },
  {
    id: 3,
    svg: "/for-animation/icons8-tailwindcss.svg",
    name: "Tailwind CSS",
    nums: 3,
    width: 48,
    height: 48,
  },
  {
    id: 4,
    svg: "/for-animation/icons8-typescript.svg",
    name: "TypeScript",
    nums: 3,
    width: 48,
    height: 48,
  },
  {
    id: 5,
    svg: "/for-animation/icons8-java.svg",
    name: "Java",
    nums: 3,
    width: 48,
    height: 48,
  },
  {
    id: 6,
    svg: "/for-animation/icons8-javascript.svg",
    name: "JavaScript",
    nums: 3,
    width: 48,
    height: 48,
  },
  {
    id: 7,
    svg: "/for-animation/icons8-spring-boot.svg",
    name: "Spring Boot",
    nums: 3,
    width: 48,
    height: 48,
  },
  {
    id: 8,
    svg: "/for-animation/icons8-nginx.svg",
    name: "Nginx",
    nums: 3,
    width: 48,
    height: 48,
  },
  {
    id: 9,
    svg: "/for-animation/icons8-docker.svg",
    name: "Docker",
    nums: 3,
    width: 48,
    height: 48,
  },
  {
    id: 10,
    svg: "/for-animation/icons8-github.svg",
    name: "GitHub",
    nums: 3,
    width: 48,
    height: 48,
  },
  {
    id: 11,
    svg: "/for-animation/icons8-mysql.svg",
    name: "MySQL",
    nums: 3,
    width: 48,
    height: 48,
  },
];
