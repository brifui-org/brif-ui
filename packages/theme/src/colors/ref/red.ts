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

export const red = Object.entries(redValue).reduce<ColorToken>(
  (obj, [stop, value]) => {
    obj[stop] = {
      value: `hsl(${value})`
    };
    return obj;
  },
  {}
);
