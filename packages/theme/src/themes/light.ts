import { breakpoints } from "../breakpoints";
import { ref } from "../colors/ref";
import { sys } from "../colors/sys";
import { DeepRequired } from "../types";
import { BrifUIThemeConfig } from "../types/themes";

export const light: DeepRequired<BrifUIThemeConfig> = {
  colors: {
    ref,
    sys
  },
  breakpoints
};
