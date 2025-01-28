import { Provider } from "@/providers";
import type { Metadata } from "next";
import { Funnel_Display, Inter } from "next/font/google";

import "./globals.css";

import { Layout } from "@/layouts";

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"]
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body
        className={`${funnelDisplay.variable} ${inter.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </Provider>
  );
}
