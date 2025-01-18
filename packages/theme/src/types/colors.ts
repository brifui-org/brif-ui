import { DefaultRefColors } from "../colors/ref";
import { DefaultSysColors } from "../colors/sys";
import { Extend } from "./utils";

export type ExtendRefColors<C = {}> = Extend<DefaultRefColors, C>;
export type ExtendSysColors<C = {}> = Extend<DefaultSysColors, C>;
