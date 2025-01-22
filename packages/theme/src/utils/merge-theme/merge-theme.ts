import deepmerge from "deepmerge";

import type { BrifUIPluginConfig, DeepRequired } from "../../types";

export const mergeTheme = (
  theme1: DeepRequired<BrifUIPluginConfig>,
  theme2: BrifUIPluginConfig
): DeepRequired<BrifUIPluginConfig> => {
  const base = {
    ...theme1.base,
    ...theme2.base
  } as unknown as DeepRequired<BrifUIPluginConfig>["base"];

  const themes: Record<string, BrifUIThemeConfig> = {};

  for (const [themeName, themeConfig] of Object.entries({
    ...(theme1.themes ?? {}),
    ...(theme2.themes ?? {})
  })) {
    themes[themeName] = {
      ...deepmerge(base, themeConfig as unknown as BrifUIThemeConfig),
      breakpoints: base.breakpoints,
      spacing: base.spacing
    };
  }

  return {
    ...theme1,
    ...theme2,
    themeFile: deepmerge(theme1.themeFile, theme2.themeFile ?? {}),
    base,
    themes: themes as unknown as DeepRequired<BrifUIPluginConfig>["themes"]
  };
};
