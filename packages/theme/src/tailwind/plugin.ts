"use client";

import plugin from "tailwindcss/plugin";

import { dark, light } from "../themes";
import {
  BrifUIPluginConfig,
  DeepRequired,
  ResolvedBrifUIConfig
} from "../types";
import { mergeTheme } from "../utils/merge-theme/merge-theme";
import { resolveConfig } from "../utils/resolve-config/resolve-config";

export const DEFAULT_PREFIX = "brif";
export const BrifUIPluginSymbol = Symbol("BrifUIPlugin");
export const CodegenResolvedThemeConfig = Symbol("CodegenResolvedThemeConfig");
export const CodegenArgThemeConfig = Symbol("CodegenArgThemeConfig");
export const CodegenThemeConfig = Symbol("CodegenThemeConfig");

export type BrifUITailwindPlugin = ReturnType<typeof plugin> & {
  [CodegenResolvedThemeConfig]: ResolvedBrifUIConfig;
  [CodegenArgThemeConfig]: BrifUIPluginConfig;
  [CodegenThemeConfig]: DeepRequired<BrifUIPluginConfig>;
  $$type: symbol;
};

const defaultConfigs: DeepRequired<BrifUIPluginConfig> = {
  prefix: DEFAULT_PREFIX,
  base: light,
  themeFile: {
    dir: ".brifui",
    name: "theme.ts"
  },
  themes: {
    light,
    dark
  }
};

const createTailwindPlugin = (args: BrifUIPluginConfig) => {
  const configs = mergeTheme(defaultConfigs, args);
  const { prefix } = configs;
  const resolved = resolveConfig(configs);

  const p = plugin(
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
        screens: resolved.breakpoints,
        spacing: resolved.spacing
      }
    }
  ) as BrifUITailwindPlugin;
  p.$$type = BrifUIPluginSymbol;
  p[CodegenResolvedThemeConfig] = resolved;
  p[CodegenArgThemeConfig] = args;
  p[CodegenThemeConfig] = configs;

  return p;
};

export function brifui(configs: BrifUIPluginConfig = {}) {
  return createTailwindPlugin(configs);
}
