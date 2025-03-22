import React from "react";
import { ScrollArea as BaseScrollArea } from "radix-ui";
import { css as _css, cx } from "@brifui/styled/css";
import { scrollarea, ScrollareaVariantProps } from "@brifui/styled/recipes";
import { WithCssProps } from "@brifui/utils";

import { ScrollAreaProvider } from "./context";

export type ScrollAreaScrollbarProps =
  WithCssProps<BaseScrollArea.ScrollAreaScrollbarProps>;
const Scrollbar: React.FC<ScrollAreaScrollbarProps> = ({
  className,
  css,
  children,
  ...props
}) => {
  const classes = scrollarea({ orientation: props.orientation });

  return (
    <BaseScrollArea.Scrollbar
      className={cx(classes.scrollbar, _css(css), className)}
      {...props}
    >
      {children}
      <BaseScrollArea.Thumb className={classes.thumb} />
    </BaseScrollArea.Scrollbar>
  );
};

export type ScrollAreaProps = WithCssProps<
  ScrollareaVariantProps & BaseScrollArea.ScrollAreaProps
>;
const Root: React.FC<ScrollAreaProps> = ({
  className,
  css,
  children,
  ...props
}) => {
  const classes = scrollarea();

  return (
    <ScrollAreaProvider>
      <BaseScrollArea.Root className={classes.root} {...props}>
        <BaseScrollArea.Viewport
          className={cx(classes.viewport, _css(css), className)}
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
