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
var import_bundle_n_require = require("bundle-n-require");
var import_sync = __toESM(require("escalade/sync"));
var import_minimatch = require("minimatch");
var import_node_child_process = require("child_process");
function isBrifConfig(file) {
  return (0, import_minimatch.minimatch)(file, "{brifui,brifui}.config.{ts,js,cjs,mjs}");
}
function findConfig() {
  const configPath = (0, import_sync.default)(
    process.cwd(),
    (_dir, paths) => paths.find(isBrifConfig)
  );
  return configPath;
}
async function codegen() {
  const configPath = findConfig();
  await (0, import_bundle_n_require.bundleNRequire)(configPath, {
    interopDefault: true
  });
  (0, import_node_child_process.execSync)("npx panda codegen --config brifui.config.ts");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  codegen
});
