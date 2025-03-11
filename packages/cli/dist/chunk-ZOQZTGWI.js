import {
  logger
} from "./chunk-ZAEQWZ4Z.js";

// src/commands/codegen.ts
import { build } from "@rslib/core";
import chalk from "chalk";
import { execSync } from "node:child_process";
import path from "node:path";
import { locatePackage } from "@brifui/node";
import "@pandacss/dev";

// package.json
var version = "0.0.17";
var dependencies = {
  "@brifui/node": "^0.0.0",
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
var modulesToTranspile = {
  css: "./dist/css/**",
  jsx: "./dist/jsx/**",
  patterns: "./dist/patterns/**",
  themes: "./dist/themes/**",
  tokens: "./dist/tokens/**"
};
async function codegen() {
  try {
    const styledPackagePath = locatePackage("styled");
    if (!styledPackagePath) {
      throw new Error("Failed to locate @brifui/styled package");
    }
    const resolveStyledPath = (p) => path.resolve(styledPackagePath, p);
    logger.debug(`Running codegen command on @pandacss/dev@${pandaVersion}`);
    execSync(`npx panda codegen --config brifui.config.ts`);
    await build({
      lib: [
        ...Object.keys(modulesToTranspile).map((k) => ({
          source: {
            entry: {
              index: resolveStyledPath(
                modulesToTranspile[k]
              )
            }
          },
          output: {
            target: "node",
            cleanDistPath: false,
            distPath: {
              root: resolveStyledPath(`./distcjs/${k}`)
            }
          },
          bundle: false,
          format: "cjs"
        })),
        {
          source: {
            entry: {
              index: resolveStyledPath("./dist/helpers.mjs")
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
