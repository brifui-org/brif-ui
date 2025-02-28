"use client";

import React, { createContext, useContext } from "react";

import { FormVariantProps } from "./variants";

export const FormContext = createContext<NonNullable<FormVariantProps>>({});

export const FormProvider: React.FC<
  React.PropsWithChildren<FormVariantProps>
> = ({ children, ...props }) => {
  return <FormContext.Provider value={props}>{children}</FormContext.Provider>;
};

export const useFormStyles = () => useContext(FormContext);
