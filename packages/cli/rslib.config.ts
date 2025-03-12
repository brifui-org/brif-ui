import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      source: {
        entry: {
          index: "./src/**"
        }
      },
      bundle: false,
      format: "cjs",
      output: {
        target: "node",
        distPath: {
          root: "./dist/cjs"
        },
        cleanDistPath: "auto"
      }
    },
    {
      source: {
        entry: {
          index: "./src/**"
        }
      },
      bundle: false,
      format: "esm",
      output: {
        target: "node",
        distPath: {
          root: "./dist/esm"
        },
        cleanDistPath: "auto"
      }
    }
  ]
});
