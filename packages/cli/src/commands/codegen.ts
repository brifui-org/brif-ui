import { codegen, loadConfigAndCreateContext } from "@pandacss/node";
import { build } from "@rslib/core";
import { Effect } from "effect";
import path from "node:path";
import {
  defaultExeceptionHandler,
  EXCEPTIONS,
  locatePackage,
  logger
} from "@brifui/node";

const getStyledPackagePath = (): Effect.Effect<string, Error> => {
  const styledPath = locatePackage("styled");
  if (!styledPath) {
    return Effect.fail(EXCEPTIONS.StyledPackageNotFound);
  }

  return Effect.succeed(styledPath);
};

const resolvePath = (p1: Effect.Effect<string, Error>) => (p2: string) =>
  path.resolve(Effect.runSync(p1), p2);

const resolveStyledPath = Effect.runSync(
  Effect.try({
    try: getStyledPackagePath,
    catch: () => {
      throw EXCEPTIONS.StyledPackageNotFound;
    }
  }).pipe(Effect.andThen(resolvePath))
);

const runPandaCodegen = Effect.tryPromise({
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

const transpileESMToCJS = Effect.tryPromise({
  try: () =>
    build({
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

export async function codegenCommand() {
  const tasks = Effect.forEach([runPandaCodegen, transpileESMToCJS], (task) =>
    Effect.either(task)
  );
  await Effect.runPromise(tasks)
    .then(() => void 0)
    .catch(defaultExeceptionHandler);
}
