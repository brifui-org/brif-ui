import { cva, type RecipeVariantProps } from "@brifui/styled/css";

export const buttonVariants = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: "1px",
    borderStyle: "solid",
    /**
     * Fonts
     */
    fontFamily: "body",
    fontWeight: "600",
    /**
     * Hover
     */
    _hover: {
      "&:not(:disabled)": {
        cursor: "pointer"
      }
    },
    /**
     * Focus
     */
    _focusVisible: {
      outline: "4px solid {colors.primary}",
      outlineOffset: "2px"
    },
    _disabled: {
      opacity: 0.32,
      cursor: "not-allowed"
    }
  },
  variants: {
    variant: {
      solid: {
        bg: "default",
        borderColor: "default",
        color: "default.foreground",
        _hover: {
          "&:not(:disabled)": {
            bg: "primary",
            borderColor: "default",
            color: "primary.foreground"
          }
        },
        _active: {
          "&:not(:disabled)": {
            bg: "primary.active"
          }
        }
      },
      outline: {
        bg: "background",
        borderColor: "text",
        color: "text",
        _hover: {
          "&:not(:disabled)": {
            bg: "background.hover"
          }
        },
        _active: {
          "&:not(:disabled)": {
            bg: "background.active"
          }
        }
      },
      error: {
        bg: "error",
        borderColor: "error",
        color: "error.foreground",
        _hover: {
          "&:not(:disabled)": {
            bg: "error.hover",
            borderColor: "error.hover"
          }
        },
        _active: {
          "&:not(:disabled)": {
            bg: "error.active",
            borderColor: "error.active"
          }
        }
      },
      warning: {
        bg: "warning",
        borderColor: "warning",
        color: "warning.foreground",
        _hover: {
          "&:not(:disabled)": {
            bg: "warning.hover",
            borderColor: "warning.hover"
          }
        },
        _active: {
          "&:not(:disabled)": {
            bg: "warning.active",
            borderColor: "warning.active"
          }
        }
      }
    },
    size: {
      sm: {
        borderRadius: "component.md",
        height: "component.sm",
        px: "2",
        fontSize: "small",
        _hover: {
          "&:not(:disabled)": {
            boxShadow: "component.sm"
          }
        }
      },
      md: {
        height: "component.md",
        px: "2.5",
        borderRadius: "component.md",
        fontSize: "small",
        _hover: {
          "&:not(:disabled)": {
            boxShadow: "component.md"
          }
        }
      },
      lg: {
        height: "component.lg",
        px: "3.5",
        borderRadius: "component.lg",
        fontSize: "medium",
        _hover: {
          "&:not(:disabled)": {
            boxShadow: "component.lg"
          }
        }
      }
    }
  },
  defaultVariants: {
    variant: "solid",
    size: "md"
  }
});

export type ButtonVariantProps = RecipeVariantProps<typeof buttonVariants>;
