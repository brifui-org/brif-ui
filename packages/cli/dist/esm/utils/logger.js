import * as __WEBPACK_EXTERNAL_MODULE_chalk__ from "chalk";
const PREFIX = __WEBPACK_EXTERNAL_MODULE_chalk__["default"].bgBlack.yellow("[BrifUI]");
const logger = {
    log: (...args)=>console.log(PREFIX, __WEBPACK_EXTERNAL_MODULE_chalk__["default"].bgBlue.white("[INFO]"), ...args),
    warning: (...args)=>console.log(PREFIX, "[WARN]", __WEBPACK_EXTERNAL_MODULE_chalk__["default"].yellow(...args)),
    error: (...args)=>console.log(PREFIX, "[ERR]", __WEBPACK_EXTERNAL_MODULE_chalk__["default"].red(...args)),
    debug: (...args)=>{
        if (!process.env.BRIF_DEBUG) return;
        console.log(PREFIX, __WEBPACK_EXTERNAL_MODULE_chalk__["default"].bgGrey.black("[DEBUG]"), ...args);
    }
};
export { logger };
