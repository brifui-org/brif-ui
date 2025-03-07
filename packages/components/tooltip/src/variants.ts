import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const tooltipVariants = sva({
  slots: ["content"],
  base: {
    content: {
      p: 2,
      zIndex: "50",
      maxH: "var(--radix-tooltip-content-available-height)",
      transformOrigin: "var(--radix-tooltip-content-transform-origin)",
      textStyle: "text.sm",
      border: "2px solid {colors.border}",
      borderRadius: "component.md"
    }
  },
  variants: {
    type: {
      default: {
        content: { bg: "default", color: "default.foreground" }
      },
      warning: {
        content: { bg: "warning", color: "warning.foreground" }
      },
      error: {
        content: { bg: "error", color: "error.foreground" }
      }
    }
  },
  defaultVariants: {
    type: "default"
  }
});

export type TooltipVariantProps = RecipeVariantProps<typeof tooltipVariants>;
