import { TextColors } from "@brifui/types";

export const text: TextColors = {
  DEFAULT: {
    value: "{colors.gray.1000}"
  },
  muted: {
    value: "{colors.gray.900}"
  },
  disabled: {
    value: "color-mix(in oklab, {colors.gray.1000}, white 68%)"
  }
};
