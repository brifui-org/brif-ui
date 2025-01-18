import { BrifUIThemeConfig } from "./themes";

/**
 * The Brif UI Tailwindcss config
 */
export type BrifUIPluginConfig = {
  /**
   * The prefix for css variables
   * @default brif
   */
  prefix: string;
  theme: BrifUIThemeConfig;
};

export type BrifUIPluginConfigArgs = {
  prefix?: string;
  theme?: Partial<BrifUIThemeConfig>;
};
