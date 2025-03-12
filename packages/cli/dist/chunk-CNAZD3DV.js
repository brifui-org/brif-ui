import {
  logger
} from "./chunk-ZAEQWZ4Z.js";

// src/commands/codegen.ts
import { build } from "@rslib/core";
import chalk from "chalk";
import { execSync } from "node:child_process";
import path2 from "node:path";

// ../node/src/locate-package.ts
import findUp from "escalade/sync";
import path from "node:path";
function locatePackage(packageName) {
  const nodeModules = [];
  findUp(process.cwd(), (__dir, paths) => {
    if (paths.includes("node_modules")) {
      nodeModules.push(path.join(__dir, "node_modules"));
    }
  });
  while (nodeModules.length) {
    const first = nodeModules.shift();
    if (!first) continue;
    const configPath = findUp(first, (__dir, paths) => {
      if (paths.includes("@brifui")) {
        nodeModules.push(path.join(__dir, "@brifui"));
      } else if (__dir.endsWith("@brifui") && paths.find((path3) => path3 === packageName)) {
        return path.join(__dir, packageName);
      }
      return "";
    });
    if (configPath) {
      return configPath;
    }
  }
}

// package.json
var version = "0.0.22";
var dependencies = {
  "@clack/prompts": "0.9.1",
  "@pandacss/dev": "^0.53.1",
  "@rslib/core": "^0.5.4",
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
  try {
    const styledPackagePath = locatePackage("styled");
    if (!styledPackagePath) {
      throw new Error("Failed to locate @brifui/styled package");
    }
    const resolveStyledPath = (p) => path2.resolve(styledPackagePath, p);
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

export {
  version,
  codegen
};
