import { ComponentSizing, ContainerSizing, Sizing } from "@brifui/types";

export const sizing: Sizing = {
  sm: {
    value: "32px",
    description: "Used for component's height - 32px"
  },
  md: {
    value: "40px",
    description: "Used for component's height - 40px"
  },
  lg: {
    value: "52px",
    description: "Used for component's height - 52px"
  },
  px: {
    value: "1px"
  },
  0: {
    value: "0"
  },
  0.5: {
    value: "0.125rem"
  },
  1: {
    value: "0.25rem"
  },
  1.5: {
    value: "0.375rem"
  },
  2: {
    value: "0.5rem"
  },
  2.5: {
    value: "0.625rem"
  },
  3: {
    value: "0.75rem"
  },
  3.5: {
    value: "0.875rem"
  },
  4: {
    value: "1rem"
  },
  5: {
    value: "1.25rem"
  },
  6: {
    value: "1.5rem"
  },
  7: {
    value: "1.75rem"
  },
  8: {
    value: "2rem"
  },
  9: {
    value: "2.25rem"
  },
  10: {
    value: "2.5rem"
  },
  11: {
    value: "2.75rem"
  },
  12: {
    value: "3rem"
  },
  14: {
    value: "3.5rem"
  },
  16: {
    value: "4rem"
  },
  20: {
    value: "5rem"
  },
  24: {
    value: "6rem"
  },
  28: {
    value: "7rem"
  },
  32: {
    value: "8rem"
  },
  36: {
    value: "9rem"
  },
  40: {
    value: "10rem"
  },
  44: {
    value: "11rem"
  },
  48: {
    value: "12rem"
  },
  52: {
    value: "13rem"
  },
  56: {
    value: "14rem"
  },
  60: {
    value: "15rem"
  },
  64: {
    value: "16rem"
  },
  72: {
    value: "18rem"
  },
  80: {
    value: "20rem"
  },
  96: {
    value: "24rem"
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
    value: "640px",
    description: "Used for container's width - 640px"
  },
  md: {
    value: "768px",
    description: "Used for container's width - 768px"
  },
  lg: {
    value: "1024px",
    description: "Used for container's width - 1024px"
  },
  xl: {
    value: "1280px",
    description: "Used for container's width - 1280px"
  },
  xxl: {
    value: "1536px",
    description: "Used for container's width - 1536px"
  }
};
