import { cac } from "cac";

import { version } from "../package.json";
import { codegen } from "./commands/codegen.js";

export async function main() {
  const cli = cac("brif");

  const cwd = process.cwd();

  cli
    .command("codegen", "Generate styled system")
    .option("--cwd <cwd>", "Current working directory", { default: cwd })
    .action(codegen);

  cli.help();
  cli.version(version);
  cli.parse(process.argv, { run: false });

  try {
    await cli.runMatchedCommand();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
}
