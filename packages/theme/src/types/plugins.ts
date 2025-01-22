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
   * Configurations of generated theme file.
   */
  themeFile?: {
    /**
     * Path to save the configuration file.
     * @default "./themes/"
     */
    dir?: string,
    /**
     * Name of the configuration file.
     * @default "theme.ts"
     */
    name?: string
  };

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
