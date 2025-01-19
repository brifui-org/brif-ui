import { DefaultSpacing } from "../spacing";

export type SpacingConfig<
  B extends Record<string, string> | undefined = undefined
> = B extends undefined ? DefaultSpacing : B;
