import { Theme } from "@brifui/types";

import { breakpoints } from "./breakpoints";
import { ref, sys } from "./colors";
import { fonts } from "./fonts";
import { fontSizes } from "./fonts/font-sizes";
import { fontWeights } from "./fonts/font-weights";
import { lineHeights } from "./fonts/line-heights";
import { textStyles } from "./fonts/text-styles";
import { keyframes } from "./keyframes";
import { componentRadii, radii } from "./radii";
import { componentShadows, darkComponentShadows, shadows } from "./shadows";
import { componentSizing, containerSizing, sizing as sizes } from "./sizing";
import { spacing } from "./spacing";
import { zIndex } from "./z-index";

const baseTokens: Omit<Theme["tokens"], "colors"> = {
  spacing,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  sizes,
  radii,
  shadows,
  zIndex
} as const;

const tokens: Record<"light" | "dark", Theme["tokens"]> = {
  light: {
    ...baseTokens,
    colors: ref.light
  },
  dark: {
    ...baseTokens,
    colors: ref.dark
  }
} as const;

const baseSemanticTokens: Omit<Theme["semanticTokens"], "colors" | "shadows"> =
  {
    sizes: {
      component: componentSizing,
      container: containerSizing
    },
    radii: {
      component: componentRadii
    }
  } as const;
const semanticTokens: Record<"light" | "dark", Theme["semanticTokens"]> = {
  light: {
    ...baseSemanticTokens,
    shadows: {
      component: componentShadows
    },
    colors: sys.light
  },
  dark: {
    ...baseSemanticTokens,
    shadows: {
      component: darkComponentShadows
    },
    colors: sys.dark
  }
} as const;

export { tokens, semanticTokens, keyframes, breakpoints, textStyles };
