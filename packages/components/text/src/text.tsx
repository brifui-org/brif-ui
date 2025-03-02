import React from "react";
import { cx } from "@brifui/styled/css";

import { TextVariantProps, variants } from "./variants";

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLOrSVGElement>, "type"> {
  as?: React.ElementType;
}
export const Text: React.FC<TextProps & TextVariantProps> = ({
  as: Tag = "div",
  type,
  className,
  fontWeight,
  color,
  mono,
  ...props
}) => {
  return (
    <Tag
      className={cx(variants({ type, color, fontWeight, mono }), className)}
      {...props}
    />
  );
};
