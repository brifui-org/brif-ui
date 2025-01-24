import { Command } from "@oclif/core";
import { BrifUITailwindPlugin } from "@brifui/theme/tailwind";
import { CodegenThemeConfig, CodegenArgThemeConfig } from "@brifui/theme/tailwind";
import { findTailwindConfig, generateTypes, generateThemeConfigFile } from "../utils";

export default class Codegen extends Command {
  static override description =
    "Generates BrifUI theme config file from your Tailwind config";

  public async run(): Promise<void> {
    const path = findTailwindConfig();
    const { default: config } = await import(path);
    const plugin = config.plugins.find((p: any) => p[CodegenThemeConfig]) as BrifUITailwindPlugin;
    const args = plugin[CodegenArgThemeConfig]
    const tconfig = plugin[CodegenThemeConfig]
    generateTypes(args)
    generateThemeConfigFile(tconfig)
  }
}
