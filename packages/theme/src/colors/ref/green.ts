import { ColorToken } from "@brifui/types";

const greenValue = {
  100: "120, 60%, 96%",
  200: "120, 60%, 95%",
  300: "120, 60%, 91%",
  400: "122, 60%, 86%",
  500: "124, 60%, 75%",
  600: "125, 60%, 64%",
  700: "131, 41%, 46%",
  800: "132, 43%, 39%",
  900: "133, 50%, 32%",
  1000: "128, 29%, 15%"
};

export const green = Object.entries(greenValue).reduce<ColorToken>(
  (obj, [stop, value]) => {
    obj[stop] = {
      value: `hsl(${value})`
    };
    return obj;
  },
  {}
);
