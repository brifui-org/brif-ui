import * as __WEBPACK_EXTERNAL_MODULE__rslib_core_68de5877__ from "@rslib/core";
import * as __WEBPACK_EXTERNAL_MODULE_chalk__ from "chalk";
import * as __WEBPACK_EXTERNAL_MODULE_node_child_process_27f17141__ from "node:child_process";
import * as __WEBPACK_EXTERNAL_MODULE_node_path_c5b9b54f__ from "node:path";
import * as __WEBPACK_EXTERNAL_MODULE__brifui_node_5b061f1f__ from "@brifui/node";
import * as __WEBPACK_EXTERNAL_MODULE__package_json_1116eba2__ from "../../package.json";
import * as __WEBPACK_EXTERNAL_MODULE__utils_logger_js_c66a303d__ from "../utils/logger.js";
const pandaVersion = __WEBPACK_EXTERNAL_MODULE__package_json_1116eba2__.dependencies["@pandacss/dev"].slice(1);
async function codegen() {
    try {
        const styledPackagePath = (0, __WEBPACK_EXTERNAL_MODULE__brifui_node_5b061f1f__.locatePackage)("styled");
        if (!styledPackagePath) throw new Error("Failed to locate @brifui/styled package");
        const resolveStyledPath = (p)=>__WEBPACK_EXTERNAL_MODULE_node_path_c5b9b54f__["default"].resolve(styledPackagePath, p);
        __WEBPACK_EXTERNAL_MODULE__utils_logger_js_c66a303d__.logger.debug(`Running codegen command on @pandacss/dev@${pandaVersion}`);
        (0, __WEBPACK_EXTERNAL_MODULE_node_child_process_27f17141__.execSync)("npx panda codegen --config brifui.config.ts");
        await (0, __WEBPACK_EXTERNAL_MODULE__rslib_core_68de5877__.build)({
            lib: [
                {
                    source: {
                        entry: {
                            index: resolveStyledPath("./dist/**")
                        }
                    },
                    output: {
                        target: "node",
                        cleanDistPath: false,
                        distPath: {
                            root: resolveStyledPath("./distcjs")
                        }
                    },
                    bundle: false,
                    format: "cjs"
                }
            ]
        });
        __WEBPACK_EXTERNAL_MODULE__utils_logger_js_c66a303d__.logger.log(`${__WEBPACK_EXTERNAL_MODULE_chalk__["default"].blue("@brifui/styled/dist/css")}: the css function to author styles`);
        __WEBPACK_EXTERNAL_MODULE__utils_logger_js_c66a303d__.logger.log(`${__WEBPACK_EXTERNAL_MODULE_chalk__["default"].blue("@brifui/styled/dist/tokens")}: the css variables and js function to query your tokens`);
        __WEBPACK_EXTERNAL_MODULE__utils_logger_js_c66a303d__.logger.log(`${__WEBPACK_EXTERNAL_MODULE_chalk__["default"].blue("@brifui/styled/dist/patterns")}: functions to implement and apply common layout patterns`);
    } catch (err) {
        __WEBPACK_EXTERNAL_MODULE__utils_logger_js_c66a303d__.logger.error("Failed to run codegen command");
        console.error(err);
    }
}
export { codegen };
