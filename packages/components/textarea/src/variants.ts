import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const textareaVariants = sva({
  slots: ["root"],
  base: {
    root: {
      minH: "4.5em",
      overflow: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "background",
      color: "text",
      fontFamily: "body",
      transition: "box-shadow .15s",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "border",
      "&:not([aria-invalid='true'])": {
        "&:not(:focus)": {
          "&:not(:focus-visible)": {
            "&:not(:disabled)": {
              _hover: {
                borderColor: "border.hover"
              }
            }
          }
        }
      },
      _focus: {
        borderColor: "border",
        outline: "4px solid {colors.primary}",
        outlineOffset: "px"
      },
      _focusVisible: {
        borderColor: "border",
        outline: "4px solid {colors.primary}",
        outlineOffset: "px"
      },
      _disabled: {
        cursor: "not-allowed",
        bg: "background.disabled",
        color: "text.disabled",
        borderColor: "border.disabled"
      }
    }
  },
  variants: {
    size: {
      sm: {
        root: {
          p: 2,
          borderRadius: "component.md",
          textStyle: "text.sm"
        }
      },
      md: {
        root: {
          p: 2.5,
          borderRadius: "component.md",
          textStyle: "text.md"
        }
      },
      lg: {
        root: {
          p: 3.5,
          borderRadius: "component.md",
          textStyle: "text.lg"
        }
      }
    },
    error: {
      true: {
        root: {
          borderColor: "error"
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    error: false
  }
});

export type TextareaVariantProps = RecipeVariantProps<typeof textareaVariants>;
