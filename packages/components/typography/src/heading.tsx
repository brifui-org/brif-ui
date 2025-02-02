import React, { ComponentPropsWithRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Box, BoxProps } from "@brifui/box";
import { Prefer } from "@brifui/core";
import { cn } from "@brifui/core/utils";

export const headingVariants = cva(
  ["font-heading font-bold", "tracking-tight"],
  {
    variants: {
      size: {
        xs: ["text-xs"],
        sm: ["text-sm"],
        md: ["text-md"],
        lg: ["text-lg"],
        xl: ["text-xl"]
      },
      color: {
        default: ["text-foreground"],
        muted: ["text-foreground-muted"]
      }
    },
    defaultVariants: {
      color: "default",
      size: "md"
    }
  }
);

export type HeadingVariantProps = VariantProps<typeof headingVariants>;
export type HeadingProps = Prefer<
  HeadingVariantProps & { level?: 1 | 2 | 3 | 4 | 5 | 6 },
  ComponentPropsWithRef<"h1">
>;

export const Heading: React.FC<HeadingProps> = ({
  className,
  size = "md",
  color = "default",
  level = 1,
  ...props
}) => {
  return (
    <Box
      as={`h${level}`}
      className={cn(headingVariants({ size, color }), className)}
      {...(props as BoxProps<"h1">)}
    />
  );
};
