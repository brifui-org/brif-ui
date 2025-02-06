export const resolveBorderRadiusConfig = (
  borderRadius: unknown,
  prefix: string
) => {
  const resolved: {
    borderRadius: Record<string, string>;
    utilities: Record<string, string>;
  } = {
    borderRadius: {},
    utilities: {}
  };

  if (!borderRadius || typeof borderRadius !== "object") return resolved;

  for (const [spacing, value] of Object.entries(borderRadius)) {
    const tokenName = `--${prefix}-border-radius-${spacing.replaceAll(".", "_")}`;
    resolved.utilities[tokenName] = value;
    resolved.borderRadius[spacing] = `var(${tokenName})`;
  }

  return resolved;
};
