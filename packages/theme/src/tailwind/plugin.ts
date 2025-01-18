import deepmerge from "deepmerge";
import plugin from "tailwindcss/plugin";

import { light } from "../themes";
import { BrifUIPluginConfig, BrifUIPluginConfigArgs } from "../types";
import { generateTypes } from "../utils/generate-types/generate-types";
import { resolveConfig } from "../utils/resolve-config";

export const DEFAULT_PREFIX = "brif";

const defaultConfigs: BrifUIPluginConfig = {
  prefix: DEFAULT_PREFIX,
  theme: light
};

const createTailwindPlugin = (args: BrifUIPluginConfigArgs) => {
  generateTypes(args);

  const configs = deepmerge(defaultConfigs, args) as BrifUIPluginConfig;
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
        screens: resolved.breakpoints
      }
    }
  );
};

export const brifui = (configs: BrifUIPluginConfigArgs = {}) => {
  return createTailwindPlugin(configs);
};
