import { TextColors } from "@brifui/types";

export const text: TextColors = {
  DEFAULT: {
    value: "{colors.gray.1000}"
  },
  muted: {
    value: "{colors.gray.900}"
  },
  hover: {
    value: "{colors.gray.1000}"
  },
  active: {
    value: "{colors.gray.1000}"
  },
  disabled: {
    value: "color-mix(in oklab, {colors.gray.1000}, {colors.background} 68%)"
  }
};

export const darkText: TextColors = {
  DEFAULT: {
    value: "{colors.gray.1000}"
  },
  muted: {
    value: "{colors.gray.900}"
  },
  hover: {
    value: "{colors.gray.1000}"
  },
  active: {
    value: "{colors.gray.1000}"
  },
  disabled: {
    value: "color-mix(in oklab, {colors.gray.1000}, {colors.background} 32%)"
  }
};
