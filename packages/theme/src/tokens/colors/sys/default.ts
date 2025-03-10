import { DefaultColors } from "@brifui/types";

export const defaultColors: DefaultColors = {
  DEFAULT: {
    value: "{colors.gray.1000}"
  },
  foreground: {
    value: "{colors.gray.100}"
  },
  hover: {
    value: "{colors.gray.600}"
  },
  active: {
    value: "{colors.gray.800}"
  },
  disabled: {
    value: "color-mix(in oklab, {colors.default}, {colors.background} 68%)"
  }
};

export const darkDefaultColors: DefaultColors = {
  DEFAULT: {
    value: "{colors.gray.1000}"
  },
  foreground: {
    value: "{colors.gray.100}"
  },
  hover: {
    value: "{colors.gray.600}"
  },
  active: {
    value: "{colors.gray.800}"
  },
  disabled: {
    value: "color-mix(in oklab, {colors.default}, {colors.background} 68%)"
  }
};
