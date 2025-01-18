import { BreakpointConfig } from "./breakpoints";
import { ColorConfig } from "./colors";

/**
 * The Brif UI theme config
 */
export type BrifUIThemeConfig = {
  colors: {
    ref?: Record<string, ColorConfig>;
    sys?: Record<string, ColorConfig>;
  };
  breakpoints: BreakpointConfig;
};
