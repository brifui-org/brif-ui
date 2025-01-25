import { DeepRequired } from "../../types";

export const resolveBorderRadiusConfig = (
  borderRadius: DeepRequired<BrifUIThemeConfig["borderRadius"]>,
  prefix: string
) => {
  const resolved: {
    borderRadius: Record<string, string>;
    utilities: Record<string, string>;
  } = {
    borderRadius: {},
    utilities: {}
  };

  for (const [spacing, value] of Object.entries(borderRadius)) {
    const tokenName = `--${prefix}-border-radius-${spacing.replaceAll(".", "_")}`;
    resolved.utilities[tokenName] = value;
    resolved.borderRadius[spacing] = `var(${tokenName})`;
  }

  return resolved;
};
