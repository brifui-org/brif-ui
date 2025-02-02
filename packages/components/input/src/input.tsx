import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Prefer } from "@brifui/core";
import { cn } from "@brifui/core/utils";
import { Spinner } from "@brifui/spinner";

export const inputVariants = cva(
  [
    "relative flex items-center justify-center overflow-hidden",
    "text-sm shadow-sm",
    "outline-none transition-all ease-in-out",
    "focus-within:ring"
  ],
  {
    variants: {
      disabled: {
        true: ["opacity-50 cursor-not-allowed [&>input]:bg-default/[0.05]"],
        false: [""]
      },
      /**
       * Input's loading state
       * @default false
       */
      isLoading: {
        true: ["[&>input]:!pr-8"],
        false: [""]
      },
      /**
       * Input's variant
       * @default "outlined"
       */
      variant: {
        outlined: ["border"]
      },
      /**
       * Input's size
       * @default "md"
       */
      size: {
        sm: [
          "h-8",
          "[&>input]:px-4 [&>input]:py-1",
          "rounded-md [&>input]:rounded-[calc(theme(borderRadius.sm)-1px)]"
        ],
        md: [
          "h-10",
          "[&>input]:px-4 [&>input]:py-1",
          "rounded-lg [&>input]:rounded-[calc(theme(borderRadius.md)-1px)]"
        ],
        lg: [
          "h-11",
          "[&>input]:px-5 [&>input]:py-1",
          "rounded-lg [&>input]:rounded-[calc(theme(borderRadius.md)-1px)]"
        ]
      },
      /**
       * Input's color
       * @default "primary"
       */
      color: {
        default: [""],
        primary: [""],
        secondary: [""],
        destructive: [""],
        success: [""]
      }
    },
    compoundVariants: [
      /**
       * Outlined
       */
      {
        variant: "outlined",
        color: "default",
        class: ["focus-within:ring-default/20 focus-within:border-default/40"]
      },
      {
        variant: "outlined",
        color: "primary",
        class: ["focus-within:ring-primary/20 focus-within:border-primary/30"]
      },
      {
        variant: "outlined",
        color: "secondary",
        class: [
          "focus-within:ring-secondary/20 focus-within:border-secondary/30"
        ]
      },
      {
        variant: "outlined",
        color: "success",
        class: ["focus-within:ring-success/20 focus-within:border-success/30"]
      },
      {
        variant: "outlined",
        color: "destructive",
        class: ["focus-within:ring-danger/20 focus-within:border-danger/30"]
      }
    ],
    defaultVariants: {
      variant: "outlined",
      size: "md",
      color: "default",
      isLoading: false,
      disabled: false
    }
  }
);

export type InputVariantProps = VariantProps<typeof inputVariants>;
export type InputProps = Prefer<
  InputVariantProps,
  React.ComponentPropsWithRef<"input">
>;

export const Input: React.FC<InputProps> = ({
  variant,
  size,
  color,
  isLoading = false,
  disabled = false,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        inputVariants({ variant, size, color, disabled, isLoading }),
        className
      )}
    >
      <input
        className="outline-none w-full h-full bg-transparent"
        disabled={!!disabled}
        {...props}
      />
      {isLoading && (
        <span className="absolute top-1/2 -translate-y-1/2 right-2">
          <Spinner className="text-current" size="xs" />
        </span>
      )}
    </div>
  );
};
