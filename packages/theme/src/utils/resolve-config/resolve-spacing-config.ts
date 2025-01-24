import { DeepRequired } from "../../types";

export const resolveSpacingConfig = (
  spacingConfig: DeepRequired<BrifUIThemeConfig["spacing"]>,
  baseSpacing: DeepRequired<BrifUIThemeConfig["spacing"]>,
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
    if (!baseSpacing[spacing as keyof BrifUIThemeConfig["spacing"]]) continue;
    const tokenName = `--${prefix}-spacing-${spacing.replaceAll(".", "_")}`;
    resolved.utilities[tokenName] = value;
    resolved.spacing[spacing] = `var(${tokenName})`;
  }

  return resolved;
};
