import { ColorToken } from "@brifui/types";

const blueValue = {
  100: "212, 100%, 97%",
  200: "210, 100%, 96%",
  300: "210, 100%, 94%",
  400: "209, 100%, 90%",
  500: "209, 100%, 80%",
  600: "208, 100%, 66%",
  700: "212, 100%, 48%",
  800: "212, 100%, 41%",
  900: "211, 100%, 42%",
  1000: "211, 100%, 15%"
};

export const blue = Object.entries(blueValue).reduce<ColorToken>(
  (obj, [stop, value]) => {
    obj[stop] = {
      value: `hsl(${value})`
    };
    return obj;
  },
  {}
);
