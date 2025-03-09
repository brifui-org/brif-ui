import React from "react";
import { css as _css, cx } from "@brifui/styled/css";
import { WithCssProps } from "@brifui/utils";

import { TextVariantProps, variants } from "./variants";

export type TextProps<T extends React.ElementType> = WithCssProps<
  React.ComponentProps<T> & {
    as?: T;
  } & TextVariantProps
>;

export function Text<T extends React.ElementType = "span">({
  as: Tag = "span",
  css,
  type,
  className,
  fontWeight,
  color,
  mono,
  ...props
}: TextProps<T>) {
  return (
    <Tag
      className={cx(
        _css(variants.raw({ type, color, fontWeight, mono }), css),
        className
      )}
      {...props}
    />
  );
}
