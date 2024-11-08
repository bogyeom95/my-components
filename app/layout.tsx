import { Roboto } from "next/font/google";
import "./globals.css";
import React from "react";
import type { Metadata } from "next";

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
      <body className={`${roboto.variable} `}>{children}</body>
    </html>
  );
}
