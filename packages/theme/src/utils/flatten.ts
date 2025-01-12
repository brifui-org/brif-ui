type NestedObject = string | { [key: string]: NestedObject };

export const flatten = (obj: NestedObject): Record<string, string> => {
  const flatted: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    const q = [
      {
        prefix: key,
        value
      }
    ];

    while (q.length) {
      const popped = q.shift();
      if (popped && typeof popped.value === "object") {
        for (const [skey, svalue] of Object.entries(popped.value)) {
          q.push({
            prefix:
              skey === "DEFAULT" ? popped.prefix : `${popped.prefix}-${skey}`,
            value: svalue
          });
        }
      } else if (popped && typeof popped.value !== "object") {
        flatted[popped.prefix] = popped.value;
      }
    }
  }

  return flatted;
};
