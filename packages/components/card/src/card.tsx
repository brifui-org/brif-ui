import React from "react";
import { cva, cx, RecipeVariantProps } from "@brifui/styled/css";

export const cardVariants = cva({
  base: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "border",
    p: "6",
    borderRadius: "component.lg"
  },
  variants: {
    shadow: {
      sm: {
        boxShadow: "sm"
      },
      md: { boxShadow: "md" },
      lg: { boxShadow: "lg" }
    }
  },
  defaultVariants: {
    shadow: "lg"
  }
});

export type CardVariantProps = RecipeVariantProps<typeof cardVariants>;
export type CardProps = CardVariantProps & React.ComponentPropsWithRef<"div">;

export const Card: React.FC<CardProps> = ({ shadow, className, ...props }) => {
  return <div className={cx(cardVariants({ shadow }), className)} {...props} />;
};
