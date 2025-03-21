import { defineSlotRecipe } from "@pandacss/dev";

export const dialogSlotRecipe = defineSlotRecipe({
  className: "dialog",
  description: "The styles of `Dialog` component",
  slots: [
    "root",
    "overlay",
    "content",
    "close",
    "title",
    "description",
    "header",
    "body",
    "footer",
    "trigger"
  ],
  base: {
    overlay: {
      inset: "0",
      zIndex: "50",
      position: "fixed",
      backgroundColor: "black/30",
      backdropFilter: "blur({spacing.2})"
    },
    content: {
      p: 6,
      h: "fit-content",
      w: "100%",
      inset: "0",
      left: "50%",
      top: "50%",
      zIndex: "50",
      position: "fixed",
      bg: "background",
      border: "2px solid {colors.border}",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
      gap: 4
    },
    header: {
      display: "flex",
      flexDirection: "column",
      spaceY: "1.5",
      textAlign: {
        base: "center",
        sm: "left"
      }
    },
    footer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: {
        sm: "flex-end"
      },
      spaceX: {
        sm: "2"
      },
      mt: "auto"
    },
    title: {
      textStyle: "heading.lg",
      fontWeight: "semibold",
      lineHeight: "none",
      letterSpacing: "tight"
    },
    close: {
      position: "absolute",
      top: "4",
      right: "4",
      cursor: "pointer"
    },
    description: {
      textStyle: "body.sm",
      color: "text.muted"
    }
  },
  variants: {
    size: {
      sm: {
        content: {
          maxW: "dialog.sm",
          borderRadius: "component.md",
          boxShadow: "component.sm"
        }
      },
      md: {
        content: {
          maxW: "dialog.md",
          borderRadius: "component.lg",
          boxShadow: "component.md"
        }
      },
      lg: {
        content: {
          maxW: "dialog.lg",
          borderRadius: "component.lg",
          boxShadow: "component.lg"
        }
      },
      screen: {
        content: {
          maxW: "dialog.screen",
          h: "100svh"
        }
      }
    }
  },
  defaultVariants: { size: "md" }
});
