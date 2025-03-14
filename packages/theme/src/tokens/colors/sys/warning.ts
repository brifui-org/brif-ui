import { WarningColors } from "@brifui/types";

export const warning: WarningColors = {
  DEFAULT: {
    value: "{colors.amber.800}"
  },
  foreground: {
    value: "{colors.text}"
  },
  hover: {
    value: "color-mix(in hsl, {colors.amber.800}, {colors.text} 10%)"
  },
  active: {
    value: "color-mix(in hsl, {colors.amber.800}, {colors.text} 20%)"
  },
  disabled: {
    value: "color-mix(in oklab, {colors.warning}, {colors.background} 68%)"
  }
};

export const darkWarning: WarningColors = {
  DEFAULT: {
    value: "{colors.amber.800}"
  },
  foreground: {
    value: "{colors.gray.100}"
  },
  hover: {
    value: "color-mix(in hsl, {colors.amber.800}, {colors.text} 10%)"
  },
  active: {
    value: "color-mix(in hsl, {colors.amber.800}, {colors.text} 20%)"
  },
  disabled: {
    value: "color-mix(in oklab, {colors.warning}, {colors.background} 68%)"
  }
};
