export type Extend<O, E> = O & E;

export type Overwrite<O, E> = Omit<O, keyof E> & E;

export type DeepRequired<T> = Required<{
  [K in keyof T]: T[K] extends Required<T[K]> ? T[K] : DeepRequired<T[K]>;
}>;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type NestedObject = string | { [key: string]: NestedObject };
