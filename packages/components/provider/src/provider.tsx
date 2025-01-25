"use client";

import React, { useContext } from "react";
import { BrifUIContext, TBrifUIContext } from "@brifui/core";

export const Provider = ({
  children = () => null,
  defaultTheme = "light"
}: {
  children?: (currentTheme: BrifUIThemeKey) => React.ReactNode;
  defaultTheme?: BrifUIThemeKey;
}) => {
  const [currentTheme, setTheme] = React.useState<BrifUIThemeKey>(defaultTheme);

  return (
    <BrifUIContext.Provider
      value={{
        currentTheme,
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

  return context as unknown as TBrifUIContext<BrifUIThemeKey>;
};
