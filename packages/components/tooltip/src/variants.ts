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
      border: "2px solid {colors.text}",
      borderRadius: "component.md",
      fontWeight: "medium"
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
        content: { bg: "error" }
      }
    }
  },
  defaultVariants: {
    type: "default"
  }
});

export type TooltipVariantProps = RecipeVariantProps<typeof tooltipVariants>;
