import { DefaultBorderRadius } from "../border-radius";

export type BorderRadiusConfig<
  B extends Record<string, string> | undefined = undefined
> = B extends undefined ? DefaultBorderRadius : B;
