import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const toastVariants = sva({
  slots: [
    "toast",
    "content",
    "description",
    "actionButton",
    "cancelButton",
    "icon",
    "loader"
  ],
  base: {
    toast: {
      p: 4,
      gap: 1.5,
      display: "flex",
      alignItems: "center",
      w: "var(--width)",
      bg: "background",
      borderRadius: "component.md",
      border: "2px solid {colors.border}",
      boxShadow: "component.md",
      overflow: "hidden",
      '&[data-type="warning"]': {
        bg: "warning",
        color: "warning.foreground"
      },
      '&[data-type="error"]': {
        bg: "error",
        color: "error.foreground"
      },
      '&[data-type="success"]': {
        bg: "green.600",
        color: "text"
      }
    },
    icon: {
      display: "flex",
      width: "4",
      height: "4",
      justifyContent: "flex-start",
      alignItems: "center",
      flexShrink: "0",
      marginLeft: "var(--toast-icon-margin-start)",
      marginRight: "var(--toast-icon-margin-end)",
      position: "relative",
      color: "text",
      '&[data-type="warning"]': {
        color: "warning.foreground"
      },
      '&[data-type="error"]': {
        color: "error.foreground"
      },
      '&[data-type="success"]': {
        color: "primary.foreground"
      }
    },
    content: {
      flex: 1,
      color: "text",
      textStyle: "text.md",
      fontWeight: "semibold",
      textOverflow: "ellipsis"
    },
    description: {
      color: "text.muted",
      textStyle: "text.sm"
    },
    cancelButton: {},
    loader: {}
  }
});

export type ToastVariantProps = RecipeVariantProps<typeof toastVariants>;
