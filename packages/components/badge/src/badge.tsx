import React from "react";
import { css as _css, cx } from "@brifui/styled/css";
import { WithCssProps } from "@brifui/utils";

import { BadgeVariantProps, badgeVariants } from "./variants";

export type BadgeProps = WithCssProps<
  BadgeVariantProps & React.ComponentPropsWithRef<"div">
>;
export const Badge: React.FC<BadgeProps> = ({
  css,
  className,
  size,
  children,
  ...props
}) => {
  const raw = badgeVariants.raw({ size });

  return (
    <div className={cx(_css(raw.root, css), className)} {...props}>
      <span className={_css(raw.label)}>{children}</span>
    </div>
  );
};
