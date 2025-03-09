"use client";

import React, { createContext, useContext } from "react";

import { SwitchVariantProps } from "./variants";

export type SwitchContextType = NonNullable<SwitchVariantProps>;

const SwitchContext = createContext<SwitchContextType>({});

export const SwitchProvider: React.FC<
  React.PropsWithChildren & NonNullable<SwitchVariantProps>
> = ({ size, children }) => {
  return (
    <SwitchContext.Provider
      value={{
        size
      }}
    >
      {children}
    </SwitchContext.Provider>
  );
};

export const useSwitch = () => useContext(SwitchContext);
