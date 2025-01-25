import { DeepRequired } from "../../types";

export const resolveBreakpointsConfig = (
  breakpoints: DeepRequired<BrifUIThemeConfig["breakpoints"]>,
  prefix: string
) => {
  const resolved: {
    breakpoints: Record<string, string>;
    utilities: Record<string, string>;
  } = {
    breakpoints: {},
    utilities: {}
  };

  for (const [bp, value] of Object.entries(breakpoints)) {
    const tokenName = `--${prefix}-breakpoint-${bp}`;
    resolved.utilities[tokenName] = value;
    resolved.breakpoints[bp] = value;
  }

  return resolved;
};
