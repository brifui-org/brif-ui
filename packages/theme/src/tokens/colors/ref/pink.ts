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

const darkPinkValue = {
  100: "335, 32%, 12%",
  200: "335, 43%, 16%",
  300: "335, 47%, 21%",
  400: "335, 51%, 22%",
  500: "335, 57%, 27%",
  600: "336, 75%, 40%",
  700: "336, 80%, 58%",
  800: "336, 74%, 51%",
  900: "341, 90%, 67%",
  1000: "333, 90%, 96%"
};

export const pink = Object.entries(pinkValue).reduce<ColorToken>(
  (obj, [stop, value]) => {
    obj[stop] = {
      value: `hsl(${value})`,
      description: `hsl(${value})`
    };
    return obj;
  },
  {}
);

export const darkPink = Object.entries(darkPinkValue).reduce<ColorToken>(
  (obj, [stop, value]) => {
    obj[stop] = {
      value: `hsl(${value})`,
      description: `hsl(${value})`
    };
    return obj;
  },
  {}
);
