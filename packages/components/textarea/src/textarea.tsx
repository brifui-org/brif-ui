import React from "react";
import { css as _css, cx } from "@brifui/styled/css";
import { WithCssProps } from "@brifui/utils";

import { TextareaVariantProps, textareaVariants } from "./variants";

export type TextareaProps = WithCssProps<
  TextareaVariantProps & React.ComponentPropsWithRef<"textarea">
>;
export const Textarea: React.FC<TextareaProps> = ({
  css,
  size,
  className,
  error,
  ...props
}) => {
  const raw = textareaVariants.raw({ size, error });

  return (
    <textarea
      aria-invalid={error ? true : undefined}
      className={cx(_css(raw.root, css), className)}
      {...props}
    />
  );
};
