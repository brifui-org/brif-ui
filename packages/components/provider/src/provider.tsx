"use client";

import React, { useContext, useMemo } from "react";
import { BrifUIContext, TBrifUIContext } from "@brifui/core";
import type { BrifUIPluginConfig } from "@brifui/theme";

type Theme<Config extends BrifUIPluginConfig = BrifUIPluginConfig> =
  keyof Config["themes"];

export const Provider = <Config extends BrifUIPluginConfig>({
  children = () => null,
  defaultTheme = "light" as Theme<Config>
}: {
  children?: (currentTheme: Theme<Config>) => React.ReactNode;
  defaultTheme?: Theme<Config>;
}) => {
  const [currentTheme, setTheme] = React.useState<Theme<Config>>(defaultTheme);
  const themeConfig = useMemo(() => {
    const config = require('../.brifui/theme.ts')
  }, [])

  return (
    <BrifUIContext.Provider
      value={{
        // themeConfig,
        // @ts-expect-error
        currentTheme,
        // @ts-expect-error
        setTheme
      }}
    >
      {children(currentTheme)}
    </BrifUIContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(BrifUIContext);
  if (!context) {
    throw new Error("useTheme must be used within a BrifUIProvider");
  }

  return context as unknown as TBrifUIContext<
    BrifUIPluginConfig,
    BrifUIThemeKey
  >;
};
