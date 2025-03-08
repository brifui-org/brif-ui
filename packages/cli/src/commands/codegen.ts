// import { bundleNRequire } from "bundle-n-require";
// import findUp from "escalade/sync";
// import { minimatch } from "minimatch";
import chalk from "chalk";
import { execSync } from "node:child_process";

import { dependencies } from "../../package.json";
import { logger } from "../utils/logger";

const pandaVersion = dependencies["@pandacss/dev"].slice(1);

// function isBrifConfig(file: string) {
//   return minimatch(file, "{brifui,brifui}.config.{ts,js,cjs,mjs}");
// }

// function findConfig() {
//   const configPath = findUp(process.cwd(), (_dir, paths) =>
//     paths.find(isBrifConfig)
//   );
//   return configPath! as string;
// }

export async function codegen() {
  // const configPath = findConfig();
  // await bundleNRequire(configPath, {
  //   interopDefault: true
  // });
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
