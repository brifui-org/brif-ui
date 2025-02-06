"use client";

import React, { useCallback, useContext } from "react";
import { BrifUIContext, TBrifUIContext } from "@brifui/core";
import type { BrifUIThemeConfig, BrifUIThemeKey } from "@brifui/theme/types";

export const Provider = <T extends BrifUIThemeConfig>({
  themeConfig,
  children = () => null,
  defaultTheme = "light"
}: {
  children?:
    | ((currentTheme: BrifUIThemeKey) => React.ReactNode)
    | React.ReactNode;
  defaultTheme?: BrifUIThemeKey;
  themeConfig: T;
}) => {
  const [currentTheme, setTheme] = React.useState<BrifUIThemeKey>(defaultTheme);

  const resolveSysColor = useCallback<TBrifUIContext["resolveSysColor"]>(
    (colorName) => (state) => {
      if (state.includes("DEFAULT")) {
        return `hsl(var(--brif-sys-color-${colorName.split(".").join("-")}))`;
      }
      return `hsl(var(--brif-sys-color-${colorName.split(".").join("-")}-${state}))`;
    },
    []
  );

  return (
    <BrifUIContext.Provider
      value={{
        themeConfig,
        currentTheme,
        setTheme,
        resolveSysColor,
        defaultColor: "default"
      }}
    >
      {typeof children === "function" ? children(currentTheme) : children}
    </BrifUIContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(BrifUIContext);
  if (!context) {
    throw new Error("useTheme must be used within a BrifUIProvider");
  }

  return context as unknown as TBrifUIContext<BrifUIThemeKey>;
};
