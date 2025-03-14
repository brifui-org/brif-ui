import { Theme } from "@brifui/types";

import { breakpoints } from "./breakpoints";
import { ref, sys } from "./colors";
import { fonts } from "./fonts";
import { fontSizes } from "./fonts/font-sizes";
import { fontWeights } from "./fonts/font-weights";
import { letterSpacings } from "./fonts/letter-spacings";
import { lineHeights } from "./fonts/line-heights";
import { textStyles } from "./fonts/text-styles";
import { keyframes } from "./keyframes";
import { componentRadii, radii } from "./radii";
import { componentShadows, shadows } from "./shadows";
import {
  componentSizing,
  containerSizing,
  dialogSizing,
  sizing as sizes
} from "./sizing";
import { spacing } from "./spacing";
import { zIndex } from "./z-index";

const baseTokens: Theme["tokens"] = {
  colors: ref.light,
  spacing,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  sizes,
  radii,
  shadows,
  zIndex,
  letterSpacings: letterSpacings
} as const;

const baseSemanticTokens: Theme["semanticTokens"] = {
  colors: sys.light,
  sizes: {
    component: componentSizing,
    container: containerSizing,
    dialog: dialogSizing
  },
  shadows: {
    component: componentShadows
  },
  radii: {
    component: componentRadii
  }
} as const;

export { keyframes, breakpoints, textStyles, baseTokens, baseSemanticTokens };
