import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      source: {
        entry: {
          index: "./dist/**"
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
