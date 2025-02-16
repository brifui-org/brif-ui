import { Recursive, Token } from "./base";

/**
 * Colors
 */
export type ColorToken = Recursive<Token<string>>;
export type Colors = {
  sys: ColorToken;
  ref: ColorToken;
};
export type SemanticColors = {
  DEFAULT: Token<string>;
  foreground: Token<string>;
  hover: Token<string>;
  active: Token<string>;
};

export type BorderColors = {
  DEFAULT: Token<string>;
  subtle: Token<string>;
  disabled: Token<string>;
};
export type TextColors = {
  DEFAULT: Token<string>;
  subtle: Token<string>;
  disabled: Token<string>;
};
export type BackgroundColors = {
  DEFAULT: Token<string>;
  hover: Token<string>;
  active: Token<string>;
  disabled: Token<string>;
};
export type DefaultColors = SemanticColors;
export type PrimaryColors = SemanticColors;
export type ErrorColors = SemanticColors;
export type WarningColors = SemanticColors;
