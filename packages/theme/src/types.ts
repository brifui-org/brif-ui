import { Breakpoints, DefaultBreakpoints } from "./breakpoints";
import { RefColors } from "./colors/ref";
import { SysColors } from "./colors/sys";

/**
 * The Brif UI theme config
 */
export type BrifUIThemeConfig<
  B extends Record<string, string> = DefaultBreakpoints
> = {
  colors: {
    ref: RefColors;
    sys: SysColors;
  };
  breakpoints: Breakpoints<B>;
};

/**
 * The Brif UI Tailwindcss config
 */
export type BrifUIPluginConfig = {
  /**
   * The prefix for css variables
   * @default brif
   */
  prefix?: string;
  themes?: Record<string, BrifUIThemeConfig>;
};
