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
    logger: ()=>logger
});
const external_chalk_namespaceObject = require("chalk");
var external_chalk_default = /*#__PURE__*/ __webpack_require__.n(external_chalk_namespaceObject);
const PREFIX = external_chalk_default().bgBlack.yellow("[BrifUI]");
const logger = {
    log: (...args)=>console.log(PREFIX, external_chalk_default().bgBlue.white("[INFO]"), ...args),
    warning: (...args)=>console.log(PREFIX, "[WARN]", external_chalk_default().yellow(...args)),
    error: (...args)=>console.log(PREFIX, "[ERR]", external_chalk_default().red(...args)),
    debug: (...args)=>{
        if (!process.env.BRIF_DEBUG) return;
        console.log(PREFIX, external_chalk_default().bgGrey.black("[DEBUG]"), ...args);
    }
};
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__)__webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, '__esModule', {
    value: true
});
