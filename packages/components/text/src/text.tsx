import React from "react";
import { cva, cx, RecipeVariantProps } from "@brifui/styled/css";
import { BoxStyles } from "@brifui/styled/patterns";

const variants = cva({
  variants: {
    type: {
      "heading.7xl": {
        textStyle: "heading.7xl"
      },
      "heading.6xl": {
        textStyle: "heading.6xl"
      },
      "heading.5xl": {
        textStyle: "heading.5xl"
      },
      "heading.4xl": {
        textStyle: "heading.4xl"
      },
      "heading.3xl": {
        textStyle: "heading.3xl"
      },
      "heading.2xl": {
        textStyle: "heading.2xl"
      },
      "heading.xl": {
        textStyle: "heading.xl"
      },
      "heading.lg": {
        textStyle: "heading.lg"
      },
      "heading.md": {
        textStyle: "heading.md"
      },
      "heading.sm": {
        textStyle: "heading.sm"
      },
      "button.xs": {
        textStyle: "button.xs"
      },
      "button.sm": {
        textStyle: "button.sm"
      },
      "button.md": {
        textStyle: "button.md"
      },
      "text.3xl": {
        textStyle: "text.3xl"
      },
      "text.2xl": {
        textStyle: "text.2xl"
      },
      "text.xl": {
        textStyle: "text.xl"
      },
      "text.lg": {
        textStyle: "text.lg"
      },
      "text.md": {
        textStyle: "text.md"
      },
      "text.sm": {
        textStyle: "text.sm"
      },
      "text.xs": {
        textStyle: "text.xs"
      }
    } satisfies Record<keyof BoxStyles["textStyle"], { textStyle: string }>
  },
  defaultVariants: {
    type: "text.md"
  }
});

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLOrSVGElement>, "type"> {
  as?: React.ElementType;
}
export const Text: React.FC<
  TextProps & RecipeVariantProps<typeof variants>
> = ({ as: Tag = "div", type, className, ...props }) => {
  return <Tag className={cx(variants({ type }), className)} {...props} />;
};
