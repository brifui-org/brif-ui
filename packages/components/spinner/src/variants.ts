import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const spinnerVariants = sva({
  slots: ["spinner"],
  base: {
    spinner: {
      display: "inline-block",
      boxSizing: "border-box",
      border: "5px solid {colors.background.muted}",
      borderRadius: "50%",
      borderBottomColor: "text",
      animation: "spin 1s linear infinite"
    }
  },
  variants: {
    size: {
      sm: {
        spinner: {
          width: "component.sm",
          height: "component.sm"
        }
      },
      md: {
        spinner: {
          width: "component.md",
          height: "component.md"
        }
      },
      lg: {
        spinner: {
          width: "component.lg",
          height: "component.lg"
        }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export type SpinnerVariantProps = RecipeVariantProps<typeof spinnerVariants>;
