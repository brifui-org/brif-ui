import { sva, type RecipeVariantProps } from "@brifui/styled/css";

export const buttonVariants = sva({
  slots: ["root", "container"],
  base: {
    root: {
      "&:not(:disabled)": {
        /**
         * Hover
         */
        _hover: {
          "&>div": {
            cursor: "pointer"
          }
        },
        /**
         * Focus
         */
        _focusVisible: {
          outline: "4px solid {colors.primary}",
          outlineOffset: "2px"
        }
      },
      /**
       * Disabled
       */
      _disabled: {
        cursor: "not-allowed",
        "&>div": {
          backgroundColor:
            "color-mix(in oklab, var(--brif-button-bg-color), {colors.background} 68%)",
          borderColor:
            "color-mix(in oklab, var(--brif-button-border-color), {colors.background} 68%)",
          color:
            "color-mix(in oklab, var(--brif-button-text-color), {colors.background} 68%)"
        }
      }
    },
    container: {
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
      fontWeight: "600"
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
          bg: "default",
          borderColor: "default",
          color: "default.foreground",
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
          bg: "background",
          borderColor: "border",
          color: "text",
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
          bg: "error",
          borderColor: "error",
          color: "error.foreground",
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
          bg: "warning",
          borderColor: "warning",
          color: "warning.foreground",
          "--brif-button-bg-color": "token(colors.warning)",
          "--brif-button-border-color": "token(colors.warning)",
          "--brif-button-text-color": "token(colors.warning.foreground)"
        }
      }
    },
    size: {
      sm: {
        root: {
          borderRadius: "component.md",
          "&:not(:disabled)": {
            _hover: {
              "&>div": {
                boxShadow: "component.sm",
                transform: "translate(-2px, -2px)"
              }
            },
            _active: {
              "&>div": {
                boxShadow: "none",
                transform: "translate(0px, 0px)"
              }
            }
          }
        },
        container: {
          borderRadius: "component.md",
          height: "component.sm",
          px: "2",
          textStyle: "button.xs"
        }
      },
      md: {
        root: {
          borderRadius: "component.md",
          "&:not(:disabled)": {
            _hover: {
              "&>div": {
                boxShadow: "component.md",
                transform: "translate(-4px, -4px)"
              }
            },
            _active: {
              "&>div": {
                boxShadow: "component.sm",
                transform: "translate(-2px, -2px)"
              }
            }
          }
        },
        container: {
          height: "component.md",
          px: "2.5",
          borderRadius: "component.md",
          textStyle: "button.sm"
        }
      },
      lg: {
        root: {
          borderRadius: "component.lg",
          "&:not(:disabled)": {
            _hover: {
              "&>div": {
                boxShadow: "component.lg",
                transform: "translate(-6px, -6px)"
              }
            },
            _active: {
              "&>div": {
                boxShadow: "component.md",
                transform: "translate(-4px, -4px)"
              }
            }
          }
        },
        container: {
          height: "component.lg",
          px: "3.5",
          borderRadius: "component.lg",
          textStyle: "button.md"
        }
      },
      icon: {
        root: {
          borderRadius: "component.md",
          "&:not(:disabled)": {
            _hover: {
              "&>div": {
                boxShadow: "component.sm",
                transform: "translate(-2px, -2px)"
              }
            },
            _active: {
              "&>div": {
                boxShadow: "none",
                transform: "translate(-0px, -0px)"
              }
            }
          }
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

export type ButtonVariantProps = RecipeVariantProps<typeof buttonVariants>;
