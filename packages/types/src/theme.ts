import { CssKeyframes, SlotRecipeConfig } from "@pandacss/dev";

import { DeepPartial, Recursive, Token } from "./base";
import { Breakpoints } from "./breakpoints";
import { Colors, SemanticColors } from "./colors";
import {
  Fonts,
  FontSizes,
  FontWeights,
  LetterSpacings,
  LineHeights,
  TextStyles
} from "./fonts";
import { ComponentRadii, Radii } from "./radii";
import { ExtendableRecipes } from "./recipes";
import { ComponentShadows, Shadows } from "./shadows";
import {
  ComponentSizing,
  ContainerSizing,
  DialogSizing,
  Sizing
} from "./sizing";
import { ZIndex } from "./z-index";

export type Theme = {
  tokens: {
    colors: Colors;
    fonts: Fonts;
    fontSizes: FontSizes;
    fontWeights: FontWeights;
    lineHeights: LineHeights;
    sizes: Sizing;
    radii: Radii;
    shadows: Shadows;
    spacing: Recursive<Token<string>>;
    zIndex: ZIndex;
    letterSpacings: LetterSpacings;
  };
  semanticTokens: {
    colors: SemanticColors;
    sizes: {
      component: ComponentSizing;
      container: ContainerSizing;
      dialog: DialogSizing;
    };
    radii: {
      component: ComponentRadii;
    };
    shadows: {
      component: ComponentShadows;
    };
  };
  keyframes: CssKeyframes;
  breakpoints: Breakpoints;
  textStyles: TextStyles;
};

export type PartialTheme = DeepPartial<Theme>;

export interface ExtendableTheme extends PartialTheme {
  extends?: PartialTheme;
}

export type Config<R extends Record<string, SlotRecipeConfig>> = {
  /**
   * List of files glob to watch for changes.
   * @default []
   */
  include?: string[];
  /**
   * The theme configuration for your project.
   */
  theme?: ExtendableTheme;
  /**
   * The theme variants for your project.
   */
  themes?: Record<
    string,
    Pick<PartialTheme, "tokens" | "semanticTokens" | "textStyles">
  >;
  recipes?: ExtendableRecipes<R>;
};
