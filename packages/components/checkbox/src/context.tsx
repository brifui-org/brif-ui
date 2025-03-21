"use client";

import { CheckboxVariantProps } from "@brifui/styled/recipes";
import React from "react";



export type CheckboxContextType = Pick<
  NonNullable<CheckboxVariantProps>,
  "size" | "indeterminate" | "error"
> & {
  id?: string;
  disabled?: boolean;
};
const CheckboxContext = React.createContext<CheckboxContextType>({});

export const useCheckboxVariant = () => React.useContext(CheckboxContext);

export const CheckboxProvider: React.FC<
  React.PropsWithChildren<CheckboxContextType>
> = ({ size, id, indeterminate, disabled, children, error }) => {
  return (
    <CheckboxContext.Provider
      value={{
        size,
        id,
        disabled,
        indeterminate,
        error
      }}
    >
      {children}
    </CheckboxContext.Provider>
  );
};
