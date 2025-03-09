import { ErrorColors } from "@brifui/types";

export const error: ErrorColors = {
  DEFAULT: {
    value: "{colors.red.800}"
  },
  foreground: {
    value: "{colors.gray.100}"
  },
  hover: {
    value: "color-mix(in hsl, {colors.red.800}, {colors.text} 10%)"
  },
  active: {
    value: "color-mix(in hsl, {colors.red.800}, {colors.text} 20%)"
  }
};

export const darkError: ErrorColors = {
  DEFAULT: {
    value: "{colors.red.800}"
  },
  foreground: {
    value: "{colors.text}"
  },
  hover: {
    value: "color-mix(in hsl, {colors.red.800}, {colors.text} 10%)"
  },
  active: {
    value: "color-mix(in hsl, {colors.red.800}, {colors.text} 20%)"
  }
};
