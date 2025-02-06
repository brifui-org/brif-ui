"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Prefer } from "@brifui/core";
import { cn } from "@brifui/core/utils";
import { useTheme } from "@brifui/provider";
import { Spinner } from "@brifui/spinner";
import { ComponentColor } from "@brifui/theme/types";

export const cssVars = {
  textColor: "--brifui-comp-button-foreground",
  idleColor: "--brifui-comp-button-idle-color",
  hoverColor: "--brifui-comp-button-hover-color",
  disabledColor: "--brifui-comp-button-disabled-color",
  activeColor: "--brifui-comp-button-active-color"
};

export const buttonVariants = cva(
  [
    "relative gap-2 inline-flex items-center justify-center",
    "text-sm font-bold",
    "border-box border border-transparent",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none",
    "focus:outline-none",
    "focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-primary"
  ],
  {
    variants: {
      /**
       * Button's loading state
       * @default false
       */
      isLoading: {
        true: [""],
        false: [""]
      },
      /**
       * Button variant
       * @default "solid"
       */
      variant: {
        solid: [
          "text-[var(--brifui-comp-button-foreground)]",
          "bg-[var(--brifui-comp-button-idle-color)]",
          "hover:bg-[var(--brifui-comp-button-hover-color)]",
          "active:bg-[var(--brifui-comp-button-active-color)]",
          "disabled:bg-[var(--brifui-comp-button-disabled-color)]"
        ],
        outlined: [
          "bg-background",
          "border-[var(--brifui-comp-button-idle-color)]",
          "text-[var(--brifui-comp-button-idle-color)]",
          "from-[color-mix(in_hsl,_transparent,_var(--brifui-comp-button-idle-color)_0%)] to-[color-mix(in_hsl,_transparent,_var(--brifui-comp-button-idle-color)_10%)] hover:bg-gradient-to-b hover:from-10%",
          "active:shadow-[inset_0_0_0_1px_var(--brifui-comp-button-idle-color)]"
        ],
        ghost: [
          "text-[var(--brifui-comp-button-idle-color)]",
          "bg-transparent border-none",
          "hover:bg-[color-mix(in_hsl,_transparent,_var(--brifui-comp-button-idle-color)_10%)]",
          "active:bg-[color-mix(in_hsl,_transparent,_var(--brifui-comp-button-idle-color)_30%)]"
        ],
        link: [
          "text-[var(--brifui-comp-button-idle-color)]",
          "hover:text-[var(--brifui-comp-button-hover-color)]",
          "active:text-[var(--brifui-comp-button-active-color)]",
          "bg-transparent border-none"
        ]
      },
      /**
       * Button's size
       * @default "md"
       */
      size: {
        sm: ["h-8", "px-4 py-1", "rounded-sm"],
        md: ["h-10", "px-4 py-1", "rounded-md"],
        lg: ["h-11", "px-5 py-1", "rounded-md"],
        icon: []
      }
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
      isLoading: false
    }
  }
);

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;
export type ButtonProps = Prefer<
  ButtonVariantsProps,
  React.ComponentPropsWithRef<"button"> & {
    color?: ComponentColor;
  }
>;

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  color,
  isLoading = false,
  className,
  children,
  style = {},
  ...props
}) => {
  const { resolveSysColor, defaultColor } = useTheme();

  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      style={{
        ...style,
        [cssVars.textColor]: resolveSysColor(color || defaultColor)(
          "foreground"
        ),
        [cssVars.idleColor]: resolveSysColor(color || defaultColor)("DEFAULT"),
        [cssVars.hoverColor]: resolveSysColor(color || defaultColor)("hover"),
        [cssVars.activeColor]: resolveSysColor(color || defaultColor)("active"),
        [cssVars.disabledColor]: resolveSysColor(color || defaultColor)(
          "disabled"
        )
      }}
      {...props}
    >
      {isLoading && (
        <span>
          <Spinner className="text-current" size="xs" />
        </span>
      )}
      {children}
    </button>
  );
};
