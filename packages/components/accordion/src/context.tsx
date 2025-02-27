"use client";

import React, { createContext, useContext } from "react";

import { AccordionVariantProps } from "./variants";

export const AccordionContext = createContext<
  NonNullable<AccordionVariantProps>
>({});

export const AccordionProvider: React.FC<
  React.PropsWithChildren<AccordionVariantProps>
> = ({ children, ...props }) => {
  return (
    <AccordionContext.Provider value={props}>
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordion = () => useContext(AccordionContext);
