import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const checkboxVariants = sva({
  slots: ["root", "indicator", "label"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      transition: "border-color .15s, box-shadow .15s",
      "&[data-disabled]": {
        cursor: "not-allowed"
      }
    },
    indicator: {
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "border",
      transition: "border-color .15s, box-shadow .15s",
      '&[data-state="checked"]': {
        bg: "default",
        color: "default.foreground",
        _groupHover: {
          bg: "primary",
          color: "primary.foreground"
        }
      },
      '&[data-state="unchecked"]': {
        bg: "background"
      },
      "&[data-disabled]": {
        pointerEvents: "none",
        borderColor: "border.disabled"
      }
    },
    label: {
      pl: 2,
      color: "text",
      cursor: "pointer",
      "&[data-disabled]": {
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
          },
          _groupHover: {
            "&:not([data-disabled])": {
              boxShadow: "component.sm"
            }
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
          },
          _groupHover: {
            "&:not([data-disabled])": {
              boxShadow: "component.sm"
            }
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
          },
          _groupHover: {
            "&:not([data-disabled])": {
              boxShadow: "component.sm"
            }
          }
        }
      }
    },
    indeterminate: {
      true: {},
      false: {}
    }
  },
  defaultVariants: {
    size: "md",
    indeterminate: false
  }
});

export type CheckBoxVariantProps = RecipeVariantProps<typeof checkboxVariants>;
