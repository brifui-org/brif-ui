import deepmerge from "deepmerge";
import { Config, Fonts } from "@brifui/types";

import { fonts } from "../../fonts";

export const resolveFonts = (config?: Config): Fonts => {
  if (
    !config ||
    !config.theme ||
    (!config.theme.extends?.fonts && !config.theme.fonts)
  )
    return fonts;

  const isExtended = !!config.theme.extends?.fonts;

  return (isExtended
    ? deepmerge(fonts, config.theme.extends?.fonts ?? {})
    : config.theme.fonts) as unknown as Fonts;
};
