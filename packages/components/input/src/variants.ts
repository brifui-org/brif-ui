import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const inputVariants = sva({
  slots: ["root", "input", "prefix", "suffix"],
  base: {
    root: {
      overflow: "hidden",
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
      '&:not([aria-invalid="true"])': {
        "&:not(:focus-within)": {
          "&:not(:has(input:disabled))": {
            _hover: {
              borderColor: "border.hover"
            }
          }
        }
      },
      _focusWithin: {
        borderColor: "border",
        outline: "2px solid {colors.primary}"
      },
      "&:has(input:disabled)": {
        bg: "background.disabled",
        color: "text.disabled",
        borderColor: "border.disabled",
        "& > *": {
          cursor: "not-allowed"
        }
      }
    },
    input: {
      flex: 1,
      width: "100%",
      height: "100%",
      _focus: {
        outline: "none"
      }
    },
    prefix: {
      color: "inherit",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    suffix: {
      color: "inherit",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  },
  variants: {
    hasPrefix: {
      true: {}
    },
    hasSuffix: {
      true: {}
    },
    size: {
      sm: {
        root: {
          borderRadius: "component.md",
          height: "component.sm",
          textStyle: "text.sm"
        },
        input: {
          px: 2
        },
        prefix: {
          px: 2
        },
        suffix: {
          px: 2
        }
      },
      md: {
        root: {
          height: "component.md",
          borderRadius: "component.md",
          textStyle: "text.md"
        },
        input: {
          px: 2.5
        },
        prefix: {
          px: 2.5
        },
        suffix: {
          px: 2.5
        }
      },
      lg: {
        root: {
          height: "component.lg",
          borderRadius: "component.lg",
          textStyle: "text.lg"
        },
        input: {
          px: 3.5
        },
        prefix: {
          px: 3.5
        },
        suffix: {
          px: 3.5
        }
      }
    },
    bordered: {
      true: {
        prefix: {
          borderRightWidth: "2px",
          borderRightStyle: "solid",
          borderRightColor: "inherit"
        },
        suffix: {
          borderLeftWidth: "2px",
          borderLeftStyle: "solid",
          borderLeftColor: "inherit"
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
    hasPrefix: false,
    bordered: true,
    error: false
  }
});

export type InputVariantProps = RecipeVariantProps<typeof inputVariants>;
