"use client";

import React, { useContext } from "react";
import { BrifUIContext, TBrifUIContext } from "@brifui/core";
import { RequiredBrifUIPluginConfig } from "@brifui/theme";

export const Provider = <T extends RequiredBrifUIPluginConfig>({
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

  return (
    <BrifUIContext.Provider
      value={{
        currentTheme,
        setTheme
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
