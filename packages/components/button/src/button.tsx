import React from "react";
import { cva } from "@brifui/styled/css";

export const buttonVariants = cva({
  base: {},
  variants: {
    variant: {
      solid: {}
    },
    color: {
      default: {}
    },
    size: {
      sm: {
        height: "component.sm",
        px: "2"
      },
      md: { height: "component.md", px: "2.5" },
      lg: { height: "component.lg", px: "3.5" }
    }
  },
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "lg"
  }
});

export type ButtonProps = React.ComponentPropsWithRef<"button">;

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <button className={buttonVariants()} {...props} />;
};
