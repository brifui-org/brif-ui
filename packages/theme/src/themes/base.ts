import { borderRadius } from "../border-radius";
import { breakpoints } from "../breakpoints";
import { colors } from "../colors";
import { shadow } from "../shadow";
import { spacing } from "../spacing";

export const base = {
  colors,
  breakpoints,
  spacing,
  borderRadius,
  shadow
};

export type DefaultBaseTheme = typeof base;
