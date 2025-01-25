import {
  BorderRadiusConfig,
  BreakpointConfig,
  BrifUIPluginConfig,
  ColorConfig,
  ShadowConfig,
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
    borderRadius: BorderRadiusConfig;
    shadow: ShadowConfig;
  }

  type BrifUIThemeKey = any;
}

export {};
