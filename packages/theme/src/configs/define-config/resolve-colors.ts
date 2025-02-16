import deepmerge from "deepmerge";
import { Colors, Config } from "@brifui/types";

import { ref, sys } from "../../colors";

export const resolveColors = (config?: Config): Colors => {
  if (
    !config ||
    !config.theme ||
    (!config.theme.extends?.fonts && !config.theme.fonts)
  )
    return {
      ref,
      sys
    };

  const isExtended = !!config.theme.extends?.colors;

  return (isExtended
    ? deepmerge({ ref, sys }, config.theme.extends?.colors ?? {})
    : config.theme.colors) as unknown as Colors;
};
