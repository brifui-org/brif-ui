"use client";

import React, { createContext, useContext } from "react";

import { DialogVariantProps } from "./variants";

export type DialogContextType = NonNullable<DialogVariantProps>;
export const DialogContext = createContext<DialogContextType>({});

export const DialogProvider: React.FC<
  React.PropsWithChildren<DialogContextType>
> = ({ children, ...props }) => {
  return (
    <DialogContext.Provider value={props}>{children}</DialogContext.Provider>
  );
};

export const useDialog = () => useContext(DialogContext);
