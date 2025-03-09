import { Theme } from "@brifui/types";

import { semanticTokens, tokens } from "../tokens";

export const dark: Pick<Theme, "tokens" | "semanticTokens"> = {
  tokens: tokens.dark,
  semanticTokens: semanticTokens.dark
};
