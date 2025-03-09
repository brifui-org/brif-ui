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

const darkGreenValue = {
  100: " 136, 50%, 9%",
  200: "137, 50%, 12%",
  300: "136, 50%, 14%",
  400: "135, 70%, 16%",
  500: "135, 70%, 23%",
  600: "135, 70%, 34%",
  700: "131, 41%, 46%",
  800: "132, 43%, 39%",
  900: "131, 43%, 57%",
  1000: "136, 73%, 94%"
};

export const green = Object.entries(greenValue).reduce<ColorToken>(
  (obj, [stop, value]) => {
    obj[stop] = {
      value: `hsl(${value})`,
      description: `hsl(${value})`
    };
    return obj;
  },
  {}
);

export const darkGreen = Object.entries(darkGreenValue).reduce<ColorToken>(
  (obj, [stop, value]) => {
    obj[stop] = {
      value: `hsl(${value})`,
      description: `hsl(${value})`
    };
    return obj;
  },
  {}
);
