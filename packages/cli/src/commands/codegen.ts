import { Command } from "@oclif/core";
import {
  BrifUIPluginSymbol,
  BrifUITailwindPlugin,
  CodegenArgThemeConfig,
  CodegenThemeConfig
} from "@brifui/theme/tailwind";
import pathff from 'node:path'

import {
  findTailwindConfig,
  generateThemeConfigFile,
  generateTypes
} from "../utils";

export default class Codegen extends Command {
  static override description =
    "Generates BrifUI theme config file from your Tailwind config";

  public async run(): Promise<void> {
    const path = findTailwindConfig();
    const { default: config } = await import(path);
    const plugin = config.plugins.find(
      (p: any) => "$$type" in p && p.$$type === BrifUIPluginSymbol
    ) as BrifUITailwindPlugin;
    const args = plugin[CodegenArgThemeConfig];
    const tconfig = plugin[CodegenThemeConfig];
    generateTypes(args);
    generateThemeConfigFile(tconfig);
  }
}
