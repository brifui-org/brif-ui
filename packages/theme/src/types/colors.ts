/* eslint-disable @typescript-eslint/no-empty-object-type */
import { DefaultRefColors } from "../colors/ref";
import { DefaultSysColors } from "../colors/sys";
import { Extend } from "./utils";

export type ColorConfig =
  | string
  | {
      [key: string]: string;
    };

export type ExtendRefColors<C extends Record<string, ColorConfig> = {}> =
  Extend<DefaultRefColors, C>;
export type ExtendSysColors<C extends Record<string, ColorConfig> = {}> =
  Extend<DefaultSysColors, C>;
