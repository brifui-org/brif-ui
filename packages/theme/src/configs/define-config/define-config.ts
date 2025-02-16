import { defineConfig as _defineConfig } from "@pandacss/dev";
import findUp from "escalade/sync";
import path from "node:path";
import { Config } from "@brifui/types";

import { keyframes } from "../../keyframes";
import { preset } from "../../preset";
import { resolveConfig } from "./resolve-config";

function findStyledPackage() {
  const nodeModules: string[] = [];
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
      } else if (
        __dir.endsWith("@brifui") &&
        paths.find((path) => path === "styled")
      ) {
        return path.join(__dir, "styled", "dist");
      }
      return "";
    });
    if (configPath) {
      return configPath;
    }
  }
}

export const defineConfig = (configs: Config = {}) => {
  const { include = ["./src/**/*.{ts,tsx,js,jsx}"] } = configs;

  const styledPackagePath = findStyledPackage();

  return _defineConfig({
    prefix: "brif",
    preflight: true,
    include,
    theme: {
      extend: {
        tokens: {
          colors: resolveConfig(configs, "colors"),
          fonts: resolveConfig(configs, "fonts")
        }
      },
      keyframes: resolveConfig(configs, "keyframes"),
      breakpoints: resolveConfig(configs, "breakpoints")
    },
    presets: [preset],
    importMap: "@brifui/styled",
    outdir: path.relative(process.cwd(), styledPackagePath!)
  });
};
