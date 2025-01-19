"use client";

import { themeConfig } from "~brifui/theme-config";
import { Provider as BrifUIProvider } from "@brifui/components";

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
