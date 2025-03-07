import React from "react";
import { css as _css, cx } from "@brifui/styled/css";
import { WithCssProps } from "@brifui/utils";

import { SpinnerVariantProps, spinnerVariants } from "./variants";

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
      className={cx(
        _css(spinnerVariants.raw({ size }).spinner, css),
        className
      )}
      {...props}
    />
  );
};
