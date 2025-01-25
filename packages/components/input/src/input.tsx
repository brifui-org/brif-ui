import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Prefer } from "@brifui/core";
import { cn } from "@brifui/core/utils";
import { Spinner } from "@brifui/spinner";

export const inputVariants = cva(
  [
    "relative flex items-center justify-center",
    "text-sm",
    "outline-none transition-all ease-in-out"
  ],
  {
    variants: {
      disabled: {
        true: [
          "opacity-50 cursor-not-allowed pointer-events-none [&>input]:bg-default/[0.05] after:hidden"
        ],
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
        outlined: [
          "border",
          "after:absolute after:inset-0 after:-z-10 after:bg-opacity-20 after:transition-all after:ease-in-out"
        ]
      },
      /**
       * Input's size
       * @default "md"
       */
      size: {
        sm: [
          "h-8",
          "[&>input]:px-4 [&>input]:py-1",
          "rounded-sm after:rounded-sm [&>input]:rounded-[calc(theme(borderRadius.sm)-1px)]",
          "focus-within:after:scale-x-[1.02] focus-within:after:scale-y-[1.2]"
        ],
        md: [
          "h-10",
          "[&>input]:px-4 [&>input]:py-1",
          "rounded-md after:rounded-md [&>input]:rounded-[calc(theme(borderRadius.md)-1px)]",
          "focus-within:after:scale-x-[1.023] focus-within:after:scale-y-[1.2]"
        ],
        lg: [
          "h-11",
          "[&>input]:px-5 [&>input]:py-1",
          "rounded-md after:rounded-md [&>input]:rounded-[calc(theme(borderRadius.md)-1px)]",
          "focus-within:after:scale-x-[1.027] focus-within:after:scale-y-[1.2]"
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
        class: [
          "hover:border-default after:bg-default",
          "focus-within:border-default"
        ]
      },
      {
        variant: "outlined",
        color: "primary",
        class: [
          "hover:border-primary after:bg-primary",
          "focus-within:border-primary"
        ]
      },
      {
        variant: "outlined",
        color: "secondary",
        class: [
          "hover:border-secondary after:bg-secondary",
          "focus-within:border-secondary"
        ]
      },
      {
        variant: "outlined",
        color: "success",
        class: [
          "hover:border-success after:bg-success",
          "focus-within:border-success"
        ]
      },
      {
        variant: "outlined",
        color: "destructive",
        class: [
          "hover:border-danger after:bg-danger",
          "focus-within:border-danger"
        ]
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
