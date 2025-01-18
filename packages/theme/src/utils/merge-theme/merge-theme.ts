import deepmerge from "deepmerge";

import { BrifUIPluginConfig, DeepRequired } from "../../types";

export const mergeTheme = (
  theme1: DeepRequired<BrifUIPluginConfig>,
  theme2: BrifUIPluginConfig
): DeepRequired<BrifUIPluginConfig> => {
  return {
    ...theme1,
    ...theme2,
    // @ts-expect-error as Brif UI themes config.
    base: {
      ...theme1.base,
      ...theme2.base
    },
    // @ts-expect-error as Brif UI themes config.
    themes: deepmerge(theme1.themes, theme2.themes ?? {})
  };
};
