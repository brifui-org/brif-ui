import { ExtendableTheme } from "@brifui/types";

import { semanticTokens, tokens } from "../tokens";

export const dark: Pick<ExtendableTheme, "tokens" | "semanticTokens"> = {
  tokens: tokens.dark,
  semanticTokens: semanticTokens.dark
};
