import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const formVariants = sva({
  slots: [
    "root",
    "field",
    "control",
    "label",
    "submit",
    "error",
    "optionalText",
    "fieldLabelContainer"
  ],
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
      textStyle: "heading.md",
      fontWeight: "semibold",
      '.group[data-invalid="true"] &': {
        color: "error"
      }
    },
    error: {
      pt: 1,
      display: "none",
      color: "error",
      textStyle: "text.xs",
      '.group[data-invalid="true"] &': {
        display: "block"
      }
    },
    optionalText: {
      textStyle: "text.xs",
      color: "text.muted"
    },
    fieldLabelContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }
});

export type FormVariantProps = RecipeVariantProps<typeof formVariants>;
