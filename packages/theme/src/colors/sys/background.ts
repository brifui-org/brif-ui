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
    value: "color-mix(in oklab, {colors.white}, white 68%)"
  }
};
