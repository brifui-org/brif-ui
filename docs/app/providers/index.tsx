"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Tooltip } from "@brifui/components";

import { MenuProvider } from "./menu-context";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <MenuProvider>
      <Tooltip.Provider>
        <NextThemesProvider
          enableSystem
          disableTransitionOnChange
          defaultTheme="light"
          attribute="data-panda-theme"
        >
          {children}
        </NextThemesProvider>
      </Tooltip.Provider>
    </MenuProvider>
  );
};
