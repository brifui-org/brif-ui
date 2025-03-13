import { ComponentShadows, Shadows } from "@brifui/types";

export const shadows: Shadows = {
  sm: {
    value: "2px 2px 0 0"
  },
  md: {
    value: "4px 4px 0 0"
  },
  lg: {
    value: "6px 6px 0 0"
  }
};

export const componentShadows: ComponentShadows = {
  sm: {
    DEFAULT: { value: "{shadows.sm}" }
  },
  md: {
    DEFAULT: { value: "{shadows.md}" }
  },
  lg: {
    DEFAULT: { value: "{shadows.lg}" }
  }
};

export const darkComponentShadows: ComponentShadows = {
  sm: {
    DEFAULT: { value: "{shadows.sm}" }
  },
  md: {
    DEFAULT: { value: "{shadows.md}" }
  },
  lg: {
    DEFAULT: { value: "{shadows.lg}" }
  }
};
