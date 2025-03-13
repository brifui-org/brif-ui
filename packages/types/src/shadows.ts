import { Recursive, Token } from "./base";

/**
 * Shadows
 */
export type Shadows = Recursive<Token<string>>;
export type SemanticShadows = {
  DEFAULT: Token<string>;
};
export type ComponentShadows = {
  sm: SemanticShadows;
  md: SemanticShadows;
  lg: SemanticShadows;
};
