import { PrimaryColors } from "@brifui/types";

export const primary: PrimaryColors = {
  DEFAULT: {
    value: "{colors.blue.700}"
  },
  foreground: {
    value: "{colors.gray.100}"
  },
  hover: {
    value: "{colors.blue.600}"
  },
  active: {
    value: "{colors.blue.800}"
  },
  disabled: {
    value: "color-mix(in oklab, {colors.primary}, {colors.background} 68%)"
  }
};

export const darkPrimary: PrimaryColors = {
  DEFAULT: {
    value: "{colors.blue.700}"
  },
  foreground: {
    value: "{colors.text}"
  },
  hover: {
    value: "{colors.blue.600}"
  },
  active: {
    value: "{colors.blue.800}"
  },
  disabled: {
    value: "color-mix(in oklab, {colors.primary}, {colors.background} 68%)"
  }
};
