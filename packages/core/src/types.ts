import { ComponentPropsWithRef, ElementType } from "react";

export type Prefer<P, T> = P & Omit<T, keyof P>;

export type PolymorphicComponentPropsWithRef<T extends ElementType> =
  ComponentPropsWithRef<T>;

export type OverwritableType<OwnProps, Type extends ElementType> = Prefer<
  OwnProps,
  PolymorphicComponentPropsWithRef<Type>
>;

export type DynamicElementProps<T> = {
  as?: T;
  className?: string;
};

export type DynamicComponentPropsWithRef<
  P,
  T extends ElementType
> = OverwritableType<DynamicElementProps<T>, T> & P;

/**
 * Utils
 */
export type ComponentPropsFromVariants<V, R extends keyof V = never> = Omit<
  V,
  R
> &
  Required<Pick<V, R>>;
