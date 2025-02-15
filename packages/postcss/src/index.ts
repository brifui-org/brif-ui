import { default as pandacss, type PluginOptions } from "@pandacss/postcss";
import type { PluginCreator } from "postcss";
import path from "node:path";

const PLUGIN_NAME = "brifui";

const brifui: PluginCreator<PluginOptions> = (options = {}) => {
  return {
    ...pandacss({
      ...options,
      configPath: path.resolve(process.cwd(), "brifui.config.ts")
    }),
    postcssPlugin: PLUGIN_NAME
  } as ReturnType<PluginCreator<PluginOptions>>;
};
brifui.postcss = true;
export default brifui;
