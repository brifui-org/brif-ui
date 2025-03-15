import React from "react";
import { ScrollArea as BaseScrollArea } from "radix-ui";
import { css as _css, cx } from "@brifui/styled/css";
import { WithCssProps } from "@brifui/utils";

import { ScrollAreaProvider } from "./context";
import { ScrollAreaVariantProps, scrollAreaVariants } from "./variants";

export type ScrollAreaScrollbarProps =
  WithCssProps<BaseScrollArea.ScrollAreaScrollbarProps>;
const Scrollbar: React.FC<ScrollAreaScrollbarProps> = ({
  className,
  css,
  children,
  ...props
}) => {
  const raw = scrollAreaVariants.raw({ orientation: props.orientation });

  return (
    <BaseScrollArea.Scrollbar
      className={cx(_css(raw.scrollbar, css), className)}
      {...props}
    >
      {children}
      <BaseScrollArea.Thumb className={_css(raw.thumb)} />
    </BaseScrollArea.Scrollbar>
  );
};

export type ScrollAreaProps = WithCssProps<
  ScrollAreaVariantProps & BaseScrollArea.ScrollAreaProps
>;
const Root: React.FC<ScrollAreaProps> = ({
  className,
  css,
  children,
  ...props
}) => {
  const raw = scrollAreaVariants.raw();

  return (
    <ScrollAreaProvider>
      <BaseScrollArea.Root className={_css(raw.root)} {...props}>
        <BaseScrollArea.Viewport
          className={cx(_css(raw.viewport, css), className)}
        >
          {children}
        </BaseScrollArea.Viewport>
        <BaseScrollArea.Corner />
        <Scrollbar orientation="vertical" />
      </BaseScrollArea.Root>
    </ScrollAreaProvider>
  );
};

export const ScrollArea = {
  Root,
  Scrollbar
};
