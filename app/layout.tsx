import type { Metadata } from "next";
import "./globals.css";
import localfont from "next/font/local"
import CustomCursor from "@/components/CustomCursor";

import Navbar from "@/components/Navbar";

const geist = localfont({
  src: [
    {
      path: "../public/fonts/Geist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Geist-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-geist",
});

const geistMono = localfont({
  src: [
    {
      path: "../public/fonts/GeistMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Zuhdi.",
  description: "My personal web.",
   viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="overflow-x-hidden antialiased">
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
