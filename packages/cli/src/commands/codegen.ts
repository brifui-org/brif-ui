import chalk from "chalk";
import { execSync } from "node:child_process";

import "@pandacss/dev";

import { dependencies } from "../../package.json";
import { logger } from "../utils/logger";

const pandaVersion = dependencies["@pandacss/dev"].slice(1);

export async function codegen() {
  try {
    logger.debug(`Running codegen command on @pandacss/dev@${pandaVersion}`);
    execSync(`npx panda codegen --config brifui.config.ts`);
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
    logger.error("Failed to run codegen command", err);
  }
}
