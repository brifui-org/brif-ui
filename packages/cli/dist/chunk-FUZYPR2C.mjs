import {
  logger
} from "./chunk-RZ7FYJDK.mjs";

// src/commands/codegen.ts
import chalk from "chalk";
import { execSync } from "node:child_process";

// package.json
var version = "0.0.9";
var dependencies = {
  "@clack/prompts": "0.9.1",
  "@pandacss/dev": "^0.52.0",
  "bundle-n-require": "^1.1.1",
  chalk: "4.1.2",
  escalade: "^3.2.0",
  "fast-glob": "^3.3.3",
  "find-up": "^7.0.0",
  minimatch: "^10.0.1"
};

// src/commands/codegen.ts
var pandaVersion = dependencies["@pandacss/dev"].slice(1);
async function codegen() {
  logger.debug(`Running codegen command on @pandacss/dev@${pandaVersion}`);
  execSync(
    `npx --package=@pandacss/dev@${pandaVersion} -- panda codegen --config brifui.config.ts`
  );
  logger.log(
    `${chalk.blue("@brifui/styled/dist/css")}: the css function to author styles`
  );
  logger.log(
    `${chalk.blue("@brifui/styled/dist/tokens")}: the css variables and js function to query your tokens`
  );
  logger.log(
    `${chalk.blue("@brifui/styled/dist/patterns")}: functions to implement and apply common layout patterns`
  );
}

export {
  version,
  codegen
};
