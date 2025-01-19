"use client";

import plugin from "tailwindcss/plugin";

import { dark, light } from "../themes";
import { BrifUIPluginConfig, DeepRequired } from "../types";
import {
  generateThemeConfigFile,
  generateTypes
} from "../utils/generate-types/generate-types";
import { mergeTheme } from "../utils/merge-theme/merge-theme";
import { resolveConfig } from "../utils/resolve-config/resolve-config";

export const DEFAULT_PREFIX = "brif";

const defaultConfigs: DeepRequired<BrifUIPluginConfig> = {
  prefix: DEFAULT_PREFIX,
  base: light,
  themes: {
    light,
    dark
  }
};

const createTailwindPlugin = (args: BrifUIPluginConfig) => {
  const configs = mergeTheme(defaultConfigs, args);
  const { prefix } = configs;
  const resolved = resolveConfig(configs);

  generateTypes(args);
  generateThemeConfigFile(configs);

  return plugin(
    ({ addBase, addUtilities, addVariant }) => {
      addBase({
        ":root, [data-theme]": {
          color: `hsl(var(--${prefix}-sys-color-text))`,
          backgroundColor: `hsl(var(--${prefix}-sys-color-background))`
        }
      });

      addUtilities(resolved.utilities);

      for (const [variantName, variantSelectors] of Object.entries(
        resolved.variants
      )) {
        variantSelectors.forEach((selector) => {
          addVariant(variantName, selector);
        });
      }
    },
    {
      darkMode: "class",
      theme: {
        colors: resolved.colors,
        screens: resolved.breakpoints
      }
    }
  );
};

export function brifui(configs: BrifUIPluginConfig = {}) {
  return createTailwindPlugin(configs);
}
