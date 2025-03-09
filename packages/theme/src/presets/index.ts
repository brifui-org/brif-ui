import { definePreset } from "@pandacss/dev";

import { dark, light } from "../themes";
import {
  baseSemanticTokens,
  baseTokens,
  breakpoints,
  keyframes,
  textStyles
} from "../tokens";

export const preset = definePreset({
  name: "brifui",
  theme: {
    tokens: baseTokens,
    semanticTokens: baseSemanticTokens,
    keyframes,
    breakpoints,
    textStyles
  },
  themes: {
    light,
    dark
  },
  conditions: {
    dark: '[data-panda-theme="dark"] &'
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
  staticCss: {
    themes: ["dark", "light"]
  }
});
