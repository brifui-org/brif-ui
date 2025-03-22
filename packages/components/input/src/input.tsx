import React from "react";
import { css as _css, cx } from "@brifui/styled/css";
import { input, InputVariantProps } from "@brifui/styled/recipes";
import { findChildrenByType, WithCssProps } from "@brifui/utils";

export type InputProps = WithCssProps<
  InputVariantProps & Omit<React.ComponentPropsWithRef<"input">, "size">
>;

const Prefix: React.FC<
  WithCssProps<
    React.ComponentPropsWithRef<"div"> & {
      size?: InputProps["size"];
      bordered?: InputProps["bordered"];
    }
  >
> = ({ css, bordered, className, size, ...props }) => {
  return (
    <div
      className={cx(input({ size, bordered }).prefix, _css(css), className)}
      {...props}
    />
  );
};

const Suffix: React.FC<
  WithCssProps<
    React.ComponentPropsWithRef<"div"> & { size?: InputProps["size"] }
  >
> = ({ css, className, size, ...props }) => {
  return (
    <div
      className={cx(input({ size }).suffix, _css(css), className)}
      {...props}
    />
  );
};

export const Input: React.FC<Omit<InputProps, "bordered">> & {
  Prefix: typeof Prefix;
  Suffix: typeof Suffix;
} = ({ css, size, className, children, error, ...props }) => {
  const [prefixes, suffixes] = findChildrenByType(children, Prefix, Suffix);

  const hasPrefix = !!prefixes?.length;
  const hasSuffix = !!suffixes?.length;

  const classes = input({ size, hasPrefix, hasSuffix, error });

  return (
    <div
      aria-invalid={!!error}
      className={cx(classes.root, _css(css), className)}
    >
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
