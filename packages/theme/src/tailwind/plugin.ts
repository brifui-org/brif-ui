import plugin from "tailwindcss/plugin";
import { BrifUIPluginConfig } from "../types";
import { resolveConfig } from "../utils/resolve-config";
import deepmerge from "deepmerge";
import { light } from "../themes";

export const DEFAULT_PREFIX = "brif";

const createTailwindPlugin = (configs: BrifUIPluginConfig) => {
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

export const brifui = (configs: BrifUIPluginConfig = {}) => {
  return createTailwindPlugin(
    deepmerge(
      {
        prefix: DEFAULT_PREFIX,
        themes: {
          light
        }
      },
      configs
    )
  );
};
