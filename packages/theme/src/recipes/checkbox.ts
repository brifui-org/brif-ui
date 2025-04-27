export const checkboxSlotRecipe = {
  className: "checkbox",
  description: "The styles of the `Checkbox` component",
  slots: ["root", "indicator", "label"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      transition: "border-color .15s, box-shadow .15s",
      _disabled: {
        cursor: "not-allowed"
      }
    },
    indicator: {
      bg: "background",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "border",
      transition: "border-color .15s, box-shadow .15s",
      _checked: {
        "&:not(:disabled)": {
          bg: "default",
          color: "default.foreground",
          _groupHover: {
            bg: "primary",
            color: "primary.foreground"
          }
        }
      },
      _disabled: {
        color: "text.disabled",
        pointerEvents: "none",
        borderColor: "border.disabled",
        backgroundColor: "background.disabled"
      },
      "&:not([data-disabled])": {
        _groupHover: {
          boxShadow: "component.sm"
        }
      }
    },
    label: {
      pl: 2,
      color: "text",
      cursor: "pointer",
      _disabled: {
        color: "text.disabled",
        pointerEvents: "none"
      }
    }
  },
  variants: {
    size: {
      sm: {
        label: {
          textStyle: "text.sm"
        },
        indicator: {
          w: "16px",
          h: "16px",
          borderRadius: "component.md",
          "& svg": {
            w: "12px",
            h: "12px"
          }
        }
      },
      md: {
        label: {
          textStyle: "text.md"
        },
        indicator: {
          w: "20px",
          h: "20px",
          borderRadius: "component.md",
          "& svg": {
            w: "14px",
            h: "14px"
          }
        }
      },
      lg: {
        label: {
          textStyle: "text.lg"
        },
        indicator: {
          w: "24px",
          h: "24px",
          borderRadius: "component.lg",
          "& svg": {
            w: "18px",
            h: "18px"
          }
        }
      }
    },
    indeterminate: {
      true: {},
      false: {}
    },
    error: {
      true: {
        indicator: {
          borderColor: "error",
          boxShadowColor: "error",
          _disabled: {
            borderColor: "error/32"
          }
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    indeterminate: false,
    error: false
  }
} satisfies BrifUISlotRecipeConfig;
