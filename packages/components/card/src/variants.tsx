import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const cardVariants = sva({
  slots: ["root", "header", "body", "footer"],
  base: {
    root: {
      bg: "background",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "border",
      borderRadius: "component.lg"
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
          borderBottom: "1px solid {colors.border}"
        },
        footer: {
          borderTop: "1px solid {colors.border}"
        }
      }
    },
    shadow: {
      sm: {
        root: {
          boxShadow: "sm"
        }
      },
      md: {
        root: {
          boxShadow: "md"
        }
      },
      lg: {
        root: {
          boxShadow: "lg"
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
