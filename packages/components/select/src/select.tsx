"use client";

import React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Select as BaseSelect } from "radix-ui";
import { Button, ButtonProps } from "@brifui/button";
import { css as _css, cx } from "@brifui/styled/css";
import { select, SelectVariantProps } from "@brifui/styled/recipes";
import { findChildrenByType, WithCssProps } from "@brifui/utils";

import { SelectProvider, useSelectVariant } from "./context";

export type SelectValueProps = WithCssProps<BaseSelect.SelectValueProps>;
const Value: React.FC<SelectValueProps> = ({ css, className, ...props }) => {
  return <BaseSelect.Value className={cx(_css(css), className)} {...props} />;
};

export type SelectIconProps = WithCssProps<BaseSelect.SelectIconProps>;
const Icon: React.FC<SelectIconProps> = ({ css, className, ...props }) => {
  return <BaseSelect.Icon className={cx(_css(css), className)} {...props} />;
};

export type SelectLabelProps = WithCssProps<BaseSelect.SelectLabelProps>;
const Label: React.FC<SelectLabelProps> = ({ css, className, ...props }) => {
  return <BaseSelect.Label className={cx(_css(css), className)} {...props} />;
};

export type SelectGroupProps = WithCssProps<BaseSelect.SelectGroupProps>;
const Group: React.FC<SelectGroupProps> = ({ css, className, ...props }) => {
  return <BaseSelect.Group className={cx(_css(css), className)} {...props} />;
};

export type SelectItemProps = WithCssProps<BaseSelect.SelectItemProps>;
const Item: React.FC<SelectItemProps> = ({ css, className, ...props }) => {
  const variants = useSelectVariant();
  const classes = select(variants);
  return (
    <BaseSelect.Item
      className={cx(classes.item, _css(css), className)}
      {...props}
    />
  );
};

export type SelectItemTextProps = WithCssProps<BaseSelect.SelectItemTextProps>;
const ItemText: React.FC<SelectItemTextProps> = ({
  css,
  className,
  ...props
}) => {
  return (
    <BaseSelect.ItemText className={cx(_css(css), className)} {...props} />
  );
};

export type SelectContentProps = WithCssProps<BaseSelect.SelectViewportProps>;
const Content: React.FC<SelectContentProps> = ({
  css,
  className,
  children,
  ...props
}) => {
  const [items] = findChildrenByType(children, Item);

  return (
    <BaseSelect.Viewport className={cx(_css(css), className)} {...props}>
      {items}
    </BaseSelect.Viewport>
  );
};

export type SelectTrigerProps = WithCssProps<
  Omit<Omit<BaseSelect.SelectTriggerProps, "asChild"> & ButtonProps, "disabled">
>;
const Trigger: React.FC<SelectTrigerProps> = ({
  css,
  children,
  className,
  ...props
}) => {
  const { error, size } = useSelectVariant();
  const [values, icons] = findChildrenByType(children, Value, Icon);

  const classes = select({
    error,
    size
  });

  return (
    <BaseSelect.Trigger asChild>
      <Button
        variant="outline"
        aria-invalid={!!error}
        className={cx(classes.trigger, _css(css), className)}
        size={size}
        {...props}
      >
        {values}
        <Button.Suffix>
          {!icons?.length && (
            <Icon>
              <ChevronDownIcon size={16} />
            </Icon>
          )}
          {!!icons?.length && icons}
        </Button.Suffix>
      </Button>
    </BaseSelect.Trigger>
  );
};

export type SelectProps = WithCssProps<
  SelectVariantProps &
    BaseSelect.SelectProps &
    Pick<BaseSelect.SelectPortalProps, "container"> &
    Pick<BaseSelect.SelectContentProps, "position" | "sideOffset" | "side">
>;
export const Select: React.FC<SelectProps> & {
  Trigger: typeof Trigger;
  Content: typeof Content;
  Label: typeof Label;
  Group: typeof Group;
  Item: typeof Item;
  ItemText: typeof ItemText;
  Value: typeof Value;
  Icon: typeof Icon;
} = ({
  css,
  children,
  error,
  size,
  container,
  position = "popper",
  side = "bottom",
  sideOffset = 2,
  ...props
}) => {
  const [triggers, contents] = findChildrenByType(children, Trigger, Content);

  const classes = select({ size });

  return (
    <SelectProvider error={error} size={size}>
      <BaseSelect.Root {...props}>
        {triggers}
        <BaseSelect.Portal container={container}>
          <BaseSelect.Content
            position={position}
            side={side}
            sideOffset={sideOffset}
            className={cx(classes.content, _css(css))}
          >
            <BaseSelect.ScrollUpButton />
            {contents}
            <BaseSelect.ScrollDownButton />
          </BaseSelect.Content>
        </BaseSelect.Portal>
      </BaseSelect.Root>
    </SelectProvider>
  );
};

Select.Trigger = Trigger;
Select.Content = Content;
Select.Label = Label;
Select.Group = Group;
Select.Item = Item;
Select.ItemText = ItemText;
Select.Value = Value;
Select.Icon = Icon;
