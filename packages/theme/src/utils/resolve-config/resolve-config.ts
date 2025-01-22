import { BrifUIPluginConfig, DeepRequired } from "../../types";
import { resolveBreakpointsConfig } from "./resolve-breakpoints-config";
import { resolveColorsConfig } from "./resolve-colors-config";
import { resolveSpacingConfig } from "./resolve-spacing-config";

export const resolveConfig = (configs: DeepRequired<BrifUIPluginConfig>) => {
  const { prefix, themes, base } = configs;

  const resolved: {
    colors: Record<string, string>;
    breakpoints: Record<string, string>;
    spacing: Record<string, string>;
    utilities: Record<string, Record<string, string>>;
    variants: Record<string, Array<string>>;
    themes: Record<string, string>;
  } = {
    colors: {},
    breakpoints: {},
    spacing: {},
    themes: {},
    utilities: {},
    variants: {}
  };

  for (const [themeName, themeConfig] of Object.entries({ base, ...themes })) {
    if (!themeConfig) continue;

    const cssSelector =
      themeName === "base"
        ? ":root"
        : `.${themeName},[data-theme="${themeName}"]`;
    resolved.utilities[cssSelector] = {};

    resolved.variants[themeName] = [`&:is(.${themeName} *)`];

    /**
     * Colors
     */
    const resolvedColors = resolveColorsConfig(
      themeConfig.colors as DeepRequired<BrifUIThemeConfig["colors"]>,
      base.colors,
      prefix
    );
    resolved.colors = resolvedColors.colors;
    resolved.utilities[cssSelector] = Object.assign(
      resolved.utilities[cssSelector],
      resolvedColors.utilities
    );

    /**
     * Breakpoints
     * NOTE: It is only available in the base theme.
     */
    if ("breakpoints" in themeConfig && themeName === "base") {
      const resolvedBreakpoints = resolveBreakpointsConfig(
        themeConfig.breakpoints,
        base.breakpoints,
        prefix
      );
      resolved.breakpoints = resolvedBreakpoints.breakpoints
      resolved.utilities[cssSelector] = Object.assign(
        resolved.utilities[cssSelector],
        resolvedBreakpoints.utilities
      );
    }

    /**
     * Spacing
     * NOTE: It is only available in the base theme.
     */
    if ("spacing" in themeConfig && themeName === "base") {
      const resolvedSpacing = resolveSpacingConfig(themeConfig.spacing, base.spacing, prefix)
      resolved.spacing = resolvedSpacing.spacing
      resolved.utilities[cssSelector] = Object.assign(
        resolved.utilities[cssSelector],
        resolvedSpacing.utilities
      );
    }
  }

  return resolved;
};
