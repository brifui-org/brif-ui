import { definePreset, SlotRecipeConfig } from "@pandacss/dev";

import {
  accordionSlotRecipe,
  alertSlotRecipe,
  avatarSlotRecipe,
  buttonSlotRecipe,
  cardSlotRecipe,
  checkboxSlotRecipe
} from "../recipes";
import {
  baseSemanticTokens,
  baseTokens,
  breakpoints,
  keyframes,
  textStyles
} from "../tokens";
import { boxShadowUtility } from "../utilities";

const slotRecipes: Record<string, SlotRecipeConfig> = {
  button: buttonSlotRecipe,
  accordion: accordionSlotRecipe,
  alert: alertSlotRecipe,
  avatar: avatarSlotRecipe,
  card: cardSlotRecipe,
  checkbox: checkboxSlotRecipe
};

export const preset = definePreset({
  name: "brifui",
  theme: {
    tokens: baseTokens,
    semanticTokens: baseSemanticTokens,
    keyframes,
    breakpoints,
    textStyles,
    slotRecipes
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
  },
  staticCss: {
    recipes: "*"
  }
});
