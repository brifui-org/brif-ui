import React, { createContext, useContext } from "react";

import { SidebarVariantProps } from "./variants";

export type SidebarContextType = NonNullable<SidebarVariantProps>;

export const SidebarContext = createContext<SidebarContextType>({});

export const SideBarProvider: React.FC<
  React.PropsWithChildren<SidebarContextType>
> = ({ children }) => {
  return (
    <SidebarContext.Provider value={{}}>{children}</SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
