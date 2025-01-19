"use client";

import React, { useContext } from "react";
import type { BrifUIPluginConfig } from "@brifui/theme";

type Theme<Config extends BrifUIPluginConfig> = keyof Config["themes"];

export type BrifUIContext<
  Config extends BrifUIPluginConfig = BrifUIPluginConfig
> = {
  themeConfig: Config;
  currentTheme: Theme<Config>;
  setTheme: React.Dispatch<React.SetStateAction<Theme<Config>>>;
};

const BrifUIContext = React.createContext<BrifUIContext | undefined>(undefined);

export const Provider = <Config extends BrifUIPluginConfig>({
  themeConfig,
  children = () => null,
  defaultTheme = "light" as Theme<Config>
}: {
  themeConfig: Config;
  children?: (currentTheme: Theme<Config>) => React.ReactNode;
  defaultTheme?: Theme<Config>;
}) => {
  const [currentTheme, setTheme] = React.useState<Theme<Config>>(defaultTheme);

  if (!themeConfig) {
    return null;
  }

  return (
    <BrifUIContext.Provider
      value={{
        themeConfig,
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

  return context;
};
