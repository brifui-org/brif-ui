import { ComponentShadows, Shadows } from "@brifui/types";

export const shadows: Shadows = {
  sm: {
    value: "2px 2px 0 0 {colors.gray.1000}"
  },
  md: {
    value: "4px 4px 0 0 {colors.gray.1000}"
  },
  lg: {
    value: "6px 6px 0 0 {colors.gray.1000}"
  }
};

export const componentShadows: ComponentShadows = {
  sm: {
    value: "shadows.sm"
  },
  md: {
    value: "shadows.md"
  },
  lg: {
    value: "shadows.lg"
  }
};
