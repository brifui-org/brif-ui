import { background } from "./background";
import { border } from "./border";
import { danger } from "./danger";
import { primary } from "./primary";
import { secondary } from "./secondary";
import { success } from "./success";
import { text } from "./text";
import { warning } from "./warning";

export const sys = {
  text,
  primary,
  secondary,
  success,
  warning,
  danger,
  background,
  border
};

export type DefaultSysColors = typeof sys;
