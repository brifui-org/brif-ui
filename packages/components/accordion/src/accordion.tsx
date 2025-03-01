"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { Accordion as BaseAccordion } from "radix-ui";
import { cx } from "@brifui/styled/css";
import { findChildrenByType } from "@brifui/utils";

import { AccordionProvider, useAccordion } from "./context";
import { AccordionVariantProps, accordionVariants } from "./variants";

export type AccordionContentProps = BaseAccordion.AccordionContentProps;
const Content: React.FC<AccordionContentProps> = ({
  className,
  children,
  ...props
}) => {
  const { size } = useAccordion();
  const classes = accordionVariants({ size });

  return (
    <BaseAccordion.Content
      className={cx(classes.contentContainer, className)}
      {...props}
    >
      <div className={classes.content}>{children}</div>
    </BaseAccordion.Content>
  );
};

export type AccordionIconProps = React.ComponentPropsWithRef<"div">;
const Icon: React.FC<AccordionIconProps> = ({ className, ...props }) => {
  const { size } = useAccordion();
  const classes = accordionVariants({ size });

  return (
    <div data-item="icon" className={cx(classes.icon, className)} {...props} />
  );
};

export type AccordionTriggerProps = BaseAccordion.AccordionTriggerProps;
const Trigger: React.FC<AccordionTriggerProps> = ({
  children,
  className,
  ...props
}) => {
  const { size } = useAccordion();
  const classes = accordionVariants({ size });
  const [icons, others] = findChildrenByType(children, Icon);

  return (
    <BaseAccordion.Trigger
      className={cx(classes.trigger, className)}
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

export type AccordionItemProps = BaseAccordion.AccordionItemProps;
const Item: React.FC<AccordionItemProps> = ({ children, ...props }) => {
  const [triggers, contents] = findChildrenByType(children, Trigger, Content);

  return (
    <BaseAccordion.Item {...props}>
      {triggers}
      {contents}
    </BaseAccordion.Item>
  );
};

export type AccordionProps = AccordionVariantProps &
  React.ComponentProps<typeof BaseAccordion.Root>;
const Root: React.FC<AccordionProps> = ({
  children,
  className,
  size,
  ...props
}) => {
  const [items] = findChildrenByType(children, Item);

  const classes = accordionVariants({ size });

  return (
    <AccordionProvider size={size}>
      <BaseAccordion.Root className={cx(classes.root, className)} {...props}>
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
