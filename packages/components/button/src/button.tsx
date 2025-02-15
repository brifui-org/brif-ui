import React from "react";
import { css, cx } from "@brifui/styled/css";
import { findChildrenByType } from "@brifui/utils";

import { ButtonVariantProps, buttonVariants } from "./variants";

const Prefix: React.FC<React.ComponentPropsWithRef<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cx(
        css({
          mr: "px"
        }),
        className
      )}
      {...props}
    />
  );
};

const Suffix: React.FC<React.ComponentPropsWithRef<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cx(
        css({
          ml: "px"
        }),
        className
      )}
      {...props}
    />
  );
};

export type ButtonProps = ButtonVariantProps &
  React.ComponentPropsWithRef<"button">;

export const Button: React.FC<ButtonProps> & {
  Prefix: typeof Prefix;
  Suffix: typeof Suffix;
} = ({ children, variant, size, ...props }) => {
  const [prefixes, suffixes, others] = findChildrenByType(
    children,
    Prefix,
    Suffix
  );

  return (
    <button
      className={buttonVariants({
        variant,
        size
      })}
      {...props}
    >
      {prefixes}
      <span className={css({ px: "1.5" })}>{others}</span>
      {suffixes}
    </button>
  );
};
Button.Prefix = Prefix;
Button.Suffix = Suffix;
