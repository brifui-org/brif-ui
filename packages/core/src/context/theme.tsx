"use client";

import React from "react";
import type { BrifUIPluginConfig } from "@brifui/theme";

export type TBrifUIContext<
  Config extends BrifUIPluginConfig = BrifUIPluginConfig,
  Key extends string | number | symbol = keyof Config["themes"]
> = {
  themeConfig: Config;
  currentTheme: Key;
  setTheme: React.Dispatch<React.SetStateAction<Key>>;
};

export const BrifUIContext = React.createContext<TBrifUIContext | undefined>(
  undefined
);
