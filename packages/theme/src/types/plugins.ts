/**
 * The Brif UI Tailwindcss config
 */
export interface BrifUIPluginConfig {
  /**
   * The prefix for css variables
   * @default brif
   */
  prefix?: string;
  base?: Partial<BrifUIThemeConfig>;
  themes?: {
    light?: Partial<Omit<BrifUIThemeConfig, "breakpoints">>;
    dark?: Partial<Omit<BrifUIThemeConfig, "breakpoints">>;
    [key: string]: Partial<Omit<BrifUIThemeConfig, "breakpoints">> | undefined;
  };
}
