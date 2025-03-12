"use strict";
var __webpack_require__ = {};
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
    main: ()=>main
});
const external_cac_namespaceObject = require("cac");
const external_package_json_namespaceObject = require("../package.json");
const codegen_cjs_namespaceObject = require("./commands/codegen.cjs");
async function main() {
    const cli = (0, external_cac_namespaceObject.cac)("brif");
    const cwd = process.cwd();
    cli.command("codegen", "Generate styled system").option("--cwd <cwd>", "Current working directory", {
        default: cwd
    }).action(codegen_cjs_namespaceObject.codegen);
    cli.help();
    cli.version(external_package_json_namespaceObject.version);
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
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__)__webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, '__esModule', {
    value: true
});
