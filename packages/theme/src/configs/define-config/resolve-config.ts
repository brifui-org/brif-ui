import deepmerge from "deepmerge";
import { Config } from "@brifui/types";

import { breakpoints } from "../../breakpoints";
import { ref, sys } from "../../colors";
import { fonts } from "../../fonts";
import { keyframes } from "../../keyframes";

const defaultConfig = {
  colors: {
    sys,
    ref
  },
  keyframes,
  fonts,
  breakpoints
} as const;

export const resolveConfig = (
  config: Config | undefined,
  key: keyof typeof defaultConfig
): any => {
  if (
    !config ||
    !config.theme ||
    (!config.theme.extends?.[key] && !config.theme?.[key])
  )
    return defaultConfig[key];

  const isExtended = !!config.theme.extends?.[key];

  if (isExtended) {
    return deepmerge(
      defaultConfig[key] as any,
      (config.theme.extends?.[key] ?? {}) as any
    );
  }

  return config.theme[key];
};
