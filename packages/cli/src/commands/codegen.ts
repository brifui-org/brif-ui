import { build } from "@rslib/core";
import chalk from "chalk";
import { execSync } from "node:child_process";
import path from "node:path";
import { locatePackage } from "@brifui/node";

import { dependencies } from "../../package.json";
import { logger } from "../utils/logger";

const pandaVersion = dependencies["@pandacss/dev"].slice(1);

export async function codegen() {
  try {
    const styledPackagePath = locatePackage("styled");
    if (!styledPackagePath) {
      throw new Error("Failed to locate @brifui/styled package");
    }
    const resolveStyledPath = (p: string) => path.resolve(styledPackagePath, p);

    logger.debug(`Running codegen command on @pandacss/dev@${pandaVersion}`);
    execSync(`npx panda codegen --config brifui.config.ts`);
    await build({
      lib: [
        {
          source: {
            entry: {
              index: resolveStyledPath("./dist/**")
            }
          },
          output: {
            target: "node",
            cleanDistPath: false,
            distPath: {
              root: resolveStyledPath("./distcjs")
            }
          },
          bundle: false,
          format: "cjs"
        }
      ]
    });

    logger.log(
      `${chalk.blue("@brifui/styled/dist/css")}: the css function to author styles`
    );
    logger.log(
      `${chalk.blue("@brifui/styled/dist/tokens")}: the css variables and js function to query your tokens`
    );
    logger.log(
      `${chalk.blue("@brifui/styled/dist/patterns")}: functions to implement and apply common layout patterns`
    );
  } catch (err) {
    logger.error("Failed to run codegen command");
    console.error(err);
  }
}
