"use client";

import React, { createContext, useContext } from "react";
import { RadioGroupVariantProps } from "@brifui/styled/recipes";

export type RadioGroupContextType = NonNullable<RadioGroupVariantProps>;

const RadioGroupContext = createContext<RadioGroupContextType>({});

export const RadioGroupProvider: React.FC<
  React.PropsWithChildren<NonNullable<RadioGroupVariantProps>>
> = ({ children, ...props }) => {
  return (
    <RadioGroupContext.Provider value={props}>
      {children}
    </RadioGroupContext.Provider>
  );
};

export const useRadioGroup = () => useContext(RadioGroupContext);
