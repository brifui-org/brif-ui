import { SlotRecipeConfig } from "@pandacss/dev";

import { DeepPartial, Prettify } from "./base";

type Styled = import("@brifui/styled/types").SystemStyleObject;

type SlotOf<Config> = Config extends SlotRecipeConfig
  ? keyof Config["base"]
  : never;

type VariantOf<Config> = Config extends SlotRecipeConfig
  ? keyof Config["variants"]
  : never;

type StyleConfig<Config> = Record<SlotOf<Config>, Styled>;

export type ExtendableRecipes<R> =
  R extends Record<infer ComponentName, SlotRecipeConfig>
    ? DeepPartial<{
        [K in ComponentName]: {
          base: Prettify<StyleConfig<R[K]>>;
          variants: {
            [V in VariantOf<R[K]>]: Prettify<
              Record<keyof R[K]["variants"][V], Prettify<StyleConfig<R[K]>>>
            >;
          };
        };
      }>
    : never;
