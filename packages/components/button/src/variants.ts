import { cva, type RecipeVariantProps } from "@brifui/styled/css";

export const buttonVariants = cva({
  base: {
    display: "flex",
    width: "max-content",
    alignItems: "center",
    justifyContent: "center",
    transition: "border-color .15s, box-shadow .15s, transform .15s",
    borderWidth: "2px",
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
        textStyle: "sm",
        "&:not(:disabled)": {
          _hover: {
            boxShadow: "component.sm",
            transform: "translate(-2px, -2px)"
          },
          _active: {
            boxShadow: "none",
            transform: "translate(-0px, -0px)"
          }
        }
      },
      md: {
        height: "component.md",
        px: "2.5",
        borderRadius: "component.md",
        textStyle: "md",
        "&:not(:disabled)": {
          _hover: {
            boxShadow: "component.md",
            transform: "translate(-4px, -4px)"
          },
          _active: {
            boxShadow: "component.sm",
            transform: "translate(-2px, -2px)"
          }
        }
      },
      lg: {
        height: "component.lg",
        px: "3.5",
        borderRadius: "component.lg",
        textStyle: "lg",
        "&:not(:disabled)": {
          _hover: {
            boxShadow: "component.lg",
            transform: "translate(-6px, -6px)"
          },
          _active: {
            boxShadow: "component.md",
            transform: "translate(-4px, -4px)"
          }
        }
      }
    },
    fluid: {
      true: {
        width: "100%"
      }
    }
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
    fluid: false
  }
});

export type ButtonVariantProps = RecipeVariantProps<typeof buttonVariants>;
