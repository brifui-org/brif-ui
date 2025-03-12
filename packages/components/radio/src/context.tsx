"use client";

import React, { createContext, useContext } from "react";

import { RadioVariantProps } from "./variants";

export type RadioGroupContextType = NonNullable<RadioVariantProps>;

const RadioGroupContext = createContext<RadioGroupContextType>({});

export const RadioGroupProvider: React.FC<
  React.PropsWithChildren<NonNullable<RadioVariantProps>>
> = ({ children, ...props }) => {
  return (
    <RadioGroupContext.Provider value={props}>
      {children}
    </RadioGroupContext.Provider>
  );
};

export const useRadioGroup = () => useContext(RadioGroupContext);
