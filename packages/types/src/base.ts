export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export interface Recursive<T> {
  [key: string]: T | Recursive<T>;
}

export type Token<Value> = {
  value: Value;
  description?: string;
  deprecated?: boolean | string;
};
