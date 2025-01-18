export type Extend<O, E> = O & E;

export type Overwrite<O, E> = Omit<O, keyof E> & E;
