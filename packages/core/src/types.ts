import { ComponentPropsWithRef, CSSProperties, ElementType } from "react";

export type Prefer<P, T> = P & Omit<T, keyof P>;

export type PolymorphicComponentPropsWithRef<T extends ElementType> = Pick<
  ComponentPropsWithRef<T>,
  keyof ComponentPropsWithRef<T>
>;

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
> = WithThemedStyleProps<OverwritableType<DynamicElementProps<T>, T> & P>;

/**
 * Utils
 */
export type ComponentPropsFromVariants<V, R extends keyof V = never> = Omit<
  V,
  R
> &
  Required<Pick<V, R>>;

export type WithThemedStyleProps<P> = Omit<P, "style"> & {
  style?:
    | CSSProperties
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore dynamic types
    | ((theme: import("@brifui/theme").BrifUIThemeConfig) => CSSProperties);
};
