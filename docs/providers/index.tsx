"use client";

import { Provider as BrifUIProvider } from "@brifui/components";

import { themeConfig } from "./theme-config";

export function Provider({ children }: { children?: React.ReactNode }) {
  return (
    <BrifUIProvider themeConfig={themeConfig} defaultTheme="light">
      {(currentTheme) => (
        <html lang="en" className={currentTheme}>
          {children}
        </html>
      )}
    </BrifUIProvider>
  );
}
