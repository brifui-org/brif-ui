import { Recursive, Token } from "./base";

/**
 * Colors
 */
export type ColorToken = Recursive<Token<string>>;
export type WithMutedColor<T> = T & {
  muted: Token<string>;
};
export type SemanticColorToken = {
  DEFAULT: Token<string>;
  foreground: Token<string>;
  hover: Token<string>;
  active: Token<string>;
  disabled: Token<string>;
};
export type BorderColors = WithMutedColor<
  Omit<SemanticColorToken, "foreground">
>;
export type TextColors = WithMutedColor<Omit<SemanticColorToken, "foreground">>;
export type BackgroundColors = WithMutedColor<
  Omit<SemanticColorToken, "foreground">
>;

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
