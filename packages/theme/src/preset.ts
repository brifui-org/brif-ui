import { definePreset } from "@pandacss/dev";

import { breakpoints } from "./breakpoints";
import { ref, sys } from "./colors";
import { fonts } from "./fonts";
import { componentRadii, radii } from "./radii";
import { componentShadows, shadows } from "./shadows";
import { componentSizing, sizing as sizes } from "./sizing";
import { spacing } from "./spacing";

export const preset = definePreset({
  name: "brifui",
  theme: {
    tokens: {
      colors: ref,
      spacing,
      fonts,
      sizes,
      radii,
      shadows
    },
    semanticTokens: {
      colors: sys,
      sizes: {
        component: componentSizing
      },
      shadows: {
        component: componentShadows
      },
      radii: {
        component: componentRadii
      }
    },
    breakpoints
  },
  globalCss: {
    html: {
      "--global-font-heading": "{fonts.heading}",
      "--global-font-body": "{fonts.body}"
    }
  }
});
