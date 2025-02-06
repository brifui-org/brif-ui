declare module "@brifui/theme/types" {
  import { FlattenedColorKey } from "@brifui/theme";

  export type BrifUIThemeConfig = typeof import("@brifui/mocks").theme;

  export type BrifUIThemeKey = keyof BrifUIThemeConfig["themes"];
  export type FlattenSysColorKey = FlattenedColorKey<
    BrifUIThemeConfig["base"]["colors"]["sys"]
  >;
  export type ComponentColor = keyof BrifUIThemeConfig["base"]["colors"]["sys"];
}
