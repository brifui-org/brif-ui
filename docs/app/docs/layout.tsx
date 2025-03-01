import React from "react";
import { Menu } from "@/components/menu";
import { css } from "@brifui/styled/css";

export default function DocsLayout({
  children
}: {
  children?: React.ReactNode;
}) {
  return (
    <div
      className={css({
        flex: 1,
        display: "grid",
        gridTemplateColumns: {
          base: "1fr",
          lg: "auto 1fr"
        }
      })}
    >
      <Menu />
      <div
        className={css({
          overflow: "hidden"
        })}
      >
        {children}
      </div>
    </div>
  );
}
