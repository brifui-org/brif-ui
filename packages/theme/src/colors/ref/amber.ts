import { ColorToken } from "@brifui/types";

const amberValue = {
  100: "39, 100%, 95%",
  200: "44, 100%, 92%",
  300: "43, 96%, 90%",
  400: "42, 100%, 78%",
  500: "38, 100%, 71%",
  600: "36, 90%, 62%",
  700: "39, 100%, 57%",
  800: "35, 100%, 52%",
  900: "30, 100%, 32%",
  1000: "20, 79%, 17%"
};

export const amber = Object.entries(amberValue).reduce<ColorToken>(
  (obj, [stop, value]) => {
    obj[stop] = {
      value: `hsl(${value})`
    };
    return obj;
  },
  {}
);
