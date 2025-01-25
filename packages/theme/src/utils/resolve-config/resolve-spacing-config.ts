import { DeepRequired } from "../../types";

export const resolveSpacingConfig = (
  spacingConfig: DeepRequired<BrifUIThemeConfig["spacing"]>,
  prefix: string
) => {
  const resolved: {
    spacing: Record<string, string>;
    utilities: Record<string, string>;
  } = {
    spacing: {},
    utilities: {}
  };

  for (const [spacing, value] of Object.entries(spacingConfig)) {
    const tokenName = `--${prefix}-spacing-${spacing.replaceAll(".", "_")}`;
    resolved.utilities[tokenName] = value;
    resolved.spacing[spacing] = `var(${tokenName})`;
  }

  return resolved;
};
