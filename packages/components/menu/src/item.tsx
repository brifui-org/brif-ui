import React, { useId } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Prefer } from "@brifui/core";
import { cn } from "@brifui/core/utils";

import { useMenuContext } from "./context";

export const menuItemVariants = cva([
  "transition-all",
  "px-2 py-1 rounded-sm w-full",
  "text-sm text-foreground-muted",
  "cursor-pointer",
  "hover:text-foreground"
]);

export type MenuVariantProps = VariantProps<typeof menuItemVariants>;

export type MenuItemProps = Prefer<
  MenuVariantProps,
  React.ComponentPropsWithRef<"div">
>;

export const Item: React.FC<MenuItemProps> = ({ className, ...props }) => {
  const id = useId();
  const { onItemHover } = useMenuContext();

  return (
    <div
      data-menuitem-id={id}
      role="menuitem"
      className={cn(menuItemVariants(), className)}
      onMouseEnter={onItemHover}
      {...props}
    />
  );
};
