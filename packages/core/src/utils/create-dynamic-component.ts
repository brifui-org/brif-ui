import { createElement } from "react";
import { HTMLTag, PolymophicComponentProps } from "../types";

export type CreateDynamicComponentParams = {
  defaultTag?: HTMLTag;
  displayName?: string;
};

export type DynamicComponentProps<
  T extends HTMLTag,
  P
> = PolymophicComponentProps<T> & P;

export const createDynamicComponent = <P = object>({
  defaultTag = "div",
  displayName
}: CreateDynamicComponentParams) => {
  const Comp = <T extends HTMLTag>({
    as = defaultTag as T,
    ...props
  }: DynamicComponentProps<T, P>) => {
    return createElement(as, props);
  };
  Comp.displayName = displayName;

  return Comp;
};
