import Color from "color";
import { flatten } from "./flatten";
import { BrifUIPluginConfig } from "../types";

export const resolveConfig = (configs: BrifUIPluginConfig) => {
  const { prefix, themes } = configs;

  const resolved: {
    colors: Record<string, string>;
    utilities: Record<string, Record<string, string>>;
    variants: Record<string, Array<string>>;
  } = {
    colors: {},
    utilities: {},
    variants: {}
  };

  if (!themes) return resolved;

  for (const [themeName, themeConfig] of Object.entries(themes)) {
    const { colors } = themeConfig;

    const cssSelector = `.${themeName},[data-theme="${themeName}"]`;
    resolved.utilities[cssSelector] = {};

    resolved.variants[themeName] = [`&:is(.${themeName} *)`];

    /**
     * Colors
     */
    for (const [tier, colorConfig] of Object.entries(colors)) {
      for (const [colorName, colorValue] of Object.entries(
        flatten(colorConfig)
      )) {
        const parsed = Color(colorValue);
        const [h, s, l] = parsed.hsl().round(2).array();
        const tokenName = `--${prefix}-${tier}-color-${colorName}`;
        const tokenValue = `hsl(var(${tokenName}) / <alpha-value>)`;
        resolved.utilities[cssSelector][tokenName] = `${h} ${s}% ${l}%`;
        resolved.colors[colorName] = tokenValue;
      }
    }
  }

  return resolved;
};
