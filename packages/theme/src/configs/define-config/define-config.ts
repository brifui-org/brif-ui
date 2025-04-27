import { defineConfig as _defineConfig } from "@pandacss/dev";
import path from "node:path";
import { locatePackage } from "@brifui/node";
import { Config } from "@brifui/types";

import { preset } from "../../presets";
import type { ComponentSlotRecipes } from "../../recipes";
import {
  resolveConfig,
  resolveSlotRecipeConfig,
  resolveThemeVariantConfig
} from "./resolve-config";

export const defineConfig = (configs: Config<ComponentSlotRecipes> = {}) => {
  const { include = ["./src/**/*.{ts,tsx,js,jsx}"] } = configs;

  const styledPackagePath = path.resolve(locatePackage("styled")!, "dist");

  const resolvedThemes = resolveThemeVariantConfig(configs);
  const themeKeys = Object.keys(resolvedThemes);
  const themeConditions = themeKeys.reduce<Record<string, string>>(
    (conditions, themeKey) => {
      conditions[themeKey] = `[data-panda-theme="${themeKey}"] &`;
      return conditions;
    },
    {}
  );

  return _defineConfig({
    prefix: "brif",
    preflight: true,
    include,
    themes: resolvedThemes,
    conditions: {
      ...themeConditions
    },
    theme: {
      tokens: resolveConfig(configs, "tokens"),
      semanticTokens: resolveConfig(configs, "semanticTokens"),
      keyframes: resolveConfig(configs, "keyframes"),
      breakpoints: resolveConfig(configs, "breakpoints"),
      textStyles: resolveConfig(configs, "textStyles"),
      slotRecipes: resolveSlotRecipeConfig(configs)
    },
    presets: [preset],
    importMap: "@brifui/styled",
    staticCss: {
      extend: {
        themes: themeKeys
      }
    },
    outdir: path.relative(process.cwd(), styledPackagePath!)
  });
};
