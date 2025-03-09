import { amber, darkAmber } from "./amber";
import { blue, darkBlue } from "./blue";
import { darkGray, gray } from "./gray";
import { darkGreen, green } from "./green";
import { darkPink, pink } from "./pink";
import { darkPurple, purple } from "./purple";
import { darkRed, red } from "./red";
import { darkTeal, teal } from "./teal";

export const ref = {
  light: {
    black: {
      value: "#000000"
    },
    white: {
      value: "#ffffff"
    },
    amber,
    blue,
    red,
    gray,
    green,
    teal,
    purple,
    pink
  },
  dark: {
    black: {
      value: "#000000"
    },
    white: {
      value: "#ffffff"
    },
    amber: darkAmber,
    blue: darkBlue,
    red: darkRed,
    gray: darkGray,
    green: darkGreen,
    teal: darkTeal,
    purple: darkPurple,
    pink: darkPink
  }
};
