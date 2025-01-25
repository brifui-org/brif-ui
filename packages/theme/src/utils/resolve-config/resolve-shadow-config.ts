import { DeepRequired } from "../../types";

export const resolveShadowConfig = (
  shadowConfig: DeepRequired<BrifUIThemeConfig["shadow"]>,
  prefix: string
) => {
  const resolved: {
    shadow: Record<string, string>;
    utilities: Record<string, string>;
  } = {
    shadow: {},
    utilities: {}
  };

  for (const [shadow, value] of Object.entries(shadowConfig)) {
    const tokenName = `--${prefix}-shadow-${shadow.replaceAll(".", "_")}`;
    resolved.utilities[tokenName] = value;
    resolved.shadow[shadow] = `var(${tokenName})`;
  }

  return resolved;
};
