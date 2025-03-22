import { defineSlotRecipe } from "@pandacss/dev";

export const selectSlotRecipe = defineSlotRecipe({
  className: "select",
  description: "The styles of `Select` component",
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
      _highlighted: {
        bg: "background.hover"
      },
      _disabled: {
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
          boxShadowColor: "error",
          "& > div": {
            "--brif-button-border-color": "token(colors.error)"
          }
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    error: false
  }
});
