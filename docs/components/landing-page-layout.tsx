import React from "react";
import { Toaster } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { Header } from "./header";

export const LandingPageLayout: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => {
  return (
    <div
      className={css({
        mx: "auto",
        maxW: "container.xl",
        minH: "100svh",
        display: "flex",
        flexDir: "column",
        borderLeft: {
          base: "none",
          lg: "2px solid {colors.border}"
        },
        borderRight: {
          base: "none",
          lg: "2px solid {colors.border}"
        },
        position: "relative"
      })}
    >
      <Header />
      <main
        className={css({
          flex: 1,
          display: "flex",
          flexDirection: "column"
        })}
      >
        {children}
        <Toaster />
      </main>
    </div>
  );
};
