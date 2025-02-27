import { CssKeyframes } from "@pandacss/dev";

import { DeepPartial } from "./base";
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
import { ComponentSizing, Sizing } from "./sizing";

export type Theme = {
  colors: Colors;
  fonts: Fonts;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  sizes: Sizing;
  radii: Radii;
  shadows: Shadows;
  keyframes: CssKeyframes;
  breakpoints: Breakpoints;
  textStyles: TextStyles;
  semanticTokens: {
    colors: SemanticColors;
    sizes: {
      component: ComponentSizing;
    };
    radii: {
      component: ComponentRadii;
    };
    shadow: {
      component: ComponentShadows;
    };
  };
};
export interface ExtendableTheme extends DeepPartial<Theme> {
  extends?: DeepPartial<Theme> | undefined;
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
