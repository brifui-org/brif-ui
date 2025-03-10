import { cva, type RecipeVariantProps } from "@brifui/styled/css";

export const buttonVariants = cva({
  base: {
    display: "flex",
    width: "max-content",
    alignItems: "center",
    justifyContent: "center",
    transition: "box-shadow .15s, transform .15s",
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
    /**
     * Disabled
     */
    _disabled: {
      cursor: "not-allowed",
      backgroundColor:
        "color-mix(in oklab, var(--brif-button-bg-color), {colors.background} 68%)",
      borderColor:
        "color-mix(in oklab, var(--brif-button-border-color), {colors.background} 68%)",
      color:
        "color-mix(in oklab, var(--brif-button-text-color), {colors.background} 68%)"
    }
  },
  variants: {
    variant: {
      solid: {
        bg: "default",
        borderColor: "default",
        color: "default.foreground",
        "--brif-button-bg-color": "token(colors.default)",
        "--brif-button-border-color": "token(colors.default)",
        "--brif-button-text-color": "token(colors.default.foreground)",
        _hover: {
          "&:not(:disabled)": {
            bg: "primary",
            borderColor: "border",
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
        borderColor: "border",
        color: "text",
        "--brif-button-bg-color": "token(colors.background)",
        "--brif-button-border-color": "token(colors.text)",
        "--brif-button-text-color": "token(colors.text)",
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
        "--brif-button-bg-color": "token(colors.error)",
        "--brif-button-border-color": "token(colors.error)",
        "--brif-button-text-color": "token(colors.error.foreground)",
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
        "--brif-button-bg-color": "token(colors.warning)",
        "--brif-button-border-color": "token(colors.warning)",
        "--brif-button-text-color": "token(colors.warning.foreground)",
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
        textStyle: "button.xs",
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
        textStyle: "button.sm",
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
        textStyle: "button.md",
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
      },
      icon: {
        aspectRatio: "1/1",
        borderRadius: "component.md",
        "&:not(:disabled)": {
          _hover: {
            boxShadow: "component.md",
            transform: "translate(-2px, -2px)"
          },
          _active: {
            boxShadow: "component.sm",
            transform: "translate(0px, 0px)"
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
