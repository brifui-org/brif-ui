// src/commands/codegen.ts
import { codegen, loadConfigAndCreateContext } from "@pandacss/node";
import { build } from "@rslib/core";
import { Effect } from "effect";
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

// ../node/src/logger.ts
import chalk from "chalk";
var PREFIX = chalk.bgBlack.yellow("[BrifUI]");
var logger = {
  plain: console.log,
  log: (...args) => console.log(PREFIX, chalk.bgBlue.white("[INFO]"), ...args),
  warning: (...args) => console.log(PREFIX, "[WARN]", chalk.yellow(...args)),
  error: (...args) => console.log(PREFIX, chalk.bgRed("[ERR]"), chalk.red(...args)),
  debug: (...args) => {
    if (!process.env.BRIF_DEBUG) return;
    console.log(PREFIX, chalk.bgGrey.black("[DEBUG]"), ...args);
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
    return Effect.fail(EXCEPTIONS.StyledPackageNotFound);
  }
  return Effect.succeed(styledPath);
};
var resolvePath = (p1) => (p2) => path2.resolve(Effect.runSync(p1), p2);
var resolveStyledPath = Effect.runSync(
  Effect.try({
    try: getStyledPackagePath,
    catch: () => {
      throw EXCEPTIONS.StyledPackageNotFound;
    }
  }).pipe(Effect.andThen(resolvePath))
);
var runPandaCodegen = Effect.tryPromise({
  try: async () => {
    const ctx = await loadConfigAndCreateContext({
      cwd: process.cwd(),
      configPath: "brifui.config.ts"
    });
    const { msg, box } = await codegen(ctx);
    logger.plain(box);
    logger.plain(msg);
  },
  catch: () => {
    throw EXCEPTIONS.CodegenFailed;
  }
});
var transpileESMToCJS = Effect.tryPromise({
  try: () => build({
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
  const tasks = Effect.forEach(
    [runPandaCodegen, transpileESMToCJS],
    (task) => Effect.either(task)
  );
  await Effect.runPromise(tasks).then(() => void 0).catch(defaultExeceptionHandler);
}
export {
  codegenCommand
};
