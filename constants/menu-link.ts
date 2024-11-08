export interface MenuItem {
  label: string;
  link: string;

  children?: MenuItem[]; // 옵션 필드로 정의 (있거나 없을 수 있음)
}

export const menuLinks: MenuItem[] = [
  {
    label: "Infinite Scroll",
    link: "/infinite-scroll",
  },
];
