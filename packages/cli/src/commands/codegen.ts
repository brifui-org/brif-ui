import { Args, Command, Flags } from "@oclif/core";
import { type Config } from "tailwindcss";
import { execSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import {
  BrifUIPluginSymbol,
  CodegenThemeConfig,
  type BrifUITailwindPlugin
} from "@brifui/theme/tailwind";

import {
  findTailwindConfig,
  generateThemeConfig,
  generateThemeTypes
} from "../utils";

export default class Codegen extends Command {
  static override args = {
    file: Args.string({ description: "file to read" })
  };
  static override description = "Generate theme configurations";
  static override examples = ["<%= config.bin %> <%= command.id %>"];
  static override flags = {
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: "f" }),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({ char: "n", description: "name to print" })
  };
  private TEMP_DIR = ".brifui";

  public async run(): Promise<void> {
    const entry = await findTailwindConfig();
    await this.mkTempDir();
    execSync(
      `tsc --noCheck --target es2022 ${path.resolve("./", entry)} --outDir ${path.resolve("./", this.TEMP_DIR)}`
    );
    const { default: tailwindConfig } = await import(
      path.resolve("./", this.TEMP_DIR, "tailwind.config.js")
    );
    const brifUIConfig = this.getBrifUIPlugin(tailwindConfig);
    const themeConfig = brifUIConfig[CodegenThemeConfig];

    await generateThemeConfig(themeConfig);
    await generateThemeTypes({
      config: themeConfig,
      output: path.resolve("./", this.TEMP_DIR, "theme.d.ts")
    });
    await fs.rm(path.resolve("./", this.TEMP_DIR, "tailwind.config.js"));
  }

  private getBrifUIPlugin(config: Config): BrifUITailwindPlugin {
    return (config.plugins ?? []).find(
      (plugin) =>
        plugin && "$$name" in plugin && plugin.$$name === BrifUIPluginSymbol
    )! as BrifUITailwindPlugin;
  }

  private async mkTempDir() {
    await this.rmTempDir();
    await fs.mkdir(path.resolve("./", this.TEMP_DIR));
  }

  private async rmTempDir() {
    await fs.rm(path.resolve("./", this.TEMP_DIR), {
      recursive: true
    });
  }
}
