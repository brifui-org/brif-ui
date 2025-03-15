// src/utils/logger.ts
import chalk from "chalk";
var PREFIX = chalk.bgBlack.yellow("[BrifUI]");
var logger = {
  log: (...args) => console.log(PREFIX, chalk.bgBlue.white("[INFO]"), ...args),
  warning: (...args) => console.log(PREFIX, "[WARN]", chalk.yellow(...args)),
  error: (...args) => console.log(PREFIX, "[ERR]", chalk.red(...args)),
  debug: (...args) => {
    if (!process.env.BRIF_DEBUG) return;
    console.log(PREFIX, chalk.bgGrey.black("[DEBUG]"), ...args);
  }
};
export {
  logger
};
