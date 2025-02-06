export const resolveSpacingConfig = (
  spacingConfig: unknown,
  prefix: string
) => {
  const resolved: {
    spacing: Record<string, string>;
    utilities: Record<string, string>;
  } = {
    spacing: {},
    utilities: {}
  };

  if (!spacingConfig || typeof spacingConfig !== "object") return resolved;

  for (const [spacing, value] of Object.entries(spacingConfig)) {
    const tokenName = `--${prefix}-spacing-${spacing.replaceAll(".", "_")}`;
    resolved.utilities[tokenName] = value;
    resolved.spacing[spacing] = `var(${tokenName})`;
  }

  return resolved;
};
