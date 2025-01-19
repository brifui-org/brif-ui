"use client";

import { ElementType } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { DynamicComponentPropsWithRef } from "@brifui/core";
import { createDynamicComponent } from "@brifui/core/utils";

export const flexBoxVariants = cva("flex", {
  variants: {
    inline: {
      true: "inline-flex",
      false: "flex"
    },
    flexDirection: {
      column: ["flex-col"],
      row: ["flex-row"],
      "column-reverse": ["flex-col-reverse"],
      "row-reverse": ["flex-row-reverse"]
    },
    alignItems: {
      start: ["items-start"],
      end: ["items-end"],
      center: ["items-center"],
      baseline: ["items-baseline"],
      stretch: ["items-stretch"]
    },
    justifyContent: {
      normal: ["justify-normal"],
      start: ["justify-start"],
      end: ["justify-end"],
      center: ["justify-center"],
      between: ["justify-between"],
      around: ["justify-around"],
      evenly: ["justify-evenly"],
      stretch: ["justify-stretch"]
    }
  },
  defaultVariants: {
    inline: false
  }
});
type BaseFlexBoxProps = VariantProps<typeof flexBoxVariants>;

export const FlexBox = createDynamicComponent<BaseFlexBoxProps, "div">({
  defaultTag: "div",
  displayName: "FlexBox",
  classNameVariants: flexBoxVariants,
  defaultProps: {},
  excludedProps: ["inline", "flexDirection", "alignItems", "justifyContent"]
});

export type FlexBoxProps<T extends ElementType> = DynamicComponentPropsWithRef<
  BaseFlexBoxProps,
  T
>;
