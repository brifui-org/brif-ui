export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
};

export type DefaultBreakpoints = typeof breakpoints;

export type Breakpoints<B extends Record<string, string>> = B;
