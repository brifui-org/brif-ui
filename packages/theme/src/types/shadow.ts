import { DefaultShadow } from "../shadow";

export type ShadowConfig<
  B extends Record<string, string> | undefined = undefined
> = B extends undefined ? DefaultShadow : B;
