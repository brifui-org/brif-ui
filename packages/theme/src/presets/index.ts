import { definePreset } from "@pandacss/dev";

import { dark } from "../themes";
import {
  breakpoints,
  keyframes,
  semanticTokens,
  textStyles,
  tokens
} from "../tokens";

export const preset = definePreset({
  name: "brifui",
  theme: {
    tokens: tokens.light,
    semanticTokens: semanticTokens.light,
    keyframes,
    breakpoints,
    textStyles
  },
  themes: {
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
    themes: ["dark"]
  }
});
