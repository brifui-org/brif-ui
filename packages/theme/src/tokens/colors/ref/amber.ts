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

const darkAmberValue = {
  100: "35, 100%, 8%",
  200: "32, 100%, 10%",
  300: "33, 100%, 15%",
  400: "35, 100%, 17%",
  500: "35, 91%, 22%;",
  600: "39, 85%, 49%;",
  700: "39, 100%, 57%",
  800: "35, 100%, 52%",
  900: "39, 90%, 50%;",
  1000: "40, 94%, 93%;"
};

export const amber = Object.entries(amberValue).reduce<ColorToken>(
  (obj, [stop, value]) => {
    obj[stop] = {
      value: `hsl(${value})`,
      description: `hsl(${value})`
    };
    return obj;
  },
  {}
);

export const darkAmber = Object.entries(darkAmberValue).reduce<ColorToken>(
  (obj, [stop, value]) => {
    obj[stop] = {
      value: `hsl(${value})`,
      description: `hsl(${value})`
    };
    return obj;
  },
  {}
);
