"use client";

import { PropsWithChildren } from "react";
import { Tooltip } from "@brifui/components";

import { MenuProvider } from "./menu-context";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <MenuProvider>
      <Tooltip.Provider>{children}</Tooltip.Provider>
    </MenuProvider>
  );
};
