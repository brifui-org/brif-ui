import { borderRadius } from "../border-radius";
import { breakpoints } from "../breakpoints";
import { colors } from "../colors";
import { shadow } from "../shadow";
import { spacing } from "../spacing";
import type { DeepRequired } from "../types";

export const base = {
  colors,
  breakpoints,
  spacing,
  borderRadius,
  shadow
} as unknown as DeepRequired<BrifUIThemeConfig>;
