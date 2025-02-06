"use client";

import React from "react";
import {
  SysBackgroundColor,
  SysBorderColor,
  SysColor,
  SysForegroundColor
} from "@brifui/theme";
import {
  BrifUIThemeConfig,
  BrifUIThemeKey,
  ComponentColor
} from "@brifui/theme/types";

export type TBrifUIContext<
  Key extends string | number | symbol = BrifUIThemeKey
> = {
  themeConfig: BrifUIThemeConfig;
  currentTheme: Key;
  setTheme: React.Dispatch<React.SetStateAction<Key>>;
  resolveSysColor: (
    colorName: ComponentColor
  ) => (
    state:
      | keyof SysBackgroundColor
      | keyof SysForegroundColor
      | keyof SysBorderColor
      | keyof SysColor
  ) => string;
  defaultColor: keyof BrifUIThemeConfig["base"]["colors"]["sys"];
};

export const BrifUIContext = React.createContext<TBrifUIContext | undefined>(
  undefined
);
