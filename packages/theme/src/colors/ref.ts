import { blue } from "./blue";
import { cyan } from "./cyan";
import { green } from "./green";
import { neutral } from "./neutral";
import { pink } from "./pink";
import { purple } from "./purple";
import { red } from "./red";
import { yellow } from "./yellow";
import { zinc } from "./zinc";

export const ref = {
  white: "#ffffff",
  black: "#000000",
  blue,
  yellow,
  red,
  purple,
  cyan,
  pink,
  green,
  zinc,
  neutral
};

export type RefColors = typeof ref;
