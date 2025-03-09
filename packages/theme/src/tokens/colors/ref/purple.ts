import { ColorToken } from "@brifui/types";

const purpleValue = {
  100: "276, 100%, 97%",
  200: "277, 87%, 97%",
  300: "274, 78%, 95%",
  400: "276, 71%, 92%",
  500: "274, 70%, 82%",
  600: "273, 72%, 73%",
  700: "272, 51%, 54%",
  800: "272, 47%, 45%",
  900: "274, 71%, 43%",
  1000: "276, 100%, 15%"
};

const darkPurpleValue = {
  100: "283, 30%, 12%",
  200: "281, 38%, 16%",
  300: "279, 44%, 23%",
  400: "277, 46%, 28%",
  500: "274, 49%, 35%",
  600: "272, 51%, 54%",
  700: "272, 51%, 54%",
  800: "272, 47%, 45%",
  900: "275, 80%, 71%",
  1000: "281, 73%, 96%"
};

export const purple = Object.entries(purpleValue).reduce<ColorToken>(
  (obj, [stop, value]) => {
    obj[stop] = {
      value: `hsl(${value})`,
      description: `hsl(${value})`
    };
    return obj;
  },
  {}
);

export const darkPurple = Object.entries(darkPurpleValue).reduce<ColorToken>(
  (obj, [stop, value]) => {
    obj[stop] = {
      value: `hsl(${value})`,
      description: `hsl(${value})`
    };
    return obj;
  },
  {}
);
