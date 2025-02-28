import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const formVariants = sva({
  slots: ["root", "field", "control", "label", "submit", "error"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    },
    field: {
      display: "flex",
      flexDirection: "column",
      gap: 1
    },
    label: {
      textStyle: "md",
      fontWeight: "semibold",
      '.group[data-invalid="true"] &': {
        color: "error"
      }
    },
    error: {
      pt: 1,
      display: "none",
      color: "error",
      textStyle: "xs",
      '.group[data-invalid="true"] &': {
        display: "block"
      }
    }
  }
});

export type FormVariantProps = RecipeVariantProps<typeof formVariants>;
