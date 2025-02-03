import { DeepPartial, DeepRequired } from "./utils";

/**
 * The Brif UI Tailwindcss config
 */
export interface BrifUIPluginConfigArgs {
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
    dir?: string;
    /**
     * Name of the configuration file.
     * @default "theme.ts"
     */
    name?: string;
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
    light?: DeepPartial<
      Omit<
        BrifUIThemeConfig,
        "breakpoints" | "spacing" | "borderRadius" | "shadow"
      >
    >;

    /**
     * Configuration for the dark theme.
     */
    dark?: DeepPartial<
      Omit<
        BrifUIThemeConfig,
        "breakpoints" | "spacing" | "borderRadius" | "shadow"
      >
    >;

    /**
     * Configuration for custom themes.
     */
    [key: string]:
      | DeepPartial<
          Omit<
            BrifUIThemeConfig,
            "breakpoints" | "spacing" | "borderRadius" | "shadow"
          >
        >
      | undefined;
  };
}

export type ResolvedBrifUIConfig = {
  colors: Record<string, string>;
  breakpoints: Record<string, string>;
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  shadow: Record<string, string>;
  utilities: Record<string, Record<string, string>>;
  variants: Record<string, Array<string>>;
  themes: Record<string, string>;
};

export type RequiredBrifUIPluginConfig = Omit<
  DeepRequired<BrifUIPluginConfigArgs>,
  "themes"
> & {
  themes: BrifUIPluginConfigArgs["themes"];
};
