import { definePreset } from "@pandacss/dev";

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
      boxShadow: {
        transform(value, { token }) {
          if (typeof value !== "string" || !value.startsWith("var"))
            return {
              boxShadow: value
            };
          return {
            boxShadow: `${value} var(--shadow-color, ${token("colors.text")})`
          };
        }
      }
    }
  }
});
