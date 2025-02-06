import { RefColorConfig, SysColorConfig } from "../types";
import { ref } from "./ref";
import { sys } from "./sys";

export const colors = {
  ref,
  sys
} satisfies {
  sys: SysColorConfig;
  ref: RefColorConfig;
};
