import { defineSlotRecipe } from "@pandacss/dev";

export const buttonSlotRecipe = defineSlotRecipe({
  className: "button",
  description: "The styles of the `Button` component",
  slots: ["root", "container"],
  base: {
    root: {
      "&:not(:disabled)": {
        /**
         * Hover
         */
        _hover: {
          "&>div": {
            cursor: "pointer",
            boxShadow: "component.md",
            transform: "translate(-4px, -4px)"
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
         * Active state
         */
        _active: {
          "&>div": {
            boxShadow: "sm",
            transform: "translate(-2px, -2px)"
          }
        }
      },
      /**
       * Disabled
       */
      _disabled: {
        cursor: "not-allowed"
      }
    },
    container: {
      backgroundColor: "var(--brif-button-bg-color)",
      borderColor: "var(--brif-button-border-color)",
      color: "var(--brif-button-text-color)",
      display: "flex",
      width: "100%",
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
      _groupDisabled: {
        backgroundColor:
          "color-mix(in oklab, var(--brif-button-bg-color), {colors.background} 68%)",
        borderColor:
          "color-mix(in oklab, var(--brif-button-border-color), {colors.background} 68%)",
        color:
          "color-mix(in oklab, var(--brif-button-text-color), {colors.background} 68%)"
      }
    }
  },
  variants: {
    variant: {
      solid: {
        root: {
          "&:not(:disabled)": {
            _hover: {
              "&>div": {
                bg: "primary",
                borderColor: "border",
                color: "primary.foreground"
              }
            },
            _active: {
              "&>div": {
                bg: "primary.active"
              }
            }
          }
        },
        container: {
          "--brif-button-bg-color": "token(colors.default)",
          "--brif-button-border-color": "token(colors.default)",
          "--brif-button-text-color": "token(colors.default.foreground)"
        }
      },
      outline: {
        root: {
          "&:not(:disabled)": {
            _hover: {
              "&>div": {
                bg: "background.hover"
              }
            },
            _active: {
              "&>div": {
                bg: "background.active"
              }
            }
          }
        },
        container: {
          "--brif-button-bg-color": "token(colors.background)",
          "--brif-button-border-color": "token(colors.text)",
          "--brif-button-text-color": "token(colors.text)"
        }
      },
      error: {
        root: {
          "&:not(:disabled)": {
            _hover: {
              "&>div": {
                bg: "error.hover",
                borderColor: "error.hover"
              }
            },
            _active: {
              "&>div": {
                bg: "error.active",
                borderColor: "error.active"
              }
            }
          }
        },
        container: {
          "--brif-button-bg-color": "token(colors.error)",
          "--brif-button-border-color": "token(colors.error)",
          "--brif-button-text-color": "token(colors.error.foreground)"
        }
      },
      warning: {
        root: {
          "&:not(:disabled)": {
            _hover: {
              "&>div": {
                bg: "warning.hover",
                borderColor: "warning.hover"
              }
            },
            _active: {
              "&>div": {
                bg: "warning.active",
                borderColor: "warning.active"
              }
            }
          }
        },
        container: {
          "--brif-button-bg-color": "token(colors.warning)",
          "--brif-button-border-color": "token(colors.warning)",
          "--brif-button-text-color": "token(colors.warning.foreground)"
        }
      }
    },
    size: {
      sm: {
        root: {
          borderRadius: "component.md"
        },
        container: {
          px: "2",
          borderRadius: "component.md",
          height: "component.sm",
          textStyle: "button.xs"
        }
      },
      md: {
        root: {
          borderRadius: "component.md"
        },
        container: {
          px: "2.5",
          height: "component.md",
          borderRadius: "component.md",
          textStyle: "button.sm"
        }
      },
      lg: {
        root: {
          borderRadius: "component.lg"
        },
        container: {
          px: "3.5",
          height: "component.lg",
          borderRadius: "component.lg",
          textStyle: "button.md"
        }
      },
      icon: {
        root: {
          borderRadius: "component.md"
        },
        container: {
          aspectRatio: "1/1",
          borderRadius: "component.md"
        }
      }
    },
    fluid: {
      true: {
        root: {
          width: "100%"
        }
      }
    }
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
    fluid: false
  }
});
