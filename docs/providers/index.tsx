"use client";

import { theme } from "@/theme";
import { Provider as BrifUIProvider } from "@brifui/components";

export function Provider({ children }: { children?: React.ReactNode }) {
  return (
    <BrifUIProvider themeConfig={theme}>
      <html lang="en" className="light">
        {children}
      </html>
    </BrifUIProvider>
  );
}
