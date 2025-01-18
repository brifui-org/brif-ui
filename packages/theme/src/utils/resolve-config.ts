import Color from "color";

import { BrifUIPluginConfig } from "../types";
import { flatten } from "./flatten";

export const resolveConfig = (configs: BrifUIPluginConfig) => {
  const { prefix, theme } = configs;

  const resolved: {
    colors: Record<string, string>;
    breakpoints: Record<string, string>;
    utilities: Record<string, Record<string, string>>;
    variants: Record<string, Array<string>>;
  } = {
    colors: {},
    breakpoints: {},
    utilities: {},
    variants: {}
  };

  if (!theme) return resolved;

  const { colors, breakpoints } = theme;
  const themeName = "light";

  const cssSelector = `.${themeName},[data-theme="${themeName}"]`;
  resolved.utilities[cssSelector] = {};

  resolved.variants[themeName] = [`&:is(.${themeName} *)`];

  /**
   * Breakpoints
   */
  for (const [bp, value] of Object.entries(breakpoints)) {
    const tokenName = `--${prefix}-breakpoint-${bp}`;
    resolved.utilities[cssSelector][tokenName] = value;
    resolved.breakpoints[bp] = value;
  }

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

  return resolved;
};
