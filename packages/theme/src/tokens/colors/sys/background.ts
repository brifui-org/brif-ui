import { BackgroundColors } from "@brifui/types";

export const background: BackgroundColors = {
  DEFAULT: {
    value: "{colors.white}"
  },
  muted: {
    value: "{colors.gray.100}"
  },
  hover: {
    value: "{colors.gray.200}"
  },
  active: {
    value: "{colors.gray.300}"
  },
  disabled: {
    value: "color-mix(in oklab, {colors.background}, white 68%)"
  }
};

export const darkBackground: BackgroundColors = {
  DEFAULT: {
    value: "{colors.gray.300}"
  },
  muted: {
    value: "{colors.gray.500}"
  },
  hover: {
    value: "{colors.gray.600}"
  },
  active: {
    value: "{colors.gray.700}"
  },
  disabled: {
    value: "color-mix(in oklab, {colors.background}, white 32%)"
  }
};
