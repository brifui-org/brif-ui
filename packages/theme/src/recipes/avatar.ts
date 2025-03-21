import { defineSlotRecipe } from "@pandacss/dev";

export const avatarSlotRecipe = defineSlotRecipe({
  className: "avatar",
  description: "The styles of the `Avatar` component",
  slots: ["root", "img"],
  base: {
    root: {
      w: "var(--size)",
      h: "var(--size)",
      overflow: "hidden",
      boxSizing: "border-box",
      borderRadius: "9999px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "border"
    },
    img: {
      w: "100%",
      h: "100%",
      objectFit: "cover",
      objectPosition: "center",
      transition: "opacity .15s ease"
    }
  },
  variants: {
    isLoading: {
      true: {
        root: {
          borderStyle: "dashed",
          bg: "background.muted",
          animation: "spin 5s linear infinite"
        },
        img: {
          opacity: 0
        }
      },
      false: {
        root: {
          borderStyle: "solid"
        },
        img: {
          opacity: 1
        }
      }
    }
  },
  defaultVariants: {
    isLoading: false
  }
});
