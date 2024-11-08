export interface MenuItem {
  label: string;
  link: string;

  children?: MenuItem[]; // 옵션 필드로 정의 (있거나 없을 수 있음)
}

export const menuLinks: MenuItem[] = [
  {
    label: "Item 1",
    link: "#",
  },
  {
    label: "Parent",
    link: "#",

    children: [
      { label: "Submenu 1", link: "#" },
      { label: "Submenu 2", link: "#" },
      {
        label: "Parent",
        link: "#",

        children: [
          { label: "Submenu 1", link: "#" },
          { label: "Submenu 2", link: "#" },
        ],
      },
    ],
  },
  {
    label: "Item 3",
    link: "#",
  },
  {
    label: "Item 1",
    link: "#",
  },
  {
    label: "Parent",
    link: "#",

    children: [
      { label: "Submenu 1", link: "#" },
      { label: "Submenu 2", link: "#" },
      {
        label: "Parent",
        link: "#",

        children: [
          { label: "Submenu 1", link: "#" },
          { label: "Submenu 2", link: "#" },
        ],
      },
    ],
  },
  {
    label: "Item 3",
    link: "#",
  },
  {
    label: "Item 1",
    link: "#",
  },
  {
    label: "Parent",
    link: "#",

    children: [
      { label: "Submenu 1", link: "#" },
      { label: "Submenu 2", link: "#" },
      {
        label: "Parent",
        link: "#",

        children: [
          { label: "Submenu 1", link: "#" },
          { label: "Submenu 2", link: "#" },
        ],
      },
    ],
  },
  {
    label: "Item 3",
    link: "#",
  },
  {
    label: "Item 1",
    link: "#",
  },
  {
    label: "Parent",
    link: "#",

    children: [
      { label: "Submenu 1", link: "#" },
      { label: "Submenu 2", link: "#" },
      {
        label: "Parent",
        link: "#",

        children: [
          { label: "Submenu 1", link: "#" },
          { label: "Submenu 2", link: "#" },
        ],
      },
    ],
  },
  {
    label: "Item 3",
    link: "#",
  },
  {
    label: "Item 1",
    link: "#",
  },
  {
    label: "Parent",
    link: "#",

    children: [
      { label: "Submenu 1", link: "#" },
      { label: "Submenu 2", link: "#" },
      {
        label: "Parent",
        link: "#",

        children: [
          { label: "Submenu 1", link: "#" },
          { label: "Submenu 2", link: "#" },
        ],
      },
    ],
  },
  {
    label: "Item 3",
    link: "#",
  },
  {
    label: "Item 1",
    link: "#",
  },
  {
    label: "Parent",
    link: "#",

    children: [
      { label: "Submenu 1", link: "#" },
      { label: "Submenu 2", link: "#" },
      {
        label: "Parent",
        link: "#",

        children: [
          { label: "Submenu 1", link: "#" },
          { label: "Submenu 2", link: "#" },
        ],
      },
    ],
  },
  {
    label: "Item 3",
    link: "#",
  },
  {
    label: "Item 1",
    link: "#",
  },
  {
    label: "Parent",
    link: "#",

    children: [
      { label: "Submenu 1", link: "#" },
      { label: "Submenu 2", link: "#" },
      {
        label: "Parent",
        link: "#",

        children: [
          { label: "Submenu 1", link: "#" },
          { label: "Submenu 2", link: "#" },
        ],
      },
    ],
  },
  {
    label: "Item 3",
    link: "#",
  },
  {
    label: "Item 1",
    link: "#",
  },
  {
    label: "Parent",
    link: "#",

    children: [
      { label: "Submenu 1", link: "#" },
      { label: "Submenu 2", link: "#" },
      {
        label: "Parent",
        link: "#",

        children: [
          { label: "Submenu 1", link: "#" },
          { label: "Submenu 2", link: "#" },
        ],
      },
    ],
  },
  {
    label: "Item 3",
    link: "#",
  },
  {
    label: "Item 1",
    link: "#",
  },
  {
    label: "Parent",
    link: "#",

    children: [
      { label: "Submenu 1", link: "#" },
      { label: "Submenu 2", link: "#" },
      {
        label: "Parent",
        link: "#",

        children: [
          { label: "Submenu 1", link: "#" },
          { label: "Submenu 2", link: "#" },
        ],
      },
    ],
  },
  {
    label: "Item 3",
    link: "#",
  },
  {
    label: "Item 1",
    link: "#",
  },
  {
    label: "Parent",
    link: "#",

    children: [
      { label: "Submenu 1", link: "#" },
      { label: "Submenu 2", link: "#" },
      {
        label: "Parent",
        link: "#",

        children: [
          { label: "Submenu 1", link: "#" },
          { label: "Submenu 2", link: "#" },
        ],
      },
    ],
  },
  {
    label: "Item 3",
    link: "#",
  },
  {
    label: "Item 1",
    link: "#",
  },
  {
    label: "Parent",
    link: "#",

    children: [
      { label: "Submenu 1", link: "#" },
      { label: "Submenu 2", link: "#" },
      {
        label: "Parent",
        link: "#",

        children: [
          { label: "Submenu 1", link: "#" },
          { label: "Submenu 2", link: "#" },
        ],
      },
    ],
  },
  {
    label: "Item 3",
    link: "#",
  },
  {
    label: "Item 1",
    link: "#",
  },
  {
    label: "Parent",
    link: "#",

    children: [
      { label: "Submenu 1", link: "#" },
      { label: "Submenu 2", link: "#" },
      {
        label: "Parent",
        link: "#",

        children: [
          { label: "Submenu 1", link: "#" },
          { label: "Submenu 2", link: "#" },
        ],
      },
    ],
  },
  {
    label: "Item 3",
    link: "#",
  },
  {
    label: "Item 1",
    link: "#",
  },
  {
    label: "Parent",
    link: "#",

    children: [
      { label: "Submenu 1", link: "#" },
      { label: "Submenu 2", link: "#" },
      {
        label: "Parent",
        link: "#",

        children: [
          { label: "Submenu 1", link: "#" },
          { label: "Submenu 2", link: "#" },
        ],
      },
    ],
  },
  {
    label: "Item 3",
    link: "#",
  },
  {
    label: "Item 1",
    link: "#",
  },
  {
    label: "Parent",
    link: "#",

    children: [
      { label: "Submenu 1", link: "#" },
      { label: "Submenu 2", link: "#" },
      {
        label: "Parent",
        link: "#",

        children: [
          { label: "Submenu 1", link: "#" },
          { label: "Submenu 2", link: "#" },
        ],
      },
    ],
  },
  {
    label: "Item 3",
    link: "#",
  },
  {
    label: "Item 1",
    link: "#",
  },
  {
    label: "Parent",
    link: "#",

    children: [
      { label: "Submenu 1", link: "#" },
      { label: "Submenu 2", link: "#" },
      {
        label: "Parent",
        link: "#",

        children: [
          { label: "Submenu 1", link: "#" },
          { label: "Submenu 2", link: "#" },
        ],
      },
    ],
  },
  {
    label: "Item 3",
    link: "#",
  },
  {
    label: "Item 1",
    link: "#",
  },
  {
    label: "Parent",
    link: "#",

    children: [
      { label: "Submenu 1", link: "#" },
      { label: "Submenu 2", link: "#" },
      {
        label: "Parent",
        link: "#",

        children: [
          { label: "Submenu 1", link: "#" },
          { label: "Submenu 2", link: "#" },
        ],
      },
    ],
  },
  {
    label: "Item 3",
    link: "#",
  },
  {
    label: "Item 1",
    link: "#",
  },
  {
    label: "Parent",
    link: "#",

    children: [
      { label: "Submenu 1", link: "#" },
      { label: "Submenu 2", link: "#" },
      {
        label: "Parent",
        link: "#",

        children: [
          { label: "Submenu 1", link: "#" },
          { label: "Submenu 2", link: "#" },
        ],
      },
    ],
  },
  {
    label: "Item 3",
    link: "#",
  },
];
