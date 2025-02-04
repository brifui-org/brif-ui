import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Prefer } from "@brifui/core";
import { cn } from "@brifui/core/utils";
import { Spinner } from "@brifui/spinner";

export const buttonVariants = cva(
  [
    "relative gap-2 inline-flex items-center justify-center",
    "text-sm font-bold",
    "outline-none",
    "border-box border border-border",
    "transition-all ease-in-out",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none"
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
          "[&:not(:active)]:after:animate-push",
          "after:absolute after:inset-0 after:-z-10 after:bg-opacity-80"
        ],
        outlined: [
          "hover:bg-gradient-to-b from-10%",
          "[&:not(:active)]:after:animate-push",
          "after:absolute after:inset-0 after:-z-10 after:bg-opacity-80"
        ],
        ghost: [
          "bg-transparent border-transparent",
          "hover:bg-opacity-30",
          "active:bg-opacity-50",
          "after:hidden"
        ],
        link: ["bg-transparent border-transparent", "after:hidden"]
      },
      /**
       * Button's size
       * @default "md"
       */
      size: {
        sm: ["h-8", "px-4 py-1", "rounded-sm after:rounded-md"],
        md: ["h-10", "px-4 py-1", "rounded-md after:rounded-lg"],
        lg: ["h-11", "px-5 py-1", "rounded-md after:rounded-lg"],
        icon: []
      },
      /**
       * Button's color
       * @default "primary"
       */
      color: {
        default: ["after:bg-default"],
        primary: ["after:bg-primary"],
        secondary: ["after:bg-secondary"],
        destructive: ["after:bg-danger"],
        success: ["after:bg-success"]
      }
    },
    compoundVariants: [
      /**
       * Solid
       */
      {
        variant: "solid",
        color: "default",
        class: [
          "bg-default",
          "border-default",
          "text-default-foreground",
          "hover:bg-default-hover",
          "active:bg-default-active"
        ]
      },
      {
        variant: "solid",
        color: "primary",
        class: [
          "bg-primary",
          "border-primary",
          "text-primary-foreground",
          "hover:bg-primary-hover",
          "active:bg-primary-active"
        ]
      },
      {
        variant: "solid",
        color: "secondary",
        class: [
          "bg-secondary",
          "border-secondary",
          "text-secondary-foreground",
          "hover:bg-secondary-hover",
          "active:bg-secondary-active"
        ]
      },
      {
        variant: "solid",
        color: "success",
        class: [
          "bg-success",
          "border-success",
          "text-success-foreground",
          "hover:bg-success-hover",
          "active:bg-success-active"
        ]
      },
      {
        variant: "solid",
        color: "destructive",
        class: [
          "bg-danger",
          "border-danger",
          "text-danger-foreground",
          "hover:bg-danger-hover",
          "active:bg-danger-active"
        ]
      },
      /**
       * Outlined
       */
      {
        variant: "outlined",
        color: "default",
        class: [
          "bg-background text-default border-default",
          "from-default/0 to-default/10"
        ]
      },
      {
        variant: "outlined",
        color: "primary",
        class: [
          "bg-background text-primary border-primary",
          "from-primary/0 to-primary/10"
        ]
      },
      {
        variant: "outlined",
        color: "secondary",
        class: [
          "bg-background text-secondary border-secondary",
          "from-secondary/0 to-secondary/10"
        ]
      },
      {
        variant: "outlined",
        color: "success",
        class: [
          "bg-background text-success border-success",
          "from-success/0 to-success/10"
        ]
      },
      {
        variant: "outlined",
        color: "destructive",
        class: [
          "bg-background text-danger border-danger",
          "from-danger/0 to-danger/10"
        ]
      },
      /**
       * Ghost
       */
      {
        variant: "ghost",
        color: "default",
        class: ["text-default", "hover:bg-default"]
      },
      {
        variant: "ghost",
        color: "primary",
        class: ["text-primary", "hover:bg-primary"]
      },
      {
        variant: "ghost",
        color: "secondary",
        class: ["text-secondary", "hover:bg-secondary"]
      },
      {
        variant: "ghost",
        color: "success",
        class: ["text-success", "hover:bg-success"]
      },
      {
        variant: "ghost",
        color: "destructive",
        class: ["text-danger", "hover:bg-danger"]
      },
      /**
       * Link
       */
      {
        variant: "link",
        color: "default",
        class: [
          "text-default",
          "hover:text-default/80",
          "active:text-default/90"
        ]
      },
      {
        variant: "link",
        color: "primary",
        class: [
          "text-primary",
          "hover:text-primary/80",
          "active:text-primary/90"
        ]
      },
      {
        variant: "link",
        color: "secondary",
        class: [
          "text-secondary",
          "hover:text-secondary/80",
          "active:text-secondary/90"
        ]
      },
      {
        variant: "link",
        color: "success",
        class: [
          "text-success",
          "hover:text-success/80",
          "active:text-success/90"
        ]
      },
      {
        variant: "link",
        color: "destructive",
        class: ["text-danger", "hover:text-danger/80", "active:text-danger/90"]
      }
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      color: "default",
      isLoading: false
    }
  }
);

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;
export type ButtonProps = Prefer<
  ButtonVariantsProps,
  React.ComponentPropsWithRef<"button">
>;

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  color,
  isLoading = false,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, color }), className)}
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
