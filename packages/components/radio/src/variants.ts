import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const radioVariants = sva({
  slots: ["root", "itemContainer", "item", "indicator", "label"],
  base: {
    root: {
      display: "grid",
      gap: 2
    },
    item: {
      p: "px",
      aspectRatio: "1/1",
      border: "2px solid {colors.border}",
      borderRadius: "50%",
      cursor: "pointer",
      "&:not(:disabled)": {
        _focusVisible: {
          outline: "4px solid {colors.primary}",
          outlineOffset: "px"
        }
      },
      _disabled: {
        borderColor:
          "color-mix(in oklab, {colors.border}, {colors.background} 68%)",
        backgroundColor:
          "color-mix(in oklab, {colors.background}, {colors.background} 68%)",
        _checked: {
          borderColor:
            "color-mix(in oklab, {colors.text}, {colors.background} 68%)"
        },
        "&[aria-invalid]": {
          borderColor:
            "color-mix(in oklab, {colors.error}, {colors.background} 68%)"
        }
      },
      _checked: {
        borderColor: "text"
      }
    },
    itemContainer: {
      display: "flex",
      alignItems: "center"
    },
    indicator: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& > svg": {
        width: "100%",
        height: "100%",
        fill: "text",
        stroke: "text"
      },
      _disabled: {
        "& > svg": {
          stroke: "color-mix(in oklab, {colors.text}, {colors.background} 68%)",
          fill: "color-mix(in oklab, {colors.text}, {colors.background} 68%)"
        },
        _checked: {
          "&[aria-invalid]": {
            "& > svg": {
              stroke:
                "color-mix(in oklab, {colors.error}, {colors.background} 68%)",
              fill: "color-mix(in oklab, {colors.error}, {colors.background} 68%)"
            }
          }
        }
      }
    },
    label: {
      pl: 2,
      cursor: "pointer"
    }
  },
  variants: {
    size: {
      sm: {
        itemContainer: {
          h: "component.sm"
        },
        item: {
          w: "16px",
          h: "16px",
          "&:not(:disabled)": {
            _hover: {
              boxShadow: "component.sm"
            }
          }
        }
      },
      md: {
        itemContainer: {
          h: "component.md"
        },
        item: {
          w: "20px",
          h: "20px",
          "&:not(:disabled)": {
            _hover: {
              boxShadow: "component.sm"
            }
          }
        }
      },
      lg: {
        itemContainer: {
          h: "component.lg"
        },
        item: {
          w: "24px",
          h: "24px",
          "&:not(:disabled)": {
            _hover: {
              boxShadow: "component.sm"
            }
          }
        }
      }
    },
    error: {
      true: {
        item: {
          borderColor: "error",
          _checked: {
            borderColor: "error"
          },
          "&:not(:disabled)": {
            _hover: {
              boxShadow: "component.sm.error"
            }
          }
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    error: false
  }
});

export type RadioVariantProps = RecipeVariantProps<typeof radioVariants>;
