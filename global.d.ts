import {
  BreakpointConfig,
  BrifUIPluginConfig,
  ColorConfig,
  SpacingConfig
} from "./packages/theme";

declare global {
  interface BrifUIThemeConfig {
    colors: {
      ref?: Record<string, ColorConfig>;
      sys?: Record<string, ColorConfig>;
    };
    breakpoints: BreakpointConfig;
    spacing: SpacingConfig;
  }

  type BrifUIThemeKey = any;
}

export {};
