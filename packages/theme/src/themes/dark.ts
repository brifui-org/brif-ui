import { DeepPartial, Theme } from "@brifui/types";

import { ref, sys } from "../tokens/colors";
import { darkComponentShadows } from "../tokens/shadows";

export const dark = {
  tokens: {
    colors: ref.dark
  },
  semanticTokens: {
    colors: sys.dark,
    shadows: {
      component: darkComponentShadows
    }
  }
} as const satisfies DeepPartial<Theme>;
