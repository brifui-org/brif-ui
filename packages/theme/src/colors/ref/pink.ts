import { ColorToken } from "@brifui/types";

const pinkValue = {
  100: "330, 100%, 96%",
  200: "340, 90%, 96%",
  300: "340, 82%, 94%",
  400: "341, 76%, 91%",
  500: "340, 75%, 84%",
  600: "341, 75%, 73%",
  700: "336, 80%, 58%",
  800: "336, 74%, 51%",
  900: "336, 65%, 45%",
  1000: "333, 74%, 15%"
};

export const pink = Object.entries(pinkValue).reduce<ColorToken>(
  (obj, [stop, value]) => {
    obj[stop] = {
      value: `hsl(${value})`
    };
    return obj;
  },
  {}
);
