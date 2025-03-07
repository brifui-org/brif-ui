import React from "react";
import { css as _css, cx } from "@brifui/styled/css";
import { findChildrenByType, WithCssProps } from "@brifui/utils";

import { InputVariantProps, inputVariants } from "./variants";

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
      className={cx(
        _css(inputVariants.raw({ size, bordered }).prefix, css),
        className
      )}
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
      className={cx(_css(inputVariants.raw({ size }).suffix, css), className)}
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

  const raw = inputVariants.raw({ size, hasPrefix, hasSuffix, error });

  return (
    <div aria-invalid={error} className={cx(_css(raw.root, css), className)}>
      {prefixes?.map((prefix, idx) =>
        React.cloneElement(prefix, {
          key: idx,
          size
        })
      )}
      <input className={_css(raw.input)} {...props} />
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
