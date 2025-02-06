export const resolveBreakpointsConfig = (
  breakpoints: unknown,
  prefix: string
) => {
  const resolved: {
    breakpoints: Record<string, string>;
    utilities: Record<string, string>;
  } = {
    breakpoints: {},
    utilities: {}
  };

  if (!breakpoints || typeof breakpoints !== "object") return resolved;

  for (const [bp, value] of Object.entries(breakpoints)) {
    const tokenName = `--${prefix}-breakpoint-${bp}`;
    resolved.utilities[tokenName] = value;
    resolved.breakpoints[bp] = value;
  }

  return resolved;
};
