import { FlattenObject } from "./utils";

export type SysForegroundColor = {
  DEFAULT: string;
  muted: string;
  disabled: string;
};
export type SysBackgroundColor = {
  DEFAULT: string;
  hover: string;
};
export type SysBorderColor = {
  DEFAULT: string;
  disabled: string;
};
export type SysColor = {
  DEFAULT: string;
  foreground: string;
  disabled: string;
  hover: string;
  active: string;
};

export type RefColorConfig =
  | string
  | {
      [key: string]: string;
    }
  | {
      [key: string]: RefColorConfig;
    };
export type SysColorConfig =
  | {
      foreground: SysForegroundColor;
      background: SysBackgroundColor;
      border: SysBorderColor;
      primary: SysColor;
      secondary: SysColor;
    }
  | {
      [key: string]: SysColor;
    };

export type FlattenedColor<T extends object> = FlattenObject<T>;
export type FlattenedColorKey<T extends object> = keyof FlattenedColor<T>;
