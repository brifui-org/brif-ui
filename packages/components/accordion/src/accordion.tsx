"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { Accordion as BaseAccordion } from "radix-ui";
import { css as _css, cx } from "@brifui/styled/css";
import { accordion, AccordionVariantProps } from "@brifui/styled/recipes";
import { findChildrenByType, WithCssProps } from "@brifui/utils";

import { AccordionProvider, useAccordion } from "./context";

export type AccordionContentProps =
  WithCssProps<BaseAccordion.AccordionContentProps>;
const Content: React.FC<AccordionContentProps> = ({
  className,
  children,
  css,
  ...props
}) => {
  const { size } = useAccordion();
  const classes = accordion({ size });

  return (
    <BaseAccordion.Content className={classes.contentContainer} {...props}>
      <div className={cx(classes.content, _css(css), className)}>
        {children}
      </div>
    </BaseAccordion.Content>
  );
};

export type AccordionIconProps = WithCssProps<
  React.ComponentPropsWithRef<"div">
>;
const Icon: React.FC<AccordionIconProps> = ({ css, className, ...props }) => {
  const { size } = useAccordion();
  const classes = accordion({ size });

  return (
    <div
      data-item="icon"
      className={cx(classes.icon, _css(css), className)}
      {...props}
    />
  );
};

export type AccordionTriggerProps =
  WithCssProps<BaseAccordion.AccordionTriggerProps>;
const Trigger: React.FC<AccordionTriggerProps> = ({
  children,
  className,
  css,
  ...props
}) => {
  const { size } = useAccordion();
  const classes = accordion({ size });
  const [icons, others] = findChildrenByType(children, Icon);

  return (
    <BaseAccordion.Trigger
      className={cx(classes.trigger, _css(css), className)}
      {...props}
    >
      <span>{others}</span>
      {!icons?.length ? (
        <Icon>
          <ChevronDown />
        </Icon>
      ) : (
        icons
      )}
    </BaseAccordion.Trigger>
  );
};

export type AccordionItemProps = WithCssProps<BaseAccordion.AccordionItemProps>;
const Item: React.FC<AccordionItemProps> = ({ children, ...props }) => {
  const [triggers, contents] = findChildrenByType(children, Trigger, Content);

  return (
    <BaseAccordion.Item {...props}>
      {triggers}
      {contents}
    </BaseAccordion.Item>
  );
};

export type AccordionProps = WithCssProps<
  AccordionVariantProps & React.ComponentProps<typeof BaseAccordion.Root>
>;
const Root: React.FC<AccordionProps> = ({
  children,
  className,
  size,
  css,
  ...props
}) => {
  const [items] = findChildrenByType(children, Item);

  const classes = accordion({ size });

  return (
    <AccordionProvider size={size}>
      <BaseAccordion.Root
        className={cx(classes.root, _css(css), className)}
        {...props}
      >
        {items}
      </BaseAccordion.Root>
    </AccordionProvider>
  );
};

export const Accordion = {
  Root,
  Item,
  Trigger,
  Content
};
