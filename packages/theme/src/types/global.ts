import { BorderRadiusConfig } from "./border-radius";
import { BreakpointConfig } from "./breakpoints";
import { ColorConfig } from "./colors";
import { ShadowConfig } from "./shadow";
import { SpacingConfig } from "./spacing";

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

  type BrifUIThemeKey = "light" | "dark";
}
