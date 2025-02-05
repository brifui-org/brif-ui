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
        solid: [],
        outlined: [
          "hover:bg-gradient-to-b hover:from-10%",
          "active:bg-gradient-to-b active:from-10%"
        ],
        ghost: [
          "bg-transparent border-none",
          "hover:bg-opacity-10",
          "active:bg-opacity-30"
        ],
        link: ["bg-transparent border-none"]
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
      },
      /**
       * Button's color
       * @default "primary"
       */
      color: {
        default: [],
        primary: [],
        secondary: [],
        destructive: []
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
          "hover:bg-default-hover hover:border-default-hover",
          "active:bg-default-active active:border-default-active"
        ]
      },
      {
        variant: "solid",
        color: "primary",
        class: [
          "bg-primary",
          "border-primary",
          "text-primary-foreground",
          "hover:bg-primary-hover hover:border-primary-hover",
          "active:bg-primary-active active:border-primary-active"
        ]
      },
      {
        variant: "solid",
        color: "secondary",
        class: [
          "bg-secondary",
          "border-secondary",
          "text-secondary-foreground",
          "hover:bg-secondary-hover hover:border-secondary-hover",
          "active:bg-secondary-active active:border-secondary-active"
        ]
      },
      {
        variant: "solid",
        color: "destructive",
        class: [
          "bg-danger",
          "border-danger",
          "text-danger-foreground",
          "hover:bg-danger-hover hover:border-danger-hover",
          "active:bg-danger-active active:border-danger-active"
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
          "hover:text-default-hover",
          "active:text-default-active"
        ]
      },
      {
        variant: "link",
        color: "primary",
        class: [
          "text-primary",
          "hover:text-primary-hover",
          "active:text-primary-active"
        ]
      },
      {
        variant: "link",
        color: "secondary",
        class: [
          "text-secondary",
          "hover:text-secondary-hover",
          "active:text-secondary-active"
        ]
      },
      {
        variant: "link",
        color: "destructive",
        class: [
          "text-danger",
          "hover:text-danger-hover",
          "active:text-danger-active"
        ]
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
