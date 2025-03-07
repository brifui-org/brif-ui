import React from "react";
import { Toaster } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { Header } from "./header";

export const BaseLayout: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => {
  return (
    <div
      className={css({
        mx: "auto",
        w: "100%",
        maxW: "1280px",
        minH: "screen",
        display: "flex",
        flexDir: "column",
        borderXWidth: "1px",
        borderStyle: "solid",
        borderColor: "border",
        position: "relative"
      })}
    >
      <Header />
      <main
        className={css({ flex: 1, display: "flex", flexDirection: "column" })}
      >
        {children}
        <Toaster />
      </main>
    </div>
  );
};
