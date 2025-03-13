import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const switchVariants = sva({
  slots: ["root", "thumb"],
  base: {
    root: {
      cursor: "pointer",
      background: "background",
      borderRadius: "9999px",
      border: "2px solid {colors.border}",
      _checked: {
        bg: "primary",
        '&[data-disabled=""]': {
          bg: "primary.disabled"
        }
      },
      '&:not([data-disabled=""])': {
        _focusVisible: {
          outline: "4px solid {colors.primary}",
          outlineOffset: "2px"
        }
      },
      '&[data-disabled=""]': {
        cursor: "not-allowed",
        borderColor: "border.disabled"
      }
    },
    thumb: {
      w: 6,
      h: 6,
      left: "2px",
      position: "relative",
      display: "block",
      borderRadius: "9999px",
      backgroundColor: "text",
      transition: "transform .15s ease, border .05s ease",
      border: "2px solid {colors.border}",
      _checked: {
        bg: "primary.foreground",
        '&[data-disabled=""]': {
          borderColor: "border.disabled",
          bg: "color-mix(in oklab, {colors.primary.foreground}, {colors.background} 68%)"
        }
      },
      '&[data-disabled=""]': {
        borderColor: "border.disabled",
        bg: "color-mix(in oklab, {colors.text}, {colors.background} 68%)"
      }
    }
  },
  variants: {
    size: {
      sm: {
        root: {
          w: "40px",
          height: "24px",
          '&:not([data-disabled=""])': {
            _hover: {
              boxShadow: "component.sm"
            }
          }
        },
        thumb: {
          w: "16px",
          h: "16px",
          _checked: {
            transform: "translateX(15px)"
          }
        }
      },
      md: {
        root: {
          w: "48px",
          height: "28px",
          '&:not([data-disabled=""])': {
            _hover: {
              boxShadow: "component.sm"
            }
          }
        },
        thumb: {
          w: "20px",
          h: "20px",
          _checked: {
            transform: "translateX(19px)"
          }
        }
      },
      lg: {
        root: {
          w: "56px",
          height: "32px",
          '&:not([data-disabled=""])': {
            _hover: {
              boxShadow: "component.md"
            }
          }
        },
        thumb: {
          w: "24px",
          h: "24px",
          _checked: {
            transform: "translateX(23px)"
          }
        }
      }
    },
    error: {
      true: {
        root: {
          borderColor: "error",
          boxShadowColor: "error"
        }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export type SwitchVariantProps = RecipeVariantProps<typeof switchVariants>;
