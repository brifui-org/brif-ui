import { ComponentSizing, ContainerSizing, Sizing } from "@brifui/types";

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
    value: "{sizes.sm}",
    description: "Used for component's height - 32px"
  },
  md: {
    value: "{sizes.md}",
    description: "Used for component's height - 40px"
  },
  lg: {
    value: "{sizes.lg}",
    description: "Used for component's height - 52px"
  }
};

export const containerSizing: ContainerSizing = {
  sm: {
    value: "640px"
  },
  md: {
    value: "768px"
  },
  lg: {
    value: "1024px"
  },
  xl: {
    value: "1280px"
  },
  xxl: {
    value: "1536px"
  }
};
