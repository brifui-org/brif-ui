import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const tableVariants = sva({
  slots: ["root", "table", "head", "body", "foot", "row", "hcell", "cell"],
  base: {
    root: {
      border: "2px solid {colors.border}",
      overflow: "auto"
    },
    table: {
      w: "100%",
      textStyle: "text.sm"
    },
    row: {
      transition: "color .2s ease",
      "&:last-child": {
        "& td": {
          borderBottom: "none"
        }
      }
    },
    hcell: {
      px: 2,
      whiteSpace: "nowrap",
      transition: "background-color .2s ease",
      textAlign: "left",
      color: "text.muted",
      fontWeight: "semibold",
      "&:last-child": {
        textAlign: "right"
      },
      borderBottom: "1px solid {colors.border}"
    },
    cell: {
      px: 2,
      whiteSpace: "nowrap",
      transition: "background-color .3s ease",
      textAlign: "left",
      "&:last-child": {
        textAlign: "right"
      }
    }
  },
  variants: {
    size: {
      sm: {
        root: {
          borderRadius: "md"
        },
        cell: {
          py: 1.5
        },
        hcell: {
          h: "component.sm"
        }
      },
      md: {
        root: {
          borderRadius: "md"
        },
        cell: {
          py: 2.5
        },
        hcell: {
          h: "component.md"
        }
      },
      lg: {
        root: {
          borderRadius: "lg"
        },
        cell: {
          py: 3.5
        },
        hcell: {
          h: "component.lg"
        }
      }
    },
    striped: {
      true: {
        row: {
          "&:nth-child(odd)": {
            "& td": {
              bg: "color-mix(in srgb, {colors.background.muted}, transparent)"
            }
          }
        }
      }
    },
    interactive: {
      true: {
        row: {
          _hover: {
            "& td": {
              background: "background.hover"
            }
          }
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    striped: false,
    interactive: false
  }
});

export type TableVariantProps = RecipeVariantProps<typeof tableVariants>;
