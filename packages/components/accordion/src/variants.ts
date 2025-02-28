import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const accordionVariants = sva({
  slots: ["root", "item", "trigger", "content", "icon"],
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
      '&[data-state="open"]': {
        '& > [data-item="icon"]': {
          transform: "rotate(180deg)"
        }
      },
      '&[data-state="closed"]': {
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
      transition: "transform 300ms ease-out"
    },
    content: {
      px: 5,
      py: 2,
      overflow: "hidden",
      boxSizing: "border-box",
      borderTop: "2px solid {colors.border}",
      '&[data-state="open"]': {
        animation: "accordionSlideDown 300ms ease-out"
      },
      '&[data-state="closed"]': {
        animation: "accordionSlideUp 300ms ease-out"
      }
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
          mb: 2,
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
          mb: 4,
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
          mb: 6,
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
