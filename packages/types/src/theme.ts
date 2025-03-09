import { CssKeyframes } from "@pandacss/dev";

import { DeepPartial, Recursive, Token } from "./base";
import { Breakpoints } from "./breakpoints";
import { Colors, SemanticColors } from "./colors";
import {
  Fonts,
  FontSizes,
  FontWeights,
  LineHeights,
  TextStyles
} from "./fonts";
import { ComponentRadii, Radii } from "./radii";
import { ComponentShadows, Shadows } from "./shadows";
import { ComponentSizing, ContainerSizing, Sizing } from "./sizing";
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
  };
  semanticTokens: {
    colors: SemanticColors;
    sizes: {
      component: ComponentSizing;
      container: ContainerSizing;
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

export type Config = {
  /**
   * List of files glob to watch for changes.
   * @default []
   */
  include?: string[];
  /**
   * The theme configuration for your project.
   */
  theme?: ExtendableTheme;
};
