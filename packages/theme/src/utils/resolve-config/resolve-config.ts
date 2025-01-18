import Color from "color";

import { BrifUIPluginConfig, DeepRequired } from "../../types";
import { flatten } from "../flatten";

export const resolveConfig = (configs: DeepRequired<BrifUIPluginConfig>) => {
  const { prefix, themes, base } = configs;

  const resolved: {
    colors: Record<string, string>;
    breakpoints: Record<string, string>;
    utilities: Record<string, Record<string, string>>;
    variants: Record<string, Array<string>>;
    themes: Record<string, string>;
  } = {
    colors: {},
    breakpoints: {},
    utilities: {},
    variants: {},
    themes: {}
  };

  for (const [themeName, themeConfig] of Object.entries({ base, ...themes })) {
    if (!themeConfig) continue;

    const { colors } = themeConfig;

    const cssSelector =
      themeName === "base"
        ? ":root"
        : `.${themeName},[data-theme="${themeName}"]`;
    resolved.utilities[cssSelector] = {};

    resolved.variants[themeName] = [`&:is(.${themeName} *)`];

    /**
     * Breakpoints
     *
     * NOTE: It is only available in the base theme.
     */
    if ("breakpoints" in themeConfig && themeName === "base") {
      for (const [bp, value] of Object.entries(themeConfig.breakpoints)) {
        if (!base.breakpoints[bp]) continue;
        const tokenName = `--${prefix}-breakpoint-${bp}`;
        resolved.utilities[cssSelector][tokenName] = value;
        resolved.breakpoints[bp] = value;
      }
    }

    /**
     * Colors
     */
    const { colors: { sys: baseSys = {}, ref: baseRef = {} } = {} } =
      base ?? {};
    const flattenBaseSysColors = flatten(baseSys);
    const flattenBaseRefColors = flatten(baseRef);
    const flattenBaseColors = {
      sys: flattenBaseSysColors,
      ref: flattenBaseRefColors
    };
    for (const [tier, colorConfig] of Object.entries(colors)) {
      for (const [colorName, colorValue] of Object.entries(
        flatten(colorConfig)
      )) {
        if (
          !flattenBaseColors[tier as "ref" | "sys"] ||
          !flattenBaseColors[tier as "ref" | "sys"][colorName]
        )
          continue;

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
