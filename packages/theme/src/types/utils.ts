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

type Entry = { key: string; value: unknown };
type EmptyEntry<TValue> = { key: ""; value: TValue };
type ExcludedTypes = Date | Set<unknown> | Map<unknown, unknown>;
// Omit the type that is listed in ExcludedTypes union
type OmitExcludedTypes<TValue, TValueInitial> = TValue extends ExcludedTypes
  ? EmptyEntry<TValue>
  : CreateObjectEntries<TValue, TValueInitial>;
type OmitItself<TValue, TValueInitial> = TValue extends TValueInitial
  ? EmptyEntry<TValue>
  : OmitExcludedTypes<TValue, TValueInitial>;
type ArrayEncoder = `[${bigint}]`;
type CreateArrayEntry<TValue, TValueInitial> = OmitItself<
  TValue extends unknown[] ? { [k: ArrayEncoder]: TValue[number] } : TValue,
  TValueInitial
>;
type CreateObjectEntries<TValue, TValueInitial> = TValue extends object
  ? {
      // Checks that Key is of type string
      [TKey in keyof TValue]-?: TKey extends string
        ? // Nested key can be an object, run recursively to the bottom
          CreateArrayEntry<
            TValue[TKey],
            TValueInitial
          > extends infer TNestedValue
          ? TNestedValue extends Entry
            ? TNestedValue["key"] extends ""
              ? {
                  key: TKey;
                  value: TNestedValue["value"];
                }
              :
                  | {
                      key: `${TKey}.${TNestedValue["key"]}`;
                      value: TNestedValue["value"];
                    }
                  | {
                      key: TKey;
                      value: TValue[TKey];
                    }
            : never
          : never
        : never;
    }[keyof TValue] // Builds entry for each key
  : EmptyEntry<TValue>;
type EscapeArrayKey<TKey extends string> =
  TKey extends `${infer TKeyBefore}.${ArrayEncoder}${infer TKeyAfter}`
    ? EscapeArrayKey<`${TKeyBefore}${ArrayEncoder}${TKeyAfter}`>
    : TKey;
type CollapseEntries<TEntry extends Entry> = {
  [E in TEntry as EscapeArrayKey<E["key"]>]: E["value"];
};
export type FlattenObject<TValue> = CollapseEntries<
  CreateObjectEntries<TValue, TValue>
>;
