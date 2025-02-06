import Color from "color";

import { NestedObject } from "../../types";
import { flatten } from "../flatten";

const parseOrReferenceColor = (
  colorValue: string,
  { prefix }: { prefix: string }
) => {
  try {
    return Color(colorValue);
  } catch {
    const [tier, colorName, shade] = colorValue.split(".");
    if (!shade) {
      return `var(--${prefix}-${tier}-color-${colorName})`;
    }
    return `var(--${prefix}-${tier}-color-${colorName}-${shade})`;
  }
};

export const resolveColorsConfig = (colors: unknown, prefix: string) => {
  const resolved: {
    colors: Record<string, string>;
    utilities: Record<string, string>;
  } = {
    colors: {},
    utilities: {}
  };

  if (!colors || typeof colors !== "object") return resolved;

  /**
   * Colors
   */
  for (const [tier, colorConfig] of Object.entries(colors)) {
    for (const [colorName, colorValue] of Object.entries(
      flatten(colorConfig as NestedObject)
    )) {
      const parsed = parseOrReferenceColor(colorValue, {
        prefix
      });

      if (typeof parsed === "string") {
        const tokenName = `--${prefix}-${tier}-color-${colorName}`;
        const tokenValue = `hsl(var(${tokenName}) / <alpha-value>)`;
        resolved.utilities[tokenName] = parsed;
        resolved.colors[colorName] = tokenValue;
      } else {
        const [h, s, l] = parsed.hsl().round(2).array();
        const tokenName = `--${prefix}-${tier}-color-${colorName}`;
        const tokenValue = `hsl(var(${tokenName}) / <alpha-value>)`;
        resolved.utilities[tokenName] = `${h} ${s}% ${l}%`;
        resolved.colors[colorName] = tokenValue;
      }
    }
  }

  return resolved;
};
