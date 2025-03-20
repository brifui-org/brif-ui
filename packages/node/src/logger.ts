import chalk from "chalk";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Message = any;

const PREFIX = chalk.yellow("[BrifUI]");

export const logger = {
  plain: console.log,
  log: (...args: Message[]) =>
    console.log(PREFIX, chalk.bgBlue.white("[INFO]"), ...args),
  warning: (...args: Message[]) =>
    console.log(PREFIX, chalk.bgYellow.black("[WARN]"), chalk.yellow(...args)),
  error: (...args: Message[]) =>
    console.log(PREFIX, chalk.bgRed.white("[ERR]"), chalk.red(...args)),
  debug: (...args: Message[]) => {
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    if (!process.env.BRIF_DEBUG) return;
    console.log(PREFIX, chalk.bgGrey.black("[DEBUG]"), ...args);
  }
};
