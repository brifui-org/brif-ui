import React from "react";
import { ScrollArea, Toaster } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { Header } from "./header";
import { Menu } from "./menu";

const scrollAreaStyles = css.raw({
  minHeight: "100vh",
  maxHeight: "100svh"
});

const containerStyles = css({
  mx: "auto",
  w: "100%",
  maxW: "container.xl",
  minH: "100svh",
  display: "flex",
  position: "relative",
  borderLeft: {
    base: "none",
    lg: "2px solid {colors.border}"
  },
  borderRight: {
    base: "none",
    lg: "2px solid {colors.border}"
  }
});

const contentStyles = css({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  width: "100%"
});

const mainStyles = css({
  maxW: "screen",
  ml: {
    base: "0",
    lg: "250px"
  }
});

export const BaseLayout: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => {
  return (
    <ScrollArea.Root css={scrollAreaStyles}>
      <div className={containerStyles}>
        <Menu />
        <div className={contentStyles}>
          <Header alwaysShow={false} />
          <main className={mainStyles}>
            {children}
            <Toaster />
          </main>
        </div>
      </div>
    </ScrollArea.Root>
  );
};
