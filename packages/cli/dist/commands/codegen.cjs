"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/commands/codegen.ts
var codegen_exports = {};
__export(codegen_exports, {
  codegen: () => codegen
});
module.exports = __toCommonJS(codegen_exports);
var import_core = require("@rslib/core");
var import_chalk2 = __toESM(require("chalk"), 1);
var import_node_child_process = require("child_process");
var import_node_path = __toESM(require("path"), 1);
var import_node = require("@brifui/node");

// package.json
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

// src/utils/logger.ts
var import_chalk = __toESM(require("chalk"), 1);
var PREFIX = import_chalk.default.bgBlack.yellow("[BrifUI]");
var logger = {
  log: (...args) => console.log(PREFIX, import_chalk.default.bgBlue.white("[INFO]"), ...args),
  warning: (...args) => console.log(PREFIX, "[WARN]", import_chalk.default.yellow(...args)),
  error: (...args) => console.log(PREFIX, "[ERR]", import_chalk.default.red(...args)),
  debug: (...args) => {
    if (!process.env.BRIF_DEBUG) return;
    console.log(PREFIX, import_chalk.default.bgGrey.black("[DEBUG]"), ...args);
  }
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
    const styledPackagePath = (0, import_node.locatePackage)("styled");
    if (!styledPackagePath) {
      throw new Error("Failed to locate @brifui/styled package");
    }
    const resolveStyledPath = (p) => import_node_path.default.resolve(styledPackagePath, p);
    logger.debug(`Running codegen command on @pandacss/dev@${pandaVersion}`);
    (0, import_node_child_process.execSync)(`npx panda codegen --config brifui.config.ts`);
    await (0, import_core.build)({
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
      `${import_chalk2.default.blue("@brifui/styled/dist/css")}: the css function to author styles`
    );
    logger.log(
      `${import_chalk2.default.blue("@brifui/styled/dist/tokens")}: the css variables and js function to query your tokens`
    );
    logger.log(
      `${import_chalk2.default.blue("@brifui/styled/dist/patterns")}: functions to implement and apply common layout patterns`
    );
  } catch (err) {
    logger.error("Failed to run codegen command");
    console.error(err);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  codegen
});
