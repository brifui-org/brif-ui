export type BreakpointConfig<
  B extends Record<string, string> = Record<string, string>
> = B & {
  [key: string]: string;
};
