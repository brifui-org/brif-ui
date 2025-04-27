import { SlotRecipeConfig } from "@pandacss/dev";

import { accordionSlotRecipe } from "./accordion";
import { alertSlotRecipe } from "./alert";
import { avatarSlotRecipe } from "./avatar";
import { buttonSlotRecipe } from "./button";
import { cardSlotRecipe } from "./card";
import { checkboxSlotRecipe } from "./checkbox";
import { codeblockSlotRecipe } from "./codeblock";
import { dialogSlotRecipe } from "./dialog";
import { formSlotRecipe } from "./form";
import { inputSlotRecipe } from "./input";
import { radioGroupSlotRecipe } from "./radio-group";
import { scrollareaSlotRecipe } from "./scrollarea";
import { selectSlotRecipe } from "./select";
import { sidebarSlotRecipes } from "./sidebar";
import { spinnerSlotRecipes } from "./spinner";

export const slotRecipes = {
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
  scrollarea: scrollareaSlotRecipe,
  select: selectSlotRecipe,
  sidebar: sidebarSlotRecipes,
  spinner: spinnerSlotRecipes
} as const;
export type ComponentSlotRecipes = typeof slotRecipes;
