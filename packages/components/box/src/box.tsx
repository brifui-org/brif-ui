import { HTMLTag, PolymophicComponentProps } from "@brifui/core";
import { createDynamicComponent } from "@brifui/core/utils";

export type BoxProps<T extends HTMLTag> = PolymophicComponentProps<T>;

export const Box = createDynamicComponent({
  defaultTag: "div",
  displayName: "Box"
});
