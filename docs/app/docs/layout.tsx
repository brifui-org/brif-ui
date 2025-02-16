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
        gridTemplateColumns: "auto 1fr"
      })}
    >
      <Menu
        className={css({ borderRight: "1px solid {colors.border}" })}
      ></Menu>
      <div>{children}</div>
    </div>
  );
}
