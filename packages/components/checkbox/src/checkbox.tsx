"use client";

import React from "react";
import { CheckIcon, MinusIcon } from "lucide-react";
import { Checkbox as BaseCheckbox } from "radix-ui";
import { cx } from "@brifui/styled/css";
import { findChildrenByType } from "@brifui/utils";

import { CheckboxProvider, useCheckboxVariant } from "./context";
import { CheckBoxVariantProps, checkboxVariants } from "./variants";

export type CheckboxIndicatorProps = BaseCheckbox.CheckboxIndicatorProps;
const Indicator: React.FC<CheckboxIndicatorProps> = ({
  children,
  ...props
}) => {
  const { id, indeterminate } = useCheckboxVariant();

  return (
    <BaseCheckbox.Indicator id={id} {...props}>
      {!children && !!indeterminate && <MinusIcon color="currentColor" />}
      {!children && !indeterminate && <CheckIcon color="currentColor" />}
      {!!children && children}
    </BaseCheckbox.Indicator>
  );
};

export type CheckboxLabelProps = React.ComponentPropsWithRef<"label">;
const Label: React.FC<CheckboxIndicatorProps> = ({ className, ...props }) => {
  const { id, size, indeterminate, disabled } = useCheckboxVariant();

  const classes = checkboxVariants({
    size,
    indeterminate
  });

  return (
    <label
      data-disabled={disabled ? "" : undefined}
      htmlFor={id}
      className={cx(classes.label, className)}
      {...props}
    />
  );
};

export type CheckboxProps = CheckBoxVariantProps &
  Omit<BaseCheckbox.CheckboxProps, keyof CheckBoxVariantProps>;

export const Checkbox: React.FC<CheckboxProps> & {
  Indicator: typeof Indicator;
  Label: typeof Label;
} = ({ id, size, className, children, checked, disabled, ...props }) => {
  const [indicators, labels] = findChildrenByType(children, Indicator, Label);

  const classes = checkboxVariants({
    size,
    indeterminate: checked === "indeterminate"
  });

  return (
    <CheckboxProvider
      size={size}
      indeterminate={checked === "indeterminate"}
      id={id}
      disabled={disabled}
    >
      <div
        data-disabled={disabled ? "" : undefined}
        className={cx(classes.root, "group", className)}
      >
        <BaseCheckbox.Root
          id={id}
          checked={checked}
          disabled={disabled}
          className={cx(classes.indicator, className)}
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
