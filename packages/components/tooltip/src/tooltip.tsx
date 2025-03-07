"use client";

import React from "react";
import { Tooltip as BaseTooltip } from "radix-ui";
import { css as _css, cx } from "@brifui/styled/css";
import { findChildrenByType, WithCssProps } from "@brifui/utils";

import { TooltipVariantProps, tooltipVariants } from "./variants";

export type TooltipRootProps = BaseTooltip.TooltipProps;
const Root: React.FC<TooltipRootProps> = ({ children, ...props }) => {
  const [triggers, contents] = findChildrenByType(children, Trigger, Content);

  return (
    <BaseTooltip.Root {...props}>
      {triggers}
      {contents}
    </BaseTooltip.Root>
  );
};

export type TooltipProviderProps = BaseTooltip.TooltipProviderProps;
const Provider = BaseTooltip.Provider;

export type TooltipPortalProps = BaseTooltip.TooltipPortalProps;
const Portal = BaseTooltip.Portal;

export type TooltipTriggerProps = WithCssProps<
  Omit<BaseTooltip.TooltipTriggerProps, "asChild">
>;
const Trigger: React.FC<TooltipTriggerProps> = ({
  css,
  className,
  children,
  ...props
}) => {
  return (
    <BaseTooltip.Trigger
      asChild
      className={cx(_css(css), className)}
      {...props}
    >
      {children}
    </BaseTooltip.Trigger>
  );
};

export type TooltipContentProps = WithCssProps<
  TooltipVariantProps & BaseTooltip.TooltipContentProps
>;
const Content: React.FC<TooltipContentProps> = ({
  css,
  type,
  sideOffset = 10,
  className,
  children,
  ...props
}) => {
  const raw = tooltipVariants.raw({ type });

  return (
    <BaseTooltip.Content
      sideOffset={sideOffset}
      className={cx(_css(raw.content, css), className)}
      {...props}
    >
      <BaseTooltip.Arrow />
      {children}
    </BaseTooltip.Content>
  );
};

export const Tooltip = {
  Root,
  Provider,
  Trigger,
  Portal,
  Content
};
