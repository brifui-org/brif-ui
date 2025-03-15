"use client";

import React, { createContext, useContext } from "react";

import { AlertVariantProps } from "./variants";

export type AlertContextType = NonNullable<AlertVariantProps>;
export const AlertContext = createContext<AlertContextType>({});

export const AlertProvider: React.FC<
  React.PropsWithChildren<AlertContextType>
> = ({ children, ...props }) => {
  return (
    <AlertContext.Provider value={props}>{children}</AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
