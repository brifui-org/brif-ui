import { DeepPartial, Recursive, Token } from "./base";
import { BorderColors, Colors, DefaultColors, TextColors } from "./colors";

/**
 * Fonts
 */
export type Fonts = {
  heading: Token<string | string[]>;
  body: Token<string | string[]>;
};

/**
 * Sizing
 */
export type Sizing = Recursive<Token<string>>;
export type ComponentSizing = {
  sm: Token<string>;
  md: Token<string>;
  lg: Token<string>;
};

/**
 * Radii
 */
export type Radii = Recursive<Token<string>>;
export type ComponentRadii = {
  sm: Token<string>;
  none: Token<string>;
  md: Token<string>;
  lg: Token<string>;
  xl: Token<string>;
};

/**
 * Shadows
 */
export type Shadows = Recursive<Token<string>>;
export type SemanticShadows = {
  DEFAULT: Token<string>;
  error: Token<string>;
};
export type ComponentShadows = {
  sm: SemanticShadows;
  md: SemanticShadows;
  lg: SemanticShadows;
};

export type Theme = {
  colors: Colors;
  fonts: Fonts;
  sizes: Sizing;
  radii: Radii;
  shadows: Shadows;
  semanticTokens: {
    borders: BorderColors;
    text: TextColors;
    default: DefaultColors;
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
