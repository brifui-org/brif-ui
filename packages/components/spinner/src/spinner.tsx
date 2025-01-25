import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Prefer } from "@brifui/core";
import { cn } from "@brifui/core/utils";

export const spinnerVariants = cva(["animate-spin"], {
  variants: {
    size: {
      xs: ["w-4 h-4"],
      sm: ["w-8 h-8"],
      md: ["w-10 h-10"],
      lg: ["w-11 h-11"]
    },
    color: {
      default: ["text-default"],
      primary: ["text-primary"],
      secondary: ["text-secondary"],
      success: ["text-success"],
      destructive: ["text-danger"]
    }
  },
  defaultVariants: {
    color: "default",
    size: "md"
  }
});

export type SpinnerVariantProps = VariantProps<typeof spinnerVariants>;
export type SpinnerProps = Prefer<
  SpinnerVariantProps,
  React.ComponentPropsWithRef<"svg">
>;

export const Spinner: React.FC<SpinnerProps> = ({
  size,
  color,
  className,
  ...props
}) => {
  return (
    <svg
      className={cn(spinnerVariants({ size, color }), className)}
      viewBox="0 0 50 50"
      fill="none"
      {...props}
    >
      <circle
        className="opacity-20"
        cx="25"
        cy="25"
        r="22"
        strokeWidth="6"
        stroke="currentColor"
      ></circle>
      <path
        d="M25 3a22 22 0 0 1 22 22"
        strokeWidth="6"
        strokeLinecap="round"
        stroke="currentColor"
      ></path>
    </svg>
  );
};
