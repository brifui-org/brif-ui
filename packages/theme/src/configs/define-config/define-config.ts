import { defineConfig as _defineConfig } from "@pandacss/dev";
import path from "node:path";
import { locatePackage } from "@brifui/node";
import { Config } from "@brifui/types";

import { preset } from "../../presets";
import { resolveConfig, resolveThemeVariantConfig } from "./resolve-config";

export const defineConfig = (configs: Config = {}) => {
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
      breakpoints: resolveConfig(configs, "breakpoints")
    },
    presets: [preset],
    importMap: "@brifui/styled",
    staticCss: {
      themes: themeKeys
    },
    outdir: path.relative(process.cwd(), styledPackagePath!)
  });
};
