export type Pretty<T> = { [K in keyof T]: T[K] } & {};

export type Prefer<A, B> = Pretty<A & Omit<B, keyof A>>;
