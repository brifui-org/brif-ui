// src/locate-package.ts
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
      } else if (__dir.endsWith("@brifui") && paths.find((path2) => path2 === packageName)) {
        return path.join(__dir, packageName);
      }
      return "";
    });
    if (configPath) {
      return configPath;
    }
  }
}

export {
  locatePackage
};
