import { DeepPartial } from "./utils";

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
    light?: DeepPartial<Omit<BrifUIThemeConfig, "breakpoints" | "spacing">>;
    dark?: DeepPartial<Omit<BrifUIThemeConfig, "breakpoints" | "spacing">>;
    [key: string]:
      | DeepPartial<Omit<BrifUIThemeConfig, "breakpoints" | "spacing">>
      | undefined;
  };
}
