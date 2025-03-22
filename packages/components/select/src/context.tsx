"use client";

import React from "react";
import { SelectVariantProps } from "@brifui/styled/recipes";

export type SelectContextType = Pick<
  NonNullable<SelectVariantProps>,
  "size" | "error"
>;
const SelectContext = React.createContext<SelectContextType>({});

export const useSelectVariant = () => React.useContext(SelectContext);

export const SelectProvider: React.FC<
  React.PropsWithChildren & SelectVariantProps
> = ({ size, error, children }) => {
  return (
    <SelectContext.Provider
      value={{
        size,
        error
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};
