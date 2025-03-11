import { defineConfig } from "@rslib/core";

const modulesToTranspile = {
  css: "./dist/css/**",
  jsx: "./dist/jsx/**",
  patterns: "./dist/patterns/**",
  themes: "./dist/themes/**",
  tokens: "./dist/tokens/**"
} as const;

export default defineConfig({
  lib: [
    ...(Object.keys(modulesToTranspile).map((k) => ({
      source: {
        entry: {
          index: modulesToTranspile[k as keyof typeof modulesToTranspile]
        }
      },
      output: {
        target: "node",
        cleanDistPath: false,
        distPath: {
          root: `./distcjs/${k}`
        }
      },
      bundle: false,
      format: "cjs"
    })) as object[]),
    {
      source: {
        entry: {
          index: "./dist/helpers.mjs"
        }
      },
      output: {
        target: "node",
        cleanDistPath: false,
        distPath: {
          root: "./distcjs"
        }
      },
      bundle: false,
      format: "cjs"
    }
  ]
});
