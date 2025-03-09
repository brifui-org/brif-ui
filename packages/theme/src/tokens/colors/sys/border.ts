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
    value: "color-mix(in oklab, {colors.gray.1000}, {colors.background} 68%)"
  }
};

export const darkBorder: BorderColors = {
  DEFAULT: {
    value: "{colors.black}"
  },
  hover: {
    value: "{colors.black}"
  },
  active: {
    value: "{colors.black}"
  },
  muted: {
    value: "{colors.gray.100}"
  },
  disabled: {
    value: "color-mix(in oklab, {colors.border}, {colors.background} 68%)"
  }
};
