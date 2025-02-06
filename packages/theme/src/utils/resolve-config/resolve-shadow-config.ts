export const resolveShadowConfig = (shadowConfig: unknown, prefix: string) => {
  const resolved: {
    shadow: Record<string, string>;
    utilities: Record<string, string>;
  } = {
    shadow: {},
    utilities: {}
  };

  if (!shadowConfig || typeof shadowConfig !== "object") return resolved;

  for (const [shadow, value] of Object.entries(shadowConfig)) {
    const tokenName = `--${prefix}-shadow-${shadow.replaceAll(".", "_")}`;
    resolved.utilities[tokenName] = value;
    resolved.shadow[shadow] = `var(${tokenName})`;
  }

  return resolved;
};
