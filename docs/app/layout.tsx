import { BaseLayout } from "@/components/base-layout";
import type { Metadata } from "next";
import { Funnel_Display, Geist, Geist_Mono } from "next/font/google";

import { Providers } from "./providers";

import "./globals.css";

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"]
});
const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "BrifUI - Beautiful, fast and modern React UI library",
  description:
    "BrifUI is a React UI library that helps you build beautiful and accessible user interfaces. Created on top of Panda CSS and Radix UI."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${funnelDisplay.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body>
        <Providers>
          <BaseLayout>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  );
}
