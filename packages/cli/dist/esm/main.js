import * as __WEBPACK_EXTERNAL_MODULE_cac__ from "cac";
import * as __WEBPACK_EXTERNAL_MODULE__package_json_9702ddf5__ from "../package.json";
import * as __WEBPACK_EXTERNAL_MODULE__commands_codegen_js_3467e848__ from "./commands/codegen.js";
async function main() {
    const cli = (0, __WEBPACK_EXTERNAL_MODULE_cac__.cac)("brif");
    const cwd = process.cwd();
    cli.command("codegen", "Generate styled system").option("--cwd <cwd>", "Current working directory", {
        default: cwd
    }).action(__WEBPACK_EXTERNAL_MODULE__commands_codegen_js_3467e848__.codegen);
    cli.help();
    cli.version(__WEBPACK_EXTERNAL_MODULE__package_json_9702ddf5__.version);
    cli.parse(process.argv, {
        run: false
    });
    try {
        await cli.runMatchedCommand();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
export { main };
