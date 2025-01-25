import { RequiredBrifUIPluginConfig, ResolvedBrifUIConfig } from "../../types";
import { resolveBorderRadiusConfig } from "./resolve-border-radius-config";
import { resolveBreakpointsConfig } from "./resolve-breakpoints-config";
import { resolveColorsConfig } from "./resolve-colors-config";
import { resolveShadowConfig } from "./resolve-shadow-config";
import { resolveSpacingConfig } from "./resolve-spacing-config";

export const resolveConfig = (configs: RequiredBrifUIPluginConfig) => {
  const { prefix, base } = configs;

  const resolved: ResolvedBrifUIConfig = {
    colors: {},
    breakpoints: {},
    spacing: {},
    borderRadius: {},
    shadow: {},
    themes: {},
    utilities: {},
    variants: {}
  };

  /**
   * Base config
   */
  const rootCssSelector = ":root";
  resolved.utilities[rootCssSelector] = {};
  /**
   * Colors
   */
  const resolvedBaseColors = resolveColorsConfig(base.colors, prefix);
  resolved.colors = resolvedBaseColors.colors;
  resolved.utilities[rootCssSelector] = Object.assign(
    resolved.utilities[rootCssSelector],
    resolvedBaseColors.utilities
  );
  /**
   * Breakpoints
   */
  const resolvedBreakpoints = resolveBreakpointsConfig(
    base.breakpoints,
    prefix
  );
  resolved.breakpoints = resolvedBreakpoints.breakpoints;
  resolved.utilities[rootCssSelector] = Object.assign(
    resolved.utilities[rootCssSelector],
    resolvedBreakpoints.utilities
  );
  /**
   * Spacing
   */
  const resolvedSpacing = resolveSpacingConfig(base.spacing, prefix);
  resolved.spacing = resolvedSpacing.spacing;
  resolved.utilities[rootCssSelector] = Object.assign(
    resolved.utilities[rootCssSelector],
    resolvedSpacing.utilities
  );
  /**
   * Border radius
   */
  const resolvedBorderRadius = resolveBorderRadiusConfig(
    base.borderRadius,
    prefix
  );
  resolved.borderRadius = resolvedBorderRadius.borderRadius;
  resolved.utilities[rootCssSelector] = Object.assign(
    resolved.utilities[rootCssSelector],
    resolvedBorderRadius.utilities
  );
  /**
   * Border radius
   */
  const resolvedShadow = resolveShadowConfig(base.shadow, prefix);
  resolved.shadow = resolvedShadow.shadow;
  resolved.utilities[rootCssSelector] = Object.assign(
    resolved.utilities[rootCssSelector],
    resolvedShadow.utilities
  );

  return resolved;
};
