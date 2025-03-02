"use client";

import React, { createContext, useContext } from "react";

import { TableVariantProps } from "./variants";

export type TableContextType = NonNullable<TableVariantProps>;

const TableContext = createContext<TableContextType>({});

export const TableProvider: React.FC<
  React.PropsWithChildren<TableContextType>
> = ({ children, ...props }) => {
  return (
    <TableContext.Provider value={props}>{children}</TableContext.Provider>
  );
};

export const useTableStyles = () => useContext(TableContext);
