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

const darkTealValue = {
  100: "169, 78%, 7%",
  200: "170, 74%, 9%",
  300: "171, 75%, 13%",
  400: "171, 85%, 13%",
  500: "172, 85%, 20%",
  600: "172, 85%, 32%",
  700: "173, 80%, 36%",
  800: "173, 83%, 30%",
  900: "174, 90%, 41%",
  1000: "166, 71%, 93%"
};

export const teal = Object.entries(tealValue).reduce<ColorToken>(
  (obj, [stop, value]) => {
    obj[stop] = {
      value: `hsl(${value})`,
      description: `hsl(${value})`
    };
    return obj;
  },
  {}
);

export const darkTeal = Object.entries(darkTealValue).reduce<ColorToken>(
  (obj, [stop, value]) => {
    obj[stop] = {
      value: `hsl(${value})`,
      description: `hsl(${value})`
    };
    return obj;
  },
  {}
);
