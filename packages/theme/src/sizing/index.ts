import { ComponentSizing, Sizing } from "@brifui/types";

export const sizing: Sizing = {
  sm: {
    value: "32px"
  },
  md: {
    value: "40px"
  },
  lg: {
    value: "52px"
  }
};

export const componentSizing: ComponentSizing = {
  sm: {
    value: "{sizes.sm}"
  },
  md: {
    value: "{sizes.md}"
  },
  lg: {
    value: "{sizes.lg}"
  }
};
