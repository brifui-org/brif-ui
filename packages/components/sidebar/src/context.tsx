"use client";

import React, { createContext, useContext, useState } from "react";

import { SidebarVariantProps } from "./variants";

export type SidebarContextStylesType = NonNullable<SidebarVariantProps>;

export type SidebarContextType = SidebarContextStylesType & {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: true,
  setOpen: () => void 0
});

export const SideBarProvider: React.FC<
  SidebarContextStylesType & {
    children?: (
      props: Omit<SidebarContextType, keyof SidebarContextStylesType>
    ) => React.ReactNode;
  }
> = ({ children = () => null }) => {
  const [isOpen, setOpen] = useState<boolean>(true);

  return (
    <SidebarContext.Provider value={{ isOpen, setOpen }}>
      {children({
        isOpen,
        setOpen
      })}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () =>
  useContext(SidebarContext) as Omit<
    SidebarContextType,
    keyof SidebarContextStylesType
  >;
