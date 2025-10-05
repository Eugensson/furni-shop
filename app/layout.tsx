import type { Metadata } from "next";
import { Saira } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Modern Furniture for Every Home | FurniShop",
    template: "%s | FurniShop",
  },
  description:
    "Shop stylish and affordable furniture at FurniShop. Discover sofas, tables, chairs, beds, and more — designed to bring comfort and elegance to your home. Fast delivery and trusted quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${saira.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
