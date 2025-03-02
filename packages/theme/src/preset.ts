import { definePreset } from "@pandacss/dev";

import { breakpoints } from "./breakpoints";
import { ref, sys } from "./colors";
import { fonts } from "./fonts";
import { fontSizes } from "./fonts/font-sizes";
import { fontWeights } from "./fonts/font-weights";
import { lineHeights } from "./fonts/line-heights";
import { textStyles } from "./fonts/text-styles";
import { componentRadii, radii } from "./radii";
import { componentShadows, shadows } from "./shadows";
import { componentSizing, containerSizing, sizing as sizes } from "./sizing";
import { spacing } from "./spacing";
import { zIndex } from "./z-index";

export const preset = definePreset({
  name: "brifui",
  theme: {
    tokens: {
      colors: ref,
      spacing,
      fonts,
      fontSizes,
      fontWeights,
      lineHeights,
      sizes,
      radii,
      shadows,
      zIndex
    },
    semanticTokens: {
      colors: sys,
      sizes: {
        component: componentSizing,
        container: containerSizing
      },
      shadows: {
        component: componentShadows
      },
      radii: {
        component: componentRadii
      }
    },
    breakpoints,
    textStyles
  },
  globalCss: {
    html: {
      "--global-font-heading": "{fonts.heading}",
      "--global-font-body": "{fonts.body}"
    }
  }
});
