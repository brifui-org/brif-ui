import React from "react";
import { ScrollArea, Toaster } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { Header } from "./header";
import { Menu } from "./menu";

export const BaseLayout: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => {
  return (
    <ScrollArea.Root
      css={css.raw({
        minHeight: "100vh",
        maxHeight: "100svh"
      })}
    >
      <div
        className={css({
          mx: "auto",
          w: "100%",
          maxW: "container.xl",
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
        })}
      >
        <Menu />
        <div
          className={css({
            flex: 1,
            display: "flex",
            flexDirection: "column",
            width: "100%"
          })}
        >
          <Header alwaysShow={false} />
          <main
            className={css({
              maxW: "screen",
              ml: {
                base: "0",
                lg: "250px"
              }
            })}
          >
            {children}
            <Toaster />
          </main>
        </div>
      </div>
    </ScrollArea.Root>
  );
};
