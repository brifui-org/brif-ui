import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const accordionVariants = sva({
  slots: ["root", "item", "trigger", "contentContainer", "content", "icon"],
  base: {
    root: {
      w: "100%",
      overflow: "hidden",
      border: "2px solid {colors.border}",
      "& > div": {
        "&:not(:last-child)": {
          borderBottom: "2px solid {colors.border}"
        }
      }
    },
    trigger: {
      px: 5,
      bg: "background.active",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      fontWeight: "semibold",
      w: "100%",
      "&>span": {
        flex: 1,
        textAlign: "start"
      },
      _open: {
        '& > [data-item="icon"]': {
          transform: "rotate(180deg)"
        }
      },
      _closed: {
        '& > [data-item="icon"]': {
          transform: "rotate(0deg)"
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
    icon: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform .2s ease"
    },
    contentContainer: {
      bg: "background",
      overflow: "hidden",
      willChange: "height",
      _open: {
        animation: "accordionSlideDown .2s ease"
      },
      _closed: {
        animation: "accordionSlideUp .2s ease"
      }
    },
    content: {
      px: 5,
      py: 2,
      borderTop: "2px solid {colors.border}"
    }
  },
  variants: {
    size: {
      sm: {
        root: {
          borderRadius: "component.md"
        },
        trigger: {
          textStyle: "sm",
          h: "component.sm"
        },
        icon: {
          w: "16px",
          h: "16px",
          "& svg": {
            w: "14px",
            h: "14px"
          }
        },
        content: {
          textStyle: "sm"
        }
      },
      md: {
        root: {
          borderRadius: "component.md"
        },
        trigger: {
          textStyle: "md",
          h: "component.md"
        },
        icon: {
          w: "20px",
          h: "20px",
          "& svg": {
            w: "18px",
            h: "18px"
          }
        },
        content: {
          textStyle: "md"
        }
      },
      lg: {
        root: {
          borderRadius: "component.lg"
        },
        trigger: {
          textStyle: "lg",
          h: "component.lg"
        },
        icon: {
          w: "24px",
          h: "24px",
          "& svg": {
            w: "20px",
            h: "20px"
          }
        },
        content: {
          textStyle: "lg"
        }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export type AccordionVariantProps = RecipeVariantProps<
  typeof accordionVariants
>;
