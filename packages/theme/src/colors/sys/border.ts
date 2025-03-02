import { BorderColors } from "@brifui/types";

export const border: BorderColors = {
  DEFAULT: {
    value: "{colors.gray.1000}"
  },
  muted: {
    value: "{colors.gray.700}"
  },
  disabled: {
    value: "color-mix(in oklab, {colors.gray.1000}, white 68%)"
  }
};
