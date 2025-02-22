import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const selectVariants = sva({
  slots: ["root", "trigger", "content", "item"],
  base: {
    content: {
      p: 2,
      bg: "background",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "border",
      minW: "var(--radix-select-trigger-width)",
      maxH: "var(--radix-select-content-available-height)"
    },
    item: {
      p: 2,
      border: "none",
      outline: "none",
      cursor: "pointer",
      "&[data-highlighted]": {
        bg: "background.hover"
      },
      "&[data-disabled]": {
        cursor: "not-allowed",
        opacity: ".32"
      }
    }
  },
  variants: {
    size: {
      sm: {
        content: {
          borderRadius: "component.md"
        },
        item: {
          fontSize: "small",
          borderRadius: "component.md"
        }
      },
      md: {
        content: {
          borderRadius: "component.md"
        },
        item: {
          fontSize: "small",
          borderRadius: "component.md"
        }
      },
      lg: {
        content: {
          borderRadius: "component.lg"
        },
        item: {
          fontSize: "medium",
          borderRadius: "component.lg"
        }
      }
    },
    error: {
      true: {
        trigger: {
          borderColor: "error"
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    error: false
  },
  compoundVariants: [
    {
      size: "sm",
      error: true,
      css: {
        trigger: {
          _hover: {
            "&:not(:disabled)": {
              boxShadow: "component.sm.error"
            }
          }
        }
      }
    },
    {
      size: "md",
      error: true,
      css: {
        trigger: {
          _hover: {
            "&:not(:disabled)": {
              boxShadow: "component.md.error"
            }
          }
        }
      }
    },
    {
      size: "lg",
      error: true,
      css: {
        trigger: {
          _hover: {
            "&:not(:disabled)": {
              boxShadow: "component.lg.error"
            }
          }
        }
      }
    }
  ]
});

export type SelectVariantProps = RecipeVariantProps<typeof selectVariants>;
