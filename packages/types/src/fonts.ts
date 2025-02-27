import { TextStyles as BaseTextStyles } from "@pandacss/dev";

import { Recursive, Token } from "./base";

/**
 * Fonts
 */
export type Fonts = {
  heading: Token<string | string[]>;
  body: Token<string | string[]>;
};

export type FontSizes = Recursive<Token<string>>;
export type FontWeights = Recursive<Token<string>>;
export type LineHeights = Recursive<Token<string>>;

export type TextStyles = {
  xs: BaseTextStyles[string];
  sm: BaseTextStyles[string];
  md: BaseTextStyles[string];
  lg: BaseTextStyles[string];
  xl: BaseTextStyles[string];
  "2xl": BaseTextStyles[string];
  "3xl": BaseTextStyles[string];
  "4xl": BaseTextStyles[string];
  "5xl": BaseTextStyles[string];
  "6xl": BaseTextStyles[string];
  "7xl": BaseTextStyles[string];
  "8xl": BaseTextStyles[string];
  "9xl": BaseTextStyles[string];
};
