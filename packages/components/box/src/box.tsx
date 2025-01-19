"use client";

import { ElementType } from "react";
import { DynamicComponentPropsWithRef } from "@brifui/core";
import { createDynamicComponent } from "@brifui/core/utils";

export type BoxProps<T extends ElementType = "div"> =
  DynamicComponentPropsWithRef<{}, T>;

export const Box = createDynamicComponent({
  defaultTag: "div",
  displayName: "Box"
});
