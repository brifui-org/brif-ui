import { BreakpointConfig, ColorConfig } from "./packages/theme";

declare global {
  interface BrifUIThemeConfig {
    colors: {
      ref?: Record<string, ColorConfig>;
      sys?: Record<string, ColorConfig>;
    };
    breakpoints: BreakpointConfig;
  }
}

export {};
