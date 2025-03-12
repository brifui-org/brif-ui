import React from "react";
import { CircleIcon } from "lucide-react";
import { RadioGroup as BaseRadioGroup } from "radix-ui";
import { css as _css, cx } from "@brifui/styled/css";
import { findChildrenByType, WithCssProps } from "@brifui/utils";

import { RadioGroupProvider, useRadioGroup } from "./context";
import { RadioVariantProps, radioVariants } from "./variants";

export type RadioLabelProps = WithCssProps<
  React.ComponentPropsWithRef<"label">
>;
const Label: React.FC<RadioLabelProps> = ({
  css,
  className,
  children,
  ...props
}) => {
  const { size, error } = useRadioGroup();
  const raw = radioVariants.raw({ size, error });

  return (
    <label className={cx(_css(raw.label, css), className)} {...props}>
      {children}
    </label>
  );
};

export type RadioIndicatorProps =
  WithCssProps<BaseRadioGroup.RadioGroupIndicatorProps>;
const Indicator: React.FC<RadioIndicatorProps> = ({
  css,
  className,
  children,
  ...props
}) => {
  const { size, error } = useRadioGroup();
  const raw = radioVariants.raw({ size, error });

  return (
    <BaseRadioGroup.Indicator
      aria-invalid={error}
      className={cx(_css(raw.indicator, css), className)}
      {...props}
    >
      <CircleIcon />
      {children}
    </BaseRadioGroup.Indicator>
  );
};

export type RadioItemProps = WithCssProps<BaseRadioGroup.RadioGroupItemProps>;
const Item: React.FC<RadioItemProps> = ({
  css,
  className,
  children,
  ...props
}) => {
  const { size, error } = useRadioGroup();
  const raw = radioVariants.raw({ size, error });
  const [indicators, labels] = findChildrenByType(children, Indicator, Label);

  return (
    <div className={cx(_css(raw.itemContainer, css), className)}>
      <BaseRadioGroup.Item
        aria-invalid={error}
        className={cx(_css(raw.item, css))}
        {...props}
      >
        {indicators}
      </BaseRadioGroup.Item>
      {labels}
    </div>
  );
};

export type RadioProps = WithCssProps<
  RadioVariantProps & BaseRadioGroup.RadioGroupProps
>;
const Root: React.FC<RadioProps> = ({
  css,
  className,
  children,
  size,
  error,
  ...props
}) => {
  const raw = radioVariants.raw({ error, size });
  const [items] = findChildrenByType(children, Item);

  return (
    <RadioGroupProvider size={size} error={error}>
      <BaseRadioGroup.Root
        className={cx(_css(raw.root, css), className)}
        {...props}
      >
        {items}
      </BaseRadioGroup.Root>
    </RadioGroupProvider>
  );
};

export const RadioGroup = {
  Root,
  Item,
  Indicator,
  Label
};
