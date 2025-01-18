import { Breakpoints } from "../breakpoints";
import { DefaultRefColors } from "../colors/ref";
import { DefaultSysColors } from "../colors/sys";

/**
 * The Brif UI theme config
 */
export type BrifUIThemeConfig = {
  colors: {
    ref: DefaultRefColors;
    sys: DefaultSysColors;
  };
  breakpoints: Breakpoints;
};
