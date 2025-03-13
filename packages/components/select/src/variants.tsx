import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const selectVariants = sva({
  slots: ["root", "trigger", "content", "item"],
  base: {
    content: {
      p: 2,
      bg: "background",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "border",
      minW: "var(--radix-select-trigger-width)",
      maxH: "var(--radix-select-content-available-height)"
    },
    item: {
      p: 2,
      border: "none",
      outline: "none",
      cursor: "pointer",
      "&[data-highlighted]": {
        bg: "background.hover"
      },
      "&[data-disabled]": {
        cursor: "not-allowed",
        opacity: ".32"
      }
    }
  },
  variants: {
    size: {
      sm: {
        content: {
          borderRadius: "component.md"
        },
        item: {
          textStyle: "text.sm",
          borderRadius: "component.md"
        }
      },
      md: {
        content: {
          borderRadius: "component.md"
        },
        item: {
          textStyle: "text.md",
          borderRadius: "component.md"
        }
      },
      lg: {
        content: {
          borderRadius: "component.lg"
        },
        item: {
          textStyle: "text.lg",
          borderRadius: "component.lg"
        }
      }
    },
    error: {
      true: {
        trigger: {
          borderColor: "error",
          boxShadowColor: "error"
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    error: false
  }
});

export type SelectVariantProps = RecipeVariantProps<typeof selectVariants>;
