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
    DEFAULT: { value: "{shadows.sm} {colors.text}" },
    error: { value: "{shadows.sm} {colors.error}" }
  },
  md: {
    DEFAULT: { value: "{shadows.md} {colors.text}" },
    error: { value: "{shadows.md} {colors.error}" }
  },
  lg: {
    DEFAULT: { value: "{shadows.lg} {colors.text}" },
    error: { value: "{shadows.lg} {colors.error}" }
  }
};

export const darkComponentShadows: ComponentShadows = {
  sm: {
    DEFAULT: { value: "{shadows.sm} {colors.black}" },
    error: { value: "{shadows.sm} {colors.error}" }
  },
  md: {
    DEFAULT: { value: "{shadows.md} {colors.black}" },
    error: { value: "{shadows.md} {colors.error}" }
  },
  lg: {
    DEFAULT: { value: "{shadows.lg} {colors.black}" },
    error: { value: "{shadows.lg} {colors.error}" }
  }
};
