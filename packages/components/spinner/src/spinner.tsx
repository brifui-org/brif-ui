import React from "react";
import { cx } from "@brifui/styled/css";

import { SpinnerVariantProps, spinnerVariants } from "./variants";

export type SpinnerProps = SpinnerVariantProps &
  React.ComponentPropsWithRef<"div">;
export const Spinner: React.FC<SpinnerProps> = ({
  className,
  size,
  ...props
}) => {
  return (
    <div
      className={cx(spinnerVariants({ size }).spinner, className)}
      {...props}
    />
  );
};
