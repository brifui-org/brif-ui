import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const alertVariants = sva({
  slots: ["root", "title", "description"],
  base: {
    root: {
      px: 4,
      py: 3,
      textStyle: "text.sm",
      w: "100%",
      position: "relative",
      bg: "background",
      border: "2px solid {colors.border}",
      borderRadius: "component.md",
      boxShadow: "component.md",
      "&>svg": {
        w: 4,
        h: 4,
        top: 4,
        left: 4,
        position: "absolute",
        color: "text",
        "&~*": {
          pl: 7
        },
        "&+div": {
          transform: "translateY(-3px)"
        }
      }
    },
    title: {
      mb: 1,
      fontWeight: "medium",
      lineHeight: "none",
      letterSpacing: "tight"
    },
    description: {
      textStyle: "text.sm",
      "& p": {
        lineHeight: "relaxed"
      }
    }
  },
  variants: {
    error: {
      true: {
        root: {
          borderColor: "error",
          color: "error",
          boxShadowColor: "error",
          "&>svg": {
            color: "error"
          }
        }
      }
    }
  },
  defaultVariants: {
    error: false
  }
});

export type AlertVariantProps = RecipeVariantProps<typeof alertVariants>;
