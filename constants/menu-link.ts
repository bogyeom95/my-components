export interface MenuItem {
  label: string;
  link: string;

  children?: MenuItem[]; // 옵션 필드로 정의 (있거나 없을 수 있음)
}

export const menuLinks: MenuItem[] = [
  {
    label: "Infinite Scroll",
    link: "#",
    children: [
      {
        label: "Infinite Scroll With Intersection Observer",
        link: "/infinite-scroll/just-infinite-scroll",
      },
    ],
  },
  {
    label: "animation",
    link: "#",
    children: [
      {
        label: "bouncing",
        link: "#",
        children: [
          {
            label: "bouncing svg v0",
            link: "/animation/bouncing/v0",
          },
          {
            label: "bouncing svg v1",
            link: "/animation/bouncing/v1",
          },
        ],
      },
    ],
  },
];
