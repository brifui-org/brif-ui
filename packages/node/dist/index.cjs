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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  locatePackage: () => locatePackage
});
module.exports = __toCommonJS(index_exports);

// src/locate-package.ts
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
      } else if (__dir.endsWith("@brifui") && paths.find((path2) => path2 === packageName)) {
        return import_node_path.default.join(__dir, packageName);
      }
      return "";
    });
    if (configPath) {
      return configPath;
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  locatePackage
});
