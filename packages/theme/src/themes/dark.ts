import { breakpoints } from "../breakpoints";
import { ref } from "../colors/ref";
import { sys } from "../colors/sys";
import type { DeepRequired } from "../types";

export const dark = {
  colors: {
    ref,
    sys
  },
  breakpoints
} as unknown as DeepRequired<BrifUIThemeConfig>;
