import { Recursive, Token } from "./base";

/**
 * Colors
 */
export type ColorToken = Recursive<Token<string>>;
export type SemanticColorToken = {
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
export type DefaultColors = SemanticColorToken;
export type PrimaryColors = SemanticColorToken;
export type ErrorColors = SemanticColorToken;
export type WarningColors = SemanticColorToken;

export type Colors = ColorToken;
export type SemanticColors = {
  text: TextColors;
  border: BorderColors;
  background: BackgroundColors;
  default: DefaultColors;
  primary: PrimaryColors;
  error: ErrorColors;
  warning: WarningColors;
};
