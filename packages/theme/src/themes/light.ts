import { breakpoints } from "../breakpoints";
import { ref } from "../colors/ref";
import { sys } from "../colors/sys";
import { spacing } from "../spacing";
import type { DeepRequired } from "../types";

export const light = {
  colors: {
    ref,
    sys
  },
  breakpoints,
  spacing
} as unknown as DeepRequired<BrifUIThemeConfig>;
