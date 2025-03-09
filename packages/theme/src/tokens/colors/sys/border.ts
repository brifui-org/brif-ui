import { BorderColors } from "@brifui/types";

export const border: BorderColors = {
  DEFAULT: {
    value: "{colors.gray.1000}"
  },
  hover: {
    value: "{colors.gray.1000}"
  },
  active: {
    value: "{colors.gray.1000}"
  },
  muted: {
    value: "{colors.gray.700}"
  },
  disabled: {
    value: "color-mix(in oklab, {colors.gray.1000}, white 68%)"
  }
};

export const darkBorder: BorderColors = {
  DEFAULT: {
    value: "{colors.gray.300}"
  },
  muted: {
    value: "{colors.gray.500}"
  },
  hover: {
    value: "{colors.gray.500}"
  },
  active: {
    value: "{colors.gray.1000}"
  },
  disabled: {
    value: "{colors.gray.500}"
  }
};
