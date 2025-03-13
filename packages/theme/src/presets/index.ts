import { definePreset } from "@pandacss/dev";

import {
  baseSemanticTokens,
  baseTokens,
  breakpoints,
  keyframes,
  textStyles
} from "../tokens";
import { boxShadowUtility } from "../utilities";

export const preset = definePreset({
  name: "brifui",
  theme: {
    tokens: baseTokens,
    semanticTokens: baseSemanticTokens,
    keyframes,
    breakpoints,
    textStyles
  },
  globalCss: {
    html: {
      color: "{colors.text}",
      backgroundColor: "{colors.background}",
      "--global-color-border": "{colors.border}",
      "--global-font-heading": "{fonts.heading}",
      "--global-font-body": "{fonts.body}"
    }
  },
  utilities: {
    extend: {
      boxShadow: boxShadowUtility
    }
  }
});
