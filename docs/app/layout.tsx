import { BaseLayout } from "@/components/base-layout";
import type { Metadata } from "next";
import { Funnel_Display, Inter } from "next/font/google";

import "./globals.css";

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"]
});
const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "BrifUI",
  description: "HiHi"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${funnelDisplay.variable} ${inter.variable}`}>
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
