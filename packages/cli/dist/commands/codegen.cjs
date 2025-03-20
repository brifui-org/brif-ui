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
  codegenCommand: () => codegenCommand
});
module.exports = __toCommonJS(codegen_exports);
var import_node = require("@pandacss/node");
var import_core = require("@rslib/core");
var import_effect = require("effect");
var import_node_path2 = __toESM(require("path"), 1);

// ../node/src/locate-package.ts
var import_sync = __toESM(require("escalade/sync"), 1);
var import_node_path = __toESM(require("path"), 1);
function locatePackage(packageName) {
  const nodeModules = [];
  (0, import_sync.default)(process.cwd(), (__dir, paths) => {
    if (paths.includes("node_modules")) {
      nodeModules.push(import_node_path.default.join(__dir, "node_modules"));
    }
  });
  while (nodeModules.length) {
    const first = nodeModules.shift();
    if (!first) continue;
    const configPath = (0, import_sync.default)(first, (__dir, paths) => {
      if (paths.includes("@brifui")) {
        nodeModules.push(import_node_path.default.join(__dir, "@brifui"));
      } else if (__dir.endsWith("@brifui") && paths.find((path3) => path3 === packageName)) {
        return import_node_path.default.join(__dir, packageName);
      }
      return "";
    });
    if (configPath) {
      return configPath;
    }
  }
}

// ../node/src/logger.ts
var import_chalk = __toESM(require("chalk"), 1);
var PREFIX = import_chalk.default.bgBlack.yellow("[BrifUI]");
var logger = {
  plain: console.log,
  log: (...args) => console.log(PREFIX, import_chalk.default.bgBlue.white("[INFO]"), ...args),
  warning: (...args) => console.log(PREFIX, "[WARN]", import_chalk.default.yellow(...args)),
  error: (...args) => console.log(PREFIX, import_chalk.default.bgRed("[ERR]"), import_chalk.default.red(...args)),
  debug: (...args) => {
    if (!process.env.BRIF_DEBUG) return;
    console.log(PREFIX, import_chalk.default.bgGrey.black("[DEBUG]"), ...args);
  }
};

// ../node/src/exceptions.ts
var EXCEPTION_CODE = {
  STYLED_PACKAGE_NOT_FOUND: "STYLED_PACKAGE_NOT_FOUND",
  CODEGEN_FAILED: "CODEGEN_FAILED",
  CODEGEN_TRANSPILE_FAILED: "CODEGEN_TRANSPILE_FAILED"
};
var EXCEPTIONS = {
  StyledPackageNotFound: new Error(EXCEPTION_CODE.STYLED_PACKAGE_NOT_FOUND),
  CodegenFailed: new Error(EXCEPTION_CODE.CODEGEN_FAILED),
  CodegenTranspileFailed: new Error(EXCEPTION_CODE.CODEGEN_TRANSPILE_FAILED)
};

// ../node/src/exception-handler.ts
var defaultExeceptionHandler = (error) => {
  switch (error.message) {
    case EXCEPTION_CODE.CODEGEN_FAILED:
      logger.error("Failed to run codegen command");
      break;
    case EXCEPTION_CODE.CODEGEN_TRANSPILE_FAILED:
      logger.error("Failed to transpile styled to CJS");
      break;
  }
  throw error;
};

// src/commands/codegen.ts
var getStyledPackagePath = () => {
  const styledPath = locatePackage("styled");
  if (!styledPath) {
    return import_effect.Effect.fail(EXCEPTIONS.StyledPackageNotFound);
  }
  return import_effect.Effect.succeed(styledPath);
};
var resolvePath = (p1) => (p2) => import_node_path2.default.resolve(import_effect.Effect.runSync(p1), p2);
var resolveStyledPath = import_effect.Effect.runSync(
  import_effect.Effect.try({
    try: getStyledPackagePath,
    catch: () => {
      throw EXCEPTIONS.StyledPackageNotFound;
    }
  }).pipe(import_effect.Effect.andThen(resolvePath))
);
var runPandaCodegen = import_effect.Effect.tryPromise({
  try: async () => {
    const ctx = await (0, import_node.loadConfigAndCreateContext)({
      cwd: process.cwd(),
      configPath: "brifui.config.ts"
    });
    const { msg, box } = await (0, import_node.codegen)(ctx);
    logger.plain(box);
    logger.plain(msg);
  },
  catch: () => {
    throw EXCEPTIONS.CodegenFailed;
  }
});
var transpileESMToCJS = import_effect.Effect.tryPromise({
  try: () => (0, import_core.build)({
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
  }),
  catch: () => {
    throw EXCEPTIONS.CodegenTranspileFailed;
  }
});
async function codegenCommand() {
  const tasks = import_effect.Effect.forEach(
    [runPandaCodegen, transpileESMToCJS],
    (task) => import_effect.Effect.either(task)
  );
  await import_effect.Effect.runPromise(tasks).then(() => void 0).catch(defaultExeceptionHandler);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  codegenCommand
});
