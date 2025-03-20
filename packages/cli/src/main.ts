import { cac } from "cac";

import { version } from "../package.json";
import { codegenCommand } from "./commands/codegen.js";

export async function main() {
  const cli = cac("brif");

  const cwd = process.cwd();

  cli
    .command("codegen", "Generate styled system")
    .option("--cwd <cwd>", "Current working directory", { default: cwd })
    .action(codegenCommand);

  cli.help();
  cli.version(version);
  cli.parse(process.argv, { run: false });

  try {
    await cli.runMatchedCommand();
  } catch {
    process.exit(1);
  }
}
