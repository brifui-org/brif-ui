import { type SlotRecipeConfig } from "@pandacss/dev";

import { DeepPartial } from "./base";

export type ComponentConfig<C extends Record<string, SlotRecipeConfig>> =
  DeepPartial<Record<keyof C, any>>;
