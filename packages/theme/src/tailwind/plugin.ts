import deepmerge from "deepmerge";
import plugin from "tailwindcss/plugin";

import { base, dark, light } from "../themes";
import { BrifUIPluginConfig, RequiredBrifUIPluginConfig } from "../types";
import { resolveConfig } from "../utils/resolve-config/resolve-config";

export const DEFAULT_PREFIX = "brif";
export const BrifUIPluginSymbol = Symbol("BrifUIPlugin");
export const CodegenResolvedThemeConfig = Symbol("CodegenResolvedThemeConfig");
export const CodegenArgThemeConfig = Symbol("CodegenArgThemeConfig");
export const CodegenThemeConfig = Symbol("CodegenThemeConfig");

const defaultConfigs: RequiredBrifUIPluginConfig = {
  prefix: DEFAULT_PREFIX,
  base,
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
  const configs = deepmerge(defaultConfigs, args) as RequiredBrifUIPluginConfig;
  const { prefix } = configs;
  const resolved = resolveConfig(configs);

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
        screens: resolved.breakpoints,
        spacing: resolved.spacing,
        borderRadius: resolved.borderRadius,
        boxShadow: resolved.shadow
      }
    }
  );
};

export function brifui(configs: BrifUIPluginConfig = {}) {
  return createTailwindPlugin(configs);
}
