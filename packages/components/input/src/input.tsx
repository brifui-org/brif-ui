import React from "react";
import { cx } from "@brifui/styled/css";
import { findChildrenByType } from "@brifui/utils";

import { InputVariantProps, inputVariants } from "./variants";

export type InputProps = InputVariantProps &
  Omit<React.ComponentPropsWithRef<"input">, "size">;

const Prefix: React.FC<
  React.ComponentPropsWithRef<"div"> & {
    size?: InputProps["size"];
    bordered?: InputProps["bordered"];
  }
> = ({ bordered, className, size, ...props }) => {
  return (
    <div
      className={cx(inputVariants({ size, bordered }).prefix, className)}
      {...props}
    />
  );
};

const Suffix: React.FC<
  React.ComponentPropsWithRef<"div"> & { size?: InputProps["size"] }
> = ({ className, size, ...props }) => {
  return (
    <div className={cx(inputVariants({ size }).suffix, className)} {...props} />
  );
};

export const Input: React.FC<Omit<InputProps, "bordered">> & {
  Prefix: typeof Prefix;
  Suffix: typeof Suffix;
} = ({ size, className, children, error, ...props }) => {
  const [prefixes, suffixes] = findChildrenByType(children, Prefix, Suffix);

  const hasPrefix = !!prefixes?.length;
  const hasSuffix = !!suffixes?.length;

  const classes = inputVariants({ size, hasPrefix, hasSuffix, error });

  return (
    <div aria-invalid={error} className={cx(classes.root, className)}>
      {prefixes?.map((prefix, idx) =>
        React.cloneElement(prefix, {
          key: idx,
          size
        })
      )}
      <input className={classes.input} {...props} />
      {suffixes?.map((suffix, idx) =>
        React.cloneElement(suffix, {
          key: idx,
          size
        })
      )}
    </div>
  );
};
Input.Prefix = Prefix;
Input.Suffix = Suffix;
