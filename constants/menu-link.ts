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
            label: "v0",
            link: "/animation/bouncing/v0",
          },
          {
            label: "v1",
            link: "/animation/bouncing/v1",
          },
        ],
      },
      {
        label: "Image Processing With Scroll",
        link: "/animation/image-processing-with-scroll",
      },
      {
        label: "Fade In",
        link: "/animation/fade-in",
      },
      {
        label: "background",
        link: "#",
        children: [
          {
            label: "v0",
            link: "/animation/background/v0",
          },
        ],
      },
    ],
  },
  {
    label: "dnd",
    link: "#",
    children: [
      {
        label: "v0",
        link: "/dnd/v0",
      },
    ],
  },
];
