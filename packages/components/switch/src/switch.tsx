"use client";

import React from "react";
import { Switch as BaseSwitch } from "radix-ui";
import { css as _css, cx } from "@brifui/styled/css";
import { WithCssProps } from "@brifui/utils";

import { SwitchProvider, useSwitch } from "./context";
import { SwitchVariantProps, switchVariants } from "./variants";

export type SwitchThumbProps = WithCssProps<BaseSwitch.SwitchThumbProps>;
const Thumb: React.FC<SwitchThumbProps> = ({ css, className, ...props }) => {
  const { size, error } = useSwitch();
  const raw = switchVariants.raw({ size, error });

  return (
    <BaseSwitch.Thumb
      className={cx(_css(raw.thumb, css), className)}
      {...props}
    />
  );
};

export type SwitchProps = WithCssProps<
  SwitchVariantProps & Omit<BaseSwitch.SwitchProps, "size">
>;
const Root: React.FC<SwitchProps> = ({
  css,
  className,
  size,
  error,
  ...props
}) => {
  const raw = switchVariants.raw({ size, error });

  return (
    <SwitchProvider size={size} error={error}>
      <BaseSwitch.Root
        className={cx(_css(raw.root, css), className)}
        {...props}
      />
    </SwitchProvider>
  );
};

export const Switch = {
  Root,
  Thumb
};
