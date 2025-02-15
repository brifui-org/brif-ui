import { ColorToken } from "@brifui/types";

const tealValue = {
  100: "169, 70%, 96%",
  200: "167, 70%, 94%",
  300: "168, 70%, 90%",
  400: "170, 70%, 85%",
  500: "170, 70%, 72%",
  600: "170, 70%, 57%",
  700: "173, 80%, 36%",
  800: "173, 83%, 30%",
  900: "174, 91%, 25%",
  1000: "171, 80%, 13%"
};

export const teal = Object.entries(tealValue).reduce<ColorToken>(
  (obj, [stop, value]) => {
    obj[stop] = {
      value: `hsl(${value})`
    };
    return obj;
  },
  {}
);
