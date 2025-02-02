import React, { ElementType } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Box, BoxProps } from "@brifui/box";
import { DynamicComponentPropsWithRef } from "@brifui/core";
import { cn } from "@brifui/core/utils";

export const textVariants = cva(["font-sans", "text-foreground"], {
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
});

export type TextVariantProps = VariantProps<typeof textVariants>;
export type TextgProps<T extends ElementType> = DynamicComponentPropsWithRef<
  TextVariantProps,
  T
>;

export const Text = <T extends ElementType>({
  className,
  color = "default",
  size = "md",
  ...props
}: TextgProps<T>) => {
  return (
    <Box
      className={cn(textVariants({ color, size }), className)}
      {...(props as BoxProps<T>)}
    />
  );
};
