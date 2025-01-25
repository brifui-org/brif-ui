import { background } from "./background";
import { border } from "./border";
import { danger } from "./danger";
import { ddefault } from "./default";
import { foreground } from "./foreground";
import { primary } from "./primary";
import { secondary } from "./secondary";
import { success } from "./success";
import { warning } from "./warning";

export const sys = {
  foreground,
  primary,
  secondary,
  success,
  warning,
  danger,
  background,
  border,
  default: ddefault
};

export type DefaultSysColors = typeof sys;
