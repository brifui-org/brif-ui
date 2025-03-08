import chalk from "chalk";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Message = any;

const PREFIX = chalk.bgBlack.yellow("[BrifUI]");

export const logger = {
  log: (...args: Message[]) =>
    console.log(PREFIX, chalk.bgBlue.white("[INFO]"), ...args),
  warning: (...args: Message[]) =>
    console.log(PREFIX, "[WARN]", chalk.yellow(...args)),
  error: (...args: Message[]) =>
    console.log(PREFIX, "[ERR]", chalk.red(...args)),
  debug: (...args: Message[]) => {
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    if (!process.env.BRIF_DEBUG) return;
    console.log(PREFIX, chalk.bgGrey.black("[DEBUG]"), ...args);
  }
};
