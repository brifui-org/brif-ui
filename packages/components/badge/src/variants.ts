import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const badgeVariants = sva({
  slots: ["root", "label"],
  base: {
    root: {
      px: 1,
      w: "fit-content",
      bg: "background.muted",
      color: "text",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid {colors.border.muted}",
      borderRadius: "9999px"
    },
    label: {
      px: 2,
      fontWeight: "semibold"
    }
  },
  variants: {
    size: {
      sm: {
        root: {
          height: "24px"
        },
        label: {
          textStyle: "text.xs"
        }
      },
      md: {
        root: {
          height: "28px"
        },
        label: {
          textStyle: "text.xs"
        }
      },
      lg: {
        root: {
          height: "32px"
        },
        label: {
          textStyle: "text.sm"
        }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export type BadgeVariantProps = RecipeVariantProps<typeof badgeVariants>;
