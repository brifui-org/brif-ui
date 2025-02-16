import { Recursive, Token } from "./base";

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
