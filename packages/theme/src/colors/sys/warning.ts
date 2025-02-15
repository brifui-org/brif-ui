import { WarningColors } from "@brifui/types";

export const warning: WarningColors = {
  DEFAULT: {
    value: "{colors.amber.800}"
  },
  foreground: {
    value: "{colors.gray.1000}"
  },
  hover: {
    value: "color-mix(in hsl, {colors.amber.800}, {colors.text} 10%)"
  },
  active: {
    value: "color-mix(in hsl, {colors.amber.800}, {colors.text} 20%)"
  }
};
