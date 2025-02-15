import { ComponentRadii, Radii } from "@brifui/types";

export const radii: Radii = {
  sm: {
    value: "0.125rem"
  },
  none: {
    value: "0"
  },
  md: {
    value: "0.375rem"
  },
  lg: {
    value: "0.5rem"
  },
  xl: {
    value: "0.75rem"
  }
};

export const componentRadii: ComponentRadii = {
  sm: {
    value: "{radii.sm}"
  },
  none: {
    value: "{radii.none}"
  },
  md: {
    value: "{radii.md}"
  },
  lg: {
    value: "{radii.lg}"
  },
  xl: {
    value: "{radii.xl}"
  }
};
