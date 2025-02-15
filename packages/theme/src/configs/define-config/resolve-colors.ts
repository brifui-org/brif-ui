import deepmerge from "deepmerge";
import { Colors, Config } from "@brifui/types";

import { ref, sys } from "../../colors";

export const resolveColors = (config?: Config): Colors => {
  if (!config?.theme?.colors && !config?.theme?.extends?.colors)
    return {
      sys,
      ref
    } satisfies Colors;

  const isExtended = !!config.theme.extends?.colors;
  const colors = config.theme.colors;

  return isExtended ? deepmerge({ sys, ref }, colors) : colors;
};
