import { RefColors } from "./colors/ref";
import { SysColors } from "./colors/sys";

/**
 * The Brif UI theme config
 */
export type BrifUIThemeConfig = {
  colors: {
    ref: RefColors;
    sys: SysColors;
  };
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
