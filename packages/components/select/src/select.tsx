"use client";

import React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Select as BaseSelect } from "radix-ui";
import { Button, ButtonProps } from "@brifui/button";
import { cx } from "@brifui/styled/css";
import { findChildrenByType } from "@brifui/utils";

import { SelectProvider, useSelectVariant } from "./context";
import { SelectVariantProps, selectVariants } from "./variants";

export type SelectValueProps = BaseSelect.SelectValueProps;
const Value: React.FC<SelectValueProps> = BaseSelect.Value;

export type SelectIconProps = BaseSelect.SelectIconProps;
const Icon: React.FC<SelectIconProps> = BaseSelect.Icon;

export type SelectLabelProps = BaseSelect.SelectLabelProps;
const Label: React.FC<SelectLabelProps> = BaseSelect.Label;

export type SelectGroupProps = BaseSelect.SelectGroupProps;
const Group: React.FC<SelectGroupProps> = BaseSelect.Group;

export type SelectItemProps = BaseSelect.SelectItemProps;
const Item: React.FC<SelectItemProps> = ({ className, ...props }) => {
  const variants = useSelectVariant();
  const classes = selectVariants(variants);
  return <BaseSelect.Item className={cx(classes.item, className)} {...props} />;
};

export type SelectItemTextProps = BaseSelect.SelectItemTextProps;
const ItemText: React.FC<SelectItemTextProps> = BaseSelect.ItemText;

export type SelectContentProps = BaseSelect.SelectViewportProps;
const Content: React.FC<SelectContentProps> = ({ children, ...props }) => {
  const [items] = findChildrenByType(children, Item);

  return <BaseSelect.Viewport {...props}>{items}</BaseSelect.Viewport>;
};

export type SelectTrigerProps = Omit<
  Omit<BaseSelect.SelectTriggerProps, "asChild"> & ButtonProps,
  "disabled"
>;
const Trigger: React.FC<SelectTrigerProps> = ({
  children,
  className,
  ...props
}) => {
  const variants = useSelectVariant();
  const [values, icons] = findChildrenByType(children, Value, Icon);

  const classes = selectVariants(variants);

  return (
    <BaseSelect.Trigger asChild>
      <Button
        variant="outline"
        className={cx(classes.trigger, className)}
        size={variants.size}
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

export type SelectProps = SelectVariantProps &
  BaseSelect.SelectProps &
  Pick<BaseSelect.SelectPortalProps, "container"> &
  Pick<BaseSelect.SelectContentProps, "position" | "sideOffset" | "side">;
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

  const classes = selectVariants({ size });

  return (
    <SelectProvider error={error} size={size}>
      <BaseSelect.Root {...props}>
        {triggers}
        <BaseSelect.Portal container={container}>
          <BaseSelect.Content
            position={position}
            side={side}
            sideOffset={sideOffset}
            className={classes.content}
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
