import { defineSlotRecipe } from "@pandacss/dev";

export const scrollareaSlotRecipe = defineSlotRecipe({
  className: "scrollarea",
  description: "The styles of the `Scrollarea` component",
  slots: ["root", "viewport", "scrollbar", "corner", "thumb"],
  base: {
    root: {
      position: "relative",
      overflow: "hidden"
    },
    viewport: {
      w: "100%",
      h: "100%",
      borderRadius: "inherit"
    },
    scrollbar: {
      p: "px",
      display: "flex",
      touchAction: "none",
      userSelect: "none",
      transition: "colors"
    },
    thumb: {
      position: "relative",
      flex: 1,
      borderRadius: "component.md",
      background: "text/50",
      _hover: {
        background: "text.hover/60"
      },
      _active: {
        background: "text.hover/70"
      }
    }
  },
  variants: {
    orientation: {
      vertical: {
        scrollbar: {
          h: "100%",
          w: "2.5",
          borderLeft: "2px solid {colors.border}"
        }
      },
      horizontal: {
        scrollbar: {
          w: "100%",
          h: "2.5",
          borderTop: "2px solid {colors.border}"
        }
      }
    }
  },
  defaultVariants: {
    orientation: "vertical"
  }
});
