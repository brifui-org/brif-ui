import { defineUtility } from "@pandacss/dev";

export const boxShadowUtility = defineUtility({
  transform(value, { token }) {
    if (typeof value !== "string" || !value.startsWith("var"))
      return {
        boxShadow: value
      };
    return {
      boxShadow: `${value} var(--shadow-color, ${token("colors.black")})`
    };
  }
});
