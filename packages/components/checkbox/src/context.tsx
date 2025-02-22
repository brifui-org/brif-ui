"use client";

import React from "react";

import { CheckBoxVariantProps } from "./variants";

export type CheckboxContextType = Pick<
  NonNullable<CheckBoxVariantProps>,
  "size" | "indeterminate"
> & {
  id?: string;
  disabled?: boolean;
};
const CheckboxContext = React.createContext<CheckboxContextType>({});

export const useCheckboxVariant = () => React.useContext(CheckboxContext);

export const CheckboxProvider: React.FC<
  React.PropsWithChildren & CheckboxContextType
> = ({ size, id, indeterminate, disabled, children }) => {
  return (
    <CheckboxContext.Provider
      value={{
        size,
        id,
        disabled,
        indeterminate
      }}
    >
      {children}
    </CheckboxContext.Provider>
  );
};
