import { cva, VariantProps } from "class-variance-authority";

export const sizeVariants = cva("", {
  variants: {
    size: {
      sm: ["text-sm h-7 rounded-md"],
      md: ["text-md h-8 rounded-md"],
      lg: ["text-lg h-10 rounded-lg"]
    }
  },
  defaultVariants: {
    size: "md"
  }
});
export type MenuSize = VariantProps<typeof sizeVariants>["size"];
