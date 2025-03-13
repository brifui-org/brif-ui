"use client";

import React from "react";
import { CheckIcon, MinusIcon } from "lucide-react";
import { Checkbox as BaseCheckbox } from "radix-ui";
import { css as _css, cx } from "@brifui/styled/css";
import { findChildrenByType, WithCssProps } from "@brifui/utils";

import { CheckboxProvider, useCheckboxVariant } from "./context";
import { CheckBoxVariantProps, checkboxVariants } from "./variants";

export type CheckboxIndicatorProps =
  WithCssProps<BaseCheckbox.CheckboxIndicatorProps>;
const Indicator: React.FC<CheckboxIndicatorProps> = ({
  css,
  children,
  className,
  ...props
}) => {
  const { id, indeterminate, error } = useCheckboxVariant();

  return (
    <BaseCheckbox.Indicator
      id={id}
      aria-invalid={error}
      className={cx(_css(css), className)}
      {...props}
    >
      {!children && !!indeterminate && <MinusIcon color="currentColor" />}
      {!children && !indeterminate && <CheckIcon color="currentColor" />}
      {!!children && children}
    </BaseCheckbox.Indicator>
  );
};

export type CheckboxLabelProps = WithCssProps<
  React.ComponentPropsWithRef<"label">
>;
const Label: React.FC<CheckboxLabelProps> = ({ css, className, ...props }) => {
  const { id, size, indeterminate, disabled, error } = useCheckboxVariant();

  const raw = checkboxVariants.raw({
    size,
    error,
    indeterminate
  });

  return (
    <label
      data-disabled={disabled ? "" : undefined}
      htmlFor={id}
      className={cx(_css(raw.label, css), className)}
      {...props}
    />
  );
};

export type CheckboxProps = WithCssProps<
  CheckBoxVariantProps &
    Omit<BaseCheckbox.CheckboxProps, keyof CheckBoxVariantProps>
>;

export const Checkbox: React.FC<CheckboxProps> & {
  Indicator: typeof Indicator;
  Label: typeof Label;
} = ({
  id,
  css,
  size,
  className,
  children,
  checked,
  disabled,
  error,
  ...props
}) => {
  const [indicators, labels] = findChildrenByType(children, Indicator, Label);

  const raw = checkboxVariants.raw({
    size,
    error,
    indeterminate: checked === "indeterminate"
  });

  return (
    <CheckboxProvider
      error={error}
      size={size}
      indeterminate={checked === "indeterminate"}
      id={id}
      disabled={disabled}
    >
      <div
        aria-invalid={error}
        data-disabled={disabled ? "" : undefined}
        className={cx(_css(raw.root, css), "group", className)}
      >
        <BaseCheckbox.Root
          id={id}
          checked={checked}
          disabled={disabled}
          className={cx(_css(raw.indicator))}
          {...props}
        >
          {indicators}
        </BaseCheckbox.Root>
        {labels}
      </div>
    </CheckboxProvider>
  );
};
Checkbox.Indicator = Indicator;
Checkbox.Label = Label;
