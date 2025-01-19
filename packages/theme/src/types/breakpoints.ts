import { DefaultBreakpoints } from "../breakpoints";

export type BreakpointConfig<
  B extends Record<string, string> | undefined = undefined
> = B extends undefined ? DefaultBreakpoints : B;
