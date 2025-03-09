import { ColorToken } from "@brifui/types";

const redValue = {
  100: "0, 100%, 97%",
  200: "0, 100%, 96%",
  300: "0, 100%, 95%",
  400: "0, 90%, 92%",
  500: "0, 82%, 85%",
  600: "359, 90%, 71%",
  700: "358, 75%, 59%",
  800: "358, 70%, 52%",
  900: "358, 66%, 48%",
  1000: "355, 49%, 15%"
};

const darkRedValue = {
  100: "357, 37%, 12%",
  200: "357, 46%, 16%",
  300: "356, 54%, 22%",
  400: "357, 55%, 26%",
  500: "357, 60%, 32%",
  600: "358, 75%, 59%",
  700: "358, 75%, 59%",
  800: "358, 69%, 52%",
  900: "358, 100%, 69%",
  1000: "353, 90%, 96%"
};

export const red = Object.entries(redValue).reduce<ColorToken>(
  (obj, [stop, value]) => {
    obj[stop] = {
      value: `hsl(${value})`,
      description: `hsl(${value})`
    };
    return obj;
  },
  {}
);

export const darkRed = Object.entries(darkRedValue).reduce<ColorToken>(
  (obj, [stop, value]) => {
    obj[stop] = {
      value: `hsl(${value})`,
      description: `hsl(${value})`
    };
    return obj;
  },
  {}
);
