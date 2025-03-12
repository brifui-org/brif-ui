"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.n = (module)=>{
        var getter = module && module.__esModule ? ()=>module['default'] : ()=>module;
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();
(()=>{
    __webpack_require__.d = (exports1, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    __webpack_require__.r = function(exports1) {
        if ('undefined' != typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
    codegen: ()=>codegen
});
const core_namespaceObject = require("@rslib/core");
const external_chalk_namespaceObject = require("chalk");
var external_chalk_default = /*#__PURE__*/ __webpack_require__.n(external_chalk_namespaceObject);
const external_node_child_process_namespaceObject = require("node:child_process");
const external_node_path_namespaceObject = require("node:path");
var external_node_path_default = /*#__PURE__*/ __webpack_require__.n(external_node_path_namespaceObject);
const node_namespaceObject = require("@brifui/node");
const external_package_json_namespaceObject = require("../../package.json");
const logger_cjs_namespaceObject = require("../utils/logger.cjs");
const pandaVersion = external_package_json_namespaceObject.dependencies["@pandacss/dev"].slice(1);
async function codegen() {
    try {
        const styledPackagePath = (0, node_namespaceObject.locatePackage)("styled");
        if (!styledPackagePath) throw new Error("Failed to locate @brifui/styled package");
        const resolveStyledPath = (p)=>external_node_path_default().resolve(styledPackagePath, p);
        logger_cjs_namespaceObject.logger.debug(`Running codegen command on @pandacss/dev@${pandaVersion}`);
        (0, external_node_child_process_namespaceObject.execSync)("npx panda codegen --config brifui.config.ts");
        await (0, core_namespaceObject.build)({
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
        logger_cjs_namespaceObject.logger.log(`${external_chalk_default().blue("@brifui/styled/dist/css")}: the css function to author styles`);
        logger_cjs_namespaceObject.logger.log(`${external_chalk_default().blue("@brifui/styled/dist/tokens")}: the css variables and js function to query your tokens`);
        logger_cjs_namespaceObject.logger.log(`${external_chalk_default().blue("@brifui/styled/dist/patterns")}: functions to implement and apply common layout patterns`);
    } catch (err) {
        logger_cjs_namespaceObject.logger.error("Failed to run codegen command");
        console.error(err);
    }
}
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__)__webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, '__esModule', {
    value: true
});
