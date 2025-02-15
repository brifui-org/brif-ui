import { defineConfig } from "@pandacss/dev";
import { preset } from "@brifui/theme";

export default defineConfig({
  prefix: "brif",
  jsxFramework: "react",
  presets: [preset],
  outdir: "dist"
});
