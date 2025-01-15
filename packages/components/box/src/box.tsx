import { DynamicComponentPropsWithRef } from "@brifui/core";
import { createDynamicComponent } from "@brifui/core/utils";
import { ElementType } from "react";

export type BoxProps<T extends ElementType = "div"> =
  DynamicComponentPropsWithRef<{}, T>;

export const Box = createDynamicComponent({
  defaultTag: "div",
  displayName: "Box"
});
