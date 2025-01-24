import { DeepPartial } from "./utils";

/**
 * The Brif UI Tailwindcss config
 */
export interface BrifUIPluginConfig {
  /**
   * The prefix for CSS variables.
   * @default "brif"
   */
  prefix?: string;

  /**
   * The file path to save the theme configuration.
   * @default "./theme-config.ts"
   */
  themeFileName?: string;

  /**
   * The base theme configuration.
   */
  base?: Partial<BrifUIThemeConfig>;

  /**
   * The themes configuration, allowing for light and dark themes, as well as custom themes.
   */
  themes?: {
    /**
     * Configuration for the light theme.
     */
    light?: DeepPartial<Omit<BrifUIThemeConfig, "breakpoints" | "spacing">>;

    /**
     * Configuration for the dark theme.
     */
    dark?: DeepPartial<Omit<BrifUIThemeConfig, "breakpoints" | "spacing">>;

    /**
     * Configuration for custom themes.
     */
    [key: string]:
      | DeepPartial<Omit<BrifUIThemeConfig, "breakpoints" | "spacing">>
      | undefined;
  };
}


export type ResolvedBrifUIConfig = {
  colors: Record<string, string>;
  breakpoints: Record<string, string>;
  spacing: Record<string, string>;
  utilities: Record<string, Record<string, string>>;
  variants: Record<string, Array<string>>;
  themes: Record<string, string>;
};