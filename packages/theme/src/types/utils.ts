export type Extend<O, E> = O & E;

export type Overwrite<O, E> = Omit<O, keyof E> & E;

export type DeepRequired<T> = Required<{
  [K in keyof T]: T[K] extends Required<T[K]> ? T[K] : DeepRequired<T[K]>;
}>;
