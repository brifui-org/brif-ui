export const accordionSlotRecipe = {
  className: "accordion",
  description: "The styles of the `Accordion` component",
  slots: ["root", "item", "trigger", "contentContainer", "content", "icon"],
  base: {
    root: {
      w: "100%",
      borderRadius: "component.md"
    },
    trigger: {
      px: 5,
      outline: "none",
      bg: "background.muted",
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
      _disabled: {
        cursor: "not-allowed",
        color: "color-mix(in oklab, {colors.text}, {colors.background} 68%)",
        backgroundColor:
          "color-mix(in oklab, {colors.background.muted}, {colors.background} 68%)"
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
    },
    item: {
      overflow: "hidden",
      border: "2px solid {colors.border}",
      borderBottom: "none",
      _first: {
        borderTopLeftRadius: "component.md",
        borderTopRightRadius: "component.md"
      },
      _last: {
        borderBottom: "2px solid {colors.border}",
        borderBottomLeftRadius: "component.md",
        borderBottomRightRadius: "component.md"
      },
      _only: {
        borderBottom: "2px solid {colors.border}"
      },
      /**
       * Focus within
       */
      _focusWithin: {
        outline: "4px solid {colors.primary}"
      }
    }
  },
  variants: {
    size: {
      sm: {
        trigger: {
          textStyle: "heading.sm",
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
          textStyle: "text.sm"
        }
      },
      md: {
        trigger: {
          textStyle: "heading.md",
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
          textStyle: "text.md"
        }
      },
      lg: {
        trigger: {
          textStyle: "heading.lg",
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
          textStyle: "text.lg"
        }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
} satisfies BrifUISlotRecipeConfig;
