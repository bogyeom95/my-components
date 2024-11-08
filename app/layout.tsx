import { Roboto } from "next/font/google";
import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Menu from "@/components/layout/menu";
import { menuLinks } from "@/constants/menu-link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--roboto-text",
});

export const metadata: Metadata = {
  title: {
    template: "My Components | %s",
    default: "My Components",
  },
  description: "It Just My Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} `}>
        <Header />
        <div className="drawer lg:drawer-open">
          <input id="drawer" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content flex flex-col">
            <main className="h-[calc(100svh-4rem)]">{children}</main>
          </div>
          <Menu links={menuLinks} />
        </div>
      </body>
    </html>
  );
}
