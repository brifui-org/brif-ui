/* eslint-disable @typescript-eslint/no-explicit-any */
import deepmerge from "deepmerge";
import { Config, Theme } from "@brifui/types";

import {
  breakpoints,
  keyframes,
  semanticTokens,
  textStyles,
  tokens
} from "../../tokens";

const defaultConfig: Theme = {
  tokens: tokens.light,
  semanticTokens: semanticTokens.light,
  keyframes,
  breakpoints,
  textStyles
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
