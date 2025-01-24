"use client";

import { Provider as BrifUIProvider } from "@brifui/components";

export function Provider({ children }: { children?: React.ReactNode }) {
  return (
    <BrifUIProvider defaultTheme="light">
      {(currentTheme) => (
        <html lang="en" className={currentTheme}>
          {children}
        </html>
      )}
    </BrifUIProvider>
  );
}
