import { ColorToken } from "@brifui/types";

const grayValue = {
  100: "0, 0%, 95%",
  200: "0, 0%, 92%",
  300: "0, 0%, 90%",
  400: "0, 0%, 92%",
  500: "0, 0%, 79%",
  600: "0, 0%, 66%",
  700: "0, 0%, 56%",
  800: "0, 0%, 49%",
  900: "0, 0%, 40%",
  1000: "0, 0%, 9%"
};

const darkGrayValue = {
  100: "0, 0%, 10%",
  200: "0, 0%, 12%",
  300: "0, 0%, 16%",
  400: "0, 0%, 18%",
  500: "0, 0%, 27%",
  600: "0, 0%, 53%",
  700: "0, 0%, 56%",
  800: "0, 0%, 49%",
  900: "0, 0%, 63%",
  1000: "0, 0%, 93%"
};

export const gray = Object.entries(grayValue).reduce<ColorToken>(
  (obj, [stop, value]) => {
    obj[stop] = {
      value: `hsl(${value})`,
      description: `hsl(${value})`
    };
    return obj;
  },
  {}
);

export const darkGray = Object.entries(darkGrayValue).reduce<ColorToken>(
  (obj, [stop, value]) => {
    obj[stop] = {
      value: `hsl(${value})`,
      description: `hsl(${value})`
    };
    return obj;
  },
  {}
);
