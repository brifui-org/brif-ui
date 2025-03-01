"use client";

import { PropsWithChildren } from "react";

import { MenuProvider } from "./menu-context";

export const Providers = ({ children }: PropsWithChildren) => {
  return <MenuProvider>{children}</MenuProvider>;
};
