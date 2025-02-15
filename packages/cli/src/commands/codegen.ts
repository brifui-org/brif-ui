import { bundleNRequire } from "bundle-n-require";
import findUp from "escalade/sync";
import { minimatch } from "minimatch";
import { execSync } from "node:child_process";

function isBrifConfig(file: string) {
  return minimatch(file, "{brifui,brifui}.config.{ts,js,cjs,mjs}");
}

function findConfig() {
  const configPath = findUp(process.cwd(), (_dir, paths) =>
    paths.find(isBrifConfig)
  );
  return configPath! as string;
}

export async function codegen() {
  const configPath = findConfig();
  await bundleNRequire(configPath, {
    interopDefault: true
  });
  execSync("npx panda codegen --config brifui.config.ts");
}
