import { pluginReact } from "@rsbuild/plugin-react";
import { defineConfig } from "@rslib/core";

export default defineConfig({
  source: {
    entry: {
      index: ["./src/index.ts"]
    }
  },
  lib: [
    {
      bundle: true,
      dts: true,
      format: "esm"
    },
    {
      bundle: true,
      dts: true,
      format: "cjs"
    }
  ],
  output: {
    target: "web",
    externals: [
      "react",
      "react-dom",
      "@brifui/eslint-config",
      "@brifui/typescript-config",
      "@rsbuild/plugin-react",
      "@microsoft/api-extractor",
      "@types/react",
      "@types/react-dom",
      "typescript"
    ]
  },
  plugins: [pluginReact()]
});
