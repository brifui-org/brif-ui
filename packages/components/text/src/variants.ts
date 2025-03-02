import { cva, RecipeVariantProps } from "@brifui/styled/css";
import { BoxStyles } from "@brifui/styled/patterns";

export const variants = cva({
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
    } satisfies Record<keyof BoxStyles["textStyle"], { textStyle: string }>,
    color: {
      text: {
        color: "text"
      },
      muted: {
        color: "text.muted"
      },
      disabled: {
        color: "text.disabled"
      }
    },
    fontWeight: {
      light: {
        fontWeight: "light"
      },
      normal: {
        fontWeight: "normal"
      },
      medium: {
        fontWeight: "medium"
      },
      semibold: {
        fontWeight: "semibold"
      },
      bold: {
        fontWeight: "bold"
      },
      extrabold: {
        fontWeight: "extrabold"
      },
      black: {
        fontWeight: "black"
      }
    },
    mono: {
      true: {
        fontFamily: "mono"
      }
    }
  },
  defaultVariants: {
    type: "text.md",
    color: "text",
    fontWeight: "normal",
    mono: false
  },
  compoundVariants: [
    {
      type: [
        "heading.2xl",
        "heading.xl",
        "heading.lg",
        "heading.md",
        "heading.sm",
        "heading.3xl",
        "heading.4xl",
        "heading.5xl",
        "heading.6xl",
        "heading.7xl"
      ],
      css: {
        fontWeight: "semibold"
      }
    },
    {
      type: [
        "text.2xl",
        "text.xl",
        "text.lg",
        "text.md",
        "text.sm",
        "text.3xl",
        "text.xs"
      ],
      css: {
        fontWeight: "normal"
      }
    },
    {
      type: ["button.md", "button.sm", "button.xs"],
      css: {
        fontWeight: "semibold"
      }
    }
  ]
});

export type TextVariantProps = RecipeVariantProps<typeof variants>;
