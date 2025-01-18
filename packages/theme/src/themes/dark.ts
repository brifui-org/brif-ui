import { breakpoints } from "../breakpoints";
import { ref } from "../colors/ref";
import { sys } from "../colors/sys";
import { BrifUIThemeConfig } from "../types";

export const dark: BrifUIThemeConfig = {
  colors: {
    ref,
    sys
  },
  breakpoints
};
