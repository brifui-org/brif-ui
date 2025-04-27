import React from "react";
import { css as _css, cx } from "@brifui/styled/css";
import { spinner, SpinnerVariantProps } from "@brifui/styled/recipes";
import { WithCssProps } from "@brifui/utils";

export type SpinnerProps = WithCssProps<
  SpinnerVariantProps & React.ComponentPropsWithRef<"div">
>;
export const Spinner: React.FC<SpinnerProps> = ({
  css,
  className,
  size,
  ...props
}) => {
  return (
    <div
      className={cx(spinner({ size }).spinner, _css(css), className)}
      {...props}
    />
  );
};
