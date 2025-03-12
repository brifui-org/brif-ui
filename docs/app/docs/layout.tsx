import React from "react";
import { BaseLayout } from "@/components/base-layout";
import { css } from "@brifui/styled/css";

export default function DocsLayout({
  children
}: {
  children?: React.ReactNode;
}) {
  return (
    <BaseLayout>
      <div
        className={css({
          overflow: "hidden"
        })}
      >
        {children}
      </div>
    </BaseLayout>
  );
}
