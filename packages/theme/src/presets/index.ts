import { definePreset, SlotRecipeConfig } from "@pandacss/dev";

import {
  accordionSlotRecipe,
  alertSlotRecipe,
  avatarSlotRecipe,
  buttonSlotRecipe,
  cardSlotRecipe,
  checkboxSlotRecipe,
  codeblockSlotRecipe,
  dialogSlotRecipe,
  formSlotRecipe,
  inputSlotRecipe,
  radioGroupSlotRecipe,
  scrollareaSlotRecipe
} from "../recipes";
import {
  baseSemanticTokens,
  baseTokens,
  breakpoints,
  keyframes,
  textStyles
} from "../tokens";
import { boxShadowUtility } from "../utilities";

const slotRecipes = {
  button: buttonSlotRecipe,
  accordion: accordionSlotRecipe,
  alert: alertSlotRecipe,
  avatar: avatarSlotRecipe,
  card: cardSlotRecipe,
  checkbox: checkboxSlotRecipe,
  codeblock: codeblockSlotRecipe,
  dialog: dialogSlotRecipe,
  form: formSlotRecipe,
  input: inputSlotRecipe,
  radioGroup: radioGroupSlotRecipe,
  scrollarea: scrollareaSlotRecipe
} satisfies Record<string, SlotRecipeConfig>;

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
