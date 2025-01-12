import { JSX, ComponentPropsWithRef } from "react";

export type HTMLTag = keyof JSX.IntrinsicElements;

export type PolymophicComponentProps<T extends HTMLTag> = {
  as?: T;
} & ComponentPropsWithRef<T>;
