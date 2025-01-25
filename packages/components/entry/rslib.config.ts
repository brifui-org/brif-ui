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
      format: "esm",
      autoExternal: {
        dependencies: false,
        optionalDependencies: true,
        devDependencies: true,
        peerDependencies: true
      }
    },
    {
      bundle: true,
      dts: true,
      format: "cjs",
      autoExternal: {
        dependencies: false,
        optionalDependencies: true,
        devDependencies: true,
        peerDependencies: true
      }
    }
  ],
  output: {
    target: "web"
  },
  plugins: [pluginReact()]
});
