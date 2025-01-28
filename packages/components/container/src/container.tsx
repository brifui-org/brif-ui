"use client";

import { ElementType } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  ComponentPropsFromVariants,
  DynamicComponentPropsWithRef
} from "@brifui/core";
import { createDynamicComponent } from "@brifui/core/utils";

export const containerVariants = cva("container px-4", {
  variants: {
    /**
     * Align container to the center
     * @default false
     */
    center: {
      true: "mx-auto",
      false: null
    }
  },
  defaultVariants: {
    center: false
  }
});

export const Container = createDynamicComponent<ContainerVariantsProps, "div">({
  defaultTag: "div",
  displayName: "Container",
  classNameVariants: containerVariants,
  excludedProps: ["center"]
});

export type ContainerVariantsProps = VariantProps<typeof containerVariants>;
export type BaseContainerProps =
  ComponentPropsFromVariants<ContainerVariantsProps>;
export type ContainerProps<T extends ElementType = "div"> =
  DynamicComponentPropsWithRef<BaseContainerProps, T>;
