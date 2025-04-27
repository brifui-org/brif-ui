/* eslint-disable @typescript-eslint/no-explicit-any */
import deepmerge from "deepmerge";
import { Config, Theme } from "@brifui/types";

import {
  slotRecipes as defaultSlotRecipes,
  type ComponentSlotRecipes
} from "../../recipes";
import { dark, light } from "../../themes";
import {
  baseSemanticTokens,
  baseTokens,
  breakpoints,
  keyframes,
  textStyles
} from "../../tokens";

const defaultConfig: Theme = {
  tokens: baseTokens,
  semanticTokens: baseSemanticTokens,
  keyframes,
  breakpoints,
  textStyles
} as const;

const defaultThemeVariants = {
  light,
  dark
} as const;

export const resolveConfig = (
  config: Config<ComponentSlotRecipes> | undefined,
  key: keyof typeof defaultConfig
): any => {
  if (
    !config ||
    !config.theme ||
    (!config.theme.extends?.[key] && !config.theme?.[key])
  )
    return defaultConfig[key];

  const isExtended = !!config.theme.extends?.[key];

  if (isExtended) {
    return deepmerge(
      defaultConfig[key] as any,
      (config.theme.extends?.[key] ?? {}) as any
    );
  }

  return config.theme[key];
};

export const resolveThemeVariantConfig = (
  config: Config<ComponentSlotRecipes> | undefined
) => {
  if (!config || !config.themes) return defaultThemeVariants;

  return {
    ...defaultThemeVariants,
    ...Object.keys(config.themes).reduce<
      NonNullable<Config<ComponentSlotRecipes>["themes"]>
    >((theme, key) => {
      theme[key] = config.themes?.[key] ?? {};
      return theme;
    }, {})
  };
};

export const resolveSlotRecipeConfig = (
  config: Config<ComponentSlotRecipes> | undefined
) => {
  if (!config || !config.recipes) return defaultSlotRecipes;

  return deepmerge(defaultSlotRecipes, config.recipes);
};
