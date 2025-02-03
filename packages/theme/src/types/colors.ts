/* eslint-disable @typescript-eslint/no-empty-object-type */
import { DefaultRefColors } from "../colors/ref";
import { DefaultSysColors } from "../colors/sys";

export type ColorConfig =
  | string
  | {
      [key: string]: string;
    };

export type RefColorsConfig<
  C extends Record<string, ColorConfig> | undefined = undefined
> = C extends undefined ? DefaultRefColors : C;
export type SysColorsConfig<
  C extends Record<string, ColorConfig> | undefined = undefined
> = C extends undefined ? DefaultSysColors : C;
