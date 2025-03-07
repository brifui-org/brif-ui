import React from "react";
import { css as _css, cx } from "@brifui/styled/css";
import { WithCssProps } from "@brifui/utils";

import { TextVariantProps, variants } from "./variants";

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLOrSVGElement>, "type"> {
  as?: React.ElementType;
}
export const Text: React.FC<WithCssProps<TextProps & TextVariantProps>> = ({
  as: Tag = "div",
  css,
  type,
  className,
  fontWeight,
  color,
  mono,
  ...props
}) => {
  return (
    <Tag
      className={cx(
        _css(variants.raw({ type, color, fontWeight, mono }), css),
        className
      )}
      {...props}
    />
  );
};
