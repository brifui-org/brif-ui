"use client";

import React from "react";

export type TBrifUIContext<
  Key extends string | number | symbol = BrifUIThemeKey
> = {
  currentTheme: Key;
  setTheme: React.Dispatch<React.SetStateAction<Key>>;
};

export const BrifUIContext = React.createContext<TBrifUIContext | undefined>(
  undefined
);
