import React, { useId } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Prefer } from "@brifui/core";
import { cn } from "@brifui/core/utils";

import { useMenuContext } from "./context";
import { sizeVariants } from "./shared";
import { makeDataAttribute } from "./utils";

export const menuItemVariants = cva(
  [
    "flex items-center",
    "px-2 py-1 w-full",
    "text-foreground",
    "cursor-pointer"
  ],
  {
    variants: {
      isActive: {
        true: ["font-medium"]
      },
      disabled: {
        true: ["opacity-50 cursor-not-allowed"],
        false: []
      },
      color: {
        default: [],
        primary: [],
        secondary: [],
        success: [],
        destructive: []
      }
    },
    defaultVariants: {
      isActive: false,
      disabled: false
    },
    compoundVariants: [
      {
        isActive: true,
        color: "default",
        class: "text-default-foreground"
      },
      {
        isActive: true,
        color: "primary",
        class: "text-primary-foreground"
      },
      {
        isActive: true,
        color: "secondary",
        class: "text-secondary-foreground"
      },
      {
        isActive: true,
        color: "success",
        class: "text-success-foreground"
      },
      {
        isActive: true,
        color: "destructive",
        class: "text-danger-foreground"
      }
    ]
  }
);

export type MenuVariantProps = VariantProps<typeof menuItemVariants>;

export type MenuItemProps = Prefer<
  Omit<MenuVariantProps, "isActive" | "color"> & { value: string },
  React.ComponentPropsWithRef<"div">
>;

export const Item: React.FC<MenuItemProps> = ({
  value: outerValue,
  className,
  disabled,
  ...props
}) => {
  const id = useId();
  const { size, color, value, onItemHover, onItemClick } = useMenuContext();

  const isActive = value === outerValue;

  return (
    <div
      data-active={isActive}
      aria-disabled={!!disabled}
      {...makeDataAttribute.item(id, value)}
      role="menuitem"
      className={cn(
        menuItemVariants({ color, isActive, disabled }),
        sizeVariants({ size }),
        className
      )}
      onMouseEnter={onItemHover}
      onClick={onItemClick(outerValue)}
      {...props}
    />
  );
};
