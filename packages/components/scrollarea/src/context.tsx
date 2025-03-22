"use client";

import React, { createContext, useContext } from "react";
import { ScrollareaVariantProps } from "@brifui/styled/recipes";

export type ScrollAreaContextType = NonNullable<ScrollareaVariantProps>;

const ScrollAreaContext = createContext<ScrollAreaContextType>({});

export const ScrollAreaProvider: React.FC<
  React.PropsWithChildren<ScrollAreaContextType>
> = ({ children, ...props }) => {
  return (
    <ScrollAreaContext.Provider value={props}>
      {children}
    </ScrollAreaContext.Provider>
  );
};

export const useScrollArea = () => useContext(ScrollAreaContext);
