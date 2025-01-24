import Color from "color";

import {
  BrifUIPluginConfig,
  DeepRequired,
  NestedObject,
  ResolvedBrifUIConfig
} from "../../types";
import { flatten } from "../flatten";

export const resolveConfig = (configs: DeepRequired<BrifUIPluginConfig>) => {
  const { prefix, themes, base } = configs;

  const resolved: ResolvedBrifUIConfig = {
    colors: {},
    breakpoints: {},
    spacing: {},
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
        if (!base.breakpoints[bp as keyof BrifUIThemeConfig["breakpoints"]])
          continue;
        const tokenName = `--${prefix}-breakpoint-${bp}`;
        resolved.utilities[cssSelector][tokenName] = value;
        resolved.breakpoints[bp] = value;
      }
    }

    /**
     * Spacing
     * NOTE: It is only available in the base theme.
     */
    if ("spacing" in themeConfig && themeName === "base") {
      for (const [spacing, value] of Object.entries(themeConfig.spacing)) {
        if (!base.spacing[spacing as keyof BrifUIThemeConfig["spacing"]])
          continue;
        const tokenName = `--${prefix}-spacing-${spacing.replaceAll(".", "_")}`;
        resolved.utilities[cssSelector][tokenName] = value;
        resolved.spacing[spacing] = `var(${tokenName})`;
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
        flatten(colorConfig as NestedObject)
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
