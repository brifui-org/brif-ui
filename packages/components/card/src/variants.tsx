import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const cardVariants = sva({
  slots: ["root", "header", "body", "footer"],
  base: {
    root: {
      bg: "background",
      border: "2px solid {colors.border}",
      borderRadius: "component.lg",
      overflow: "hidden"
    },
    header: {
      p: 4
    },
    body: {
      p: 4
    },
    footer: {
      p: 4
    }
  },
  variants: {
    bordered: {
      true: {
        header: {
          borderBottom: "2px solid {colors.border}"
        },
        footer: {
          borderTop: "2px solid {colors.border}"
        }
      }
    },
    shadow: {
      sm: {
        root: {
          boxShadow: "component.sm"
        }
      },
      md: {
        root: {
          boxShadow: "component.md"
        }
      },
      lg: {
        root: {
          boxShadow: "component.lg"
        }
      }
    }
  },
  defaultVariants: {
    shadow: "lg",
    bordered: false
  }
});

export type CardVariantProps = RecipeVariantProps<typeof cardVariants>;
