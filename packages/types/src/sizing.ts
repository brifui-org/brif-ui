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
export type ContainerSizing = {
  sm: Token<string>;
  md: Token<string>;
  lg: Token<string>;
  xl: Token<string>;
  xxl: Token<string>;
};
