import React, { useId } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Prefer } from "@brifui/core";
import { cn } from "@brifui/core/utils";

import { useMenuContext } from "./context";

export const menuItemVariants = cva(
  [
    "flex items-center",
    "px-2 py-1 w-full",
    "text-foreground-muted",
    "cursor-pointer",
    "hover:text-foreground"
  ],
  {
    variants: {
      isActive: {
        true: ["font-medium text-primary-foreground"]
      },
      disabled: {
        true: ["pointer-events-none opacity-50 cursor-not-allowed"],
        false: [""]
      },
      size: {
        sm: ["text-sm h-7 rounded-md"],
        md: ["text-md h-8 rounded-md"],
        lg: ["text-lg h-10 rounded-lg"]
      }
    },
    defaultVariants: {
      isActive: false,
      disabled: false,
      size: "md"
    }
  }
);

export type MenuVariantProps = VariantProps<typeof menuItemVariants>;

export type MenuItemProps = Prefer<
  MenuVariantProps & { value: string },
  React.ComponentPropsWithRef<"div">
>;

export const Item: React.FC<MenuItemProps> = ({
  value: outerValue,
  className,
  disabled,
  ...props
}) => {
  const id = useId();
  const { size, value, onItemHover, onItemClick } = useMenuContext();

  const isActive = value === outerValue;

  return (
    <div
      data-menuitem-id={id}
      data-menuitem-value={value}
      data-active={isActive}
      role="menuitem"
      className={cn(menuItemVariants({ isActive, disabled, size }), className)}
      onMouseEnter={onItemHover}
      onClick={onItemClick(outerValue)}
      {...props}
    />
  );
};
