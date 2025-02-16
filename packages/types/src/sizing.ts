import { Recursive, Token } from "./base";

/**
 * Sizing
 */
export type Sizing = Recursive<Token<string>>;
export type ComponentSizing = {
  sm: Token<string>;
  md: Token<string>;
  lg: Token<string>;
};
